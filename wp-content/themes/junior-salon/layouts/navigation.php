<!-- Navigation Icons Area -->
<div class="flex items-center gap-3 text-white text-sm">

    <!-- Language Switcher -->
    <a href="#" class="flex items-center group m-0">
        <div class="h-10 w-10 flex items-center justify-center rounded-full border border-transparent group-hover:border-white transition-all duration-300">
            <img src="http://junior-salon.tomsher.net/wp-content/uploads/2025/04/languages.svg" alt="Language" class="h-6 w-6">
        </div>
    </a>

    <!-- Search Icon -->
    <a href="#" class="flex items-center group m-0">
        <div class="h-10 w-10 flex items-center justify-center rounded-full border border-transparent group-hover:border-white transition-all duration-300">
            <img src="http://junior-salon.tomsher.net/wp-content/uploads/2025/04/search.svg" alt="Search" class="h-6 w-6">
        </div>
    </a>

    <!-- Wishlist Icon -->
    <a href="<?php echo esc_url( wc_get_account_endpoint_url('wishlist') ); ?>" class="flex items-center group m-0">
        <div class="h-10 w-10 flex items-center justify-center rounded-full border border-transparent group-hover:border-white transition-all duration-300">
            <img src="http://junior-salon.tomsher.net/wp-content/uploads/2025/04/wishlist.svg" alt="Wishlist" class="h-6 w-6">
        </div>
    </a>


<!-- My Account Button -->
<button onclick="openDrawer('My Account', '<?php echo esc_url( home_url('/wp-content/themes/junior-salon/layouts/account-drawer.php') ); ?>')" class="flex items-center group bg-transparent m-0">
    <div class="h-10 w-10 flex items-center justify-center rounded-full border border-transparent group-hover:border-white transition-all duration-300">
        <img src="http://junior-salon.tomsher.net/wp-content/uploads/2025/04/user-account.svg" alt="Account" class="h-6 w-6">
    </div>
</button>

<!-- Cart Button -->
<button onclick="openDrawer('Your Cart', '<?php echo esc_url( home_url('/wp-content/themes/junior-salon/layouts/cart-drawer.php') ); ?>')" class="flex items-center bg-transparent group m-0">
    <div class="h-10 w-10 flex items-center justify-center rounded-full border border-transparent group-hover:border-white transition-all duration-300 relative">
        <img src="http://junior-salon.tomsher.net/wp-content/uploads/2025/04/cart.svg" alt="Cart" class="h-6 w-6">
        <span class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
            <?php echo WC()->cart->get_cart_contents_count(); ?>
        </span>
    </div>
</button>




</div>
