<?php
$user_id = get_current_user_id();
$billing = [];
$shipping = [];

$fields = ['first_name', 'last_name', 'company', 'address_1', 'address_2', 'city', 'state', 'postcode', 'country', 'phone'];

foreach ($fields as $field) {
    $billing[$field] = get_user_meta($user_id, 'billing_' . $field, true);
    $shipping[$field] = get_user_meta($user_id, 'shipping_' . $field, true);
}
?>

<!-- BILLING ADDRESS -->
<div class="mb-10">
  <div class="flex justify-between items-center mb-2">
    <h3 class="text-lg font-semibold">Billing Address</h3>
    <button type="button" class="text-blue-600 underline" onclick="toggleEdit('billing')">Modify</button>
  </div>
  <form id="billing-address-form" class="space-y-4" disabled>
    <?php foreach ($billing as $key => $value): ?>
      <input type="text" name="<?php echo esc_attr($key); ?>" class="w-full border p-2" placeholder="<?php echo ucfirst(str_replace('_', ' ', $key)); ?>" value="<?php echo esc_attr($value); ?>" disabled>
    <?php endforeach; ?>
    <input type="hidden" name="action" value="update_billing_address">
    <button type="submit" class="px-4 py-2 bg-black text-white hidden" id="billing-submit">Save</button>
    <p id="billing-msg" class="text-sm mt-2"></p>
  </form>
</div>

<!-- SHIPPING ADDRESS -->
<div>
  <div class="flex justify-between items-center mb-2">
    <h3 class="text-lg font-semibold">Shipping Address</h3>
    <button type="button" class="text-blue-600 underline" onclick="toggleEdit('shipping')">Modify</button>
  </div>
  <form id="shipping-address-form" class="space-y-4" disabled>
    <?php foreach ($shipping as $key => $value): ?>
      <input type="text" name="<?php echo esc_attr($key); ?>" class="w-full border p-2" placeholder="<?php echo ucfirst(str_replace('_', ' ', $key)); ?>" value="<?php echo esc_attr($value); ?>" disabled>
    <?php endforeach; ?>
    <input type="hidden" name="action" value="update_shipping_address">
    <button type="submit" class="px-4 py-2 bg-black text-white hidden" id="shipping-submit">Save</button>
    <p id="shipping-msg" class="text-sm mt-2"></p>
  </form>
</div>

<script>
function toggleEdit(type) {
  const form = jQuery(`#${type}-address-form`);
  const inputs = form.find('input[type="text"]');
  const button = jQuery(`#${type}-submit`);

  if (inputs.prop('disabled')) {
    inputs.prop('disabled', false);
    button.removeClass('hidden');
  } else {
    inputs.prop('disabled', true);
    button.addClass('hidden');
  }
}

jQuery('#billing-address-form').on('submit', function(e) {
  e.preventDefault();
  const form = jQuery(this);
  jQuery.ajax({
    url: '<?php echo admin_url('admin-ajax.php'); ?>',
    method: 'POST',
    data: form.serialize(),
    success: function(response) {
      jQuery('#billing-msg').text(response.data.message).removeClass().addClass(response.success ? 'text-green-600' : 'text-red-600');
      toggleEdit('billing');
    }
  });
});

jQuery('#shipping-address-form').on('submit', function(e) {
  e.preventDefault();
  const form = jQuery(this);
  jQuery.ajax({
    url: '<?php echo admin_url('admin-ajax.php'); ?>',
    method: 'POST',
    data: form.serialize(),
    success: function(response) {
      jQuery('#shipping-msg').text(response.data.message).removeClass().addClass(response.success ? 'text-green-600' : 'text-red-600');
      toggleEdit('shipping');
    }
  });
});
</script>
