<footer class="bg-[#1f1f1f] text-white font-sans text-sm pt-10">
  <div class="mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
    <!-- Left: Logo + Menus -->
    
    
    <div>
      <?php 
        if (has_custom_logo()) {
          $logo_id = get_theme_mod('custom_logo');
          $logo_url = wp_get_attachment_image_src($logo_id, 'medium')[0];
          $webp_url = str_replace(['.jpg', '.png'], '.webp', $logo_url);
          ?>
          <picture>
            <source srcset="<?php echo esc_url($webp_url); ?>" type="image/webp">
            <img src="<?php echo esc_url($logo_url); ?>" alt="Logo" class="mb-2" style="width: 160px; height: auto;">
          </picture>
        <?php } ?>
      <p class="text-xs uppercase tracking-widest text-[#c1c1c1] mb-6">Luxury Kidswear</p>



<div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
  <div>
    <h4 class="uppercase font-semibold text-white text-xs mb-3">SHOP</h4>
    <?php wp_nav_menu([
      'theme_location' => 'footer1',
      'container' => false,
      'menu_class' => 'space-y-2 list-none text-sm',
      'depth' => 1,
      'fallback_cb' => false,
      'link_class' => 'text-white hover:text-yellow-400 transition-colors no-underline',
    ]); ?>
  </div>
  <div>
    <h4 class="uppercase font-semibold text-white text-xs mb-3">INFORMATION</h4>
    <?php wp_nav_menu([
      'theme_location' => 'footer2',
      'container' => false,
      'menu_class' => 'space-y-2 list-none text-sm',
      'depth' => 1,
      'fallback_cb' => false,
      'link_class' => 'text-white hover:text-yellow-400 transition-colors no-underline',
    ]); ?>
  </div>
  <div>
    <h4 class="uppercase font-semibold text-white text-xs mb-3">CUSTOMER CARE</h4>
    <?php wp_nav_menu([
      'theme_location' => 'footer3',
      'container' => false,
      'menu_class' => 'space-y-2 list-none text-sm',
      'depth' => 1,
      'fallback_cb' => false,
      'link_class' => 'text-white hover:text-yellow-400 transition-colors no-underline',
    ]); ?>
  </div>
</div>





    </div>

    <!-- Right: Promo image + Newsletter -->
    <div>
      <?php 
        $promo_image = get_theme_mod('footer_promo_image', 'https://tomsher.co/junior-salon/wp-content/uploads/2025/04/c2ed4663d503957fd55962841ea382a0351506cf.png');
        $webp_promo = str_replace(['.jpg', '.png'], '.webp', $promo_image);
      ?>
      <picture>
        <source srcset="<?php echo esc_url($webp_promo); ?>" type="image/webp">
        <img src="<?php echo esc_url($promo_image); ?>" alt="Promo" class="rounded-xl w-full mb-4">
      </picture>

      <p class="text-xs text-gray-400 tracking-wide mb-1">KEEP ME UPDATED</p>
      <h3 class="text-xl font-semibold mb-2">Newsletter</h3>
      <p class="text-sm text-gray-300 mb-4">Subscribe to get notified about product launches, special offers and company news.</p>

 <?php echo do_shortcode('[wpforms id="573"]'); ?>
    </div>
  </div>

  <!-- Bottom: Social & Payments -->
  <div class="max-w-7xl mx-auto px-6 md:px-8 mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
    <div class="flex items-center gap-4">
      <span class="text-white text-sm font-semibold">STAY IN TOUCH</span>
      <div class="flex gap-4 text-2xl text-gray-300">
        <?php
          $social_links = [
            'facebook_url' => ['icon' => 'fab fa-facebook', 'hover' => 'hover:text-blue-600'],
            'instagram_url' => ['icon' => 'fab fa-instagram', 'hover' => 'hover:text-pink-500'],
            'youtube_url' => ['icon' => 'fab fa-youtube', 'hover' => 'hover:text-red-600'],
          ];
          foreach ($social_links as $key => $val) {
            $url = get_theme_mod($key);
            if ($url) {
              echo '<a href="'. esc_url($url) .'" class="'. esc_attr($val['hover']) .' transition-all transform hover:scale-110" target="_blank"><i class="'. esc_attr($val['icon']) .'"></i></a>';
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
          ['url' => 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Pay_Logo.svg', 'alt' => 'Google Pay'],
          ['url' => 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', 'alt' => 'Apple Pay'],
          ['url' => 'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg', 'alt' => 'Amex'],
        ];
        foreach ($payment_icons as $icon) {
          echo '<img src="'. esc_url($icon['url']) .'" alt="'. esc_attr($icon['alt']) .'" class="h-5 w-auto" loading="lazy">';
        }
      ?>
    </div>
  </div>

  <!-- Copyright -->
  <div class="text-center text-xs text-gray-500 mt-4 mb-4">
    <?php 
      echo esc_html(get_theme_mod('junior_salon_footer_copyright', '© ' . date('Y') . ' Juniorsalon. All rights reserved | Designed by tomsher'));
    ?>
  </div>

  <!-- Back to Top -->
  <a href="#top" class="fixed bottom-4 right-4 bg-black text-white p-2 rounded hover:bg-yellow-400 transition-all" title="Back to top">
    <i class="fas fa-arrow-up"></i>
  </a>
</footer>


<script>
document.addEventListener('DOMContentLoaded', function () {
  const overrideLabels = () => {
    document.querySelectorAll('.yith-wcwl-add-to-wishlist-button__label').forEach(label => {
      const current = label.textContent.trim().toLowerCase();
      if (current === 'add to wishlist') {
        label.textContent = 'Move to Wishlist';
      } else if (current === 'product added!') {
        label.textContent = 'Added to Wishlist';
      } else if (current === 'browse wishlist') {
        label.textContent = 'Already in Wishlist';
      }
    });
  };

  // Initial override
  overrideLabels();

  // Observe future changes
  const observer = new MutationObserver(overrideLabels);
  observer.observe(document.body, { childList: true, subtree: true });
});
</script>


<?php wp_footer(); ?>
