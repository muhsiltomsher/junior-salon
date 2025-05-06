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

    <?php wp_head(); ?>

    <!-- Loader Styles -->
    <style>
        .loader {
            border-top-color: #3498db;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        #page-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.5s ease;
        }
        #page-loader.hidden {
            opacity: 0;
            pointer-events: none;
        }
    </style>
</head>
<body <?php body_class(); ?>>

<!-- Page Loader -->
<div id="page-loader">
    <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-14 w-14"></div>
</div>

<script>
    window.addEventListener('load', function() {
        document.getElementById('page-loader').classList.add('hidden');
    });
</script>

<!-- Smooth Product Loader -->
<div id="product-loader" class="fixed inset-0 z-50 bg-white bg-opacity-70 flex items-center justify-center hidden">
    <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
</div>

<script>
function showLoader() {
    document.getElementById('product-loader').classList.remove('hidden');
}

function hideLoader() {
    document.getElementById('product-loader').classList.add('hidden');
}
</script>

<div class="bg-white w-full py-2 shadow-md">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
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
        const endTime = new Date().getTime() + (durationInHours * 60 * 60 * 1000);
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

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
    }

    document.addEventListener('DOMContentLoaded', startDealTimer);
</script>

<!-- Sticky Header -->
<header class="sticky top-0 z-50 shadow-lg">
    <div class="bg-black w-full">
        <div class="container mx-auto flex justify-between items-center py-2 px-2">
            <!-- Logo -->
            <div class="logo flex items-center">
                <?php 
                if (has_custom_logo()) {
                    $custom_logo_id = get_theme_mod('custom_logo');
                    $logo_url = wp_get_attachment_image_url($custom_logo_id, 'full');
                    echo '<img src="' . esc_url($logo_url) . '" alt="' . get_bloginfo('name') . '" class="h-16 w-30">';
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
    <div class="bg-white w-full shadow-sm">
        <div class="container mx-auto flex justify-center items-center py-2 px-2">
            <?php get_template_part('layouts/mainmenu'); ?>
        </div>
    </div>
</header>