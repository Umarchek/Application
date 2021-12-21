var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
mousewheel: {
 sensitivity: 2,
},
slidesPerView: 1.5,
// spaceBetween: -320,
// loop: true,
freeMode: {
 sensitivity: 100,
},
});