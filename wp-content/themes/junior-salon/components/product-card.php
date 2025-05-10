<?php
/**
 * Product Card with AJAX Variation Add to Cart + Wishlist + Hover Swatch
 */

defined('ABSPATH') || exit;

global $product;
if (!isset($product) || !is_a($product, 'WC_Product')) {
    $product = wc_get_product(get_the_ID());
}

$attachment_ids = $product->get_gallery_image_ids();
$hover_image_id = $attachment_ids[0] ?? null;
if ($product->is_type('variable')) {
    $variations = $product->get_available_variations();
    $attributes = $product->get_variation_attributes();
} else {
    $variations = [];
    $attributes = [];
}
?>

<div class="overflow-hidden flex flex-col relative group">
    <div class="relative block overflow-hidden group">
        <img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'medium'); ?>"
             class="w-full h-[500px] object-cover transition-opacity duration-300 group-hover:opacity-0"
             alt="<?php the_title_attribute(); ?>" />

        <?php if ($hover_image_id): ?>
            <img src="<?php echo wp_get_attachment_image_url($hover_image_id, 'medium'); ?>"
                 class="w-full h-[500px] object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                 alt="<?php the_title_attribute(); ?>" />
        <?php endif; ?>

        <!-- Wishlist Icon -->
        <button
            class="wishlist-toggle absolute top-3 right-3 z-10 bg-white border border-gray-300 rounded-full shadow-md p-2 w-[40px] h-[40px] flex items-center justify-center transition-all"
            aria-label="Add to wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                class="w-[25px] h-[25px] fill-current text-transparent stroke-black stroke-2 transition-all duration-300 transform">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
            4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 
            2.09C13.09 3.81 14.76 3 16.5 
            3 19.58 3 22 5.42 22 
            8.5c0 3.78-3.4 6.86-8.55 
            11.54L12 21.35z" />
            </svg>
        </button>

        <!-- Variation Swatches + Cart -->
        <?php if ($product->is_type('variable') && !empty($attributes)) : ?>
        <div class="absolute bottom-0 left-0 right-0 bg-white/95 text-black py-3 px-[10px] opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
            <?php foreach ($attributes as $attr_key => $options): ?>
                <div class="mb-1 text-[10px] font-semibold uppercase"><?php echo wc_attribute_label($attr_key); ?></div>
                <div class="flex flex-wrap justify-center gap-[8px] variation-hover-form mb-[10px]"
                     data-variations='<?php echo wp_json_encode($variations); ?>'
                     data-attr-key="<?php echo esc_attr($attr_key); ?>">
                    <?php foreach ($options as $opt): ?>
                        <label class="cursor-pointer transition">
                            <input type="radio" name="hover_attribute_<?php echo esc_attr($attr_key); ?>"
                                   value="<?php echo esc_attr($opt); ?>" class="sr-only peer">
                            <span class="px-[10px] py-1 border border-gray-400 rounded-full text-[10px] uppercase text-black peer-checked:bg-[#DEAF27] peer-checked:text-white peer-checked:border-[#DEAF27] transition">
                                <?php echo esc_html($opt); ?>
                            </span>
                        </label>
                    <?php endforeach; ?>
                </div>
            <?php endforeach; ?>

            <div class="flex justify-center gap-2 mt-2">
                <form class="variation-cart-form flex w-full max-w-[300px]" method="post">
                    <input type="hidden" name="variation_id" value="">
                    <button type="submit" class="flex-1 text-xs uppercase px-4 py-1.5 bg-black text-white border border-black hover:bg-transparent hover:text-black transition add-to-cart-btn" data-type="add">Add to Cart</button>
                    <button type="submit" class="flex-1 text-xs uppercase px-4 py-1.5 bg-black text-white border border-black hover:bg-transparent hover:text-black transition add-to-cart-btn" data-type="buy">Buy Now</button>
                </form>
            </div>
        </div>
        <?php endif; ?>
    </div>

    <!-- Brand -->
    <?php
    $brands = wp_get_post_terms(get_the_ID(), 'product_brand');
    if (!empty($brands) && !is_wp_error($brands)) {
        echo '<div class="text-xs text-center text-gray-500 mt-2">' . esc_html($brands[0]->name) . '</div>';
    }
    ?>

    <!-- Title & Price -->
    <h2 class="text-xs text-center font-medium mt-1 !text-gray-800">
        <a href="<?php the_permalink(); ?>" class="!text-gray-800 no-underline hover:underline transition-colors duration-200">
            <?php the_title(); ?>
        </a>
    </h2>
    <div class="text-sm text-center font-bold text-gray-900 mb-2">
        <?php echo $product->get_price_html(); ?>
    </div>
</div>

<script>
jQuery(document).ready(function($) {
    $(document).on('change', '.variation-hover-form input[type="radio"]', function() {
        const $form = $(this).closest('.variation-hover-form');
        const selectedValue = $(this).val();
        const variations = $form.data('variations');
        const attrKey = $form.data('attr-key');

        const matched = variations.find(v => v.attributes[attrKey] === selectedValue);
        if (matched) {
            $form.closest('.variation-cart-form').find('input[name="variation_id"]').val(matched.variation_id);
        }
    });

    $(document).on('submit', '.variation-cart-form', function(e) {
        e.preventDefault();
        const form = $(this);
        const variationId = form.find('input[name="variation_id"]').val();
        const isBuyNow = $(document.activeElement).data('type') === 'buy';

        if (!variationId) {
            alert('Please select a size first.');
            return;
        }

        $.ajax({
            url: wc_add_to_cart_params.ajax_url,
            type: 'POST',
            data: {
                action: 'woocommerce_ajax_add_to_cart',
                product_id: <?php echo absint($product->get_id()); ?>,
                variation_id: variationId,
                quantity: 1
            },
            success: function(response) {
                if (response && response.fragments) {
                    $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, variationId]);
                    if (isBuyNow) {
                        window.location.href = wc_add_to_cart_params.cart_url;
                    }
                }
            },
            error: function() {
                alert('There was an error adding the product to the cart.');
            }
        });
    });


    // Wishlist icon toggle
    jQuery(document).ready(function($) {
        $(document).on('click', '.wishlist-toggle', function() {
            const $svg = $(this).find('svg');
            const $btn = $(this);
            const isActive = $svg.hasClass('text-pink-500');

            // Animate fill pop effect
            $svg.addClass('scale-150');
            setTimeout(() => $svg.removeClass('scale-150'), 150);

            if (isActive) {
                $svg.removeClass('text-pink-500 stroke-pink-500').addClass(
                    'text-transparent stroke-black');
                $btn.removeClass('border-pink-500').addClass('border-gray-300');
            } else {
                $svg.removeClass('text-transparent stroke-black').addClass(
                    'text-pink-500 stroke-pink-500');
                $btn.removeClass('border-gray-300').addClass('border-pink-500');
            }
        });
    });
});
</script>