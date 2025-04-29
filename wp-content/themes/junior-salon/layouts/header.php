<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php bloginfo( 'name' ); ?> - <?php bloginfo( 'description' ); ?></title>
    
        <!-- Google Fonts: Instrument Sans Only -->
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-thin-rounded/css/uicons-thin-rounded.css'>
    

    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	
	<div class="bg-white w-full py-2 shadow-md">
    <div class="container mx-auto flex justify-between items-center px-2">
        <!-- Tagline -->
        <div class="text-gray-800 text-sm font-semibold">
            <?php echo esc_html(get_theme_mod('top_bar_tagline', 'Super Save')); ?>
        </div>

        <!-- Shop Now Link -->
        <div>
            <a href="<?php echo esc_url(get_theme_mod('top_bar_shop_url', home_url('/shop'))); ?>" class="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-all duration-300">
                Shop Now
            </a>
        </div>

        <!-- Deal Timer -->
        <div id="deal-timer" class="text-gray-700 text-sm font-medium">
            <span id="timer"></span>
        </div>
    </div>
</div>

<script>
    // Deal Timer Function
    function startDealTimer() {
        const durationInHours = <?php echo get_theme_mod('top_bar_timer_duration', 10); ?>;
        const endTime = new Date().getTime() + (durationInHours * 60 * 60 * 1000); // Convert hours to milliseconds
        const timerElement = document.getElementById('timer');
        
        function updateTimer() {
            const now = new Date().getTime();
            const timeLeft = endTime - now;

            if (timeLeft <= 0) {
                timerElement.textContent = "Deal Expired";
                clearInterval(interval);
                return;
            }

            const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
            const seconds = Math.floor((timeLeft / 1000) % 60);

            timerElement.textContent = `${hours}hr : ${minutes}min : ${seconds}sec`;
        }

        updateTimer(); // Initial call
        const interval = setInterval(updateTimer, 1000); // Update every second
    }

    // Start the timer when the page loads
    document.addEventListener('DOMContentLoaded', startDealTimer);
</script>

<!-- Sticky Header -->
<!-- Sticky Header -->
<header class="sticky top-0 z-50 shadow-lg">

    <!-- Top Section: Logo + Icons -->
    <div class="bg-black w-full">
        <div class="container mx-auto flex justify-between items-center py-2 px-2">

            <!-- Logo -->
            <div class="logo flex items-center">
                <?php 
                if (has_custom_logo()) {
                    $custom_logo_id = get_theme_mod('custom_logo');
                    $logo_url = wp_get_attachment_image_url($custom_logo_id, 'full');
                    echo '<img src="' . esc_url($logo_url) . '" alt="' . get_bloginfo('name') . '" class="h-16 w-auto">';
                } else {
                    echo '<h1 class="text-3xl font-bold text-white">' . get_bloginfo('name') . '</h1>';
                }
                ?>
            </div>

            <!-- Right Side: Navigation Icons -->
            <div class="flex items-center space-x-6 text-white text-sm">
                <?php get_template_part('layouts/navigation'); ?>
            </div>

        </div>
    </div>

    <!-- Bottom Section: Navigation Menu -->
    <div class="bg-white w-full shadow-sm">
        <div class="container  mx-auto flex justify-center items-center py-2 px-2">
            <?php get_template_part('layouts/mainmenu'); ?>
        </div>
    </div>




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

<?php get_template_part('components/drawer'); ?>


</header>


