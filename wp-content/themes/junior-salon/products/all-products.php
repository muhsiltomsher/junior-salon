<!-- Sort By Button -->
<button onclick="openDrawer('Sort By', '<?php echo esc_url( home_url('/wp-content/themes/junior-salon/products/sort-drawer.php') ); ?>')" 
        class="flex items-center bg-transparent group m-0">
    <span class="text-lg">Sort By</span>
</button>

<!-- Drawer Container -->
<div id="drawer" class="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 hidden">
    <div class="absolute top-0 right-0 bg-white w-3/4 md:w-1/2 h-full p-6 transform transition-transform duration-300 ease-in-out translate-x-full" id="drawer-panel">
        <!-- Close Button -->
        <button id="close-drawer" class="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-700">&times;</button>
        
        <!-- Dynamic Content -->
        <div id="drawer-content">
            <!-- Loaded via JS -->
        </div>
    </div>
</div>

<!-- JavaScript -->
<script>
function openDrawer(title, url) {
    const drawer = document.getElementById('drawer');
    const drawerPanel = document.getElementById('drawer-panel');
    const drawerContent = document.getElementById('drawer-content');

    // Show overlay and drawer
    drawer.classList.remove('hidden');
    setTimeout(() => drawerPanel.classList.remove('translate-x-full'), 10);

    // Load content
    fetch(url)
        .then(response => response.text())
        .then(html => {
            drawerContent.innerHTML = html;
        })
        .catch(err => {
            drawerContent.innerHTML = '<p class="text-red-500">Failed to load content.</p>';
        });
}

// Close drawer handler
document.getElementById('close-drawer').addEventListener('click', closeDrawer);
document.getElementById('drawer').addEventListener('click', function(e) {
    if (e.target === this) closeDrawer();
});

function closeDrawer() {
    const drawer = document.getElementById('drawer');
    const drawerPanel = document.getElementById('drawer-panel');

    drawerPanel.classList.add('translate-x-full');
    setTimeout(() => drawer.classList.add('hidden'), 300); // Match transition duration
}
</script>


<h2 class="text-3xl font-bold mb-6">NEW FOR KIDS</h2>

<?php
// Initial query for WooCommerce products with pagination
$args = array(
    'post_type' => 'product',
    'posts_per_page' => 15, // Show 15 products initially
    'paged' => 1, // Start with page 1
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

                <!-- Product Brand -->
                <?php
                $brands = wp_get_post_terms(get_the_ID(), 'product_brand');
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
        <button id="load-more" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" data-page="1">
            Load More
        </button>
    </div>

<?php
else :
    echo '<p>No products found.</p>';
endif;

wp_reset_postdata();
?>




<script>
jQuery(document).ready(function($) {
    let page = 1; // Start from page 1 for loading products
    let currentSort = ''; // Default empty sorting option

    // Event listener for sorting
    $('#drawer').on('change', 'input[name="sort"]', function() {
        currentSort = $(this).val(); // Get the selected sort value
        page = 1; // Reset page number on sort change

        // Alert the selected sort option (for debugging purposes)
      //  alert('Selected sort option: ' + currentSort);

        // Fetch sorted products
        fetchSortedProducts(currentSort, page);

        // Close the drawer after selection (optional)
        closeDrawer();
    });

    // Load more functionality
    $('#load-more').on('click', function() {
        page++; // Increment the page number
        fetchSortedProducts(currentSort, page); // Fetch products for the next page
    });

    // Function to fetch sorted products
    function fetchSortedProducts(sort, page) {
        const ajaxUrl = '<?php echo admin_url("admin-ajax.php"); ?>';

        // Make the AJAX request
        $.ajax({
            url: ajaxUrl,
            method: 'GET',
            data: {
                action: 'fetch_sorted_products',
                sort: sort,
                page: page
            },
            success: function(response) {
                // If page is 1, replace the content, else append the new products
                if (page === 1) {
                    $('#product-grid').html(response); // Replace products if it's the first page
                } else {
                    $('#product-grid').append(response); // Append products for subsequent pages
                }

  // Check if there are more pages to load
  if (page >= data.max_pages) {
                // Hide the "Load More" button if all products have been loaded
                $('#load-more').hide();
            }

            },
            error: function(err) {
                console.error('Error fetching products:', err);
            }
        });
    }
});
</script>
