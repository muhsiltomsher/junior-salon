<?php

/*************************** LOAD THE BASE CLASS *******************************
 *******************************************************************************
 * The WP_List_Table class isn't automatically available to plugins, so we need
 * to check if it's available and load it if necessary. In this tutorial, we are
 * going to use the WP_List_Table class directly from WordPress core.
 *
 * IMPORTANT:
 * Please note that the WP_List_Table class technically isn't an official API,
 * and it could change at some point in the distant future. Should that happen,
 * I will update this plugin with the most current techniques for your reference
 * immediately.
 *
 * If you are really worried about future compatibility, you can make a copy of
 * the WP_List_Table class (file path is shown just below) to use and distribute
 * with your plugins. If you do that, just remember to change the name of the
 * class to avoid conflicts with core.
 *
 * Since I will be keeping this tutorial up-to-date for the foreseeable future,
 * I am going to work with the copy of the class provided in WordPress core.
 */
if(!class_exists('WP_List_Table')){
    require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );
}

/************************** CREATE A PACKAGE CLASS *****************************
 *******************************************************************************
 * Create a new list table package that extends the core WP_List_Table class.
 * WP_List_Table contains most of the framework for generating the table, but we
 * need to define and override some methods so that our data can be displayed
 * exactly the way we need it to be.
 *
 * To display this example on a page, you will first need to instantiate the class,
 * then call $yourInstance->prepare_items() to handle any data manipulation, then
 * finally call $yourInstance->display() to render the table to the page.
 *
 * Our theme for this list table is going to be movies.
 */
class Types_Admin_Taxonomies_List_Table extends WP_List_Table
{
    var $custom_taxonomies;
    var $builtin_taxonomies;
    var $bulk_action_field_name = 'wpcf_ct_ids';

    /** ************************************************************************
     * REQUIRED. Set up a constructor that references the parent constructor. We
     * use the parent reference to set some default configs.
     ***************************************************************************/
    function __construct()
    {
        global $status, $page;

        //Set parent defaults
        parent::__construct( array(
            'singular'  => 'Taxonomy',     //singular name of the listed records
            'plural'    => 'Taxonomies',    //plural name of the listed records
            'ajax'      => true        //does this table support ajax?
        ) );

        $this->custom_taxonomies = get_option(WPCF_OPTION_NAME_CUSTOM_TAXONOMIES, array());
        $this->builtin_taxonomies = wpcf_get_builtin_in_taxonomies();
    }

    /** ************************************************************************
     * Recommended. This method is called when the parent class can't find a method
     * specifically build for a given column. Generally, it's recommended to include
     * one method for each column you want to render, keeping your package class
     * neat and organized. For example, if the class needs to process a column
     * named 'title', it would first see if a method named $this->column_title()
     * exists - if it does, that method will be used. If it doesn't, this one will
     * be used. Generally, you should try to use custom column methods as much as
     * possible.
     *
     * Since we have defined a column_title() method later on, this method doesn't
     * need to concern itself with any column with a name of 'title'. Instead, it
     * needs to handle everything else.
     *
     * For more detailed insight into how columns are handled, take a look at
     * WP_List_Table::single_row_columns()
     *
     * @param array $item A singular item (one full row's worth of data)
     * @param array $column_name The name/slug of the column to be processed
     * @return string Text or HTML to be placed inside the column <td>
     **************************************************************************/
    function column_default($item, $column_name)
    {
        switch($column_name){
            case 'title':
            case 'description':
                return stripslashes($item[$column_name]);
            case 'supports':
                return empty($item[$column_name])? __('None', 'wpcf'):implode(', ', $item[$column_name]);
            case 'status':
                return 'active' == $item[$column_name]? __('Yes', 'wpcf'):__('No', 'wpcf');
			case 'field-groups':
				return empty( $item[ $column_name ] ) ? __( 'None', 'wpcf' ) : implode( ', ', $item[ $column_name ] );
            default:
                return print_r($item,true); //Show the whole array for troubleshooting purposes
        }
    }

