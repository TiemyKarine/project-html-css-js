const menuOpenButton= document.querySelector("#menu-open-button");
const menuCloseButton= document.querySelector("#menu-close-button");
const navLinks= document.querySelectorAll(".nav-menu .nav-link");

//menu open e close//
menuOpenButton.addEventListener("click", () =>{
    //mobile menu visibiliçao//
    document.body.classList.toggle("show-mobile-menu");
})

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//nav links is click//
navLinks.forEach((link) => {
    link.addEventListener("click", () => menuOpenButton.click());
});

//swiper//
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0: {
        slidePerView: 1
    },
    768: {
        slidePerView: 2
    },
    1024: {
        slidePerView: 3
    },
  }
});