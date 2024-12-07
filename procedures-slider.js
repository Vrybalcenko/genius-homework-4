const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidersPerViev: 1,
  spaceBetween: 20,
    breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },

  navigation: {
    nextEl: '.button-cards.next',
    prevEl: '.button-cards.prev',
  },

});
