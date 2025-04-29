<?php
$exclude_uncategorized = get_option('default_product_cat');
$parent_banner_cat = get_term_by('slug', 'home-banner-category', 'product_cat');

$banner_categories = [];

if ($parent_banner_cat && !is_wp_error($parent_banner_cat)) {
    $banner_categories = get_terms([
        'taxonomy'   => 'product_cat',
        'hide_empty' => false,
        'parent'     => $parent_banner_cat->term_id,
        'exclude'    => [$exclude_uncategorized],
        'number'     => 3,
    ]);
}
?>

<?php if (!empty($banner_categories)): ?>


 <?php
// Get the 'collection_banner' field from the 'Home' page
 $home_page_id = get_option('page_on_front'); // This retrieves the ID of the page set as the homepage
 $collection_banner  = get_field('collection_banner', $home_page_id); // Get the field from the Home page

if ($collection_banner && isset($collection_banner['url'])):
     $collection_banner_url = $collection_banner['url']; // Get the URL from the array



?>


<div class="relative bg-cover bg-center bg-no-repeat py-20 px-4 mt-16 text-white" style="background-image: url('<?php echo esc_url($collection_banner_url); ?>');">


    <!-- Your content here -->



  
  
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

      <?php foreach ($banner_categories as $cat): ?>
        <div class=" bg-opacity-50 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-2"><?php echo esc_html($cat->name); ?></h3>
          <p class="text-sm mb-4"><?php echo esc_html($cat->description); ?></p>
          <a href="<?php echo get_term_link($cat); ?>" class="inline-block bg-white text-black font-medium px-4 py-2 rounded hover:bg-gray-200 transition">Shop Now</a>
        </div>
      <?php endforeach; ?>

    </div>
  </div>
<?php endif; ?>  </div>
<?php
endif;
?>