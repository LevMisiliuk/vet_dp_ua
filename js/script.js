$(function() {
    /* Slider: https://github.com/kenwheeler/slick/ */
    $('.patiens__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
      });

    $('.comments__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
    })

})