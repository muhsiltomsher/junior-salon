<!-- /wp-content/themes/your-theme/page-cart.php -->
<?php
/**
 * Template Name: Custom Cart Page
 */
include get_template_directory() . '/layouts/header.php'; ?>

<div class="custom-cart-container">
    <h1>Your Cart</h1>
    <?php echo do_shortcode('[woocommerce_cart]'); ?>
</div>

<?php include get_template_directory() . '/layouts/footer.php'; ?>
