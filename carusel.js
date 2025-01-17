let carousel = () => {
  let carouselHolder;
  let carouselTrack;
  let carouselItems;
  let carouselItemsLength;
  let carouselCurrentIndex = 0;
  let lazyLoadingToWait = 0;
  let timeOutId = null;
  const waitTime = 5000;

  function init() {
    carouselHolder = document.querySelector(".carusel");
    carouselTrack = carouselHolder.querySelector(".carsuel-track");
    carouselItems = carouselTrack.children;
    carouselItemsLength = carouselItems.length;
    if (carouselItemsLength > 0) {
      startCarousel();
    }
  }

  function startCarousel() {
    addArrows();
    addNavigator();
    tick();
  }

  function moveSegmentToIndex(index = 0) {
    clearTimeout(timeOutId);
    if (index >= carouselItemsLength) {
      index = 0;
    }
    if (index < 0) {
      index = carouselItemsLength - 1;
    }
    carouselTrack.style.transform = `translateX(-${index * 100}vw)`;
    carouselCurrentIndex = index;
    setDotAsActive(carouselCurrentIndex);
    tick();
  }

  function tick() {
    timeOutId = setTimeout(() => {
      moveSegmentToIndex(carouselCurrentIndex + 1);
    }, waitTime);
  }

  function addArrows() {
    const leftArrow = document.createElement("div");
    const rightArrow = document.createElement("div");
    leftArrow.classList.add("carousel-arrow", "carousel-arrow-left");
    rightArrow.classList.add("carousel-arrow", "carousel-arrow-right");
    leftArrow.innerHTML = "&lt;";
    rightArrow.innerHTML = "&gt;";
    carouselHolder.appendChild(leftArrow);
    carouselHolder.appendChild(rightArrow);
    leftArrow.addEventListener("click", () => {
      moveSegmentToIndex(carouselCurrentIndex - 1);
    });
    rightArrow.addEventListener("click", () => {
      moveSegmentToIndex(carouselCurrentIndex + 1);
    });
  }

  function setDotAsActive(index) {
    const dots = carouselHolder.querySelectorAll(".carousel-navigator-dot");
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    if (dots[index]) {
      dots[index].classList.add("active");
    }
  }

  function addNavigator() {
    const navigator = document.createElement("div");
    navigator.classList.add("carousel-navigator");
    for (let i = 0; i < carouselItemsLength; i++) {
      const dot = document.createElement("div");
      dot.classList.add("carousel-navigator-dot");
      if (i === 0) {
        dot.classList.add("active");
      }
      dot.addEventListener("click", () => {
        moveSegmentToIndex(i);
      });
      navigator.appendChild(dot);
    }
    carouselHolder.appendChild(navigator);
  }

  init();
};

document.addEventListener("DOMContentLoaded", carousel);
