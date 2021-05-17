$(function() {
    /* Slider: https://github.com/kenwheeler/slick/ */
    $('.patiens__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000
      });

    $('.services-mobile__cards__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000
      });

      
    $('.about-us-mobile__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: false,
      autoplaySpeed: 2000
    });

    $('.comments__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
    })

    
    $('.slider-single').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      adaptiveHeight: true,
      infinite: false,
      useTransform: true,
      speed: 400,
      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
      draggable: false
    });

    $('.slider-text').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      adaptiveHeight: true,
      infinite: false,
      useTransform: true,
      speed: 1000,
      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
      draggable: false
    });
   
    $('.slider-nav')
      .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
      })
      .slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        focusOnSelect: false,
        infinite: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        }, {
          breakpoint: 640,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
         }
        }, {
          breakpoint: 420,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
       }
        }]
      });
   
    $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
      $('.slider-nav').slick('slickGoTo', currentSlide);
      var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
      $('.slider-nav .slick-slide.is-active').removeClass('is-active');
      $(currrentNavSlideElem).addClass('is-active');
    });

    $('.slider-text').on('afterChange', function(event, slick, currentSlide) {
      $('.slider-nav').slick('slickGoTo', currentSlide);
      var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
      $('.slider-nav .slick-slide.is-active').removeClass('is-active');
      $(currrentNavSlideElem).addClass('is-active');
    });
   
    $('.slider-nav').on('click', '.slick-slide', function(event) {
      event.preventDefault();
      var goToSingleSlide = $(this).data('slick-index');
   
      $('.slider-single').slick('slickGoTo', goToSingleSlide);
      $('.slider-text').slick('slickGoTo', goToSingleSlide);
    });

    //active header
    $(window).on('scroll', function(event) {
      event.preventDefault();
      $('.header').toggleClass("active", $(this).scrollTop() > 2);
    });

    //burger
    $('.header__burger').click(function(e) {
      $('.header__burger, .nav').toggleClass('active')
    })
})
