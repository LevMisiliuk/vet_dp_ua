$(function() {
    /* Slider: https://github.com/kenwheeler/slick/ */
    $('.patiens__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
      });

    $('.comments__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
    })

    
    $('.slider-main-image').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-navigation'
      });
      $('.slider-navigation').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-main-image',
        dots: false,
        centerMode: false,
        focusOnSelect: true
      });

})