document.addEventListener("DOMContentLoaded", function() {
    initMobileMenu();
    initGallery();
});

function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    if (menuToggle && menuIcon && navbar) {
        menuToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
            if (navbar.classList.contains('active')) {
                menuIcon.classList.replace('bx-menu', 'bx-x');
            } else {
                menuIcon.classList.replace('bx-x', 'bx-menu');
            }
        });

        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 991) {
                    navbar.classList.remove('active');
                    menuIcon.classList.replace('bx-x', 'bx-menu');
                }
            });
        });
    } else {
        console.error("Mobile menu elements not found!");
    }
}

function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const closeButtons = document.querySelectorAll('.close-btn');

    galleryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.classList.contains('close-btn')) return;
            this.classList.toggle('fullscreen');
            document.body.style.overflow = this.classList.contains('fullscreen') ? 'hidden' : '';
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.closest('.gallery-item').classList.remove('fullscreen');
            document.body.style.overflow = '';
        });
    });
}


