<?php
/*
 * Field class.
 *
 *
 */

/**
 * Base class.
 *
 * Fields are our core items and we'll use this class to sort them out a little.
 * Very useful, should be used to finish small tasks for field.
 *
 * Example:
 *
 * // Setup field
 * global $wpcf;
 * $my_field = new WPCF_Field();
 * $my_field->set($wpcf->post, wpcf_admin_fields_get_field('image'));
 *
 * // Use it
 * $my_field->save();
 *
 * // Generic instance can be found in global $wpcf.
 * global $wpcf;
 * $wpcf->field->set(...);
 *
 * !! BE CAREFUL !! not to disturb global instance if you suspect processing
 * current item is not finished. Core code sometimes use same instance over
 * few functions and places.
 *
 * @since Types 1.2
 * @package Types
 * @subpackage Classes
 * @version 0.1
 * @category core
 * @author srdjan <srdjan@icanlocalize.com>
 */
class WPCF_Field
{

    /**
     * Field structure
     *
     * This is actually a form array collected from files per specific field:
     * /embedded/includes/fields/$field_type.php
     * /includes/fields/$field_type.php
     *
     * @var array
     */
    var $cf = array();

    /**
     * All Types created fields
     */
    var $fields = null;

    /**
     * Field saved data
     */
    var $meta = null;

    /**
     * Field config.
     *
     * Use it to set default configuration.
     *
     * @var array
     */
    var $config = array(
        'use_form' => false,
    );

    /**
     * Form object
     * @var array
     */
    var $form = array();

    /**
     * Sets post
     */
    var $post;

    /**
     * CF slug
     * @var string
     */
    var $slug = '';

    /**
     * Use cache flag
     * @var boolean
     */
    var $use_cache = true;

    /**
     * Cache.DEPRECATED
     *
     * @var
     */
    var $cache = array();

    /**
     * Add to editor flas
     * @var boolean
     */
    var $add_to_editor = true;

    /**
     * Context in which class is called
     */
    var $context = 'group';

    /**
     * Invalid fields
     *
     * @todo Revise
     */
    var $invalid_fields = array();

    /**
     * ID
     */
    var $ID = '';

    /**
     * Unique ID
     */
    var $unique_id = '';

		/**
		 * Meta
		 */
		var $__meta = '';

		/**
		 * Meta object
		 */
		var $meta_object;

    public function __construct( $config = array() ) {

    }

	/**
	 * Set current post and field.
	 *
	 * @param $post
	 * @param $cf
	 *
	 * @return bool
	 */
    function set( $post, $cf ) {

        global $wpcf;

        /*
         *
         * Check if $cf is string
         */
        if ( is_string( $cf ) ) {
            WPCF_Loader::loadInclude( 'fields' );
            $_cf = wpcf_admin_fields_get_field( $this->get_slug_no_prefix( $cf ) );
            // Check if found without prefix
            if ( empty( $_cf ) ) {
                $_cf = wpcf_admin_fields_get_field( $cf );
            }
            if ( empty( $_cf ) ) {
                /*
                 * TODO Check what happens if field is not found
                 */
                $this->_reset();
                return false;
            }
            $cf = $_cf;
        }

        $this->post = is_integer( $post ) ? get_post( $post ) : $post;
        // If empty post it is new
        if ( empty( $this->post->ID ) ) {
            $this->post = new stdClass();
            $this->post->ID = 0;
        }
        $this->ID = $cf['id'];
        $this->cf = $cf;
        $this->slug = wpcf_types_get_meta_prefix( $this->cf ) . $this->cf['slug'];
        $this->meta = $this->_get_meta();
        $this->config = $this->_get_config();
        $this->unique_id = wpcf_unique_id( serialize( (array) $this ) );
        $this->cf['value'] = $this->meta;

        // Debug
        $wpcf->debug->fields[$this->unique_id] = $this->cf;
        $wpcf->debug->meta[$this->slug][] = $this->meta;

        // Load files
        $this->_include_file_by_field_type($this->cf['type']);
        if ( defined( 'WPCF_INC_ABSPATH' ) ) {
            $file = WPCF_INC_ABSPATH . '/fields/' . preg_replace('/[^\w]+/', '', $this->cf['type']) . '.php';
            if ( file_exists( $file ) ) {
                include_once $file;
            }
        }
    }

