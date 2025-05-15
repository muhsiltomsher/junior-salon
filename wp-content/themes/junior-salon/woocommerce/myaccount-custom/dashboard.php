<?php
$current_user = wp_get_current_user();
?>
<?php
$user = wp_get_current_user();
$first_name = get_user_meta($user->ID, 'billing_first_name', true);
$last_name  = get_user_meta($user->ID, 'billing_last_name', true);
$email      = $user->user_email;
$phone      = get_user_meta($user->ID, 'billing_phone', true);
?>

<h2 class="text-2xl font-semibold mb-6">My Account</h2>

<!-- Recent Orders -->
<div class="mb-8">
    <h3 class="text-lg font-semibold border-b pb-2">Your Recent Orders</h3>
    <p class="text-sm text-gray-600 mt-2">You don’t have any recent orders. For your purchase history, please visit <a href="<?php echo home_url('/orders'); ?>" class="text-blue-600 underline">My Orders</a>.</p>
</div>

<!-- Your Details -->
<div class="mb-8">
    <div class="flex justify-between items-center mb-2">
        <h3 class="text-lg font-semibold border-b pb-2">Your Details</h3>
        <a href="?section=address" class="text-blue-600 text-sm underline">EDIT</a>
    </div>
    <div class="text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
        <p><strong>First Name:</strong> <?php echo esc_html($first_name); ?></p>
        <p><strong>Last Name:</strong> <?php echo esc_html($last_name); ?></p>
        <p><strong>Email Address:</strong> <?php echo esc_html($email); ?></p>
        <p><strong>Phone Number:</strong> <?php echo esc_html($phone ?: ''); ?></p>
    </div>
</div>

<!-- Address -->
<div>
    <div class="flex justify-between items-center mb-2">
        <h3 class="text-lg font-semibold border-b pb-2">Your Address(es)</h3>
        <a href="?section=address" class="text-blue-600 text-sm underline">EDIT ADDRESS</a>
    </div>
  <?php
$user_id = get_current_user_id();
$billing = get_customer_address($user_id, 'billing');
$shipping = get_customer_address($user_id, 'shipping');

function get_customer_address($user_id, $type = 'billing') {
    $fields = ['first_name', 'last_name', 'company', 'address_1', 'address_2', 'city', 'state', 'postcode', 'country', 'phone'];
    $address = [];

    foreach ($fields as $field) {
        $value = get_user_meta($user_id, "{$type}_{$field}", true);
        if (!empty($value)) {
            $address[$field] = $value;
        }
    }

    if (empty($address)) {
        return false;
    }

    return implode('<br>', array_filter([
        (!empty($address['first_name']) ? $address['first_name'] : '') . ' ' . (!empty($address['last_name']) ? $address['last_name'] : ''),
        !empty($address['company']) ? $address['company'] : '',
        !empty($address['address_1']) ? $address['address_1'] : '',
        !empty($address['address_2']) ? $address['address_2'] : '',
        (!empty($address['city']) ? $address['city'] : '') . ', ' . (!empty($address['state']) ? $address['state'] : ''),
        !empty($address['postcode']) ? $address['postcode'] : '',
        !empty($address['country']) ? $address['country'] : '',
        !empty($address['phone']) ? 'Phone: ' . $address['phone'] : ''
    ]));
}
?>

<!-- Addresses Section -->
<div>
 
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div class="border p-4 rounded-md">
            <h4 class="font-semibold mb-2">Billing Address</h4>
            <div class="text-sm text-gray-700">
                <?php echo $billing ? $billing : '<p class="text-gray-500">No billing address added yet.</p>'; ?>
            </div>
        </div>

        <div class="border p-4 rounded-md">
            <h4 class="font-semibold mb-2">Shipping Address</h4>
            <div class="text-sm text-gray-700">
                <?php echo $shipping ? $shipping : '<p class="text-gray-500">No shipping address added yet.</p>'; ?>
            </div>
        </div>
    </div>
</div>

</div>
