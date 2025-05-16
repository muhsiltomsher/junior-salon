<?php
/**
 * Template Name: Change Password
 */

defined( 'ABSPATH' ) || exit;

get_header();

if ( ! is_user_logged_in() ) {
    echo '<p>You must be <a href="' . esc_url( wp_login_url() ) . '">logged in</a> to change your password.</p>';
    get_footer();
    exit;
}

$current_user = wp_get_current_user();
?>

<div class="woocommerce">
    <h2>Change Password</h2>

    <form method="post" class="woocommerce-EditAccountForm edit-account">

        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label for="current_password">Current password&nbsp;<span class="required">*</span></label>
            <input type="password" class="woocommerce-Input" name="current_password" required />
        </p>

        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label for="new_password">New password&nbsp;<span class="required">*</span></label>
            <input type="password" class="woocommerce-Input" name="new_password" required />
        </p>

        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label for="confirm_password">Confirm new password&nbsp;<span class="required">*</span></label>
            <input type="password" class="woocommerce-Input" name="confirm_password" required />
        </p>

        <p>
            <button type="submit" name="submit_password_change" class="woocommerce-Button button">Change Password</button>
        </p>

        <?php
        if ( isset($_POST['submit_password_change']) ) {
            $current_password = sanitize_text_field($_POST['current_password']);
            $new_password     = sanitize_text_field($_POST['new_password']);
            $confirm_password = sanitize_text_field($_POST['confirm_password']);

            if ( ! wp_check_password( $current_password, $current_user->user_pass, $current_user->ID ) ) {
                wc_print_notice('Current password is incorrect.', 'error');
            } elseif ( $new_password !== $confirm_password ) {
                wc_print_notice('New passwords do not match.', 'error');
            } elseif ( strlen($new_password) < 6 ) {
                wc_print_notice('New password must be at least 6 characters.', 'error');
            } else {
                wp_set_password( $new_password, $current_user->ID );
                wc_print_notice('Password changed successfully. You will need to log in again.', 'success');
                wp_logout();
            }
        }
        ?>

    </form>
</div>

<?php get_footer(); ?>
