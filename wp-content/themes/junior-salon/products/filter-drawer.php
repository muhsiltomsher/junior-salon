<!-- Filter Drawer Content (filter-drawer.php) -->
<div class="filter-drawer-content p-4">
    <h3 class="text-xl font-semibold mb-4">Filter By</h3>
    <form method="GET" action="<?php echo esc_url(home_url('/shop')); ?>" class="space-y-4">
        <!-- Price Range -->
        <div>
            <label for="price_range" class="block text-sm">Price Range</label>
            <input type="range" id="price_range" name="price_range" min="0" max="1000" step="10" class="w-full" />
        </div>

        <!-- Category Dropdown -->
        <div>
            <label for="product_category" class="block text-sm">Category</label>
            <?php
            wp_dropdown_categories(array(
                'show_option_all' => 'All Categories',
                'taxonomy' => 'product_cat',
                'name' => 'product_category',
                'class' => 'w-full',
            ));
            ?>
        </div>

        <button type="submit" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Apply Filters</button>
    </form>
</div>
