var swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: "3",
  spaceBetween: 20,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  on: {
      init: function () {
          this.slides.forEach((slide, index) => {
              if (!slide.classList.contains('swiper-slide-active')) {
                  slide.style.transform = 'scale(0.6)';
                  slide.style.opacity = '0.3';
              }
          });
      },
      slideChangeTransitionEnd: function () {
          this.slides.forEach((slide, index) => {
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



window.addEventListener("scroll", function() {
    let header = document.querySelector(".container-header");
    if (window.scrollY > 50) { 
        header.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    } else {
        header.style.backgroundColor = "#000"; 
    }
});

window.addEventListener("scroll", function() {
    const header = document.querySelector(".container-header");

    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});








document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll(".O-nas-list-item");
    let index = 0;
    
    function animateItem() {
        items[index].classList.add("animate");
        setTimeout(() => {
            items[index].classList.remove("animate");
            index = (index + 1) % items.length;
            setTimeout(animateItem, 1500);
        }, 500);
    }
    
    animateItem();
});