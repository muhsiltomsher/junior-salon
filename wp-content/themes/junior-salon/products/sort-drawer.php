<!-- sort-drawer.php -->


<!-- Sort Drawer Content -->
<div class="sort-drawer-content p-4">
    <h3 class="text-xl font-semibold mb-4">Sort By</h3>
    <!-- Sorting Options -->
    <form method="GET" action="<?php echo esc_url(home_url('/shop')); ?>" class="space-y-4">
        <div>
            <label for="sort_by" class="block text-sm">Sort by</label>
            <select id="sort_by" name="orderby" class="w-full">
                <option value="menu_order">Default</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Average rating</option>
                <option value="date">Newest</option>
                <option value="price">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
            </select>
        </div>

        <button type="submit" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Apply Sort</button>
    </form>
</div>




<!--<h2 class="text-lg font-semibold mb-4">SORT BY</h2>-->
<!--<div class="flex flex-col gap-4">-->
<!--    <label class="flex items-center gap-2">-->
<!--        <input type="radio" name="sort" class="form-radio text-black" checked />-->
<!--        Most Popular-->
<!--    </label>-->
<!--    <label class="flex items-center gap-2">-->
<!--        <input type="radio" name="sort" class="form-radio text-black" />-->
<!--        Best Selling-->
<!--    </label>-->
<!--    <label class="flex items-center gap-2">-->
<!--        <input type="radio" name="sort" class="form-radio text-black" />-->
<!--        Alphabetically, A-Z-->
<!--    </label>-->
<!--    <label class="flex items-center gap-2">-->
<!--        <input type="radio" name="sort" class="form-radio text-black" />-->
<!--        Alphabetically, Z-A-->
<!--    </label>-->
<!--    <label class="flex items-center gap-2">-->
<!--        <input type="radio" name="sort" class="form-radio text-black" />-->
<!--        Price, Low to High-->
<!--    </label>-->
<!--    <label class="flex items-center gap-2">-->
<!--        <input type="radio" name="sort" class="form-radio text-black" />-->
<!--        Price, High to Low-->
<!--    </label>-->
<!--    <label class="flex items-center gap-2">-->
<!--        <input type="radio" name="sort" class="form-radio text-black" />-->
<!--        Date, Old to New-->
<!--    </label>-->
<!--    <label class="flex items-center gap-2">-->
<!--        <input type="radio" name="sort" class="form-radio text-black" />-->
<!--        Date, New to Old-->
<!--    </label>-->
<!--</div>-->