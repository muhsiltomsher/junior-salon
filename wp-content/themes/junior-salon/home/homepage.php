<section id="shop">
  <div class="container mx-auto text-center">

    <?php get_template_part('components/shopby-category'); ?>
    <?php get_template_part('components/shopby-brands'); ?>
    <?php get_template_part('components/products/tab-wrapper'); ?>
    <?php get_template_part('components/shopby-age'); ?>
    <?php get_template_part('components/products/popular-picks'); ?>
    <?php get_template_part('components/home-banner-category'); ?>
    <?php get_template_part('components/home-features-banner'); ?>
    <?php get_template_part('components/testimonials-listing'); ?>

  </div>
</section>
<script>
  const ajaxurl = "<?php echo esc_url(admin_url('admin-ajax.php')); ?>";

  document.addEventListener("DOMContentLoaded", function () {
    // entire lazy load logic removed
  });
</script>
