<!-- Desktop Navigation Menu using WP Mega Menu -->
<nav id="custom-desktop-menu" class="hidden lg:flex w-full z-50">
  <div class="max-w-screen-2xl mx-auto w-full px-4 py-4">
    <?php
    if (function_exists('wp_megamenu')) {
        wp_megamenu(array('theme_location' => 'primary'));
    }
    ?>
  </div>
</nav>
