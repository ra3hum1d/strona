var swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto", 
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChangeTransitionEnd: function () {
      document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
        if (slide.classList.contains('swiper-slide-prev') || slide.classList.contains('swiper-slide-next')) {
          slide.style.transform = 'scale(0.6)';
          slide.style.opacity = '0.3';
        } else {
          slide.style.transform = 'scale(1)';
          slide.style.opacity = '1';
        }
      });
    }
  }
});