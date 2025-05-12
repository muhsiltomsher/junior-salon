<?php
/**
 * Template Name: Custom Cart Page
 */
include get_template_directory() . '/layouts/header.php'; ?>

<div class="custom-cart-container">
  <form class="woocommerce-cart-form" action="<?php echo esc_url(wc_get_cart_url()); ?>" method="post">
    <div class="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

      <!-- Left: Cart Products -->
      <div class="lg:col-span-2 space-y-6">
        <h2 class="text-2xl font-bold mb-4">SHOPPING CART</h2>
       <p class="text-sm text-gray-500" x-data x-init="
  document.addEventListener('refresh-cart-totals', () => {
    fetch('<?php echo esc_url(wc_get_cart_url()); ?>?count_only=1')
      .then(res => res.text())
      .then(count => $el.textContent = `Showing ${count} products you added`);
  });
">
  Showing <?php echo WC()->cart->get_cart_contents_count(); ?> products you added
</p>

        <?php do_action('woocommerce_before_cart_table'); ?>

        <?php foreach (WC()->cart->get_cart() as $cart_item_key => $cart_item): 
          $_product   = $cart_item['data'];
          $product_id = $cart_item['product_id'];
          if ($_product && $_product->exists() && $cart_item['quantity'] > 0): 
            $product_permalink = $_product->is_visible() ? $_product->get_permalink($cart_item) : '';
        ?>

        <div x-data="cartItemHandler('<?php echo esc_js($cart_item_key); ?>', <?php echo esc_js($cart_item['quantity']); ?>)"
             x-show="visible"
             x-transition.opacity.duration.300ms
             class="flex items-center border p-4 rounded-lg gap-4 bg-white shadow-sm">

          <input type="checkbox" class="accent-black"
                 :checked="qty > 0"
                 @change="toggleItem()">

          <div class="w-20 h-20 flex-shrink-0 bg-white border rounded overflow-hidden">
            <?php echo $_product->get_image('woocommerce_thumbnail', ['class' => 'w-full h-full object-cover']); ?>
          </div>

          <div class="flex-1">
            <?php
            $brand = '';
            $terms = get_the_terms($_product->get_id(), 'product_brand');
            if (!empty($terms) && !is_wp_error($terms)) {
              $brand = esc_html($terms[0]->name);
            }
            ?>
            <p class="text-xs uppercase text-gray-500 mb-1"><?php echo $brand ?: 'Brand'; ?></p>

            <h3 class="text-base font-semibold">
              <?php echo $product_permalink ? '<a href="'.esc_url($product_permalink).'">' . $_product->get_name() . '</a>' : $_product->get_name(); ?>
            </h3>
            <p class="font-bold mt-1"><?php echo wc_price($_product->get_price()); ?></p>
          </div>

          <div class="flex items-center space-x-3">
            <div class="flex items-center border rounded">
              <button type="button" @click="updateQty(qty - 1)" class="px-2 py-1 text-xl font-semibold">−</button>
              <span class="px-3 text-sm font-medium" x-text="qty"></span>
              <button type="button" @click="updateQty(qty + 1)" class="px-2 py-1 text-xl font-semibold">+</button>
            </div>
          </div>
        </div>

        <?php endif; endforeach; ?>

        <?php do_action('woocommerce_after_cart_table'); ?>
      </div>

      <!-- Right: Order Summary -->
      <div class="lg:col-span-1 border p-6 bg-white rounded-lg shadow-sm">
        <h3 class="text-lg font-semibold mb-4">ORDER SUMMARY</h3>
<div class="cart-totals-wrapper">

        <div class="text-sm space-y-2">
          <?php foreach (WC()->cart->get_cart() as $cart_item):
            $_product = $cart_item['data'];
            if ($_product && $_product->exists()):
          ?>
            <div class="flex justify-between">
              <span><?php echo $_product->get_name(); ?></span>
              <span><?php echo wc_price($_product->get_price()); ?></span>
            </div>
          <?php endif; endforeach; ?>
</div>
          <hr class="my-3">

          <div id="cart-totals-wrapper"
     x-data="{ loading: false }"
     x-init="
      document.addEventListener('refresh-cart-totals', () => {
        loading = true;
        fetch(window.location.href).then(res => res.text()).then(html => {
          const temp = document.createElement('div');
          temp.innerHTML = html;
          const newTotals = temp.querySelector('#cart-totals-wrapper > div');
          $el.querySelector('div').innerHTML = newTotals.innerHTML;
          loading = false;
        });
      });
     "
     class="relative"
>
  <!-- Overlay + Spinner -->
  <div x-show="loading"
       x-transition.opacity
       class="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center rounded">
    <div class="animate-spin rounded-full h-6 w-6 border-2 border-gray-800 border-t-transparent"></div>
  </div>

  <!-- Totals Content -->
  <div>
    <div class="flex justify-between font-medium">
      <span>Total Price (Item)</span>
      <span><?php wc_cart_totals_subtotal_html(); ?></span>
    </div>

    <div class="flex justify-between">
      <span>Shipping Tax & Fee</span>
      <span><?php wc_cart_totals_shipping_html(); ?></span>
    </div>

    <div class="flex justify-between font-bold text-lg mt-2">
      <span>Grand Total</span>
      <span><?php wc_cart_totals_order_total_html(); ?></span>
    </div>
  </div>
</div>


        </div>

        <button type="submit" name="proceed" class="mt-6 w-full bg-black text-white text-sm py-3 rounded">
          <?php esc_html_e('Checkout', 'woocommerce'); ?>
        </button>
      </div>
    </div>
  </form>
</div>

<script>
document.addEventListener('alpine:init', () => {
  Alpine.data('cartItemHandler', (key, initialQty) => ({
    qty: initialQty,
    visible: true,

    updateQty(newQty) {
      this.qty = newQty < 1 ? 0 : newQty;

      fetch('<?php echo admin_url('admin-ajax.php'); ?>', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          action: 'update_cart_item',
          cart_item_key: key,
          quantity: this.qty
        })
      }).then(() => {
        document.dispatchEvent(new CustomEvent('refresh-cart-totals'));
      });
    },

    toggleItem() {
      if (this.qty > 0) {
        this.visible = false;
        this.updateQty(0);
      }
    }
  }));
});
</script>

<script>
document.addEventListener('refresh-cart-totals', () => {
  fetch(window.location.href).then(res => res.text()).then(html => {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    const newTotals = temp.querySelector('#cart-totals-wrapper');
    document.querySelector('#cart-totals-wrapper').innerHTML = newTotals.innerHTML;
  });
});
</script>

<?php include get_template_directory() . '/layouts/footer.php'; ?>
