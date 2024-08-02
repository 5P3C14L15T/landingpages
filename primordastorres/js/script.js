document.addEventListener('DOMContentLoaded', function () {
    const titles = [
        "Título Dinâmico 1",
        "Título Dinâmico 2",
        "Título Dinâmico 3"
    ];

    const descriptions = [
        "Descrição correspondente ao slide 1.",
        "Descrição correspondente ao slide 2.",
        "Descrição correspondente ao slide 3."
    ];

    const dynamicTitle = document.querySelector('#slideshow-info .dynamic-title');
    const dynamicDescription = document.querySelector('#slideshow-info p');

    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');

    let currentIndex = 0;

    function updateContent(index) {
        dynamicTitle.textContent = titles[index];
        dynamicDescription.textContent = descriptions[index];
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? titles.length - 1 : currentIndex - 1;
        updateContent(currentIndex);
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex === titles.length - 1) ? 0 : currentIndex + 1;
        updateContent(currentIndex);
    });

    updateContent(currentIndex);
});
