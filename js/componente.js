const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.card');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

// Define cuántas tarjetas se muestran en pantalla (ajustable)
const visibleCards = Math.floor(window.innerWidth / 320); // ajusta al tamaño real
const totalCards = cards.length;

// Calcula ancho de tarjeta incluyendo gap
const cardWidth = cards[0].offsetWidth + 20;

function updateCarousel() {
  const offset = index * cardWidth;
  track.style.transform = `translateX(-${offset}px)`;
}

next.addEventListener('click', () => {
  if (index < totalCards - visibleCards) {
    index++;
  } else {
    index = 0;
  }
  updateCarousel();
});

prev.addEventListener('click', () => {
  if (index > 0) {
    index--;
  } else {
    index = totalCards - visibleCards;
  }
  updateCarousel();
});

// Ajusta al redimensionar
window.addEventListener('resize', () => {
  updateCarousel();
});


