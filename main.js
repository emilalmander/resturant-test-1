const slides = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('.arrow.left');
const arrowRight = document.querySelector('.arrow.right');
let currentIndex = 0;

const images = [
  'images/cloris-ying-i4Ie3P_JlgU-unsplash.jpg',
  'images/kae-ng-qjM403Kjw00-unsplash.jpg',
  'images/susann-schuster-5x8dUGe-7Fo-unsplash.jpg',
  'images/mahmoud-fawzy-Dbx6-XZY6Dg-unsplash.jpg',
  'images/paulo-doi-6uTQmtqcAzs-unsplash.jpg'
];

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? 1 : 0;
    slide.style.backgroundImage = `url(${images[i]})`;
  });
}

arrowLeft.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

arrowRight.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Initial slide display
showSlide(currentIndex);
