<?php
/* Template Name: My Profile */
defined('ABSPATH') || exit;

if (!is_user_logged_in()) {
    wp_redirect(wp_login_url());
    exit;
}

$current_user = wp_get_current_user();
include get_template_directory() . '/layouts/header.php';
?>

<div class="max-w-xl mx-auto px-4 py-12">
  <h2 class="text-2xl font-bold mb-6 text-center">My Profile</h2>

  <div class="bg-white shadow-lg rounded-xl p-6 space-y-5">
    <!-- Email (Disabled) -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
      <input type="email" value="<?php echo esc_attr($current_user->user_email); ?>" disabled
        class="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-gray-500 cursor-not-allowed">
    </div>

    <!-- First Name -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
      <input type="text" id="first_name" value="<?php echo esc_attr(get_user_meta($current_user->ID, 'first_name', true)); ?>"
        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
    </div>

    <!-- Last Name -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
      <input type="text" id="last_name" value="<?php echo esc_attr(get_user_meta($current_user->ID, 'last_name', true)); ?>"
        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
    </div>

    <!-- Phone -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
      <input type="text" id="phone" value="<?php echo esc_attr(get_user_meta($current_user->ID, 'billing_phone', true)); ?>"
        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
    </div>

    <!-- Save Button -->
    <div class="flex items-center justify-between">
      <button onclick="updateProfile()" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg">
        Save Changes
      </button>
      <div id="profile-update-status" class="text-sm"></div>
    </div>

    <div class="pt-3 border-t text-right">
      <a href="/change-password" class="text-sm text-blue-600 underline hover:text-blue-800">Change Password</a>
    </div>
  </div>
</div>

<script>
function updateProfile() {
  const statusEl = document.getElementById('profile-update-status');
  statusEl.innerText = "Saving...";

  const data = {
    action: 'update_profile_info',
    first_name: document.getElementById('first_name').value,
    last_name: document.getElementById('last_name').value,
    phone: document.getElementById('phone').value
  };

  fetch('<?php echo admin_url('admin-ajax.php'); ?>', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    if (res.success) {
      statusEl.innerText = res.data.message;
      statusEl.className = "text-green-600 text-sm mt-2";
    } else {
      statusEl.innerText = res.data.message;
      statusEl.className = "text-red-600 text-sm mt-2";
    }
  })
  .catch(() => {
    statusEl.innerText = "Something went wrong.";
    statusEl.className = "text-red-600 text-sm mt-2";
  });
}
</script>

<?php include get_template_directory() . '/layouts/footer.php'; ?>
