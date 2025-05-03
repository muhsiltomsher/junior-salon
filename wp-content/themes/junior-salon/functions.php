<?php

// Enqueue Tailwind CSS and other styles
function junior_salon_enqueue_styles() {
    wp_enqueue_style('tailwindcss', get_template_directory_uri() . '/dist/styles.css', [], null);
}

add_action('wp_enqueue_scripts', 'junior_salon_enqueue_styles');
add_action('admin_menu', function() {
    add_menu_page(
        'Homepage',          // Page title
        'Homepage',          // Menu title
        'manage_options',    // Capability
        'homepage-main-menu',// Menu slug
        '__return_null',     // No page content needed
        'dashicons-admin-home', // Icon
        3                    // Position (after Dashboard)
    );
});

register_post_type('home-features-banner', array(
    'label' => 'Home Features Banner',
    'public' => true,
    'show_in_menu' => 'homepage-main-menu', // <- This is the key part!
    'supports' => array('title', 'editor', 'thumbnail'),
    // other arguments...
));



 function mytheme_enqueue_scripts_font() {

    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
}
 add_action('wp_enqueue_scripts', 'mytheme_enqueue_scripts_font');


function junior_salon_custom_logo_setup() {
    add_theme_support('custom-logo', array(
        'height'      => 100,  // Adjust the height as needed
        'width'       => 300,  // Adjust the width as needed
        'flex-width'  => true, // Allow flexibility in the width
        'flex-height' => true, // Allow flexibility in the height
    ));
}
add_action('after_setup_theme', 'junior_salon_custom_logo_setup');
function juniorsalon_customize_register($wp_customize) {
    // Logo Width
    $wp_customize->add_setting('logo_width', array(
        'default' => '150',
        'sanitize_callback' => 'absint',
    ));

    $wp_customize->add_control('logo_width', array(
        'label' => __('Logo Width (px)', 'juniorsalon'),
        'section' => 'title_tagline',
        'type' => 'number',
        'input_attrs' => array(
            'min' => 50,
            'max' => 600,
            'step' => 1,
        ),
    ));

    // Logo Height
    $wp_customize->add_setting('logo_height', array(
        'default' => 'auto',
        'sanitize_callback' => function($value) {
            return $value === 'auto' ? 'auto' : absint($value);
        },
    ));

    $wp_customize->add_control('logo_height', array(
        'label' => __('Logo Height (px or "auto")', 'juniorsalon'),
        'section' => 'title_tagline',
        'type' => 'text',
        'description' => __('Use "auto" to keep original ratio.'),
    ));
}
add_action('customize_register', 'juniorsalon_customize_register');


// Register Menu Locations
function junior_salon_register_menus() {
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'junior-salon'), // Primary menu location
        'footer1' => __('Footer Menu 1', 'junior-salon'),   // Footer menu 1
        'footer2' => __('Footer Menu 2', 'junior-salon'), // Footer menu 2
		        'footer3' => __('Footer Menu 3', 'junior-salon'), // Footer menu 3

    ));
}



