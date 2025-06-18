// Navbar behavior
const NavbarManager = {
    init() {
        try {
            const navbar = document.getElementById('navbar');
            const mobileMenu = document.getElementById('mobile-menu');
            const navLinks = document.getElementById('navbarNav');
            const logo = document.getElementById('logo');
            if (!navbar || !mobileMenu || !navLinks || !logo) return;

            let lastScrollTop = 0;
            let scrollTimeout;

            window.addEventListener('scroll', () => {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    let scrollTop = window.scrollY || document.documentElement.scrollTop;
                    if (scrollTop > lastScrollTop && scrollTop > 200) {
                        navbar.classList.add('visible');
                    } else {
                        navbar.classList.remove('visible');
                    }
                    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
                }, 50);
            });

            mobileMenu.addEventListener('click', () => {
                navLinks.classList.toggle('show');
                mobileMenu.querySelector('.navbar-toggler-icon').classList.toggle('active');
                logo.classList.toggle('hidden');
            });
        } catch (error) {
            console.error('Error initializing navbar:', error);
        }
    }
};
// Initialize NavbarManager after DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    NavbarManager.init();
});