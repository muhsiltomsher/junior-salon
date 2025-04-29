<!-- My Account Content -->
<div class="account-drawer-content p-4">
    <?php
    if (is_user_logged_in()) {
        echo '<p>Welcome back, ' . wp_get_current_user()->display_name . '!</p>';
        echo '<a href="' . esc_url(wc_get_account_endpoint_url('orders')) . '" class="block mt-2 text-primary hover:text-secondary">My Orders</a>';
        echo '<a href="' . esc_url(wc_get_account_endpoint_url('edit-address')) . '" class="block mt-2 text-primary hover:text-secondary">Addresses</a>';
        echo '<a href="' . esc_url(wc_get_account_endpoint_url('edit-account')) . '" class="block mt-2 text-primary hover:text-secondary">Account Details</a>';
        echo '<a href="' . esc_url(wc_get_account_endpoint_url('customer-logout')) . '" class="block mt-2 text-red-500 hover:text-red-700">Logout</a>';
    } else {
        echo '<a href="' . esc_url(get_permalink(get_option('woocommerce_myaccount_page_id'))) . '" class="block text-primary hover:text-secondary">Login / Register</a>';
    }
    ?>
</div>
