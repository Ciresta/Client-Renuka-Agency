const hamburgerIcon = document.getElementById('hamburger-icon');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close-sidebar');

// Open Sidebar
hamburgerIcon.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
});

// Close Sidebar
closeSidebar.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
});
