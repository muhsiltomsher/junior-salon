<div class="py-10">    <h2 class="text-3xl font-bold mb-6">Customer Experiences </h2>

    <div class="container mx-auto px-4">
        <div id="testimonial-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php
            // Load the initial 3 testimonials on page load
            $query = new WP_Query([
                'post_type' => 'testimonial',
                'posts_per_page' => 3,
                'paged' => 1
            ]);

            if ($query->have_posts()) :
                while ($query->have_posts()) : $query->the_post();
                    $rating = get_field('rating');
                    ?>
                    <div class="bg-white shadow rounded-lg p-6">
                        <?php if (has_post_thumbnail()) : ?>
                           <img src="<?php the_post_thumbnail_url('medium'); ?>" class="w-full h-48 object-cover rounded-md mb-4" alt="">

                        <?php endif; ?>
                        <h3 class="text-lg font-semibold mb-1"><?php the_title(); ?></h3>
                        <div class="text-yellow-400 mb-2">
                            <?php for ($i = 0; $i < 5; $i++) : ?>
                                <span><?php echo $i < $rating ? '★' : '☆'; ?></span>
                            <?php endfor; ?>
                        </div>
                        <p class="text-gray-700 text-sm"><?php the_content(); ?></p>
                    </div>
                    <?php
                endwhile;
            endif;
            wp_reset_postdata();
            ?>
        </div>

        <div class="text-center mt-6">
            <button id="load-more-testimonials" class="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                Load More
            </button>
        </div>
    </div>
</div>

<script>
let page = 2; // Start from page 2 because first 3 are already shown
const loadMoreBtn = document.getElementById('load-more-testimonials');
const container = document.getElementById('testimonial-container');

function loadTestimonials() {
    fetch(`<?php echo admin_url('admin-ajax.php'); ?>?action=load_testimonials&page=${page}`)
        .then(res => res.text())
        .then(html => {
            if (html.trim() === '') {
                loadMoreBtn.style.display = 'none';
            } else {
                container.insertAdjacentHTML('beforeend', html);
                page++;
            }
        });
}

loadMoreBtn.addEventListener('click', loadTestimonials);
</script>