    /**
     * Reset on failure.
     */
    function _reset() {
        $this->ID = '';
        $this->cf = array();
        $this->post = new stdClass();
        $this->slug = '';
        $this->meta = '';
        $this->__meta = '';
        $this->config = array();
        $this->unique_id = '';
        $this->cf['value'] = '';
    }

    /**
     * Set needed but not required form elements.
     *
     * @param string $cf
     */
    function _parse_cf_form_element( $cf ) {
        $p = array('#before' => '', '#after' => '', '#description' => '');
        foreach ( $p as $_p => $param ) {
            if ( !isset( $cf[$_p] ) ) {
                $cf[$_p] = $param;
            }
        }
        return $cf;
    }

    /**
     * Fetch and sort fields.
     *
     * @global object $wpdb
     *
     */
    function _get_meta() {
        global $wpdb;

        $cache_key = md5( 'field::_get_meta' . $this->post->ID . $this->slug );
        $cache_group = 'types_cache';
        $cached_object = wp_cache_get( $cache_key, $cache_group );
        if ( $this->use_cache ) {
			if ( false != $cached_object && is_array( $cached_object ) && isset( $cached_object[0] ) ) {// WordPress cache
				$r = $cached_object[0];
			} else {
				// Cache all the postmeta for this same post
				$all_postmeta = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM {$wpdb->postmeta} WHERE post_id=%d", $this->post->ID), OBJECT );
				if ( !empty( $all_postmeta ) ) {
					$cache_key_keys = array();
					foreach ( $all_postmeta as $metarow ) {
						$mpid = intval($metarow->post_id);
						$mkey = $metarow->meta_key;
						$cache_key_keys[$mpid . $mkey][] = $metarow;
						$cache_key_looped = md5( 'field::_get_meta' . $mpid . $mkey );
						if ( $mkey == $this->slug ) {
							$r = $metarow;
						}
					}
					foreach ( $cache_key_keys as $single_meta_keys => $single_meta_values ) {
						$cache_key_looped_new = md5( 'field::_get_meta' . $single_meta_keys );
						wp_cache_add( $cache_key_looped_new, $single_meta_values, $cache_group );// WordPress cache
					}
				}
			}
		} else {
			// If not using cache, get straight from DB single value
            $r = $wpdb->get_row(
                    $wpdb->prepare(
                            "SELECT * FROM $wpdb->postmeta
							WHERE post_id=%d
							AND meta_key=%s",
                            $this->post->ID, $this->slug )
            );
            // Cache it
            wp_cache_add( $cache_key, array( $r ), $cache_group );// WordPress cache
		}

        // Sort meta
        $meta = array();
        if ( !empty( $r ) ) {
            $meta = maybe_unserialize( $r->meta_value );
            $this->meta_object = $r;
        } else {
            $meta = null;
            $this->meta_object = new stdClass();
            $this->meta_object->meta_id = null;
            $this->meta_object->meta_key = null;
            $this->meta_object->meta_value = null;
        }

        /*
         * Secret public object :)
         * Keeps original data
         */
        $this->__meta = $meta;

        /*
         * Apply filters
         */
        $meta = apply_filters( 'wpcf_fields_value_get', $meta, $this );
        $meta = apply_filters( 'wpcf_fields_slug_' . $this->cf['slug'] . '_value_get', $meta, $this );
        $meta = apply_filters( 'wpcf_fields_type_' . $this->cf['type'] . '_value_get', $meta, $this );

        return $meta;
    }

    /**
     * Gets $_POST data.
     */
    function get_submitted_data() {
        $posted = isset( $_POST['wpcf'][$this->cf['slug']] ) ? $_POST['wpcf'][$this->cf['slug']] : null;

		return apply_filters( 'types_field_get_submitted_data', $posted, $this );
    }

