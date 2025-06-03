<!-- Loader -->
<div id="ajax-loader" class="fixed top-0 left-0 w-full h-full bg-white bg-opacity-75 flex items-center justify-center z-50 hidden">
    <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
</div>

<!-- FILTER & ORDER Button -->
<button onclick="openDrawerfilter()" class="flex items-center bg-transparent group m-0 text-lg font-semibold px-4 py-2 hover:text-black">
    FILTER & ORDER
</button>

<!-- Drawer Filter Container -->
<div id="drawer-container-filter" class="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-6 overflow-y-auto hidden transition-transform duration-300 ease-in-out">
</div>
<div id="drawer-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden" onclick="closeDrawerfilter()"></div>

<!-- SORT BY Button -->
<button onclick="openDrawer('Sort By', '<?php echo esc_url(get_theme_file_uri('/products/sort-drawer.php')); ?>')" class="flex items-center bg-transparent group m-0">
    <span class="text-lg">Sort By</span>
</button>

<!-- Sort Drawer Container -->
<div id="drawer" class="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 hidden">
    <div class="absolute top-0 right-0 bg-white w-3/4 md:w-1/2 h-full p-6 transform transition-transform duration-300 ease-in-out translate-x-full" id="drawer-panel">
        <button id="close-drawer" class="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-700">×</button>
        <div id="drawer-content"></div>
    </div>
</div>
<h2 class="text-3xl font-bold mb-6">SALE</h2>
<?php
$paged = get_query_var('paged') ? get_query_var('paged') : 1;

$args = array(
    'post_type' => 'product',
    'posts_per_page' => 15,
    'paged' => $paged,
    'orderby' => 'title',
    'order' => 'ASC',
    'meta_query' => array(
        array(
            'key'     => '_sale_price',  // Check for sale price
            'value'   => 0,
            'compare' => '>',
            'type'    => 'NUMERIC',
        ),
    ),
);

$query = new WP_Query($args);
?>

<section class="pt-[30px] px-[15px]">


  <div class="flex items-center justify-between border-b border-yellow-300 pb-2 mb-6">
    <h2 class="text-base sm:text-lg md:text-xl font-semibold uppercase tracking-wide text-gray-800">
      All Products
    </h2>
    <span class="text-sm text-gray-500"><?php echo $query->found_posts; ?> Products</span>
  </div>

  <div id="product-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
    <?php
    if ($query->have_posts()) :
      while ($query->have_posts()) : $query->the_post();
        get_template_part('components/products/product-card');
      endwhile;
    else :
      echo '<p class="text-center text-sm text-gray-500 col-span-full">No products found.</p>';
    endif;
    wp_reset_postdata();
    ?>
  </div>

  <?php if ($query->max_num_pages > $paged) : ?>
    <div class="flex justify-center mt-8">
      <button id="load-more" class="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition" data-page="<?php echo esc_attr($paged + 1); ?>">
        Load More
      </button>
    </div>
  <?php endif; ?>
</section>


<!-- Add AJAX URL -->
<script>
    var ajaxurl = '<?php echo esc_js(admin_url('admin-ajax.php')); ?>';
</script>

