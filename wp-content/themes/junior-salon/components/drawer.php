<!-- Drawer Component (drawer.php) -->
<div id="custom-site-drawer" class="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-[9999] transform translate-x-full transition-transform duration-300 ease-in-out">
    <div class="flex justify-between items-center p-4 border-b">
        <h2 id="drawer-title" class="text-lg font-bold">Title</h2>
        <button id="drawer-close" class="text-gray-700 hover:text-black text-2xl">
            <i class="fi fi-tr-circle-xmark"></i>
        </button>
    </div>
    <div id="drawer-content" class="p-4 overflow-y-auto h-[calc(100%-64px)]">
        <!-- Dynamic content will load here -->
    </div>
</div>

<!-- Drawer Script -->
<script>
document.addEventListener('DOMContentLoaded', function () {
    const drawer = document.getElementById('drawer');
    const drawerClose = document.getElementById('close-drawer');
    const drawerContent = document.getElementById('drawer-content');

    // Open Drawer Function
    window.openDrawer = function(title, url) {
        // Slide in the drawer
        drawer.classList.remove('hidden');
        drawer.classList.add('block');

        // Set the title dynamically
        const drawerTitle = document.getElementById('drawer-title');
        drawerTitle.innerText = title;

        // Fetch dynamic content (sort or filter)
        fetch(url)
            .then(response => response.text())
            .then(html => {
                drawerContent.innerHTML = html;
            })
            .catch(error => {
                drawerContent.innerHTML = '<div class="text-red-500 p-4">Failed to load content.</div>';
            });
    };

    // Close Drawer Function
    if (drawerClose) {
        drawerClose.addEventListener('click', function () {
            drawer.classList.remove('block');
            drawer.classList.add('hidden');
        });
    }
});
</script>