    /**
     * Save field.
     *
     * If $value is empty, $_POST will be checked.
     * 1.3.2 Reverted saving empty fields
     * removed - if ( !empty( $value ) || is_numeric( $value ) ) {
     *
     * @param mixed $value
     *
     * @refactoring !! Extreme spaghetti code.
     */
    function save( $value = null )
    {
        // If $value null, look for submitted data
        if ( is_null( $value ) ) {
            $value = $this->get_submitted_data();
        }

        // Trim
        if ( is_string( $value ) ) {
            $value = trim( $value );
        }

        // setup what save to database if needed
        if (
            $value
            && array_key_exists( 'data', $this->cf )
            && array_key_exists( 'set_value', $this->cf['data'] )
        ) {
            $value = $this->cf['data']['set_value'];
        }

		// Check for Post Reference Field
		if( is_array( $this->cf ) && isset( $this->cf['type'] ) && $this->cf['type'] === 'post' ) {
			// run the field save hooks
			$this->_action_save( $this->cf, $value, null, $value );

			// and abort as we do not want to store the post reference field on post meta
			return;
		}

        // Apply filters on the field value.
        $original_value = $value;
        $filtered_value = $this->_filter_save_postmeta_value( $original_value );
        $filtered_value = $this->_filter_save_value( $filtered_value );

        // Save field if needed
	    $value_is_empty = ( is_null( $filtered_value ) || $filtered_value === false || $filtered_value === '' );

	    // This is a special case where we are supposed to save zero as a value when the field is set
	    // (applies for checkbox, checkboxes or other boolean-ish fields).
	    $saving_zero_as_set_value = (
		    array_key_exists( 'set_value', $this->cf['data'] )
		    && "0" === (string) $filtered_value
		    && "0" === (string) $this->cf['data']['set_value']
	    );

		if (
			$value_is_empty
			&& ! $saving_zero_as_set_value
			&& $this->cf['type'] !== 'post'
			&& ! $this->should_save_empty_value()
		) {
			// If the value is empty and we are not supposed to save it, we need to delete the
			// old value from the database.
			do_action( 'wpcf_postmeta_before_delete', $this->post, $this->cf );
			delete_post_meta( $this->post->ID, $this->slug );
			do_action( 'wpcf_postmeta_after_delete', $this->post, $this->cf );

			return;
		}

		// We're supposed to store this.
		$mid = update_post_meta( $this->post->ID, $this->slug, $filtered_value );
		$this->_action_save( $this->cf, $filtered_value, $mid, $original_value );
    }


	public function should_save_empty_value() {
		if ( isset( $this->cf['data']['save_empty'] ) ) {
			$save_empty_setting = $this->cf['data']['save_empty'] ? : Toolset_Field_Definition::SAVE_EMPTY_NO;
		} else {
			$save_empty_setting = Toolset_Field_Definition::SAVE_EMPTY_NO;
		}

		$field_type = Toolset_Field_Type_Definition_Factory::get_instance()
			->load_field_type_definition( $this->cf['type'] );

		if ( ! $field_type ) {
			return false;
		}

		return Toolset_Field_Definition::SAVE_EMPTY_YES
			=== $field_type->filter_save_empty_setting( $save_empty_setting );
	}


	public function get_empty_value_by_field_type() {
		$field_type = Toolset_Field_Type_Definition_Factory::get_instance()
			->load_field_type_definition( $this->cf['type'] );

		if ( ! $field_type ) {
			return '';
		}

		return $field_type->get_empty_field_value();
	}

    /**
     * Apply filters to saved value.
     *
     * @param type $value
     *
     */
    function _filter_save_value( $value )
    {
        // Apply filters
        $value = apply_filters( 'wpcf_fields_value_save', $value, $this->cf['type'], $this->cf['slug'], $this->cf, $this );
        $value = apply_filters( 'wpcf_fields_slug_' . $this->cf['slug'] . '_value_save', $value, $this->cf, $this );
        $value = apply_filters( 'wpcf_fields_type_' . $this->cf['type'] . '_value_save', $value, $this->cf, $this );

        return $value;
    }

    function _filter_save_postmeta_value( $value )
    {
        $value = apply_filters( 'wpcf_fields_postmeta_value_save', $value, $this->cf['type'], $this->cf['slug'], $this->cf, $this );
        return $value;
    }

    function _filter_save_usermeta_value( $value )
    {
        $value = apply_filters( 'wpcf_fields_usermeta_value_save', $value, $this->cf['type'], $this->cf['slug'], $this->cf, $this );
        return $value;
    }

