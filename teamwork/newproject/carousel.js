const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function moveCarousel() {
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;
    const cardWidth = document.querySelector('.card').offsetWidth;
    const numCards = document.querySelectorAll('.card').length;

    if (currentIndex < 0) {
        currentIndex = 0;
    }

    if (currentIndex > numCards - (containerWidth / cardWidth)) {
        currentIndex = numCards - (containerWidth / cardWidth);
    }

    const newPosition = -currentIndex * cardWidth;
    carousel.style.transform = `translateX(${newPosition}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex--;
    moveCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    moveCarousel();
});

// Initial move to ensure cards fit within the container
moveCarousel();