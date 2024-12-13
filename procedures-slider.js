const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
    breakpoints: {
    550: {
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