	function _filter_save_termmeta_value( $value )
    {
        $value = apply_filters( 'wpcf_fields_termmeta_value_save', $value, $this->cf['type'], $this->cf['slug'], $this->cf, $this );
        return $value;
    }

    /**
     * Use these hooks to add future functionality.
     * Do not add any more code to core.
     */
    function _action_save( $field, $value, $meta_id, $meta_value_original )
    {
        do_action( 'wpcf_fields_save', $value, $field, $this, $meta_id, $meta_value_original );
        do_action( 'wpcf_fields_slug_' . $field['slug'] . '_save', $value, $field, $this, $meta_id, $meta_value_original );
        do_action( 'wpcf_fields_type_' . $field['type'] . '_save', $value, $field, $this, $meta_id, $meta_value_original );
    }

    /**
     * Get file fullpath to include
     *
     * param @string $basename
     *
     * return @string
     *
     */
    function _include_file_by_field_type($basename)
    {
        $file = wpcf_get_fullpath_by_field_type($basename);
        if ( file_exists( $file ) ) {
            include_once $file;
        }
        return $file;
    }

    /**
     * Sets field config.
     *
     *
     */
    function _get_config() {
        $this->_include_file_by_field_type($this->cf['type']);
        $func = 'wpcf_fields_' . $this->cf['type'];
        if ( is_callable( $func ) ) {
            return (object) call_user_func( $func );
        }
        return new stdClass();
    }

    /**
     * Discouraged usage.
     *
     *
     */
    function _deprecated_inherited_allowed() {
        return array(
            'image' => 'file',
            'numeric' => 'textfield',
            'email' => 'textfield',
            'phone' => 'textfield',
            'url' => 'textfield',
        );
    }

    /**
     * Sets field meta box form.
     *
     *
     */
    function _get_meta_form( $meta_value = null, $meta_id = null, $wrap = true ) {

        /*
         * Note that field may be registered outside of Types.
         * In that case, it's on developer to make sure it's loaded.
         */
        $this->_include_file_by_field_type($this->cf['type']);

        /*
         * Set value
         *
         * IMPORTANT
         * Here we set values for form elements
         */
        $this->cf['value'] = is_null( $meta_value ) ? $this->meta : $meta_value;

        $form = array();
        $form_meta_box = array();
        $inherited = array();
        $this->__multiple = false;

        // Open main wrapper
        if ( $wrap ) {
            $form['__meta_form_OPEN'] = array(
                '#type' => 'markup',
                '#markup' => ''
                . '<div id="wpcf_wrapper_' . $this->unique_id
                . '" class="wpcf-wrap wpcf-meta-form">',
            );
        }

        /*

         * Since Types 1.2
         * Avoid using parent (inherited) type
         * $this->config->inherited_field_type
         */
        // See if inherited data and merge
        if ( isset( $this->config->inherited_field_type ) ) {
            if ( !array_key_exists( $this->cf['type'],
                            $this->_deprecated_inherited_allowed() ) ) {
//                _deprecated_argument( 'inherited_field_type', '1.2',
//                        'Since Types 1.2 we encourage developers to completely define fields' );
            }
            $file = $this->_include_file_by_field_type($this->config->inherited_field_type);

            if ( file_exists( $file ) ) {

                if ( function_exists( 'wpcf_fields_'
                                . $this->config->inherited_field_type
                                . '_meta_box_form' ) ) {
                    $inherited = call_user_func_array( 'wpcf_fields_'
                            . $this->config->inherited_field_type
                            . '_meta_box_form', array($this->cf, $this) );
                    // If single form - convert to array of elements
                    if ( isset( $inherited['#type'] ) ) {
                        $inherited = array('wpcf_field_' . $this->unique_id => $inherited);
                    }

                    // One value?
                    if ( count( $inherited ) > 1 ) {
                        $this->__multiple = true;
                    }

                    $form = $form + $inherited;
                }
            }
        }

        $func = 'wpcf_fields_' . $this->cf['type'] . '_meta_box_form';
        if ( is_callable( $func ) ) {
            /*
             *
             * From Types 1.2 use complete form setup
             */
            $form_meta_box = call_user_func_array( 'wpcf_fields_'
                    . $this->cf['type'] . '_meta_box_form',
                    array($this->cf, $this) );

            // If single form - convert to array of elements
            if ( isset( $form_meta_box['#type'] ) ) {
                $form_meta_box = array('wpcf_field_' . $this->unique_id => $form_meta_box);
            }

            // One value?
            if ( count( $form_meta_box ) > 1 ) {
                $this->__multiple = true;
            }

            // Merge
            $form = array_merge( $form, $form_meta_box );
        }

        if ( !empty( $form ) ) {

            // Process each field
            foreach ( $form as $element_key => $element ) {

                /*
                 *
                 * Start using __ in keys to skip element
                 */
                // Skip protected
                if ( strpos( $element_key, '__' ) === 0 ) {
                    $form[$element_key] = $element;
                    continue;
                }

                // Add title and description
                // TODO WPML
                if ( empty( $started ) ) {
                    $_title = isset( $element['#title'] ) ? $element['#title'] : $this->cf['name'];
                    $element['#title'] = wpcf_translate( 'field '
                            . $this->cf['id'] . ' name', $_title );

                    // Add asterisk for required fields
                    if ( isset( $this->cf['data']['validate']['required'] ) ) {
                        $element['#title'] .= '&#42;';
                    }

                    $_description = isset( $element['#description'] ) ? $element['#description'] : $this->cf['description'];
                    $element['#description'] = wpautop( wpcf_translate( 'field '
                                    . $this->cf['id'] . ' description',
                                    $_description ) );
                    $started = true;
                }

                // Set current element
                $this->__current_form_element = $element;

                // Process field
                $temp_processed = wpcf_admin_post_process_field( $this );
                if ( !empty( $temp_processed['element'] ) ) {
                    $element = $temp_processed['element'];
                }

                // Set form element
                $form[$element_key] = apply_filters( 'wpcf_post_edit_field', $element, $this->cf, $this->post, $this->context );
            }

            // Add to editor
            if ( $this->add_to_editor ) {
                wpcf_admin_post_add_to_editor( $this->cf );
            }

            $this->enqueue_script();
            $this->enqueue_style();
        }

        // Close main wrapper
        if ( $wrap ) {
            $form['meta_form_CLOSE'] = array(
                '#type' => 'markup',
                '#markup' => ''
                . '</div>',
            );
        }

        // Add unique IDs
        foreach ( $form as $k => $v ) {
            $_form[$k . '_' . $this->unique_id] = $v;
        }

        return apply_filters( 'wpcf_meta_form', $_form );
    }

