<!-- Desktop Navigation Menu -->
<nav id="custom-desktop-menu" class="hidden lg:flex !flex">
    <?php
    wp_nav_menu(array(
        'theme_location' => 'primary',
        'container' => false,
        'menu_class' => '!flex !space-x-8 mt-0 mb-0 !text-primary !text-sm !font-semibold !list-none', // Added list-none
        'fallback_cb' => false,
        'walker' => new class extends Walker_Nav_Menu {
            function start_el(&$output, $item, $depth = 0, $args = [], $id = 0) {
                $classes = implode(' ', $item->classes ?? []);
                $is_active = strpos($classes, 'current-menu-item') !== false ? true : false;

                $output .= '<li class="relative group !relative">'; // No need no-underline on <li>

                $output .= '<a href="' . esc_url($item->url) . '" class="text-primary font-normal no-underline inline-block pb-0 transition-colors duration-300 ' . ($is_active ? '!text-secondary' : 'hover:!text-secondary') . '">';

                $output .= esc_html($item->title);

                $output .= '<span class="absolute left-0 bottom-0 h-0.5 bg-secondary transition-all duration-300 ' . ($is_active ? 'w-full' : 'w-0 group-hover:w-full') . '"></span>';

                $output .= '</a></li>';
            }
        },
    ));
    ?>
</nav>
