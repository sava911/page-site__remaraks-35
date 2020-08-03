$(function(){
    $('.promotions__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        swipe: true,
        prevArrow: '<img class="promotions__slider-arrow promotions__slider-arrow--left" src="img/arrow.svg">',
        nextArrow: '<img class="promotions__slider-arrow promotions__slider-arrow--right" src="img/arrow.svg">',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
              }
            },
            {
                breakpoint: 325,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
              }
            }
        ]
    })
});