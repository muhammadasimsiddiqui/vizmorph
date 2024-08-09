// Portfolio Data
const portfolioRenderings = [
  {
    src: "img/portfolio/Rendering/untitled.21.jpg",
    title: "Air Cooler",
  },
  {
    src: "img/portfolio/Rendering/Air Cooler.34.jpg",
    title: "Air Cooler",
  },
  {
    src: "img/portfolio/Rendering/Air Cooler.32.jpg",
    title: "Air Cooler",
  },
  {
    src: "img/portfolio/Rendering/Receiver.14.jpg",
    title: "Receiver",
  },
  {
    src: "img/portfolio/Rendering/Signal Controller.18.jpg",
    title: "Signal Controller",
  },
  {
    src: "img/portfolio/Rendering/untitled.5.jpg",
    title: "Air Cooler",
  },
  {
    src: "img/portfolio/Rendering/untitled.7.jpg",
    title: "Unknown",
  },
  {
    src: "img/portfolio/Rendering/Pickup Truck.72.png",
    title: "Pickup Truck",
  },
  {
    src: "img/portfolio/Rendering/Pickup Truck.70.png",
    title: "Pickup Truck",
  },
];

function generatePortfolioSlides(portfolioArray, containerClass) {
  const container = document.querySelector(containerClass + " .swiper-wrapper");
  portfolioArray.forEach((item) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide portfolio-cont";

    slide.innerHTML = `
        <a href="${item.src}" data-lightbox="portfolio-rendering-image" data-title="${item.title}" class="portfolio-link">
          <img src="${item.src}" alt="${item.title}" />
          <i class="fa-solid fa-plus"></i>
        </a>
      `;

    container.appendChild(slide);
  });
}

// Initialize Swiper
function initializeSwiper() {
  new Swiper(".portfolio-slider-main", {
    spaceBetween: 10,
    speed: 2000,
    loop: true,
    pagination: {
      el: ".portfolio-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".portfolio-btn-next",
      prevEl: ".portfolio-btn-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
    autoplay: {
        delay: 0,  
        disableOnInteraction: false,
        pauseOnMouseEnter: true,  
        resumeOnMouseLeave: true, 
      },
      lazy: true,

    mousewheel: true,
    keyboard: true,
  });
}

// Initialize Portfolio
function initPortfolio() {
  generatePortfolioSlides(portfolioRenderings, ".portfolio-slider-main");
  initializeSwiper();
}

// Document Ready
document.addEventListener("DOMContentLoaded", initPortfolio);


document.addEventListener("DOMContentLoaded", initializeSwiper);
