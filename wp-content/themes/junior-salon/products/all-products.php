<!-- Sort By Button -->


<!-- Trigger Button -->
<button onclick="openDrawerfilter()" class="flex items-center bg-transparent group m-0 text-lg font-semibold px-4 py-2 hover:text-blue-600">
    FILTER & ORDER
</button>

<!-- Drawer Container -->
<div id="drawer-container-filter" class="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-6 overflow-y-auto hidden transition-transform duration-300 ease-in-out">
    <!-- AJAX content will be injected here -->
</div>

<!-- Optional Overlay -->
<div id="drawer-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden" onclick="closeDrawerfilter()"></div>


<script>
function openDrawerfilter() {
    // Show overlay and drawer
    document.getElementById('drawer-overlay').classList.remove('hidden');
    document.getElementById('drawer-container-filter').classList.remove('hidden');

    // Fetch drawer content
    fetch(ajaxurl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'action=load_filter_drawer_content'
    })
    .then(res => res.text())
    .then(data => {
        document.getElementById('drawer-container-filter').innerHTML = data;
    });
}

function closeDrawerfilter() {
    document.getElementById('drawer-overlay').classList.add('hidden');
    document.getElementById('drawer-container-filter').classList.add('hidden');
}
</script>



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
<?php  

//echo do_shortcode('[yith_wcan_filters slug="draft-preset"]'); ?>


<h2 class="text-3xl font-bold mb-6">NEW FOR KIDS</h2>

<?php


// Initial query for WooCommerce products with pagination
$paged = 1; // Set current page
$args = array(
    'post_type' => 'product',
    'posts_per_page' => 15,
    'paged' => $paged,
);

$loop = new WP_Query($args);

if ($loop->have_posts()) :
?>
    <div id="product-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <?php while ($loop->have_posts()) : $loop->the_post(); global $product; ?>
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
        <?php endwhile; ?>
    </div>

    <?php if ($loop->max_num_pages > $paged) : ?>
        <!-- Load More Button -->
        <div class="flex justify-center mt-8">
            <button id="load-more" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                data-page="<?php echo esc_attr($paged + 1); ?>">
                Load More
            </button>
        </div>
    <?php endif; ?>

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
   // alert("dd");
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

jQuery(document).ready(function ($) {

let currentPage = 1;

// Store filters globally so we can reuse them on "Load More"
let selectedCategories = [];
let selectedBrands = [];
let selectedAge = [];

// Function to load products
function loadProducts(page = 1, append = false) {
    $.ajax({
        url: ajaxurl,
        method: 'POST',
        data: {
            action: 'filter_products',
            categories: selectedCategories,
            brands: selectedBrands,
            age: selectedAge,
            page: page,
        },
        beforeSend: function () {
            $('.load-more-btn').remove(); // Remove old button
            if (!append) {
                $('#product-grid').html('<p>Loading...</p>');
            }
        },
        success: function (response) {
            if (append) {
                $('#product-grid').append(response);
            } else {
                $('#product-grid').html(response);
            }
            currentPage = page;
        }
    });
}

// Filter button click
$(document).on('click', '#filter-button', function (e) {
    e.preventDefault();

    selectedCategories = $('input[name="product_cat[]"]:checked').map(function () {
        return $(this).val();
    }).get();

    selectedBrands = $('input[name="product_brand[]"]:checked').map(function () {
        return $(this).val();
    }).get();

    selectedAge = $('input[name="age_product_cat[]"]:checked').map(function () {
        return $(this).val();
    }).get();

 //   alert("Applying filters...\n" +
      //  "Categories: " + selectedCategories.join(', ') + "\n" +
      //  "Brands: " + selectedBrands.join(', ') + "\n" +
      //  "Age: " + selectedAge.join(', '));

    $('#drawer-overlay').trigger('click');
    $('#load-more').hide();
    currentPage = 1;
    loadProducts(currentPage, false);

    closeDrawerFilter();
});

// Load More button click
$(document).on('click', '.load-more-btn', function () {
    const nextPage = parseInt($(this).data('next-page'));
    loadProducts(nextPage, true);
});
});


</script>



