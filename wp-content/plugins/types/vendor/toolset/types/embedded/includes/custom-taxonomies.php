<?php
/**
 * Custom taxonomies registration.
 */

/**
 * Returna default custom taxonomy structure.
 *
 * @return array
 */
function wpcf_custom_taxonomies_default() {
    return array(
				'slug'                  => '',
				'description'           => '',
				'supports'              => array(),
				'public'                => true,
				'show_in_nav_menus'     => true,
				'hierarchical'          => false,
				'show_ui'               => true,
				'show_tagcloud'         => true,
				'show_admin_column'     => false,
				'update_count_callback' => '',
				'query_var_enabled'     => true,
				'query_var'             => '',
				'capabilities'          => false,
				'rewrite'               => array(
            'enabled'      => true,
            'slug'         => '',
            'with_front'   => true,
            'hierarchical' => true
        ),
        'labels' => array(
						'name'                       => '',
						'singular_name'              => '',
						'search_items'               => 'Search %s',
						'popular_items'              => 'Popular %s',
						'menu_name'                  => '%s',
						'all_items'                  => 'All %s',
						'parent_item'                => 'Parent %s',
						'parent_item_colon'          => 'Parent %s:',
						'edit_item'                  => 'Edit %s',
						'view_item'                  => 'View %s',
						'update_item'                => 'Update %s',
						'add_new_item'               => 'Add New %s',
						'new_item_name'              => 'New %s Name',
						'template_name'              => '%s Archives',
						'separate_items_with_commas' => 'Separate %s with commas',
						'add_or_remove_items'        => 'Add or remove %s',
						'choose_from_most_used'      => 'Choose from the most used %s',
						'not_found'                  => 'No %s found.',
						'no_terms'                   => 'No %s',
						'filter_by_item'             => 'Filter by %s',
						'items_list_navigation'      => '%s list navigation',
						'items_list'                 => '%s list',
						'most_used'                  => 'Most used',
						'back_to_items'              => '&larr; Go to %s',
						'item_link'                  => '%s Link',
						'item_link_description'      => 'A link to a %s',
        ),
        'meta_box_cb' => array(
            'disabled' => false,
            'callback' => null,
        ),
    );
}

/**
 * Inits custom taxonomies.
 */
function wpcf_custom_taxonomies_init()
{
	do_action( 'wpcf_init_default_taxonomies_labels' );
    $custom_taxonomies = get_option( WPCF_OPTION_NAME_CUSTOM_TAXONOMIES, array() );
    if ( !empty( $custom_taxonomies ) ) {
        foreach ( $custom_taxonomies as $taxonomy => $data ) {
            if (
				! isset( $data['_builtin'] )
				|| ! $data['_builtin']
			) {
                wpcf_custom_taxonomies_register( $taxonomy, $data );
            }
        }
    }
}
function wpcf_builtin_taxonomies_init() {
	$custom_taxonomies = get_option( WPCF_OPTION_NAME_CUSTOM_TAXONOMIES, array() );
    if ( !empty( $custom_taxonomies ) ) {
        foreach ( $custom_taxonomies as $taxonomy => $data ) {
            if ( isset($data['_builtin']) && $data['_builtin']) {
                wpcf_taxonomies_register( $taxonomy, $data );
            }
        }
    }
}
/**
 * Handle builtin taxonomies
 *
 * Function add or remove taxonomy to post type
 *
 * @since 1.9.0
 *
 * @param string $taxonomy taxonomy slug/name
 * @param array $data taxonomy configuration
 *
 */
