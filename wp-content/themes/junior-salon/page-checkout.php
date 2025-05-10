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
      // echo do_shortcode('[woocommerce_checkout]');
      ?>
    </div>  
</div>


<div class="container mx-auto p-6 bg-white">
    <div class="flex flex-col space-y-8">
        <!-- User Info Section -->
        <div class="space-y-4">
            <h2 class="text-2xl font-semibold">Sign In</h2>
            <div class="border-b pb-4">
                <?php if ( is_user_logged_in() ) : ?>
                    <p class="text-gray-600">Your Email: <?php echo wp_get_current_user()->user_email; ?></p>
                    <a href="<?php echo wp_logout_url(); ?>" class="text-blue-500 hover:underline">Logout</a>
                <?php else : ?>
                    <a href="<?php echo wp_login_url(); ?>" class="text-blue-500 hover:underline">Login</a>
                <?php endif; ?>
            </div>
        </div>

        <!-- Deliver To (Shipping Address) Section -->
        <div class="space-y-4">
            <h2 class="text-2xl font-semibold">Deliver To</h2>
            <div id="shipping-address-container">
                <?php 
                    $user_id = get_current_user_id();
                    $shipping_fields = array(
                        'shipping_first_name' => get_user_meta($user_id, 'shipping_first_name', true),
                        'shipping_last_name' => get_user_meta($user_id, 'shipping_last_name', true),
                        'shipping_address_1' => get_user_meta($user_id, 'shipping_address_1', true),
                        'shipping_address_2' => get_user_meta($user_id, 'shipping_address_2', true),
                        'shipping_city' => get_user_meta($user_id, 'shipping_city', true),
                        'shipping_postcode' => get_user_meta($user_id, 'shipping_postcode', true),
                        'shipping_country' => get_user_meta($user_id, 'shipping_country', true),
                        'shipping_state' => get_user_meta($user_id, 'shipping_state', true),
                        'shipping_phone' => get_user_meta($user_id, 'shipping_phone', true), // If available
                    );
                ?>

                <div id="shipping-address-display" class="space-y-2">
                    <?php foreach ($shipping_fields as $key => $value) : ?>
                        <?php if (!empty($value)) : ?>
                            <div class="flex justify-between">
                                <span class="font-medium"><?php echo ucfirst(str_replace('_', ' ', $key)); ?>:</span>
                                <p id="<?php echo $key; ?>-text" class="text-gray-600"><?php echo $value; ?></p>
                            </div>
                        <?php endif; ?>
                    <?php endforeach; ?>
                    <button id="edit-shipping-address" class="text-blue-500 hover:underline">Edit/Change</button>
                </div>

                <!-- Editable Shipping Address -->
                <div id="shipping-address-edit" style="display: none;">
                    <div class="space-y-2">
                        <?php foreach ($shipping_fields as $key => $value) : ?>
                            <div class="mb-4">
                                <label for="<?php echo $key; ?>" class="block"><?php echo ucfirst(str_replace('_', ' ', $key)); ?>:</label>
                                <input type="text" id="<?php echo $key; ?>" name="<?php echo $key; ?>" value="<?php echo $value; ?>" class="w-full border rounded p-2">
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <button id="save-shipping-address" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
                </div>
            </div>
        </div>

        <!-- Billing Address Section -->
        <div class="space-y-4">
            <h2 class="text-2xl font-semibold">Billing Address</h2>
            <div id="billing-address-container">
                <?php 
                    $billing_fields = array(
                        'billing_first_name' => get_user_meta($user_id, 'billing_first_name', true),
                        'billing_last_name' => get_user_meta($user_id, 'billing_last_name', true),
                        'billing_address_1' => get_user_meta($user_id, 'billing_address_1', true),
                        'billing_address_2' => get_user_meta($user_id, 'billing_address_2', true),
                        'billing_city' => get_user_meta($user_id, 'billing_city', true),
                        'billing_postcode' => get_user_meta($user_id, 'billing_postcode', true),
                        'billing_country' => get_user_meta($user_id, 'billing_country', true),
                        'billing_state' => get_user_meta($user_id, 'billing_state', true),
                        'billing_phone' => get_user_meta($user_id, 'billing_phone', true), // If available
                    );
                ?>

                <div id="billing-address-display" class="space-y-2">
                    <?php foreach ($billing_fields as $key => $value) : ?>
                        <?php if (!empty($value)) : ?>
                            <div class="flex justify-between">
                                <span class="font-medium"><?php echo ucfirst(str_replace('_', ' ', $key)); ?>:</span>
                                <p id="<?php echo $key; ?>-text" class="text-gray-600"><?php echo $value; ?></p>
                            </div>
                        <?php endif; ?>
                    <?php endforeach; ?>
                    <button id="edit-billing-address" class="text-blue-500 hover:underline">Edit/Change</button>
                </div>

                <!-- Editable Billing Address -->
                <div id="billing-address-edit" style="display: none;">
                    <div class="space-y-2">
                        <?php foreach ($billing_fields as $key => $value) : ?>
                            <div class="mb-4">
                                <label for="<?php echo $key; ?>" class="block"><?php echo ucfirst(str_replace('_', ' ', $key)); ?>:</label>
                                <input type="text" id="<?php echo $key; ?>" name="<?php echo $key; ?>" value="<?php echo $value; ?>" class="w-full border rounded p-2">
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <button id="save-billing-address" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
                </div>
            </div>
        </div>

        <!-- Payment Methods Section -->
        <div class="space-y-4">
            <h2 class="text-2xl font-semibold">Payment Methods</h2>
            <div class="flex items-center space-x-4">
                <?php
                $available_gateways = WC()->payment_gateways->get_available_payment_gateways();
                foreach ($available_gateways as $gateway) :
                ?>
                    <label class="flex items-center">
                        <input type="radio" name="payment_method" value="<?php echo $gateway->id; ?>" class="mr-2">
                        <span class="text-gray-600"><?php echo $gateway->get_title(); ?></span>
                    </label>
                <?php endforeach; ?>
            </div>
        </div>

        <!-- Place Order Button inside the Shopping Bag Section -->
        <div class="w-full mt-6">
            <button id="place-order-btn" class="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                Place Order
            </button>
        </div>
    </div>

    <!-- Shopping Cart Section (Right Side) -->
    <div class="w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Shopping Bag (<?php echo WC()->cart->get_cart_contents_count(); ?> Items)</h2>
        <div class="space-y-4">
            <?php
            foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) :
                $_product = $cart_item['data'];
                $product_name = $_product->get_name();
                $product_price = WC()->cart->get_product_price($_product);
            ?>
                <div class="flex justify-between">
                    <p class="text-sm"><?php echo $product_name; ?></p>
                    <p class="text-sm text-gray-600"><?php echo $product_price; ?></p>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="border-t mt-6 pt-4">
            <div class="flex justify-between text-sm font-medium">
                <p>Subtotal</p>
                <p><?php echo WC()->cart->get_cart_subtotal(); ?></p>
            </div>

            <!-- Conditionally display Delivery if Shipping is enabled -->
            <?php if ( WC()->cart->needs_shipping() && WC()->cart->get_shipping_total() > 0 ) : ?>
                <div class="flex justify-between text-sm font-medium">
                    <p>Delivery</p>
                    <p><?php echo WC()->cart->get_shipping_total(); ?> AED</p>
                </div>
            <?php endif; ?>

            <div class="flex justify-between text-xl font-semibold">
                <p>Total</p>
                <p><?php echo WC()->cart->get_total(); ?></p>
            </div>
        </div>
    </div>
