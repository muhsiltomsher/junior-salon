<?php
$exclude_uncategorized = get_option('default_product_cat');
$parent_home_category = get_term_by('slug', 'home-category', 'product_cat');

$all_home_categories = [];

if ($parent_home_category && !is_wp_error($parent_home_category)) {
    $all_home_categories = get_terms([
        'taxonomy'   => 'product_cat',
        'hide_empty' => false,
        'parent'     => $parent_home_category->term_id,
        'exclude'    => [$exclude_uncategorized],
    ]);
}

// Split manually
$categories_row_1 = array_slice($all_home_categories, 0, 4);
$categories_row_2 = array_slice($all_home_categories, 4, 5); // Next 5
?>
<div class="max-w-7xl mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold mb-6">Shop by Category</h2>

    <!-- First Row: 4 Categories -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
        <?php foreach ($categories_row_1 as $cat): ?>
            <?php
                $thumbnail_id = get_term_meta($cat->term_id, 'thumbnail_id', true);
                $image_url = wp_get_attachment_url($thumbnail_id);
            ?>
            <a href="<?php echo get_term_link($cat); ?>" class="text-center group">
                <img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($cat->name); ?>" class="w-full  object-cover rounded-xl shadow-sm group-hover:shadow-md transition" />
                <p class="mt-2 text-sm font-medium text-gray-700 group-hover:text-blue-600"><?php echo esc_html($cat->name); ?></p>
            </a>
        <?php endforeach; ?>
    </div>

    <!-- Second Row: Next 5 Categories -->
    <div class="grid grid-cols-2 sm:grid-cols-5 gap-6">
        <?php foreach ($categories_row_2 as $cat): ?>
            <?php
                $thumbnail_id = get_term_meta($cat->term_id, 'thumbnail_id', true);
                $image_url = wp_get_attachment_url($thumbnail_id);
            ?>
            <a href="<?php echo get_term_link($cat); ?>" class="text-center group">
                <img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($cat->name); ?>" class="w-full  object-cover rounded-xl shadow-sm group-hover:shadow-md transition" />
                <p class="mt-2 text-sm font-medium text-gray-700 group-hover:text-blue-600"><?php echo esc_html($cat->name); ?></p>
            </a>
        <?php endforeach; ?>
    </div>
</div>