    /** ************************************************************************
     * Recommended. This is a custom column method and is responsible for what
     * is rendered in any column with a name/slug of 'title'. Every time the class
     * needs to render a column, it first looks for a method named
     * column_{$column_title} - if it exists, that method is run. If it doesn't
     * exist, column_default() is called instead.
     *
     * This example also illustrates how to implement rollover actions. Actions
     * should be an associative array formatted as 'slug'=>'link html' - and you
     * will need to generate the URLs yourself. You could even ensure the links
     *
     *
     * @see WP_List_Table::::single_row_columns()
     * @param array $item A singular item (one full row's worth of data)
     * @return string Text to be placed inside the column <td> (movie title only)
     **************************************************************************/
    function column_title($item)
    {
        $edit_link = esc_url(
            add_query_arg(
                array(
                    'page' => 'wpcf-view-tax',
                    'wpcf-tax' => $item['slug'],
                ),
                admin_url('admin.php')
            )
        );
        if ( WPCF_Roles::user_can_edit('custom-taxonomy', $item ) ) {
            $edit_link = esc_url(
                add_query_arg(
                    array(
                        'page' => 'wpcf-edit-tax',
                        'wpcf-tax' => $item['slug'],
                    ),
                    admin_url('admin.php')
                )
            );
        }

        //Build row actions
        $actions = array();
        $actions['edit'] = sprintf('<a href="%s">%s</a>', $edit_link, __('Edit', 'wpcf'));
        $actions['status'] = 'active' == $item['status']? wpcf_admin_custom_taxonomies_get_ajax_deactivation_link($item['slug']):wpcf_admin_custom_taxonomies_get_ajax_activation_link($item['slug']);

        if ( 'custom' == $item['type'] ) {
            //Build row actions
            $actions += array(
                'edit'      => sprintf('<a href="%s">%s</a>', $edit_link, __('Edit', 'wpcf')),
                'duplicate'     => sprintf(
                    '<a href="%s" class="wpcf-ajax-link">%s</a>',
                    esc_url(
                        add_query_arg(
                            array(
                                'action' => 'wpcf_ajax',
                                'wpcf_action' => 'taxonomy_duplicate',
                                'wpcf-tax' => $item['slug'],
                                'wpcf_ajax_update' => 'wpcf_list_ajax_response_'.$item['slug'],
                                '_wpnonce' => wp_create_nonce('taxonomy_duplicate'),
                            ),
                            admin_url('admin-ajax.php')
                        )
                    ),
                    __('Duplicate', 'wpcf')
                ),
                'delete'     => sprintf(
                    '<a href="%s" class="submitdelete wpcf-ajax-link" id="wpcf-list-delete-%s">%s</a>',
                    esc_url(
                        add_query_arg(
                            array(
                                'action' => 'wpcf_ajax',
                                'wpcf_action' => 'delete_taxonomy',
                                'wpcf-tax' => $item['slug'],
                                'wpcf_ajax_update' => 'wpcf_list_ajax_response_'.$item['slug'],
                                '_wpnonce' => wp_create_nonce('delete_taxonomy'),
                                'wpcf_warning' => urlencode(__('Are you sure?', 'wpcf')),
                            ),
                            admin_url('admin-ajax.php')
                        )
                    ),
                    $item['slug'],
                    __('Delete', 'wpcf')
                ),
            );
        }

        //Return the title contents
        return sprintf(
            '<strong><a href="%s" class="row-title">%s</strong>%s',
            $edit_link,
            $item['title'],
            $this->row_actions($actions)
        );
    }

    /** ************************************************************************
     * REQUIRED if displaying checkboxes or using bulk actions! The 'cb' column
     * is given special treatment when columns are processed. It ALWAYS needs to
     * have it's own method.
     *
     * @see WP_List_Table::::single_row_columns()
     * @param array $item A singular item (one full row's worth of data)
     * @return string Text to be placed inside the column <td> (movie title only)
     **************************************************************************/
    function column_cb($item)
    {
        /**
         * do not show checkbox for built-in taxonomies
         */
        if ( isset($item['_builtin']) && $item['_builtin'] ) {
            return '';
        }
        if ( WPCF_Roles::user_can_edit('custom-taxonomy', $item ) ) {
            return sprintf(
                '<input type="checkbox" name="%s[]" value="%s" />',
                $this->bulk_action_field_name,
                $item['slug']
            );
        }
        return '';
    }