function wpcf_taxonomies_register($taxonomy, $data)
{

    // check which types are supported
    if ( isset( $data['supports'] ) && is_array( $data['supports'] ) ) {

        if( !empty( $data['supports'] ) ) {
            foreach( array_keys($data['supports']) as $post_type ) {
                register_taxonomy_for_object_type( $taxonomy, $post_type);
            }
        }

        // check for inbuilt Tags (post_tag) and Categories if post is not supported,
        // so it needs to get unregistered
        if( (
                $data['slug'] == 'post_tag'
                || $data['slug'] == 'category'
            )
            && !array_key_exists( 'post', $data['supports'] ) ) {
            unregister_taxonomy_for_object_type( $taxonomy, 'post' );
        }

    }

    // this is only left for backwards compatibility
    if ( isset($data['disabled_post_types']) && is_array($data['disabled_post_types'])) {
        foreach( array_keys($data['disabled_post_types']) as $post_type ) {
            unregister_taxonomy_for_object_type($taxonomy, $post_type);
        }
    }



    // unregister
    if ( isset($data['disabled']) && $data['disabled']) {
        register_taxonomy($data['slug'], array());
    // hide
    } else if( isset( $data['public'] ) && strval( $data['public'] ) == 'hidden' ) {
        global $wp_taxonomies;
        $wp_taxonomies[$data['slug']]->public = false;
        $wp_taxonomies[$data['slug']]->show_ui = false;
        $wp_taxonomies[$data['slug']]->show_in_menu = false;
    }
}

/**
 * Registers custom taxonomies.
 *
 * @param string $taxonomy Taxonomy slug
 * @param array $data Taxonomy settings as stored in options by Types.
 *
 * @return bool
 * @since unknown
 */
