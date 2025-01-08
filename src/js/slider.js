const slides = document.querySelectorAll('.slide');
const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  // sliderContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
  showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
  showSlide(currentIndex);
});

// Автоплей
setInterval(() => {
  currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
  showSlide(currentIndex);
}, 5000); // Змінює слайд кожні 5 секунд
