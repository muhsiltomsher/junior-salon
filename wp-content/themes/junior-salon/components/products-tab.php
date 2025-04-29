<div class="bg-white py-8 px-4">
  <div class="max-w-screen-xl mx-auto">
    <!-- Tabs -->
    <div class="flex space-x-4 mb-6 border-b border-gray-200">
      <button class="tab-btn text-gray-600 border-b-2 border-transparent pb-2 hover:text-black hover:border-black active" data-cat="whats-hot">What’s Hot</button>
      <button class="tab-btn text-gray-600 border-b-2 border-transparent pb-2 hover:text-black hover:border-black" data-cat="best-seller">Best Seller</button>
      <button class="tab-btn text-gray-600 border-b-2 border-transparent pb-2 hover:text-black hover:border-black" data-cat="sale">Sale</button>
    </div>

    <!-- Products -->
    <div id="product-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
      <?php echo load_products_by_category('whats-hot'); ?>
    </div>
  </div>
</div>

<script>
  const tabs = document.querySelectorAll('.tab-btn');
  const grid = document.getElementById('product-grid');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('text-black', 'border-black', 'active'));
      tab.classList.add('text-black', 'border-black', 'active');

      const cat = tab.getAttribute('data-cat');
      fetch(`<?php echo admin_url('admin-ajax.php'); ?>?action=load_tab_products&cat=${cat}`)
        .then(res => res.text())
        .then(html => {
          grid.innerHTML = html;
        });
    });
  });
</script>