    /**
     * Enqueue all files from config
     */
    function enqueue_script( $config = null ) {
        // Use internal
        if ( is_null( $config ) ) {
            $config = $this->config;
        }
        $config = (object) $config;
        // Process JS
        if ( !empty( $config->meta_box_js ) ) {
            foreach ( $config->meta_box_js as $handle => $data_script ) {
                if ( isset( $data_script['inline'] ) ) {
                    add_action( 'admin_footer', $data_script['inline'] );
                    continue;
                }
                if ( !isset( $data_script['src'] ) ) {
                    continue;
                }
                $deps = isset($data_script['deps']) && !empty( $data_script['deps'] ) ? $data_script['deps'] : array();
                $in_footer = isset($data_script['in_footer']) && $data_script['in_footer'];
                $ver = !empty( $data_script['ver'] ) ? $data_script['ver'] : WPCF_VERSION;
                wp_enqueue_script( $handle, $data_script['src'], $deps, $ver, $in_footer);
            }
        }
    }

    /**
     * Enqueue all files from config
     */
    function enqueue_style( $config = null ) {
        // Use internal
        if ( is_null( $config ) ) {
            $config = $this->config;
        }
        $config = (object) $config;
        if ( !empty( $config->meta_box_css ) ) {
            foreach ( $config->meta_box_css as $handle => $data_script ) {
                $deps = !empty( $data_script['deps'] ) ? $data_script['deps'] : array();
                if ( isset( $data_script['inline'] ) ) {
                    add_action( 'admin_head', $data_script['inline'] );
                    continue;
                }
                if ( !isset( $data_script['src'] ) ) {
                    continue;
                }
                wp_enqueue_style( $handle, $data_script['src'], $deps,
                        WPCF_VERSION );
            }
        }
    }

