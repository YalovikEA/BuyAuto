$('.slider__list').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: $('.slider__control--prev'),
  nextArrow: $('.slider__control--next'),
  responsive: [
    // {
    //   breakpoint: 768,
    //   settings: {
    //     arrows: false,
    //     centerMode: true,
    //     centerPadding: '40px',
    //     slidesToShow: 3
    //   }
    // },
    {
      breakpoint: 599,
      settings: {
        arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});