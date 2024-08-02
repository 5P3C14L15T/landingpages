document.addEventListener('DOMContentLoaded', function () {
    const slides = [
        {
            title: 'Título Dinâmico 1',
            description: 'Descrição correspondente ao slide 1.'
        },
        {
            title: 'Título Dinâmico 2',
            description: 'Descrição correspondente ao slide 2.'
        },
        {
            title: 'Título Dinâmico 3',
            description: 'Descrição correspondente ao slide 3.'
        }
    ];

    let currentSlide = 0;

    const titleElement = document.querySelector('.dynamic-title');
    const descriptionElement = document.querySelector('.dynamic-description');

    function updateSlide() {
        titleElement.textContent = slides[currentSlide].title;
        descriptionElement.textContent = slides[currentSlide].description;
        document.querySelectorAll('.carousel-item').forEach((item, index) => {
            item.classList.toggle('active', index === currentSlide);
        });
        document.querySelectorAll('.carousel-indicators button').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    document.getElementById('prev-slide').addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + slides.length) < 0 ? slides.length - 1 : (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    });

    document.getElementById('next-slide').addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    });

    updateSlide(); // Initialize the first slide
});

