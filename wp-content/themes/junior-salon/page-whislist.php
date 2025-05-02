<?php
/**
 * Template Name: Custom Wishlist Page
 */
include get_template_directory() . '/layouts/header.php'; ?>

<main class="wishlist-page container">
    <h1 class="text-3xl font-bold mb-6">My Wishlist</h1>

    <div class="wishlist-wrapper">
        <?php
        // Display the wishlist with default shortcode
        echo do_shortcode('[yith_wcwl_wishlist]');
        ?>
    </div>
</main>



<?php include get_template_directory() . '/layouts/footer.php'; ?>
