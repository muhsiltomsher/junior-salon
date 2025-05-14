<footer class="bg-gray-900 text-white py-8 px-4 font-sans">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
    <!-- Brand & Links -->
    <div class="flex-1 min-w-[250px]">
      <?php 
        if (has_custom_logo()) {
          $logo_id = get_theme_mod('custom_logo');
          $logo_width = get_theme_mod('logo_width', 150);
          $logo_url = wp_get_attachment_image_src($logo_id, 'medium')[0]; // Use medium size
          $webp_url = str_replace(['.jpg', '.png'], '.webp', $logo_url);
          ?>
          <picture>
            <source srcset="<?php echo esc_url($webp_url); ?>" type="image/webp">
            <img src="<?php echo esc_url($logo_url); ?>" 
                 style="width:<?php echo esc_attr($logo_width); ?>px; height:auto;" 
                 alt="<?php echo esc_attr(get_bloginfo('name')); ?>" 
                 loading="lazy" 
                 class="mb-4">
          </picture>
          <?php
        } else {
          ?>
          <h1 class="text-2xl font-bold">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="hover:text-gray-300"><?php echo esc_html(get_bloginfo('name')); ?></a>
          </h1>
          <?php
        }
      ?>
      <p class="mt-2 text-gray-300 text-sm"><?php echo esc_html(get_bloginfo('description')); ?></p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-sm text-gray-300">
        <div>
          <h4 class="font-semibold mb-2 text-white">SHOP</h4>
          <?php 
            wp_nav_menu([
              'theme_location' => 'footer1', 
              'container' => false, 
              'menu_class' => 'space-y-2', 
              'depth' => 1,
              'fallback_cb' => false,
            ]); 
          ?>
        </div>
        <div>
          <h4 class="font-semibold mb-2 text-white">INFORMATION</h4>
          <?php 
            wp_nav_menu([
              'theme_location' => 'footer2', 
              'container' => false, 
              'menu_class' => 'space-y-2', 
              'depth' => 1,
              'fallback_cb' => false,
            ]); 
          ?>
        </div>
        <div>
          <h4 class="font-semibold mb-2 text-white">CUSTOMER CARE</h4>
          <?php 
            wp_nav_menu([
              'theme_location' => 'footer3', 
              'container' => false, 
              'menu_class' => 'space-y-2', 
              'depth' => 1,
              'fallback_cb' => false,
            ]); 
          ?>
        </div>
      </div>
    </div>

    <!-- Newsletter -->
    <div class="flex-1 min-w-[250px]">
      <?php 
        $promo_image = get_theme_mod('footer_promo_image', 'https://tomsher.co/junior-salon/wp-content/uploads/2025/04/c2ed4663d503957fd55962841ea382a0351506cf.png');
        $webp_promo = str_replace(['.jpg', '.png'], '.webp', $promo_image);
      ?>
      <picture>
        <source srcset="<?php echo esc_url($webp_promo); ?>" type="image/webp">
        <img src="<?php echo esc_url($promo_image); ?>" 
             alt="Kidswear promo" 
             class="rounded-xl w-full mb-4" 
             loading="lazy">
      </picture>
      <h3 class="text-lg font-semibold mb-1">KEEP ME UPDATED</h3>
      <p class="text-sm text-gray-300 mb-4">Subscribe to get notified about product launches, special offers, and company news.</p>
      <form action="<?php echo esc_url(admin_url('admin-ajax.php')); ?>" method="POST" class="flex" x-data="newsletterForm">
        <input type="email" 
               name="email" 
               placeholder="Enter your email" 
               class="flex-1 px-4 py-2 rounded-l-md border-none text-black focus:ring-2 focus:ring-yellow-400" 
               x-model="email" 
               required>
        <input type="hidden" name="action" value="newsletter_subscribe">
        <?php wp_nonce_field('newsletter_subscribe', 'newsletter_nonce'); ?>
        <button type="submit" 
                class="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-r-md hover:bg-yellow-300 transition-colors"
                :disabled="submitting"
                x-text="submitting ? 'Subscribing...' : 'Subscribe'">
          Subscribe
        </button>
      </form>
    </div>
  </div>

  <!-- Social + Payment -->
  <div class="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
    <div class="flex items-center gap-4">
      <span class="text-white font-semibold text-sm">STAY IN TOUCH</span>
      <div class="flex gap-4">
        <?php
          $social_links = [
            'facebook_url' => ['icon' => 'fab fa-facebook', 'hover' => 'hover:text-blue-600'],
            'twitter_url' => ['icon' => 'fab fa-twitter', 'hover' => 'hover:text-blue-400'],
            'instagram_url' => ['icon' => 'fab fa-instagram', 'hover' => 'hover:text-pink-600'],
          ];
          foreach ($social_links as $key => $data) {
            $url = get_theme_mod($key);
            if ($url) {
              printf(
                '<a href="%s" target="_blank" class="text-gray-300 %s text-2xl transform hover:scale-110 transition-all duration-300"><i class="%s"></i></a>',
                esc_url($url),
                esc_attr($data['hover']),
                esc_attr($data['icon'])
              );
            }
          }
        ?>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <?php
        $payment_icons = [
          ['url' => 'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg', 'alt' => 'Visa'],
          ['url' => 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg', 'alt' => 'Mastercard'],
          ['url' => 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Pay_Logo.svg', 'alt' => 'GPay'],
          ['url' => 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', 'alt' => 'Apple Pay'],
        ];
        foreach ($payment_icons as $icon) {
          ?>
          <img src="<?php echo esc_url($icon['url']); ?>" 
               alt="<?php echo esc_attr($icon['alt']); ?>" 
               class="h-5 w-auto" 
               loading="lazy">
          <?php
        }
      ?>
    </div>
  </div>

  <!-- Copyright -->
  <div class="text-center text-gray-500 mt-4 text-xs">
    <?php 
      $custom_copyright = get_theme_mod('junior_salon_footer_copyright');
      echo esc_html($custom_copyright ?: '© ' . date('Y') . ' ' . get_bloginfo('name') . '. All rights reserved.');
    ?>
  </div>
</footer>

<!-- JS & Footer Hooks -->
<?php wp_footer(); ?>

<!-- Inline Scripts -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Drawer Functions
    window.openDrawer = (id) => {
      const drawer = document.getElementById(id);
      const content = drawer?.querySelector('.drawer-content');
      if (drawer && content) {
        drawer.classList.remove('hidden');
        setTimeout(() => content.classList.remove('translate-x-full'), 10);
      }
    };

    window.closeDrawer = (id) => {
      const drawer = document.getElementById(id);
      const content = drawer?.querySelector('.drawer-content');
      if (drawer && content) {
        content.classList.add('translate-x-full');
        setTimeout(() => drawer.classList.add('hidden'), 300);
      }
    };
  });
</script>

<?php
// Cache drawer content
$cache_key = 'drawer_content';
$cached_drawers = get_transient($cache_key);
if (false === $cached_drawers) {
  ob_start();
  get_template_part('components/drawers/myaccount');
  get_template_part('components/drawers/drawer', null, [
    'id' => 'drawer-search',
    'title' => 'Search',
    'content' => do_shortcode('[fibosearch]')
  ]);
  $cached_drawers = ob_get_clean();
  set_transient($cache_key, $cached_drawers, DAY_IN_SECONDS);
}
echo $cached_drawers;
?>

<!-- AJAX Logic -->
<script>
  window.wpData = {
    ajaxurl: "<?php echo esc_url(admin_url('admin-ajax.php')); ?>",
    nonce: "<?php echo wp_create_nonce('ajax-nonce'); ?>"
  };

  // Alpine.js component for newsletter form
  document.addEventListener('alpine:init', () => {
    Alpine.data('newsletterForm', () => ({
      email: '',
      submitting: false,
      async submitForm() {
        this.submitting = true;
        try {
          const response = await fetch(wpData.ajaxurl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
              action: 'newsletter_subscribe',
              email: this.email,
              newsletter_nonce: wpData.nonce
            })
          });
          const data = await response.json();
          if (data.success) {
            alert('Subscribed successfully!');
            this.email = '';
          } else {
            alert(data.data?.message || 'Subscription failed.');
          }
        } catch (error) {
          alert('An error occurred.');
        }
        this.submitting = false;
      }
    }));
  });
</script>
</body>
</html>