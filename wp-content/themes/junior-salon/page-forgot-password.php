<?php
/**
 * Template Name: WooCommerce Forgot Password
 */

defined('ABSPATH') || exit;

include get_template_directory() . '/layouts/header.php';
?>

<div class="container mx-auto px-4 py-12">
    <div class="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h2 class="text-xl font-semibold mb-4 text-center">Forgot Your Password?</h2>

        <?php
        if (!is_user_logged_in()) {
            echo do_shortcode('[woocommerce_lost_password]');
        } else {
            echo '<p class="text-center">You are already logged in.</p>';
        }
        ?>

        <div class="text-center mt-6">
            <a href="<?php echo esc_url(wc_get_page_permalink('myaccount')); ?>" class="text-blue-600 hover:underline">← Back to login</a>
        </div>
    </div>
</div>

<?php
include get_template_directory() . '/layouts/footer.php';