    /**
     * Use this function to add final filters to HTML output.
     *
     * @param type $output
     */
    function html( $html, $params )
    {
        /**
         * check input
         */
        if ( is_array($html) || is_object($html) ) {
            return '';
        }
        /**
         *
         * Exception when RAW = TRUE.
         * Return unchanged value.
         *
         */
        if ( isset( $params['raw'] ) && $params['raw'] == 'true' ) {
            return $html;
        } else {
			$html = stripslashes( $html );
		}
        // Process shortcodes too
        $html = do_shortcode( $html );
        return $html;
    }

    /**
     * Determines if field is created with Types.
     *
     * @param type $field_key
     */
    function is_under_control( $field_key ) {
        /*
         *
         * We force checking our meta prefix
         */
        $key = $this->get_slug_no_prefix( $field_key );
        return WPCF_Fields::isUnderControl( $key );
    }

    /**
     * Return slug.
     *
     * @param string $meta_key
     * @return string
     */
    function get_slug_no_prefix( $meta_key ) {
        return strpos( $meta_key, WPCF_META_PREFIX ) === 0 ? substr( $meta_key,
                        strlen( WPCF_META_PREFIX ) ) : $meta_key;
    }

	/**
	 * Backward compatibility
	 * For PHP 7 we renamed the method __get_slug_no_prefix() to get_slug_no_prefix().
	 * As both are public methods we apply this fallback for the case someone calls the old methods.
	 *
	 * @param $method
	 * @param $arguments
	 *
	 * @return mixed
	 */
	public function __call( $method, $arguments ) {
		switch ( $method ) {
			case '__get_slug_no_prefix':
				return $this->get_slug_no_prefix( $arguments );
				break;
		}
	}

    /**
     * Returns altered element form name.
     *
     * Use $prefix to set name like:
     * wpcf_post_relationship[214][wpcf-my-checkbox]
     *
     * Or if multi array
     * wpcf_post_relationship[214][wpcf-my-date][datepicker]
     * wpcf_post_relationship[214][wpcf-my-date][hour]
     *
     * @param type $prefix
     * @param type $name
     *
     */
    function alter_form_name( $prefix, $name ) {
        $temp = explode( '[', $name );
        $temp = array_pop( $temp );
        $__name = trim( strval( $temp ), ']' );
        /*
         * This means form is single-valued
         */
        if ( $__name == $this->cf['slug'] ) {
            return strval( $prefix ) . '['
                    . $this->post->ID
                    . '][' . $this->slug . ']';
            /*
             *
             * Multi array case
             */
        } else {
            return strval( $prefix ) . '['
                    . $this->post->ID
                    . '][' . $this->slug . '][' . $__name . ']';
        }
    }

}

/*
 * Usermeta Field class extends Field.
 */

//require_once WPCF_EMBEDDED_ABSPATH . '/classes/field.php';


class WPCF_Termmeta_Field extends WPCF_Field
{

    /**
     * Set current post and field.
     *
     * @param type $post
     * @param type $cf
     */
    function set( $term_id, $cf ) {

        global $wpcf;

        /*
         *
         * Check if $cf is string
         */
        if ( is_string( $cf ) ) {
            WPCF_Loader::loadInclude( 'fields' );
            $cf = types_get_field( $this->get_slug_no_prefix( $cf ), 'termmeta' );
            if ( empty( $cf ) ) {
                $this->_reset();
                return false;
            }
        }

        $this->term_id = $term_id;
        $this->ID = $cf['id'];
        $this->cf = $cf;
        $this->slug = wpcf_types_get_meta_prefix( $this->cf ) . $this->cf['slug'];
        $this->meta = $this->_get_meta();
        $this->config = $this->_get_config();
        $this->unique_id = wpcf_unique_id( serialize( (array) $this ) );
        $this->cf['value'] = $this->meta;
        // Debug
        $wpcf->debug->fieds[$this->unique_id] = $this->cf;
        $wpcf->debug->meta[$this->slug][] = $this->meta;

        // Load files
        if ( isset( $this->cf['type'] ) ) {
            $file = WPCF_EMBEDDED_INC_ABSPATH . '/fields/' . $this->cf['type'] . '.php';
            if ( file_exists( $file ) ) {
                include_once $file;
            }
            if ( defined( 'WPCF_INC_ABSPATH' ) ) {
                $file = WPCF_INC_ABSPATH . '/fields/' . $this->cf['type'] . '.php';
                if ( file_exists( $file ) ) {
                    include_once $file;
                }
            }
        }
    }

