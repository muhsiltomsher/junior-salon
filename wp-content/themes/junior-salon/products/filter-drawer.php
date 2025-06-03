<h1 class="text-lg font-semibold mb-4">Filter and Order</h1>

<!-- Category -->
<h2 class="text-sm font-semibold uppercase mb-3">Category</h2>
<?php echo do_shortcode('[product_categories_checkbox include="27, 22, 30, 24, 23, 26, 25, 28, 29"]'); ?>

<!-- Color -->
<h2 class="text-sm font-semibold uppercase mt-6 mb-3">Color</h2>
<?php echo do_shortcode('[attribute_checkboxes attribute="pa_color"]'); ?>

<!-- Size -->
<h2 class="text-sm font-semibold uppercase mt-6 mb-3">Size</h2>
<?php echo do_shortcode('[attribute_checkboxes attribute="pa_size"]'); ?>

<!-- Age -->
<h2 class="text-sm font-semibold uppercase mt-6 mb-3">Age</h2>
<?php echo do_shortcode('[age_category_checkboxes]'); ?>



<!-- Brand -->
<h2 class="text-sm font-semibold uppercase mt-6 mb-3" id="filter-brand">Brand</h2>
<?php echo do_shortcode('[brand_checkboxes]'); ?>

<!-- Price -->
<h2 class="text-sm font-semibold uppercase mt-6 mb-3">Price</h2>
<?php echo do_shortcode('[price_filter]'); ?>

<!-- Apply Filters -->
<div class="mt-6">
  <button id="filter-button" class="w-full bg-black text-white px-4 py-2 text-sm font-medium uppercase hover:bg-gray-800 transition">
    Apply Filters
  </button>
</div>
