<?php

// Load Scripts
function mytheme_enqueue_scripts() {
    // Enqueue jQuery (optional if your theme already loads it)
    wp_enqueue_script('jquery');

    // Enqueue your pdt-loadmore.js
    wp_enqueue_script(
        'pdt-loadmore', 
        get_template_directory_uri() . '/assets/js/pdt-loadmore.js', 
        array('jquery'), 
        null, 
        true // Load in footer
    );

    // Localize script to pass ajaxurl and security nonce
    wp_localize_script('pdt-loadmore', 'loadmore_params', array(
        'ajaxurl' => admin_url('admin-ajax.php')
    ));
}
add_action('wp_enqueue_scripts', 'mytheme_enqueue_scripts');



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
      <div class="bg-white shadow rounded-lg overflow-hidden text-center">
        <a href="<?php the_permalink(); ?>">
          <?php the_post_thumbnail('medium', ['class' => 'w-full  object-cover']); ?>
          <div class="p-4">
        <?php
	
	$brands = wp_get_post_terms(get_the_ID(), 'product_brand');

	if (!is_wp_error($brands) && !empty($brands)) :
    echo '<h3 class="text-sm font-medium mb-1 text-gray-500">' . esc_html($brands[0]->name) . '</h3>';
endif; ?>
            <h2 class="text-lg font-semibold mb-1"><?php the_title(); ?></h2>
            <p class="text-gray-700 text-md"><?php echo $product->get_price_html(); ?></p>
          </div>
        </a>
      </div>
      <?php
    endwhile;
  else :
    echo '<p class="col-span-5 text-center text-gray-500">No products found.</p>';
  endif;

  wp_reset_postdata();
  return ob_get_clean();
}


function product_page_template_dropdown($templates) {
    $templates['page-products.php'] = 'Products Page Template';
    return $templates;
}
add_filter('theme_page_templates', 'product_page_template_dropdown');


// Handle load more products
add_action('wp_ajax_load_more_products', 'load_more_products_callback');
add_action('wp_ajax_nopriv_load_more_products', 'load_more_products_callback');

function load_more_products_callback() {
    $paged = isset($_GET['page']) ? intval($_GET['page']) : 1;

    $args = array(
        'post_type' => 'product',
        'posts_per_page' => 15,
        'paged' => $paged,
    );

    $loop = new WP_Query($args);

    if ($loop->have_posts()) :
        while ($loop->have_posts()) : $loop->the_post(); global $product; ?>
            <div class="bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col">
                <a href="<?php the_permalink(); ?>">
                    <?php if (has_post_thumbnail()) : ?>
                        <?php the_post_thumbnail('medium', ['class' => 'w-full h-48 object-cover mb-4']); ?>
                    <?php else : ?>
                        <img src="https://via.placeholder.com/300x300" alt="<?php the_title(); ?>" class="w-full h-48 object-cover mb-4">
                    <?php endif; ?>
                </a>

       <?php     $brands = wp_get_post_terms(get_the_ID(), 'product_brand');

if (!empty($brands) && !is_wp_error($brands)) {
    echo '<div class="text-sm text-gray-500 mb-1">' . esc_html($brands[0]->name) . '</div>';
} ?>

                <h2 class="text-md font-semibold mb-2">
                    <a href="<?php the_permalink(); ?>" class="hover:underline">
                        <?php the_title(); ?>
                    </a>
                </h2>

                <div class="mt-auto text-lg font-bold text-gray-800">
                    <?php echo $product->get_price_html(); ?>
                </div>
            </div>
        <?php endwhile;
    endif;

    wp_reset_postdata();
    die();
}