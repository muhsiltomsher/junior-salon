<footer class="bg-gray-900 text-white py-12 px-6 font-sans">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
    
    <!-- Brand & Links -->
    <div class="flex-1 min-w-[250px]">
      <?php 
        if (has_custom_logo()) {
          $logo_id = get_theme_mod('custom_logo');
          $logo_width = get_theme_mod('logo_width', 150); // Default width
          $logo_url = wp_get_attachment_image_src($logo_id, 'full');
          if ($logo_url) {
            echo '<img src="' . esc_url($logo_url[0]) . '" style="width:' . esc_attr($logo_width) . 'px;" alt="' . get_bloginfo('name') . '">';
          }
        } else {
          echo '<h1 class="text-2xl font-bold"><a href="' . esc_url(home_url('/')) . '">' . get_bloginfo('name') . '</a></h1>';
        }
      ?>
      <p class="mt-4"><?php bloginfo('description'); ?></p>

      <!-- Footer Menus -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-sm text-gray-300">
        <div>
          <h4 class="font-semibold mb-2 text-white">SHOP</h4>
          <?php
            wp_nav_menu(array(
              'theme_location' => 'footer1',
              'container' => false,
              'menu_class' => 'space-y-4',
              'fallback_cb' => false,
            ));
          ?>
        </div>
        <div>
          <h4 class="font-semibold mb-2 text-white">INFORMATION</h4>
          <?php
            wp_nav_menu(array(
              'theme_location' => 'footer2',
              'container' => false,
              'menu_class' => 'space-y-4',
              'fallback_cb' => false,
            ));
          ?>
        </div>
        <div>
          <h4 class="font-semibold mb-2 text-white">CUSTOMER CARE</h4>
          <?php
            wp_nav_menu(array(
              'theme_location' => 'footer3',
              'container' => false,
              'menu_class' => 'space-y-4',
              'fallback_cb' => false,
            ));
          ?>
        </div>
      </div>
    </div>

    <!-- Newsletter + Image -->
    <div class="flex-1 min-w-[300px]">
      <img src="https://tomsher.co/junior-salon/wp-content/uploads/2025/04/c2ed4663d503957fd55962841ea382a0351506cf.png" alt="Kidswear promo" class="rounded-xl w-full mb-6" />
      <h3 class="text-lg font-semibold mb-1">KEEP ME UPDATED</h3>
      <p class="text-sm text-gray-300 mb-4">Subscribe to get notified about product launches, special offers and company news.</p>
      <form class="flex">
        <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-2 rounded-l-md border-none text-black" />
        <button type="submit" class="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-r-md hover:bg-yellow-300">Subscribe</button>
      </form>
    </div>
  </div>

  <!-- Social + Payment + Copyright -->
  <div class="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">

    <!-- Social Links -->
    <div class="flex items-center gap-4">
      <span class="text-white font-semibold text-sm">STAY IN TOUCH</span>
		
<?php
// Get the social media URLs from the Customizer
$facebook_url = get_theme_mod('facebook_url');
$twitter_url = get_theme_mod('twitter_url');
$instagram_url = get_theme_mod('instagram_url');

// Display the social media links with Font Awesome icons and Tailwind CSS
echo '<div class="flex justify-center gap-6 mt-6">';

if ($facebook_url) {
    echo '<a href="' . esc_url($facebook_url) . '" target="_blank" class="text-gray-700 hover:text-blue-600 text-3xl transform hover:scale-110 transition-all duration-300"><i class="fab fa-facebook"></i></a>';
}

if ($twitter_url) {
    echo '<a href="' . esc_url($twitter_url) . '" target="_blank" class="text-gray-700 hover:text-blue-400 text-3xl transform hover:scale-110 transition-all duration-300"><i class="fab fa-twitter"></i></a>';
}

if ($instagram_url) {
    echo '<a href="' . esc_url($instagram_url) . '" target="_blank" class="text-gray-700 hover:text-pink-600 text-3xl transform hover:scale-110 transition-all duration-300"><i class="fab fa-instagram"></i></a>';
}

echo '</div>';
?>

		
		
    </div>

    <!-- Payment Cards -->
    <div class="flex items-center gap-2">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" class="h-6" alt="Visa">
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" class="h-6" alt="Mastercard">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Pay_Logo.svg" class="h-6" alt="GPay">
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" class="h-6" alt="Apple Pay">
    </div>
  </div>

  <!-- Bottom -->
  <div class="text-center text-gray-500 mt-4 text-xs">
    <?php 
      $custom_copyright = get_theme_mod('junior_salon_footer_copyright');
      echo $custom_copyright ? esc_html($custom_copyright) : '&copy; ' . date("Y") . ' ' . get_bloginfo('name') . '. All rights reserved. | Designed by tomsher';
    ?>
  </div>
</footer>

    <?php wp_footer(); ?>
</body>
</html>
    <!-- Custom JavaScript for Toggling Mobile Menu -->
    <script>
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden'); // Toggle the visibility of the mobile menu
        });
    </script>
    
<?php wp_footer(); ?>