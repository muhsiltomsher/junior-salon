document.addEventListener('DOMContentLoaded', function() {
    let page = 2;
    const loadMoreBtn = document.getElementById('load-more');
    const productGrid = document.getElementById('product-grid');

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            fetch(loadmore_params.ajaxurl + '?action=load_more_products&page=' + page)
                .then(response => response.text())
                .then(data => {
                    if (data.trim() === '') {
                        loadMoreBtn.style.display = 'none';
                    } else {
                        productGrid.insertAdjacentHTML('beforeend', data);
                        page++;
                    }
                })
                .catch(error => console.error('Error loading more products:', error));
        });
    }
});