<!-- Your JavaScript -->
<script>jQuery(document).ready(function($) {
    let page = 1;
    let currentSort = '';
    let pagetype = 'sale';
    // Open filter drawer
    function openDrawerfilter() {
        $('#drawer-overlay').removeClass('hidden');
        $('#drawer-container-filter').removeClass('hidden');
        $('#ajax-loader').removeClass('hidden');
        $.ajax({
            url: ajaxurl,
            method: 'POST',
            data: {
                action: 'load_filter_drawer_content'
            },
            success: function(response) {
                $('#drawer-container-filter').html(response);
                $('#ajax-loader').addClass('hidden');
            },
            error: function(xhr, status, error) {
                console.error('Error loading filter drawer:', xhr.responseText);
                $('#drawer-container-filter').html('<p class="text-red-500">Failed to load filters.</p>');
                $('#ajax-loader').addClass('hidden');
            }
        });
    }

    // Close filter drawer
    function closeDrawerfilter() {
        $('#drawer-overlay').addClass('hidden');
        $('#drawer-container-filter').addClass('hidden');
    }

    // Collect filter values
    function getFilterData() {
        return {
            action: 'filter_products',
            categories: $('input[name="product_cat[]"]:checked').map(function() { return $(this).val(); }).get(),
            brands: $('input[name="product_brand[]"]:checked').map(function() { return $(this).val(); }).get(),
            age: $('input[name="age_product_cat[]"]:checked').map(function() { return $(this).val(); }).get(),
            sizes: $('input[name="pa_size[]"]:checked').map(function() { return $(this).val(); }).get(),
            colors: $('input[name="pa_color[]"]:checked').map(function() { return $(this).val(); }).get(),
            min_price: $('input[name="min_price"]').val(),
            max_price: $('input[name="max_price"]').val(),
            page: page,
 pagetype: pagetype
        };
    }

    // Load products with filter
    function loadProducts(pageNum = 1, append = false, filterData = {}) {
        $('#ajax-loader').removeClass('hidden');

        filterData.page = pageNum; // update page number in case it changes

        $.ajax({
            url: ajaxurl,
            method: 'POST',
            data: filterData,
            success: function(response) {
                if (append) {
                    const tempDiv = $('<div>').html(response);
                    $('#product-grid').append(tempDiv.hide().fadeIn(400));
                } else {
                    $('#product-grid').html(response);
                }
                $('#ajax-loader').addClass('hidden');
            },
            error: function(xhr, status, error) {
                console.error('Error loading products:', xhr.responseText);
                $('#product-grid').html('<p class="text-red-500">Failed to load products.</p>');
                $('#ajax-loader').addClass('hidden');
            }
        });
    }

    // Handle filter button click
    $(document).on('click', '#filter-button', function(e) {
        e.preventDefault();
        const filters = getFilterData();
        console.log('Applied Filters:', filters);

        $('#drawer-overlay').trigger('click');
        $('#load-more').hide();
        page = 1;
        loadProducts(page, false, filters);
        closeDrawerfilter();
    });

    // Handle load more button
    $(document).on('click', '#load-more', function() {
        page++;
        const filters = getFilterData();
        loadProducts(page, true, filters);
    });

    // Handle sort change
    $('#drawer').on('change', 'input[name="sort"]', function() {
        currentSort = $(this).val();
        page = 1;
        fetchSortedProducts(currentSort, page);
        closeDrawer();
    });

    function fetchSortedProducts(sort, page) {
        $('#ajax-loader').removeClass('hidden');
        $.ajax({
            url: ajaxurl,
            method: 'GET',
            data: {
                action: 'fetch_sorted_products',
                sort: sort,
                page: page
            },
            success: function(response) {
                if (page === 1) {
                    $('#product-grid').html(response);
                } else {
                    const tempDiv = $('<div>').html(response);
                    $('#product-grid').append(tempDiv.hide().fadeIn(400));
                }
                $('#ajax-loader').addClass('hidden');
            },
            error: function(xhr, status, error) {
                console.error('Error fetching sorted products:', xhr.responseText);
                $('#ajax-loader').addClass('hidden');
            }
        });
    }

    // Global drawer functions
    window.openDrawerfilter = openDrawerfilter;
    window.closeDrawerfilter = closeDrawerfilter;

    window.openDrawer = function(title, url) {
        const drawer = document.getElementById('drawer');
        const drawerPanel = document.getElementById('drawer-panel');
        const drawerContent = document.getElementById('drawer-content');
        drawer.classList.remove('hidden');
        setTimeout(() => drawerPanel.classList.remove('translate-x-full'), 10);

        $('#ajax-loader').removeClass('hidden');
        fetch(url)
            .then(response => response.text())
            .then(html => {
                drawerContent.innerHTML = html;
                $('#ajax-loader').addClass('hidden');
            })
            .catch(error => {
                console.error('Error loading sort drawer:', error);
                drawerContent.innerHTML = '<p class="text-red-500">Failed to load content.</p>';
                $('#ajax-loader').addClass('hidden');
            });
    };

    window.closeDrawer = function() {
        const drawer = document.getElementById('drawer');
        const drawerPanel = document.getElementById('drawer-panel');
        drawerPanel.classList.add('translate-x-full');
        setTimeout(() => drawer.classList.add('hidden'), 300);
    };

    document.getElementById('close-drawer').addEventListener('click', window.closeDrawer);
    document.getElementById('drawer').addEventListener('click', function(e) {
        if (e.target === this) window.closeDrawer();
    });
});

</script>