</div>



<script>
    // Toggle editable fields for shipping and billing addresses
    document.getElementById('edit-billing-address').addEventListener('click', function() {
        document.getElementById('billing-address-display').style.display = 'none';
        document.getElementById('billing-address-edit').style.display = 'block';
    });

    document.getElementById('save-billing-address').addEventListener('click', function() {
        // Save the new billing address and update the display without page reload
        var newBillingAddress = [];
        document.querySelectorAll('#billing-address-edit input').forEach(function(input) {
            newBillingAddress.push(input.value);
        });

        document.querySelector('#billing-address-display').innerHTML = newBillingAddress.join('<br>');
        document.getElementById('billing-address-display').style.display = 'block';
        document.getElementById('billing-address-edit').style.display = 'none';

        // Here you should make an AJAX request to save the billing address
    });

    document.getElementById('edit-shipping-address').addEventListener('click', function() {
        document.getElementById('shipping-address-display').style.display = 'none';
        document.getElementById('shipping-address-edit').style.display = 'block';
    });

    document.getElementById('save-shipping-address').addEventListener('click', function() {
        // Save the new shipping address and update the display without page reload
        var newShippingAddress = [];
        document.querySelectorAll('#shipping-address-edit input').forEach(function(input) {
            newShippingAddress.push(input.value);
        });

        document.querySelector('#shipping-address-display').innerHTML = newShippingAddress.join('<br>');
        document.getElementById('shipping-address-display').style.display = 'block';
        document.getElementById('shipping-address-edit').style.display = 'none';

        // Here you should make an AJAX request to save the shipping address
    });

    // Handle the Place Order button inside the Shopping Bag section
    document.getElementById('place-order-btn').addEventListener('click', function() {
        // Trigger the WooCommerce Place Order button functionality
        document.querySelector('form.checkout').submit();
    });
</script>



<?php include get_template_directory() . '/layouts/footer.php'; ?>