    /** ************************************************************************
     * REQUIRED! This method dictates the table's columns and titles. This should
     * return an array where the key is the column slug (and class) and the value
     * is the column's title text. If you need a checkbox for bulk actions, refer
     * to the $columns array below.
     *
     * The 'cb' column is treated differently than the rest. If including a checkbox
     * column in your table you must create a column_cb() method. If you don't need
     * bulk actions or checkboxes, simply leave the 'cb' entry out of your array.
     *
     * @see WP_List_Table::::single_row_columns()
     * @return array An associative array containing column information: 'slugs'=>'Visible Titles'
     **************************************************************************/
    function get_columns()
    {
        $columns = array(
            'cb'          => '<input type="checkbox" />', //Render a checkbox instead of text
            'title'       => __('Name', 'wpcf'),
            'description' => __('Description', 'wpcf'),
            'status'      => __('Active', 'wpcf'),
            'supports'    => __('Post Types', 'wpcf'),
			'field-groups' => __( 'Field Groups', 'wpcf' ),
        );
        if ( !WPCF_Roles::user_can_create('custom-taxonomy') ) {
            unset($columns['cb']);
        }
        return $columns;
    }

    /** ************************************************************************
     * Optional. If you want one or more columns to be sortable (ASC/DESC toggle),
     * you will need to register it here. This should return an array where the
     * key is the column that needs to be sortable, and the value is db column to
     * sort by. Often, the key and value will be the same, but this is not always
     * the case (as the value is a column name from the database, not the list table).
     *
     * This method merely defines which columns should be sortable and makes them
     * clickable - it does not handle the actual sorting. You still need to detect
     * the ORDERBY and ORDER querystring variables within prepare_items() and sort
     * your data accordingly (usually by modifying your query).
     *
     * @return array An associative array containing all the columns that should be sortable: 'slugs'=>array('data_values',bool)
     **************************************************************************/
    function get_sortable_columns()
    {
        $sortable_columns = array(
            'title'       => array('title',true),     //true means it's already sorted
            'description' => array('description',false),
            'status'      => array('status',false)
        );
        return $sortable_columns;
    }

    /** ************************************************************************
     * Optional. If you need to include bulk actions in your list table, this is
     * the place to define them. Bulk actions are an associative array in the format
     * 'slug'=>'Visible Title'
     *
     * If this method returns an empty value, no bulk action will be rendered. If
     * you specify any bulk actions, the bulk actions box will be rendered with
     * the table automatically on display().
     *
     * Also note that list tables are not automatically wrapped in <form> elements,
     * so you will need to create those manually in order for bulk actions to function.
     *
     * @return array An associative array containing all the bulk actions: 'slugs'=>'Visible Titles'
     **************************************************************************/
    function get_bulk_actions()
    {
        $actions = array();
        if ( WPCF_Roles::user_can_create('custom-taxonomy') ) {
            $actions = array(
                'activate'   => __('Activate', 'wpcf'),
                'deactivate' => __('Deactivate', 'wpcf'),
                'delete' => __('Delete', 'wpcf'),
            );
        }
        return $actions;
    }

