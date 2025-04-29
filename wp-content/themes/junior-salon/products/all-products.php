



<!--<button onclick="openDrawer('Sort By', '<?php echo esc_url( home_url('/wp-content/themes/junior-salon/products/sort-drawer.php') ); ?>')" class="flex items-center bg-transparent group m-0"> -->
<!--       <span class="text-lg">Sort By</span>-->
<!--</button>-->

<!--<div id="drawer" class="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 hidden">-->
<!--    <div class="absolute top-0 right-0 bg-white w-3/4 md:w-1/2 h-full p-6 transform transition-transform duration-300 ease-in-out" style="transform: translateX(100%);">-->
<!--        <button id="close-drawer" class="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-700">&times;</button>-->
<!--        <div id="drawer-content">-->
       
<!--        </div>-->
<!--    </div>-->
<!--</div>-->



<!-- Sort By Button -->
<button onclick="openDrawer('Sort By', '<?php echo esc_url( get_template_directory_uri() . '/products/sort-drawer.php' ); ?>')" class="flex items-center bg-transparent group m-0"> 
   <span class="text-lg">Sort By</span>
</button>

<!-- Filter Button -->
<button onclick="openDrawer('Filter By', '<?php echo esc_url( get_template_directory_uri() . '/products/filter-drawer.php' ); ?>')" class="flex items-center bg-transparent group m-0"> 
   <span class="text-lg">Filter</span>
</button>





<h2 class="text-3xl font-bold mb-6">NEW FOR KIDS</h2>

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

         <?php      $brands = wp_get_post_terms(get_the_ID(), 'product_brand');

if (!empty($brands) && !is_wp_error($brands)) {
    echo '<div class="text-sm text-gray-500 mb-1">' . esc_html($brands[0]->name) . '</div>';
}
        ?>            
                    
                    
               

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