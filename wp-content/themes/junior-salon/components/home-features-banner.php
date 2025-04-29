
        
     <?php   // Get the 'collection_banner' field from the 'Home' page
 $home_page_id = get_option('page_on_front'); // This retrieves the ID of the page set as the homepage
 $feature_banner  = get_field('feature_banner', $home_page_id); // Get the field from the Home page


     $feature_banner_url = $feature_banner['url']; // Get the URL from the array
  ?>
   <section class="relative bg-cover bg-center py-16 mt-16" style="background-image: url('<?php echo esc_url($feature_banner_url); ?>');">
   
   
   
<?php
$args = [
    'post_type' => 'home-features-banner',
    'posts_per_page' => 1,
];
$banner_query = new WP_Query($args);

if ($banner_query->have_posts()) :
    while ($banner_query->have_posts()) : $banner_query->the_post();
    
   
     ?>
        

        
        
            <div class="absolute inset-0 bg-opacity-50"></div>
            <div class="relative z-10 max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">
                
                <!-- Left: Featured Image -->
                <div>
                    <?php if (has_post_thumbnail()) : ?>
                    <?php the_post_thumbnail('medium', [
    'class' => 'w-full max-w-md h-auto rounded-xl shadow-md object-cover',
]); ?>

                    <?php endif; ?>
                </div>

                <!-- Right: Title + Content -->
                <div>
                    <h2 class="text-3xl font-bold mb-4"><?php the_title(); ?></h2>
                    <div class="text-lg leading-relaxed">
                        <?php the_content(); ?>
                    </div>
                </div>
            </div>
      
        <?php
    endwhile;
endif;
wp_reset_postdata();
?>   </section>