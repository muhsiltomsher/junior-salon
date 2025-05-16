<?php
/**
 * Template to show all products under a category with filter and sort drawers
 */

defined('ABSPATH') || exit;

$term = get_queried_object();
$paged = 1;
$args = [
    'post_type'      => 'product',
    'posts_per_page' => 15,
    'paged'          => $paged,
    'tax_query'      => [
        [
            'taxonomy' => 'product_cat',
            'field'    => 'term_id',
            'terms'    => $term->term_id,
        ],
    ],
];

$loop = new WP_Query($args);
?>

<!-- Loader -->
<div id="ajax-loader" class="fixed top-0 left-0 w-full h-full bg-white bg-opacity-75 flex items-center justify-center z-50 hidden">
  <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
</div>

<!-- FILTER & ORDER Button -->
<button onclick="openDrawerfilter()" class="flex items-center bg-transparent group m-0 text-lg font-semibold px-4 py-2 hover:text-black">
  FILTER & ORDER
</button>

<!-- Drawer Filter Container -->
<div id="drawer-container-filter" class="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-6 overflow-y-auto hidden transition-transform duration-300 ease-in-out"></div>
<div id="drawer-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden" onclick="closeDrawerfilter()"></div>

<!-- SORT BY Button -->
<button onclick="openDrawer('Sort By', '<?php echo esc_url(home_url('/wp-content/themes/junior-salon/products/sort-drawer.php')); ?>')" class="flex items-center bg-transparent group m-0">
  <span class="text-lg">Sort By</span>
</button>

<!-- Sort Drawer Container -->
<div id="drawer" class="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 hidden">
  <div class="absolute top-0 right-0 bg-white w-3/4 md:w-1/2 h-full p-6 transform transition-transform duration-300 ease-in-out translate-x-full" id="drawer-panel">
    <button id="close-drawer" class="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-700">&times;</button>
    <div id="drawer-content"></div>
  </div>
</div>

<h2 class="text-3xl font-bold mb-6"><?php single_term_title(); ?></h2>

<?php if ($loop->have_posts()) : ?>
  <div id="product-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
    <?php while ($loop->have_posts()) : $loop->the_post();
      global $product;
      setup_postdata($post);
      wc_setup_product_data($post);
      get_template_part('components/products/product-card');
    endwhile; ?>
  </div>

  <?php if ($loop->max_num_pages > $paged) : ?>
    <div class="flex justify-center mt-8">
      <button id="load-more" class="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition" data-page="<?php echo esc_attr($paged + 1); ?>">
        Load More
      </button>
    </div>
  <?php endif; ?>
<?php else : ?>
  <p>No products found.</p>
<?php endif; ?>

<?php wp_reset_postdata(); ?>

<script>
  const currentTermId = <?php echo get_queried_object_id(); ?>;
</script>
<script src="<?php echo get_template_directory_uri(); ?>/js/category-products.js"></script>
