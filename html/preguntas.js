document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.background-slideshow img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.opacity = 0; // Ocultar la imagen actual
        currentIndex = (currentIndex + 1) % images.length; // Pasar al siguiente índice
        images[currentIndex].style.opacity = 1; // Mostrar la siguiente imagen
    }

    // Mostrar la primera imagen inicialmente
    images[currentIndex].style.opacity = 1;

    // Cambiar de imagen cada 5 segundos (5000 ms)
    setInterval(showNextImage, 5000);
});
