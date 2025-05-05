
        <h2 class="text-3xl font-bold mb-6">Popular Picks</h2>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
    <?php
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => 10,
        'tax_query' => array(
            array(
                'taxonomy' => 'product_cat',
                'field'    => 'slug',
                'terms'    => 'popular-picks',
            ),
        ),
    );

    $query = new WP_Query($args);

    if ($query->have_posts()) :
        while ($query->have_posts()) : $query->the_post();
            global $product;

            // Correct taxonomy used here: 'product_brand'
            $brand_terms = get_the_term_list(get_the_ID(), 'product_brand', '', ', ');
            $brand = (!is_wp_error($brand_terms) && $brand_terms) ? $brand_terms : 'No brand';
            ?>
            <div class="product-card bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                <a href="<?php the_permalink(); ?>" class="block">


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
                    <?php //the_post_thumbnail('medium', ['class' => 'w-full h-48 object-cover mb-3']); ?>
                    <p class="text-sm text-gray-500"><?php echo $brand; ?></p>
                    <h3 class="text-base font-semibold text-gray-800"><?php the_title(); ?></h3>
                    <p class="text-lg text-gray-700 mt-1"><?php echo wc_price($product->get_price()); ?></p>
                </a>

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
    endif;

    wp_reset_postdata();
    ?>
</div>