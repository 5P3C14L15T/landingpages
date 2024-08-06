document.addEventListener('DOMContentLoaded', function () {
    const slides = [
        {
            title: 'Entrada',
            description: 'Ampla e rápida.'
        },
        {
            title: 'Área de Lazer',
            description: 'Quadras e campo de futebol.'
        },
        {
            title: 'Vista aérea',
            description: 'Disposição de todo o condomínio com.'
        },
        {
            title: 'Toda a área de lazer',
            description: 'Campo, quadras, piscina, parque, salão de festa.'
        },
        {
            title: 'Entrada do condomínio',
            description: 'Visão da entrada do condomínio por trás da portaria.'
        },
        {
            title: 'Piscina',
            description: 'Enorme pisicna para se refrescar.'
        },
        {
            title: 'Parquinho',
            description: 'Local específico para as crianças brincarem.'
        },
        {
            title: 'Salão de festas',
            description: 'Entrada do salão de festas.'
        },
        {
            title: 'Quadra de beach tenis e Área gourmet',
            description: 'Espaço para a família se confraternizar e praticar esporte.'
        },
        {
            title: 'Espaço Gourmet',
            description: 'Espaço climatizado para reuniões e confraternizações.'
        },
        {
            title: 'Quadra de esportes',
            description: 'Quadra de futebol e basquete.'
        },
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

