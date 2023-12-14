const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.opacity = 0;
    });

    slides[index].style.opacity = 1;
}

function showDots(index) {
    dots.forEach(dot => {
        dot.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    });

    dots[index].style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
}

showSlide(currentIndex);
showDots(currentIndex);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
        showDots(currentIndex);
    });
});

setInterval(() => {
    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
    showDots(currentIndex);
}, 5000);