add_action('after_setup_theme', 'junior_salon_register_menus');
function junior_salon_customize_register($wp_customize) {
    // Add a new section
    $wp_customize->add_section('junior_salon_footer_section', array(
        'title' => __('Footer Settings', 'junior-salon'),
        'priority' => 130,
    ));

    // Add a setting
    $wp_customize->add_setting('junior_salon_footer_copyright', array(
        'default' => '© ' . date('Y') . ' Junior Salon. All rights reserved.',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    // Add a control for the setting
    $wp_customize->add_control('junior_salon_footer_copyright', array(
        'label' => __('Footer Copyright Text', 'junior-salon'),
        'section' => 'junior_salon_footer_section',
        'type' => 'text',
    ));
}
add_action('customize_register', 'junior_salon_customize_register');

function mytheme_customize_register($wp_customize) {
    // Add social media section
    $wp_customize->add_section('social_media_section', array(
        'title'    => __('Social Media', 'mytheme'),
        'priority' => 30,
    ));

    // Facebook URL setting and control
    $wp_customize->add_setting('facebook_url', array(
        'default'   => '',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('facebook_url', array(
        'label'    => __('Facebook URL', 'mytheme'),
        'section'  => 'social_media_section',
        'type'     => 'url',
    ));

    // Twitter URL setting and control
    $wp_customize->add_setting('twitter_url', array(
        'default'   => '',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('twitter_url', array(
        'label'    => __('Twitter URL', 'mytheme'),
        'section'  => 'social_media_section',
        'type'     => 'url',
    ));

    // Instagram URL setting and control
    $wp_customize->add_setting('instagram_url', array(
        'default'   => '',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('instagram_url', array(
        'label'    => __('Instagram URL', 'mytheme'),
        'section'  => 'social_media_section',
        'type'     => 'url',
    ));
}

add_action('customize_register', 'mytheme_customize_register');



function mytheme_customize_register_top_bar($wp_customize) {
    // Add a section for the top bar settings
    $wp_customize->add_section('top_bar_section', array(
        'title'    => __('Top Bar Settings', 'mytheme'),
        'priority' => 30,
    ));

    // Tagline setting
    $wp_customize->add_setting('top_bar_tagline', array(
        'default'   => 'Super Save',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('top_bar_tagline', array(
        'label'    => __('Tagline', 'mytheme'),
        'section'  => 'top_bar_section',
        'type'     => 'text',
    ));

    // Shop Now Button URL setting
    $wp_customize->add_setting('top_bar_shop_url', array(
        'default'   => home_url('/shop'),
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('top_bar_shop_url', array(
        'label'    => __('Shop Now Button URL', 'mytheme'),
        'section'  => 'top_bar_section',
        'type'     => 'url',
    ));

    // Timer duration setting (in hours)
    $wp_customize->add_setting('top_bar_timer_duration', array(
        'default'   => 10, // Default to 10 hours
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('top_bar_timer_duration', array(
        'label'    => __('Timer Duration (Hours)', 'mytheme'),
        'section'  => 'top_bar_section',
        'type'     => 'number',
        'input_attrs' => array(
            'min' => 1,
            'max' => 24,
        ),
    ));
}

add_action('customize_register', 'mytheme_customize_register_top_bar');



function register_testimonial_post_type() {
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => 'Testimonials',
            'singular_name' => 'Testimonial',
        ),
        'public' => true,
        'has_archive' => false,
        'supports' => ['title', 'editor', 'thumbnail'],
        'show_in_rest' => true,
    ));
}
add_action('init', 'register_testimonial_post_type');

add_action('wp_ajax_load_testimonials', 'load_testimonials_ajax');
add_action('wp_ajax_nopriv_load_testimonials', 'load_testimonials_ajax');

function load_testimonials_ajax() {
    $paged = isset($_GET['page']) ? intval($_GET['page']) : 1;

    $query = new WP_Query([
        'post_type' => 'testimonial',
        'posts_per_page' => 3,
        'paged' => $paged
    ]);

    if ($query->have_posts()) :
        while ($query->have_posts()) : $query->the_post();
            $rating = get_field('rating');
            ?>
            <div class="bg-white shadow rounded-lg p-6">
                <?php if (has_post_thumbnail()) : ?>
               <img src="<?php the_post_thumbnail_url('medium'); ?>" class="w-full h-48 object-cover rounded-md mb-4" alt="">

                <?php endif; ?>
                <h3 class="text-lg font-semibold mb-1"><?php the_title(); ?></h3>
                <div class="text-yellow-400 mb-2">
                    <?php for ($i = 0; $i < 5; $i++) : ?>
                        <span><?php echo $i < $rating ? '★' : '☆'; ?></span>
                    <?php endfor; ?>
                </div>
                <p class="text-gray-700 text-sm"><?php the_content(); ?></p>
            </div>
            <?php
        endwhile;
    endif;

    wp_reset_postdata();
    wp_die();
}
function load_tab_products() {
  $cat = $_GET['cat'] ?? '';
  echo load_products_by_category($cat);
  wp_die();
}




add_action('wp_ajax_load_tab_products', 'load_tab_products');
add_action('wp_ajax_nopriv_load_tab_products', 'load_tab_products');




function load_products_by_category($cat) {
    $args = [
      'post_type' => 'product',
      'posts_per_page' => 5,
    ];
  
    if ($cat === 'sale') {
      $args['meta_query'] = [
        [
          'key' => '_sale_price',
          'value' => 0,
          'compare' => '>',
          'type' => 'NUMERIC'
        ]
      ];
    } else {
      $args['tax_query'] = [
        [
          'taxonomy' => 'product_cat',
          'field' => 'slug',
          'terms' => $cat,
        ]
      ];
    }
  
    $query = new WP_Query($args);
  
    ob_start();
    if ($query->have_posts()) :
      while ($query->have_posts()) : $query->the_post();
        global $product;
        ?>
        <div class="bg-white shadow rounded-lg overflow-hidden text-center p-4">
          <a href="<?php the_permalink(); ?>">
            <?php //the_post_thumbnail('medium', ['class' => 'w-full object-cover']); ?>
          </a>

          <?php
$attachment_ids = $product->get_gallery_image_ids();
$hover_image_id = $attachment_ids[0] ?? null;
?>
<div class="relative group w-full aspect-square overflow-hidden">
  <img 
    src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'medium'); ?>" 
    class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" 
    alt="<?php the_title_attribute(); ?>" 
  />
  <?php if ($hover_image_id): ?>
    <img 
      src="<?php echo wp_get_attachment_image_url($hover_image_id, 'medium'); ?>" 
      class="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
      alt="<?php the_title_attribute(); ?>" 
    />
  <?php endif; ?>
</div>


         <?php echo do_shortcode('[yith_wcwl_add_to_wishlist]'); ?>

          <div class="mt-4">
            <?php
            $brands = wp_get_post_terms(get_the_ID(), 'product_brand');
            if (!is_wp_error($brands) && !empty($brands)) :
                echo '<h3 class="text-sm font-medium mb-1 text-gray-500">' . esc_html($brands[0]->name) . '</h3>';
            endif;
            ?>
            <h2 class="text-lg font-semibold mb-1"><?php the_title(); ?></h2>
            <p class="text-gray-700 text-md mb-2"><?php echo $product->get_price_html(); ?></p>
  
            <?php
            if ($product->is_type('simple')) {
                echo '<div class="woocommerce">';
                woocommerce_simple_add_to_cart();
                echo '</div>';
            } elseif ($product->is_type('variable')) {
               echo '<div class="woocommerce">';
            woocommerce_variable_add_to_cart();
              echo '</div>';

       
            }
            ?>
          </div>
        </div>
        <?php
      endwhile;
    else :
      echo '<p class="col-span-5 text-center text-gray-500">No products found.</p>';
    endif;
  
    wp_reset_postdata();
    return ob_get_clean();
  }
  
 
  add_action('wp_enqueue_scripts', function () {
    if (is_page() || is_singular()) {
      wp_enqueue_script('wc-add-to-cart-variation');
    }
  });
  
function product_page_template_dropdown($templates) {
    $templates['page-products.php'] = 'Products Page Template';
    return $templates;
}
add_filter('theme_page_templates', 'product_page_template_dropdown');


function load_more_products_ajax_handler() {
    $paged = isset($_POST['page']) ? intval($_POST['page']) : 1;

    $args = array(
        'post_type' => 'product',
        'posts_per_page' => 15,
        'paged' => $paged,
    );

    $loop = new WP_Query($args);

    if ($loop->have_posts()) :
        ob_start();
        while ($loop->have_posts()) : $loop->the_post(); global $product;
            ?>
            <div class="bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col">
                <a href="<?php the_permalink(); ?>">
                    <?php if (has_post_thumbnail()) : ?>
                        <?php the_post_thumbnail('medium', ['class' => 'w-full h-48 object-cover mb-4']); ?>
                    <?php else : ?>
                        <img src="https://via.placeholder.com/300x300" alt="<?php the_title(); ?>" class="w-full h-48 object-cover mb-4">
                    <?php endif; ?>
                </a>

                <?php
                $brands = wp_get_post_terms(get_the_ID(), 'product_brand');
                if (!empty($brands) && !is_wp_error($brands)) {
                    echo '<div class="text-sm text-gray-500 mb-1">' . esc_html($brands[0]->name) . '</div>';
                }
                ?>

                <h2 class="text-md font-semibold mb-2">
                    <a href="<?php the_permalink(); ?>" class="hover:underline"><?php the_title(); ?></a>
                </h2>

                <div class="mt-auto text-lg font-bold text-gray-800">
                    <?php echo $product->get_price_html(); ?>
                </div>
            </div>
            <?php
        endwhile;
        wp_reset_postdata();
        echo ob_get_clean();
    else :
        echo '';
    endif;

    wp_die();
}
add_action('wp_ajax_load_more_products', 'load_more_products_ajax_handler');
add_action('wp_ajax_nopriv_load_more_products', 'load_more_products_ajax_handler');


add_action('wp_ajax_fetch_sorted_products', 'fetch_sorted_products');
add_action('wp_ajax_nopriv_fetch_sorted_products', 'fetch_sorted_products');

function fetch_sorted_products() {
    $sort = isset($_GET['sort']) ? sanitize_text_field($_GET['sort']) : '';
    $page = isset($_GET['page']) ? intval($_GET['page']) : 1;

    // Define the number of products per page
    $posts_per_page = 15;

    // WP_Query arguments
    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => $posts_per_page,
        'paged'          => $page,
    );

    // Sorting logic based on selected option
    switch ($sort) {
        case 'popular':
        case 'best-selling':
            $args['meta_key'] = 'total_sales';
            $args['orderby']  = 'meta_value_num';
            $args['order']    = 'DESC';
            break;
        case 'a-z':
            $args['orderby'] = 'title';
            $args['order']   = 'ASC';
            break;
        case 'z-a':
            $args['orderby'] = 'title';
            $args['order']   = 'DESC';
            break;
        case 'low-high':
            $args['meta_key'] = '_price';
            $args['orderby']  = 'meta_value_num';
            $args['order']    = 'ASC';
            break;
        case 'high-low':
            $args['meta_key'] = '_price';
            $args['orderby']  = 'meta_value_num';
            $args['order']    = 'DESC';
            break;
        case 'old-new':
            $args['orderby'] = 'date';
            $args['order']   = 'ASC';
            break;
        case 'new-old':
            $args['orderby'] = 'date';
            $args['order']   = 'DESC';
            break;
    }

    // Run the query
    $loop = new WP_Query($args);

    ob_start();

    if ($loop->have_posts()) :
        while ($loop->have_posts()) : $loop->the_post();
            global $product;
            ?>
            <div class="bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col">
                <a href="<?php the_permalink(); ?>">
                    <?php /*if (has_post_thumbnail()) {
                        the_post_thumbnail('medium', ['class' => 'w-full h-48 object-cover mb-4']);
                    } else {
                        echo '<img src="https://via.placeholder.com/300x300" class="w-full h-48 object-cover mb-4">';
                    } */?>
                </a>


                <?php
$attachment_ids = $product->get_gallery_image_ids();
$hover_image_id = $attachment_ids[0] ?? null;
?>
<div class="relative group w-full aspect-square overflow-hidden">
  <img 
    src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'medium'); ?>" 
    class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" 
    alt="<?php the_title_attribute(); ?>" 
  />
  <?php if ($hover_image_id): ?>
    <img 
      src="<?php echo wp_get_attachment_image_url($hover_image_id, 'medium'); ?>" 
      class="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
      alt="<?php the_title_attribute(); ?>" 
    />
  <?php endif; ?>
</div>


<?php echo do_shortcode('[yith_wcwl_add_to_wishlist]'); ?>



                <?php
                $brands = wp_get_post_terms(get_the_ID(), 'product_brand');
                if (!empty($brands) && !is_wp_error($brands)) {
                    echo '<div class="text-sm text-gray-500 mb-1">' . esc_html($brands[0]->name) . '</div>';
                }
                ?>

                <h2 class="text-md font-semibold mb-2">
                    <a href="<?php the_permalink(); ?>" class="hover:underline"><?php the_title(); ?></a>
                </h2>

                <div class="mt-auto text-lg font-bold text-gray-800">
                    <?php echo $product->get_price_html(); ?>
                </div>


                <?php
            if ($product->is_type('simple')) {
                echo '<div class="woocommerce">';
                woocommerce_simple_add_to_cart();
                echo '</div>';
            } elseif ($product->is_type('variable')) {
               echo '<div class="woocommerce">';
            woocommerce_variable_add_to_cart();
              echo '</div>';

       
            }
            ?>
            </div>

            </div>
            <?php
        endwhile;
    else :
        echo '';
    endif;

    wp_reset_postdata();

    echo ob_get_clean();
    wp_die(); // End AJAX request properly
}



add_filter( 'template_include', 'load_custom_product_template', 99 );
function load_custom_product_template( $template ) {
    if ( is_singular('product') ) {
        $custom = locate_template( 'woocommerce/single-product.php' );
        if ( $custom ) {
            return $custom;
        }
    }
    return $template;
}


remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );


//add_action( 'woocommerce_after_single_product', 'load_custom_popular_picks_template', 15 );

//function load_custom_popular_picks_template() {
   // get_template_part( 'components/products-popular-picks' );
//}



// Shortcode to display product categories as checkboxes
function product_categories_checkbox_shortcode( $atts ) {
    // Default attributes for the shortcode
    $atts = shortcode_atts( array(
        'include' => '', // Comma-separated category IDs
    ), $atts, 'product_categories_checkbox' );

    // Convert the 'include' attribute into an array
    $include_ids = array_map('intval', explode(',', $atts['include']));

    // Function to fetch and display product categories as checkboxes
    ob_start(); // Start output buffering

    $args = array(
        'taxonomy'   => 'product_cat',
        'hide_empty' => false,
        'include'    => $include_ids, // Only include specified categories by ID
    );

    // Fetch the categories
    $product_categories = get_terms( $args );

    if ( ! empty( $product_categories ) && ! is_wp_error( $product_categories ) ) {
     
        foreach ( $product_categories as $category ) {
            $cat_id = esc_attr( $category->term_id );
            $cat_name = esc_html( $category->name );
            echo "<label><input type='checkbox' name='product_cat[]' value='{$cat_id}'> {$cat_name}</label><br>";
        }
    
      
    } else {
        echo '<p>No categories available.</p>';
    }

    return ob_get_clean(); // Return the content and stop buffering
}

// Register the shortcode
add_shortcode( 'product_categories_checkbox', 'product_categories_checkbox_shortcode' );



function age_subcategories_checkboxes_shortcode() {
    // Get the parent category term object
    $parent = get_term_by('name', 'Age', 'product_cat'); // Or use slug: 'age'

    if ( ! $parent || is_wp_error($parent) ) {
        return '<p>Parent category not found.</p>';
    }

    // Fetch child terms
    $subcategories = get_terms(array(
        'taxonomy'   => 'product_cat',
        'parent'     => $parent->term_id,
        'hide_empty' => false,
        'orderby'    => 'name',
        'order'      => 'ASC',
    ));

    if (empty($subcategories)) {
        return '<p>No subcategories found.</p>';
    }

    // Build checkbox list with Tailwind styling
    $output = '<div class="space-y-2">';
    foreach ($subcategories as $subcategory) {
        $output .= '<label class="flex items-center space-x-2 text-gray-700">
            <input type="checkbox" name="age_product_cat[]" value="' . esc_attr($subcategory->term_id) . '" class="accent-blue-500">
            <span>' . esc_html($subcategory->name) . '</span>
        </label>';
    }
    $output .= '</div>';

    return $output;
}
add_shortcode('age_category_checkboxes', 'age_subcategories_checkboxes_shortcode');



function woocommerce_brand_checkboxes_shortcode() {
    $brands = get_terms(array(
        'taxonomy'   => 'product_brand', // Change this if your brand taxonomy differs
        'hide_empty' => false,
        'orderby'    => 'name',
        'order'      => 'ASC',
    ));

    if (empty($brands) || is_wp_error($brands)) {
        return '<p>No brands found.</p>';
    }

    // Output checkboxes with Tailwind styling
    $output = '<div class="space-y-2">';
    foreach ($brands as $brand) {
        $output .= '<label class="flex items-center space-x-2 text-gray-700">
            <input type="checkbox" name="product_brand[]" value="' . esc_attr($brand->term_id) . '" class="accent-blue-500">
            <span>' . esc_html($brand->name) . '</span>
        </label>';
    }
    $output .= '</div>';

    return $output;
}
add_shortcode('brand_checkboxes', 'woocommerce_brand_checkboxes_shortcode');





















add_action('wp_ajax_load_filter_drawer_content', 'load_filter_drawer_content');
add_action('wp_ajax_nopriv_load_filter_drawer_content', 'load_filter_drawer_content');

function load_filter_drawer_content() {
    // Output filter content
    get_template_part('products/filter-drawer');
    wp_die(); // always call wp_die() at the end of AJAX handlers
}
add_action('wp_footer', function () {
    if (!is_admin()) {
        echo '<script>var ajaxurl = "' . admin_url('admin-ajax.php') . '";</script>';
    }
});

add_action('wp_ajax_filter_products', 'filter_products_callback');
add_action('wp_ajax_nopriv_filter_products', 'filter_products_callback');

function filter_products_callback() {

    // Get filter parameters
    $categories = isset($_POST['categories']) ? $_POST['categories'] : [];
    $brands = isset($_POST['brands']) ? $_POST['brands'] : [];
    $age = isset($_POST['age']) ? $_POST['age'] : [];

    $paged = isset($_POST['page']) ? intval($_POST['page']) : 1;

    // Base query
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => 15,
        'paged' => $paged,
    );

    // Tax query array
    $tax_query = [];

    if (!empty($categories)) {
        $tax_query[] = array(
            'taxonomy' => 'product_cat',
            'field'    => 'id',
            'terms'    => $categories,
            'operator' => 'IN',
        );
    }

    if (!empty($brands)) {
        $tax_query[] = array(
            'taxonomy' => 'product_brand',
            'field'    => 'id',
            'terms'    => $brands,
            'operator' => 'IN',
        );
    }

    if (!empty($age)) {
        $tax_query[] = array(
            'taxonomy' => 'product_cat', // Replace if you have a specific age taxonomy
            'field'    => 'id',
            'terms'    => $age,
            'operator' => 'IN',
        );
    }

    if (!empty($tax_query)) {
        $args['tax_query'] = $tax_query;
    }

    $query = new WP_Query($args);

    ob_start();

    if ($query->have_posts()) :
        while ($query->have_posts()) : $query->the_post();
            global $product;
            ?>
            <div class="product-card bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col">
                <a href="<?php the_permalink(); ?>">
                    <?php /* if (has_post_thumbnail()) : ?>
                        <?php the_post_thumbnail('medium', ['class' => 'w-full h-48 object-cover mb-4']); ?>
                    <?php else : ?>
                        <img src="https://via.placeholder.com/300x300" alt="<?php the_title(); ?>" class="w-full h-48 object-cover mb-4">
                    <?php endif; */?>
                </a>

                <?php
$attachment_ids = $product->get_gallery_image_ids();
$hover_image_id = $attachment_ids[0] ?? null;
?>
<div class="relative group w-full aspect-square overflow-hidden">
  <img 
    src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'medium'); ?>" 
    class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" 
    alt="<?php the_title_attribute(); ?>" 
  />
  <?php if ($hover_image_id): ?>
    <img 
      src="<?php echo wp_get_attachment_image_url($hover_image_id, 'medium'); ?>" 
      class="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
      alt="<?php the_title_attribute(); ?>" 
    />
  <?php endif; ?>
</div><?php echo do_shortcode('[yith_wcwl_add_to_wishlist]'); ?>
                <?php
                $brands = wp_get_post_terms(get_the_ID(), 'product_brand');
                if (!empty($brands) && !is_wp_error($brands)) {
                    echo '<div class="text-sm text-gray-500 mb-1">' . esc_html($brands[0]->name) . '</div>';
                }
                ?>

                <h2 class="text-md font-semibold mb-2">
                    <a href="<?php the_permalink(); ?>" class="hover:underline"><?php the_title(); ?></a>
                </h2>

                <div class="mt-auto text-lg font-bold text-gray-800">
                    <?php echo $product->get_price_html(); ?>
                </div>

                <?php
            if ($product->is_type('simple')) {
                echo '<div class="woocommerce">';
                woocommerce_simple_add_to_cart();
                echo '</div>';
            } elseif ($product->is_type('variable')) {
               echo '<div class="woocommerce">';
            woocommerce_variable_add_to_cart();
              echo '</div>';

       
            }
            ?>

            </div>
            <?php
        endwhile;

        // Add Load More button if more pages exist
        if ($query->max_num_pages > $paged) {
            ?>
            <div class="text-center mt-6">
                <button 
                    class="load-more-btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    data-next-page="<?php echo esc_attr($paged + 1); ?>">
                    Load More
                </button>
            </div>
            <?php
        }

    endif;

    wp_reset_postdata();

    echo ob_get_clean();
    wp_die();
}



add_filter( 'woocommerce_product_tabs', 'remove_additional_information_tab', 98 );
function remove_additional_information_tab( $tabs ) {
    unset( $tabs['additional_information'] );
    return $tabs;
}
add_action( 'woocommerce_single_product_summary', 'show_woocommerce_brand_above_title', 4 );
function show_woocommerce_brand_above_title() {
    $terms = get_the_terms( get_the_ID(), 'product_brand' );

    if ( $terms && ! is_wp_error( $terms ) ) {
        $brand = $terms[0]; // First assigned brand
        echo '<div class="product-brand" style="font-weight: bold; margin-bottom: 10px;">';
        echo '<a href="' . esc_url( get_term_link( $brand ) ) . '">' . esc_html( $brand->name ) . '</a>';
        echo '</div>';
    }
}

add_action( 'woocommerce_single_product_summary', 'add_duties_notice_under_price', 11 );
function add_duties_notice_under_price() {
    echo '
        <div class="mt-2">
            <p class="text-sm text-gray-600 italic">(Duties and Tax included)</p>
            <hr class="mt-2 border-t border-gray-300" />
        </div>
    ';
}

remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );


remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );

add_action('woocommerce_before_add_to_cart_button', 'custom_separator_before_cart', 15);
function custom_separator_before_cart() {
    echo '<hr class="my-4 border-t border-gray-300" />';
}


function add_divider_after_buy_now_button() {
    if (is_product()) {
        echo '<div style="margin-top: 20px; border-top: 1px solid #ddd; padding-top: 20px;"></div>';
    }
}
add_action('woocommerce_after_single_product', 'add_divider_after_buy_now_button', 15);



function mytheme_add_woocommerce_support() {
    add_theme_support('woocommerce');
}
add_action('after_setup_theme', 'mytheme_add_woocommerce_support');


