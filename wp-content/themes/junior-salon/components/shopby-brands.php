<div class="max-w-7xl mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold mb-6">Shop by Brands</h2>

    <!-- First Row: 4 Categories -->
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 mb-8">
        <?php $exclude_uncategorized = get_option('default_product_cat');

        $categories_row_1 = get_terms([
            'taxonomy'   => 'product_brand',
            'number'     => 7,
            'hide_empty' => false,    'exclude'    => [$exclude_uncategorized],

        ]);
        foreach ($categories_row_1 as $cat) :
            $thumbnail_id = get_term_meta($cat->term_id, 'thumbnail_id', true);
            $image_url = wp_get_attachment_url($thumbnail_id);
        ?>
            <a href="<?php echo get_term_link($cat); ?>" class="text-center group">
                <img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($cat->name); ?>" class="w-full object-cover rounded-xl shadow-sm group-hover:shadow-md transition" />
                <p class="mt-2 text-sm font-medium text-gray-700 group-hover:text-blue-600"><?php echo esc_html($cat->name); ?></p>
            </a>
        <?php endforeach; ?>
    </div>

  
</div>