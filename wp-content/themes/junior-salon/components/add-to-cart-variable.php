<?php
defined('ABSPATH') || exit;

global $product;

$available_variations = $product->get_available_variations();
$attributes = $product->get_variation_attributes();
$selected_attributes = $product->get_default_attributes();
?>

<form class="variations_form cart space-y-4"
      action="<?php echo esc_url(apply_filters('woocommerce_add_to_cart_form_action', $product->get_permalink())); ?>"
      method="post" enctype='multipart/form-data'
      data-product_id="<?php echo absint($product->get_id()); ?>"
      data-product_variations="<?php echo wc_esc_json(wp_json_encode($available_variations)); ?>">

    <?php foreach ($attributes as $attribute_name => $options) :
        if ($attribute_name !== 'pa_size') continue;
        $sanitized_name = sanitize_title($attribute_name);
    ?>
        <div>
            <p class="mb-1 text-sm font-semibold text-gray-700">
                <?php echo wc_attribute_label($attribute_name); ?>
            </p>
            <div class="flex flex-wrap gap-2">
                <?php foreach ($options as $option) :
                    $id = $sanitized_name . '-' . sanitize_title($option);
                    $checked = (isset($selected_attributes[$attribute_name]) && $selected_attributes[$attribute_name] === $option) ? 'checked' : '';
                ?>
                    <label for="<?php echo esc_attr($id); ?>" class="cursor-pointer">
                        <input type="radio"
                               name="attribute_<?php echo esc_attr($sanitized_name); ?>"
                               value="<?php echo esc_attr($option); ?>"
                               id="<?php echo esc_attr($id); ?>"
                               class="hidden peer"
                               <?php echo $checked; ?> />
                        <div class="px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-800 peer-checked:bg-blue-600 peer-checked:text-white transition-colors duration-200">
                            <?php echo esc_html($option); ?>
                        </div>
                    </label>
                <?php endforeach; ?>
            </div>
        </div>
    <?php endforeach; ?>

    <button type="submit"
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
            data-quantity="1"
            name="add-to-cart"
            value="<?php echo esc_attr($product->get_id()); ?>">
        <?php echo esc_html($product->single_add_to_cart_text()); ?>
    </button>
</form>
