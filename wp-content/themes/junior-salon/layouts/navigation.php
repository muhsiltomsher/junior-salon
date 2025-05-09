<!-- Navigation Icons Area -->
<div class="flex items-center gap-3 text-white text-sm">

    <!-- Language Switcher -->
    <a href="#" class="flex items-center group m-0">
        <div class="h-10 w-10 flex items-center justify-center rounded-full border border-transparent group-hover:border-white transition-all duration-300">
            <img src="https://tomsher.co/junior-salon/wp-content/uploads/2025/04/languages.svg" alt="Language" class="h-5 w-5">
        </div>
    </a>

    <!-- Search Icon -->
    <a href="#" class="flex items-center group m-0">

    <?php echo do_shortcode('[fibosearch]'); ?>

        <div class="h-10 w-10 flex items-center justify-center rounded-full border border-transparent group-hover:border-white transition-all duration-300">
            <img src="https://tomsher.co/junior-salon/wp-content/uploads/2025/04/search.svg" alt="Search" class="h-6 w-6">
        </div>
    </a>

    <!-- Wishlist Icon -->
    <a href="<?php echo wc_get_account_endpoint_url('wishlist'); ?>" class="flex items-center group  m-0">
        <div class="h-10 w-10 flex items-center justify-center rounded-full border border-transparent group-hover:border-white transition-all duration-300">
            <img src="https://tomsher.co/junior-salon/wp-content/uploads/2025/04/wishlist.svg" alt="Wishlist" class="h-6 w-6">
        </div>
    </a>

    <!-- Profile Icon -->
    <a href="<?php echo get_permalink(get_option('woocommerce_myaccount_page_id')); ?>" class="flex items-center group  m-0">
        <div class="h-10 w-10 flex items-center justify-center rounded-full border border-transparent group-hover:border-white transition-all duration-300">
            <img src="https://tomsher.co/junior-salon/wp-content/uploads/2025/04/user-account.svg" alt="My Account" class="h-6 w-6">
        </div>
    </a>

    <!-- Cart Icon -->
    <div class="relative">
        <a href="<?php echo wc_get_cart_url(); ?>" class="flex items-center group  m-0">
            <div class="h-10 w-10 flex items-center justify-center rounded-full border border-transparent group-hover:border-white transition-all duration-300 relative">
                <img src="https://tomsher.co/junior-salon/wp-content/uploads/2025/04/cart.svg" alt="Cart" class="h-6 w-6">
                <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                    <?php echo WC()->cart->get_cart_contents_count(); ?>
                </span>
            </div>
        </a>
    </div>

</div>