    /** ************************************************************************
     * Optional. You can handle your bulk actions anywhere or anyhow you prefer.
     * For this example package, we will handle it in the class to keep things
     * clean and organized.
     *
     * @see $this->prepare_items()
     **************************************************************************/
    function process_bulk_action()
    {
        $action = $this->current_action();


        //Detect when a bulk action is being triggered...
        if (
            !empty($this->custom_taxonomies)
            && isset($_POST[$this->bulk_action_field_name])
            && !empty($_POST[$this->bulk_action_field_name])
        ) {
            $slugs_to_delete = array();
            foreach( $_POST[$this->bulk_action_field_name] as $key ) {
                /**
                 * do not process if there is no entry
                 */
                if ( !isset($this->custom_taxonomies[$key]) ) {
                    continue;
                }
                /**
                 * check capability
                 */
                if ( !WPCF_Roles::user_can_edit('custom-taxonomy', $this->custom_taxonomies[$key]) ){
                    continue;
                }
                /**
                 * do it!
                 */
                switch($action) {
                case 'delete':
                    unset($this->custom_taxonomies[$key]);
                    $slugs_to_delete[] = $key;
										/**
										 * @param string $key
										 */
                    do_action( 'wpcf_taxonomy_delete', $key );
                    break;
                case 'deactivate':
                    if ( wpcf_is_builtin_taxonomy($key) ) {
                        get_taxonomy($key);
                    }
                    $this->custom_taxonomies[$key]['disabled'] = 1;
                    break;
                case 'activate':
                    if ( isset($this->custom_taxonomies[$key]['disabled']) ) {
                        unset($this->custom_taxonomies[$key]['disabled']);
                    }
                    break;
                }
            }
            /**
             * update custom taxonomies
             */
            update_option(WPCF_OPTION_NAME_CUSTOM_TAXONOMIES, $this->custom_taxonomies);
            /**
             * update post types
             */
            if ( count($slugs_to_delete) ) {
							/**
							 * @param string[] $slugs_to_delete
							 */
							do_action( 'wpcf_taxonomies_deleted', $slugs_to_delete );
	            $post_type_option = new Types_Utils_Post_Type_Option();
                $custom_types = $post_type_option->get_post_types();
                if ( !empty($custom_types) ) {
                    foreach ( $slugs_to_delete as $slug ) {
                        foreach ( $custom_types as $custom_key => $data ) {
                            if ( !isset($data['taxonomies'] ) ) {
                                continue;
                            }
                            if ( isset($data['taxonomies'][$slug]) ) {
                                unset($custom_types[$custom_key]['taxonomies'][$slug]);
                            }
                        }
                    }
                    update_option(WPCF_OPTION_NAME_CUSTOM_TYPES, $custom_types);
                }
            }
        }
    }

