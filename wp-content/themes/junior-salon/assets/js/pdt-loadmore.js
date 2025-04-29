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


document.addEventListener("DOMContentLoaded", function() {
    const openDrawerButton = document.getElementById('open-drawer');
    const closeDrawerButton = document.getElementById('close-drawer');
    const drawer = document.getElementById('drawer');
    const drawerContent = document.getElementById('drawer-content');

    // Function to open the drawer
    window.openDrawer = function(title, url) {
        // Set the title if needed (Optional)
        document.title = title;

        // Fetch the content from the given URL (PHP file)
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // Insert the fetched content into the drawer
                drawerContent.innerHTML = data;

                // Show the drawer with animation
                drawer.classList.remove('hidden');
                setTimeout(() => {
                    drawerContent.closest('div').style.transform = 'translateX(0)';
                }, 10);
            })
            .catch(error => console.error('Error fetching drawer content:', error));
    };

    // Close the drawer
    closeDrawerButton.addEventListener('click', function() {
        drawerContent.closest('div').style.transform = 'translateX(100%)';
        setTimeout(() => {
            drawer.classList.add('hidden'); // Hide the drawer after animation
        }, 300); // Wait for the animation to finish before hiding
    });

    // Optionally, close the drawer if the user clicks outside the drawer area (on the overlay)
    drawer.addEventListener('click', function(e) {
        if (e.target === drawer) {
            closeDrawerButton.click();
        }
    });
});