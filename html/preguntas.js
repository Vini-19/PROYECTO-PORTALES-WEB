document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".background-slideshow img");
  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].style.opacity = 0; // Ocultar la imagen actual
    currentIndex = (currentIndex + 1) % images.length; // Pasar al siguiente índice
    images[currentIndex].style.opacity = 1; // Mostrar la siguiente imagen
  }

  images[currentIndex].style.opacity = 1;

  setInterval(showNextImage, 5000);
});