    /** ************************************************************************
     * REQUIRED! This is where you prepare your data for display. This method will
     * usually be used to query the database, sort and filter the data, and generally
     * get it ready to be displayed. At a minimum, we should set $this->items and
     * $this->set_pagination_args(), although the following properties and methods
     * are frequently interacted with here...
     *
     * @uses $this->_column_headers
     * @uses $this->items
     * @uses $this->get_columns()
     * @uses $this->get_sortable_columns()
     * @uses $this->get_pagenum()
     * @uses $this->set_pagination_args()
     **************************************************************************/
    function prepare_items()
    {
        /**
         * First, lets decide how many records per page to show
         */
        $per_page = $this->get_items_per_page('wpcf_ctt_per_page', 10);;

        /**
         * REQUIRED. Now we need to define our column headers. This includes a complete
         * array of columns to be displayed (slugs & titles), a list of columns
         * to keep hidden, and a list of columns that are sortable. Each of these
         * can be defined in another method (as we've done here) before being
         * used to build the value for our _column_headers property.
         */
        $columns = $this->get_columns();
        $hidden = array();
        $sortable = $this->get_sortable_columns();

        /**
         * REQUIRED. Finally, we build an array to be used by the class for column
         * headers. The $this->_column_headers property takes an array which contains
         * 3 other arrays. One for all columns, one for hidden columns, and one
         * for sortable columns.
         */
        $this->_column_headers = array($columns, $hidden, $sortable);

        /**
         * Optional. You can handle your bulk actions however you see fit. In this
         * case, we'll handle them within our package just to keep things clean.
         */
        $this->process_bulk_action();

		/*
		 * Craft a list of field groups assigned to each item.
		 */
		$map_field_groups_by_taxonomy = array();
		$taxonomy_fields_groups_factory = \Toolset_Field_Group_Term_Factory::get_instance();
		$field_groups_objects_by_taxonomy = $taxonomy_fields_groups_factory->get_groups_by_taxonomies();
		foreach ( $field_groups_objects_by_taxonomy as $taxonomy_slug => $fields_groups ) {
			$map_field_groups_by_taxonomy[ $taxonomy_slug ] = [];
			foreach ( $fields_groups as $fields_group ) {
				$map_field_groups_by_taxonomy[ $taxonomy_slug ][] = sprintf(
					'<a href="%1$s">%2$s</a>',
					esc_url( admin_url( 'admin.php?page=wpcf-termmeta-edit&group_id=' . $fields_group->get_id() ) ),
					$fields_group->get_display_name()
				);
			}
		}

        /**
         * Instead of querying a database, we're going to fetch the example data
         * property we created for use in this plugin. This makes this example
         * package slightly different than one you might build on your own. In
         * this example, we'll be using array manipulation to sort and paginate
         * our data. In a real-world implementation, you will probably want to
         * use sort and pagination data to build a custom query instead, as you'll
         * be able to use your precisely-queried data immediately.
         */

        $s = isset($_POST['s'])? mb_strtolower(trim($_POST['s'])):false;

		$map_post_types_by_taxonomy = array();

        $data = array();
        if ( !empty($this->custom_taxonomies) ){
            global $wp_post_types;

            foreach( $this->custom_taxonomies as $slug => $taxonomy ) {
				$map_post_types_by_taxonomy[ $slug ] = array();

                if( isset( $taxonomy['supports'] ) ) {
                    foreach( $taxonomy['supports'] as $post_type_slug => $value_one  ) {
						$temp_post_type = $post_type_slug;
						if ( isset( $wp_post_types[ $post_type_slug ]->labels->name ) ) {
                            $temp_post_type = $wp_post_types[ $post_type_slug ]->labels->name ;
                        }

                        $map_post_types_by_taxonomy[ $slug ][] = sprintf(
							'<a href="%1$s">%2$s</a>',
							esc_url( admin_url( 'admin.php?page=wpcf-edit-type&wpcf-post-type=' . $post_type_slug ) ),
							stripslashes( wpcf_translate( $temp_post_type . ' name', $temp_post_type, 'toolset-types-cpt-labels-for-' . $post_type_slug ) )
						);
                    }
                }

                $one = array(
                    'description' => isset($taxonomy['description'])? wp_kses_post($taxonomy['description']):'',
                    'supports' => $map_post_types_by_taxonomy[ $slug ],
					'field-groups' => isset( $map_field_groups_by_taxonomy[ $taxonomy['slug'] ] ) ? $map_field_groups_by_taxonomy[ $taxonomy['slug'] ] : array(),
                    'slug' => $taxonomy['slug'],
                    'status' => (isset($taxonomy['disabled']) && $taxonomy['disabled'])? 'inactive':'active',
                    'title' => isset($taxonomy['labels']['name']) ? wp_kses_post(stripslashes($taxonomy['labels']['name'])) : '',
                    WPCF_AUTHOR => isset($taxonomy[WPCF_AUTHOR])? $taxonomy[WPCF_AUTHOR]:0,
                    'type' => 'custom',
                    '_builtin' => false,
                );
                $add_one = true;
                if ( $s ) {
                    $add_one = false;
                    foreach( array('description', 'slug', 'title' ) as $key ) {
                        if ( $add_one || empty( $one[$key] ) ) {
                            continue;
                        }
                        if ( is_numeric(strpos(mb_strtolower($one[$key]), $s))) {
                            $add_one = true;
                        }
                    }
                }
                if ( $add_one ) {
                    $data[$one['slug']] = $one;
                }
            }
        }

        /**
         * built-in post types
         */
        foreach( $this->builtin_taxonomies as $taxonomy ) {
            $pt = get_taxonomy($taxonomy);
            $one = array(
                'description' => __('This is built-in WordPress Taxonomy.', 'wpcf'),
                'taxonomies' => isset($map_taxonomies_by_post_type[$taxonomy])? $map_taxonomies_by_post_type[$taxonomy]:array(),
                'slug' => $taxonomy,
                'status' => 'active',
                'title' => $pt->labels->name,
                '_builtin' => true,
                'type' => '_builtin',
                'supports' => array(),
				'field-groups' => isset( $map_field_groups_by_taxonomy[ $taxonomy ] ) ? $map_field_groups_by_taxonomy[ $taxonomy ] : array(),
            );
            $add_one = true;
            if ( $s ) {
                $add_one = false;
                foreach( array('description', 'slug', 'title' ) as $key ) {
                    if ( $add_one || empty( $one[$key] ) ) {
                        continue;
                    }
                    if ( is_numeric(strpos(mb_strtolower($one[$key]), $s))) {
                        $add_one = true;
                    }
                }
            }
            if ( $add_one ) {

                // check if taxonomy is already stored in db
                if ( isset( $data[$one['slug']]['supports'] ) ) {
                    $one['supports'] = $data[$one['slug']]['supports'];

                // else use object_type for built_in taxonomies
                } elseif ( isset($pt->object_type) ) {
                    foreach( $pt->object_type as $post_type ) {
                        $post_object = get_post_type_object( $post_type );

                        $post_type_name = is_object( $post_object ) && isset( $post_object->labels->name )
                            ? $post_object->labels->name
                            : $post_type;

						$one['supports'][] = sprintf(
							'<a href="%1$s">%2$s</a>',
							esc_url( admin_url( 'admin.php?page=wpcf-edit-type&wpcf-post-type=' . $post_type_slug ) ),
							stripslashes( wpcf_translate( $post_type_name . ' name', $post_type_name, 'toolset-types-cpt-labels-for-' . $post_type_slug ) )
						);
                    }
                }

                // post types
                $data[$one['slug']] = $one;
            }
        }

        /**
         * fix built-in but inactive
         */
        foreach(array('category', 'post_tag') as $slug ) {
            if ( isset($data[$slug]) ) {
                $data[$slug]['slug'] = $slug;
                $data[$slug]['_builtin'] = true;
                $data[$slug]['type'] = '_builtin';
                $data[$slug]['description'] = __('This is built-in WordPress Taxonomy.', 'wpcf');
            }
        }

        /**
         * This checks for sorting input and sorts the data in our array accordingly.
         */
        usort($data, 'wpcf_usort_reorder');

        /**
         * REQUIRED for pagination. Let's figure out what page the user is currently
         * looking at. We'll need this later, so you should always include it in
         * your own package classes.
         */
        $current_page = $this->get_pagenum();

        /**
         * REQUIRED for pagination. Let's check how many items are in our data array.
         * In real-world use, this would be the total number of items in your database,
         * without filtering. We'll need this later, so you should always include it
         * in your own package classes.
         */
        $total_items = count($data);

        /**
         * The WP_List_Table class does not handle pagination for us, so we need
         * to ensure that the data is trimmed to only the current page. We can use
         * array_slice() to
         */
        $data = array_slice($data,(($current_page-1)*$per_page),$per_page);

        /**
         * REQUIRED. Now we can add our *sorted* data to the items property, where
         * it can be used by the rest of the class.
         */
        $this->items = $data;

        /**
         * REQUIRED. We also have to register our pagination options & calculations.
         */
        $this->set_pagination_args( array(
            'total_items' => $total_items,                  //WE have to calculate the total number of items
            'per_page'    => $per_page,                     //WE have to determine how many items to show on a page
            'total_pages' => ceil($total_items/$per_page)   //WE have to calculate the total number of pages
        ) );
    }

    /**
     * Generates content for a single row of the table
     *
     * @since 3.1.0
     * @access public
     *
     * @param object $item The current item
     */
    public function single_row( $item )
    {
        static $row_class = '';
        $row_class = ( $row_class == '' ? 'alternate' : '' );

        printf('<tr class="%s status-%s">', $row_class, $item['status']);
        $this->single_row_columns( $item );
        echo '</tr>';
    }

    public function no_items()
    {
        if ( isset($_POST['s']) ) {
            _e('No custom taxonomies found.','wpcf');
            return;
        }
        wpcf_admin_ctt_list_header();
        printf(
            '<a class="button-primary" href="%s">%s</a>',
            esc_url(
                add_query_arg(
                    array(
                        'page' => 'wpcf-edit-tax',
                    ),
                    admin_url('admin.php')
                )
            ),
            __('Add New Taxonomy', 'wpcf')
        );
    }

}
