

<h1 class="text-lg font-semibold mb-4">FILTER AND ORDER</h1>

<h2 class="text-lg font-semibold mb-4">CATEGORY</h2>
<?php
// Echo the shortcode directly
echo do_shortcode('[product_categories_checkbox include="27, 22, 30,24,23,26,25,28,29"]');
?>

<h2 class="text-lg font-semibold mb-4">AGE</h2>
<?php
echo do_shortcode('[age_category_checkboxes]');
?>

<h2 class="text-lg font-semibold mb-4">BRAND</h2>
<?php
echo do_shortcode('[brand_checkboxes]');
?>
<button id="filter-button" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    Apply Filters
</button>
