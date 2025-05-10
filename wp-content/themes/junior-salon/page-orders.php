<?php
/* Template Name: Custom My Orders Page */
defined('ABSPATH') || exit;

include get_template_directory() . '/layouts/header.php'; 

// Ensure user is logged in
if (!is_user_logged_in()) {
    wp_redirect(wc_get_page_permalink('myaccount'));
    exit;
}

$current_user = wp_get_current_user();
$customer_orders = wc_get_orders([
    'customer_id' => $current_user->ID,
    'limit'       => -1, // show all
    'orderby'     => 'date',
    'order'       => 'DESC',
]);
?>

<div class="max-w-6xl mx-auto px-4 py-10">
    <h2 class="text-xl font-semibold text-gray-800 mb-6">Orders</h2>

    <div class="flex justify-end mb-4">
        <select class="border border-gray-300 px-3 py-2 rounded text-sm">
            <option>Last 6 months</option>
            <option>Last 12 months</option>
        </select>
    </div>

    <div class="space-y-6">
        <?php if ($customer_orders) : ?>
            <?php foreach ($customer_orders as $order) :
                $status = $order->get_status();
                $items = $order->get_items();
                $date = $order->get_date_created()->date_i18n('l, jS M, h:i A');
                $order_number = $order->get_order_number();
                $total = $order->get_formatted_order_total();
            ?>
                <div class="border border-gray-200 rounded-md overflow-hidden shadow-sm">
                    <div class="flex justify-between items-center px-4 py-3 border-b bg-gray-50">
                        <div class="flex items-center gap-4">
                            <span class="text-sm font-medium">Order: #<?php echo esc_html($order_number); ?></span>
                            <span class="text-xs text-gray-500">Order placed: <?php echo esc_html($date); ?></span>
                        </div>
                        <div>
                            <span class="text-xs font-semibold px-3 py-1 rounded-full
                                <?php echo match ($status) {
                                    'completed' => 'bg-green-100 text-green-700',
                                    'cancelled' => 'bg-red-100 text-red-700',
                                    default     => 'bg-yellow-100 text-yellow-700',
                                }; ?>">
                                <?php echo ucfirst($status); ?>
                            </span>
                        </div>
                    </div>

                    <div class="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <div class="flex items-center gap-4">
                            <?php foreach ($items as $item) :
                                $product = $item->get_product();
                                if ($product && $product->get_image_id()) {
                                    echo '<img src="' . esc_url(wp_get_attachment_image_url($product->get_image_id(), 'thumbnail')) . '" alt="" class="w-16 h-16 object-cover rounded border">';
                                }
                            endforeach; ?>
                        </div>

                        <div class="text-right">
                            <p class="text-sm text-gray-700 mb-2">Total: <span class="font-medium"><?php echo $total; ?></span></p>
                            <a href="<?php echo esc_url($order->get_view_order_url()); ?>"
                               class="inline-block px-4 py-1.5 bg-black text-white text-xs uppercase rounded hover:bg-gray-800 transition">
                                View order details
                            </a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php else : ?>
            <p class="text-sm text-gray-600">You have not placed any orders yet.</p>
        <?php endif; ?>
    </div>
</div>

<?php include get_template_directory() . '/layouts/footer.php'; ?>
