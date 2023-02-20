const slyderSwiper = () => {
 
  new Swiper('.slider', {
    // direction: 'vertical',
    // freeMode: true,
    speed: 2400,
    loop: true,
    parallax: true,
    spaceBetween: 18,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    mousewheel: {
      enabled: true,
      sensitivity: 2.4,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });
};

export default slyderSwiper;
