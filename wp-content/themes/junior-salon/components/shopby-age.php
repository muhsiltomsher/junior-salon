<?php
// Get the parent category by slug
$parent_cat = get_term_by('slug', 'age', 'product_cat');

if ($parent_cat && !is_wp_error($parent_cat)) {
    // Get subcategories
    $subcategories = get_terms([
        'taxonomy'   => 'product_cat',
        'hide_empty' => false,
        'parent'     => $parent_cat->term_id,
        'number'     => 3, // Fetch only 3 subcategories
    ]);

    // Get thumbnail ID and image URL for the parent category ("Age")
    $thumbnail_id = get_term_meta($parent_cat->term_id, 'thumbnail_id', true);
    $image_url = wp_get_attachment_url($thumbnail_id);
}
?>
        <h2 class="text-3xl font-bold mb-6">Shop by Age</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
  <!-- Left Column -->
  <div class="space-y-6">
    <!-- First Row: 2 Subcategories -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <?php if (!empty($subcategories) && count($subcategories) >= 2): ?>
        <?php foreach (array_slice($subcategories, 0, 2) as $cat): ?>
          <?php
            // Get the image for the subcategory
            $cat_thumbnail_id = get_term_meta($cat->term_id, 'thumbnail_id', true);
            $cat_image_url = wp_get_attachment_url($cat_thumbnail_id);
          ?>
          <a href="<?php echo get_term_link($cat); ?>" class="relative block bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
            <?php if ($cat_image_url): ?>
              <img src="<?php echo esc_url($cat_image_url); ?>" alt="<?php echo esc_attr($cat->name); ?>" class="w-full h-48 object-cover rounded-lg mb-4">
            <?php endif; ?>
            <h3 class="text-lg font-semibold"><?php echo esc_html($cat->name); ?></h3>
            <p class="text-sm text-gray-600"><?php echo esc_html($cat->description); ?></p>
          </a>
        <?php endforeach; ?>
      <?php endif; ?>
    </div>

    <!-- Second Row: 1 Subcategory -->
    <?php if (!empty($subcategories) && count($subcategories) > 2): ?>
      <?php $third_cat = $subcategories[2]; ?>
      <?php
        // Get the image for the third subcategory
        $third_cat_thumbnail_id = get_term_meta($third_cat->term_id, 'thumbnail_id', true);
        $third_cat_image_url = wp_get_attachment_url($third_cat_thumbnail_id);
      ?>
      <a href="<?php echo get_term_link($third_cat); ?>" class="relative block bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
        <?php if ($third_cat_image_url): ?>
          <img src="<?php echo esc_url($third_cat_image_url); ?>" alt="<?php echo esc_attr($third_cat->name); ?>" class="w-full h-48 object-cover rounded-lg mb-4">
        <?php endif; ?>
        <h3 class="text-lg font-semibold"><?php echo esc_html($third_cat->name); ?></h3>
        <p class="text-sm text-gray-600"><?php echo esc_html($third_cat->description); ?></p>
      </a>
    <?php endif; ?>
  </div>


<?php if (!empty($image_url)): ?>
  <div class="relative h-96 rounded-lg overflow-hidden">
    <img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($parent_cat->name); ?>" class="w-full h-full object-cover" />
    
    <div class="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
      <h2 class="text-2xl font-bold mb-2"><?php echo esc_html($parent_cat->name); ?></h2>
      <p class="text-sm max-w-md"><?php echo esc_html($parent_cat->description); ?></p>
    </div>
  </div>
<?php else: ?>
  <div class="bg-gray-100 h-96 flex items-center justify-center rounded-lg">
    <p class="text-gray-500">No image found for the "Age" category.</p>
  </div>
<?php endif; ?>


</div>