function wpcf_custom_taxonomies_register( $taxonomy, $data ) {
	if ( ! empty( $data['disabled'] ) ) {
		return false;
	}

	// Set object types
	if ( ! empty( $data['supports'] ) && is_array( $data['supports'] ) ) {
		$object_types = array_keys( $data['supports'] );
	} else {
		$object_types = array();
	}


	$block_editor_available = new Toolset_Condition_Plugin_Gutenberg_Active();
	if( $block_editor_available->is_met() ) {
		// >= WP 5.0 or Gutenberg plugin active
		// force show_in_rest for taxonomies
		$data['show_in_rest'] = 1;
	}

	if( isset( $data['show_in_rest_force_disable'] ) && $data['show_in_rest_force_disable'] ) {
		$data['show_in_rest'] = false;
	}

	$data = apply_filters( 'types_taxonomy', $data, $taxonomy );

	// Set labels
	if ( ! empty( $data['labels'] ) ) {

		foreach ( $data['labels'] as $label_key => $label ) {
			$data['labels'][ $label_key ] = $label = stripslashes( $label );

			// Allows several instances of %s in the label.
			$label = str_replace( '%s', '%1$s', $label );

			switch ( $label_key ) {

				case 'parent_item':
				case 'parent_item_colon':
				case 'edit_item':
				case 'update_item':
				case 'add_new_item':
				case 'new_item_name':
				case 'view_item':
				case 'template_name':
				case 'item_link':
					try {
						$data['labels'][ $label_key ] = sprintf( $label, $data['labels']['singular_name'] );
					} catch ( Error $e ) {
						if ( defined( 'WP_DEBUG_LOG' ) && WP_DEBUG_LOG ) {
							error_log( 'Invalid taxonomy ' . $label_key . ' label: ' . $e->getMessage() );
						}
					}
					break;

				case 'filter_by_item':
				case 'item_link_description':
					try {
						$data['labels'][ $label_key ] = sprintf( $label, strtolower( $data['labels']['singular_name'] ) );
					} catch ( Error $e ) {
						if ( defined( 'WP_DEBUG_LOG' ) && WP_DEBUG_LOG ) {
							error_log( 'Invalid taxonomy ' . $label_key . ' label: ' . $e->getMessage() );
						}
					}
					break;

				case 'search_items':
				case 'popular_items':
				case 'all_items':
				case 'separate_items_with_commas':
				case 'add_or_remove_items':
				case 'choose_from_most_used':
				case 'menu_name':
				case 'items_list_navigation':
				case 'items_list':
				case 'back_to_items':
					try {
						$data['labels'][ $label_key ] = sprintf( $label, $data['labels']['name'] );
					} catch ( Error $e ) {
						if ( defined( 'WP_DEBUG_LOG' ) && WP_DEBUG_LOG ) {
							error_log( 'Invalid taxonomy ' . $label_key . ' label: ' . $e->getMessage() );
						}
					}
					break;

				case 'not_found':
				case 'no_terms':
					try {
						$data['labels'][ $label_key ] = sprintf( $label, strtolower( $data['labels']['name'] ) );
					} catch ( Error $e ) {
						if ( defined( 'WP_DEBUG_LOG' ) && WP_DEBUG_LOG ) {
							error_log( 'Invalid taxonomy ' . $label_key . ' label: ' . $e->getMessage() );
						}
					}
					break;
			}
		}
	}

	$data['description'] = (
		! empty( $data['description'] )
			? htmlspecialchars( stripslashes( $data['description'] ), ENT_QUOTES )
			: ''
	);

	$data['public'] = ( empty( $data['public'] ) || strval( $data['public'] ) == 'hidden' ) ? false : true;
	$data['show_ui'] = ( empty( $data['show_ui'] ) || ! $data['public'] ) ? false : true;
	$data['hierarchical'] = ( empty( $data['hierarchical'] ) || $data['hierarchical'] == 'flat' ) ? false : true;
	$data['show_in_nav_menus'] = ! empty( $data['show_in_nav_menus'] );

	if ( empty( $data['query_var_enabled'] ) ) {
		$data['query_var'] = false;
	} else if ( empty( $data['query_var'] ) ) {
		$data['query_var'] = true;
	}

	if ( ! empty( $data['rewrite']['enabled'] ) ) {
		$data['rewrite']['with_front'] = ! empty( $data['rewrite']['with_front'] );
		$data['rewrite']['hierarchical'] = ! empty( $data['rewrite']['hierarchical'] );
		// Make sure that rewrite/slug has a value
		if ( ! isset( $data['rewrite']['slug'] ) || $data['rewrite']['slug'] == '' ) {
			$data['rewrite']['slug'] = $data['slug'];
		}
	} else {
		$data['rewrite'] = false;
	}

	// meta_box_cb
	if ( isset( $data['meta_box_cb']['disabled'] ) ) {
		$data['meta_box_cb'] = false;
	} else if ( isset( $data['meta_box_cb']['callback'] ) && ! empty( $data['meta_box_cb']['callback'] ) ) {
		$data['meta_box_cb'] = $data['meta_box_cb']['callback'];
	} else {
		unset( $data['meta_box_cb'] );
	}

	// Force removing capabilities here
	unset( $data['capabilities'] );

	$object_types_filtered = apply_filters( 'wpcf_taxonomy_objects', $object_types, $taxonomy );
	$taxonomy_args = apply_filters( 'wpcf_taxonomy_data', $data, $taxonomy, $object_types );

	// Suddenly, WordPress 4.7 (alpha) requires the 'name' argument and uses it as the slug.
	if ( ( ! isset( $taxonomy_args['name'] ) ) || false == $taxonomy_args['name'] ) {
		$taxonomy_args['name'] = $taxonomy;
	}

	/**
	 * Translate (and register with WPML) the taxonomy strings in the correct gettext context
	 * @link https://onthegosystems.myjetbrains.com/youtrack/issue/types-1323
	 */
	//$taxonomy_args['labels']['name']          = _x( $taxonomy_args['labels']['name'], 'taxonomy general name', 'toolset-types-taxonomy-labels-for-' . $taxonomy );
	//$taxonomy_args['labels']['singular_name'] = _x( $taxonomy_args['labels']['singular_name'], 'taxonomy singular name', 'toolset-types-taxonomy-labels-for-' . $taxonomy );

	$result = register_taxonomy( $taxonomy, $object_types_filtered, $taxonomy_args );

	$is_success = ( $result instanceof WP_Error ? false : true );

	return $is_success;
}


/**
 * Returns only active taxonomies.
 *
 * @return array
 */
function wpcf_get_active_custom_taxonomies() {
    $taxonomies = get_option(WPCF_OPTION_NAME_CUSTOM_TAXONOMIES, array());
    foreach ($taxonomies as $taxonomy => $data) {
        if (!empty($data['disabled'])) {
            unset($taxonomies[$taxonomy]);
        }
    }
    return $taxonomies;
}
