<?php
// Query for WooCommerce products
$args = array(
    'post_type' => 'product',
    'posts_per_page' => 15, // Show 15 products initially
);

$loop = new WP_Query($args);

if ($loop->have_posts()) :
?>
    <div id="product-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <?php while ($loop->have_posts()) : $loop->the_post(); global $product; ?>
            <div class="bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col">
                <!-- Product Image -->
                <a href="<?php the_permalink(); ?>">
                    <?php if (has_post_thumbnail()) : ?>
                        <?php the_post_thumbnail('medium', ['class' => 'w-full h-48 object-cover mb-4']); ?>
                    <?php else : ?>
                        <img src="https://via.placeholder.com/300x300" alt="<?php the_title(); ?>" class="w-full h-48 object-cover mb-4">
                    <?php endif; ?>
                </a>

                <!-- Brand Name (Assuming brand is a custom ACF field called 'brand') -->
                <?php if ($brand = get_field('brand')) : ?>
                    <div class="text-sm text-gray-500 mb-1"><?php echo esc_html($brand); ?></div>
                <?php endif; ?>

                <!-- Product Name -->
                <h2 class="text-md font-semibold mb-2">
                    <a href="<?php the_permalink(); ?>" class="hover:underline">
                        <?php the_title(); ?>
                    </a>
                </h2>

                <!-- Price -->
                <div class="mt-auto text-lg font-bold text-gray-800">
                    <?php echo $product->get_price_html(); ?>
                </div>
            </div>
        <?php endwhile; ?>
    </div>

    <!-- Load More Button -->
    <div class="flex justify-center mt-8">
        <button id="load-more" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Load More
        </button>
    </div>

<?php
else :
    echo '<p>No products found.</p>';
endif;

wp_reset_postdata();
?>