    /**
     * Save usermeta field.
     *
     *
     * @param type $value
     */
    function termmeta_save( $value = null ) {

        // If $value null, look for submitted data
        if ( is_null( $value ) ) {
            $value = $this->get_submitted_data();
        }
        /*
         *
         *
         * Since Types 1.2
         * We completely rewrite meta.
         * It has no impact on frontend and covers a lot of cases
         * (e.g. user change mode from single to repetitive)
         */

        delete_term_meta( $this->term_id, $this->slug );


        // Save
        if ( !empty( $value ) || is_numeric( $value ) ) {

            // Trim
            if ( is_string( $value ) ) {
                $value = trim( $value );
            }

            // Apply filters
            $_value = $this->_filter_save_termmeta_value( $value );
            $_value = $this->_filter_save_value( $_value );
            if ( !empty( $_value ) || is_numeric( $_value ) ) {
                // Save field
                $mid = update_term_meta( $this->term_id, $this->slug, $_value );
                $this->_action_save( $this->cf, $_value, $mid, $value );
            }
        }
    }

    /**
     * Fetch and sort fields.
     *
     * @global object $wpdb
     *
     */
    function _get_meta() {
        global $wpdb;

        $cache_key = md5( 'termmeta::_get_meta' . $this->term_id . $this->slug );
        $cache_group = 'types_cache';
        $cached_object = wp_cache_get( $cache_key, $cache_group );

        if ( $this->use_cache ) {
			if ( false != $cached_object && is_array( $cached_object ) && isset( $cached_object[0] ) ) {// WordPress cache
				$r = $cached_object[0];
			} else {
				// Cache all the postmeta for this same user
				$all_termmeta = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM {$wpdb->termmeta} WHERE term_id=%d", $this->term_id), OBJECT );
				if ( !empty( $all_termmeta ) ) {
					$cache_key_keys = array();
					foreach ( $all_termmeta as $metarow ) {
						$mpid = intval($metarow->term_id);
						$mkey = $metarow->meta_key;
						$cache_key_keys[$mpid . $mkey][] = $metarow;
						$cache_key_looped = md5( 'termmeta::_get_meta' . $mpid . $mkey );
						if ( $mkey == $this->slug ) {
							$r = $metarow;
						}
					}
					foreach ( $cache_key_keys as $single_meta_keys => $single_meta_values ) {
						$cache_key_looped_new = md5( 'termmeta::_get_meta' . $single_meta_keys );
						wp_cache_add( $cache_key_looped_new, $single_meta_values, $cache_group );// WordPress cache
					}
				}
			}
		} else {
			// Get straight from DB single value
			$r = $wpdb->get_row(
					$wpdb->prepare(
					"SELECT * FROM {$wpdb->termmeta}
					WHERE term_id=%d
					AND meta_key=%s",
							$this->term_id, $this->slug )
			);
			// Cache it
            wp_cache_add( $cache_key, array( $r ), $cache_group );// WordPress cache
        }

        // Sort meta
        $meta = array();
        if ( !empty( $r ) ) {
            $meta = maybe_unserialize( $r->meta_value );
            $this->meta_object = $r;
        } else {
            $meta = null;
            $this->meta_object = new stdClass();
            $this->meta_object->meta_id = null;
            $this->meta_object->meta_key = null;
            $this->meta_object->meta_value = null;
        }

        /*
         * Secret public object :)
         * Keeps original data
         */
        $this->__meta = $meta;

        /*
         *
         * Apply filters
         * !!! IMPORTANT !!!
         * TODO Make this only place where field meta value is filtered
         */
        $meta = apply_filters( 'wpcf_fields_value_get', $meta, $this );
        $meta = apply_filters( 'wpcf_fields_slug_' . $this->cf['slug'] . '_value_get', $meta, $this );
        $meta = apply_filters( 'wpcf_fields_type_' . $this->cf['type'] . '_value_get', $meta, $this );
        return $meta;
    }

}

