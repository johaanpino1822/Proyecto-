document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('.nav-links a, .button a');

    // Carrusel
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    const showSlide = (index) => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    };

    document.querySelector('.next').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    // Auto-slide
    const autoSlide = () => {
        showSlide(currentSlide + 1);
    };

    let slideInterval = setInterval(autoSlide, 3000); // Cambia de imagen cada 3 segundos

    // Pausar el carrusel al hacer clic en los controles
    document.querySelector('.next').addEventListener('click', () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(autoSlide, 3000);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(autoSlide, 3000);
    });

    // Navigation toggle
    menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
            navLinks.classList.add('active');
        } else {
            navLinks.classList.remove('active');
        }
    });

    // Section toggle
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');

            sections.forEach(section => {
                if (section.id === sectionId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });

            menuToggle.checked = false;
            navLinks.classList.remove('active');
            
        });
    });
});
