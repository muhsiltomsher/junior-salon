<?php
/**
 * Template Name: Custom Checkout Page
 */
include get_template_directory() . '/layouts/header.php'; ?>

<div class="custom-checkout-page container">
    <h1 class="page-title"><?php the_title(); ?></h1>

    <div class="woocommerce-checkout-wrapper">
        <?php
        // Load WooCommerce checkout form
        echo do_shortcode('[woocommerce_checkout]');
        ?>
    </div>
</div>

<?php include get_template_directory() . '/layouts/footer.php'; ?>

