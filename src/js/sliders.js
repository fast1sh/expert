$('.equip__main-slider').slick({
  slidesToShow: 2,
  prevArrow: '<button type="button" class="equip__main-arrow equip__main-arrow--prev"><img src="./img/equip/arrow-prev.png" alt="#"></button>',
  nextArrow: '<button type="button" class="equip__main-arrow equip__main-arrow--next"><img src="./img/equip/arrow-next.png" alt="#"></button>'
});

$('.works__item').each(function (index, el) {
  var top = $(this).find('.works__slider');
  var bot = $(this).find('.works__slider--nav');

  top.slick({
    slidesToShow: 1,
    prevArrow: '<button type="button" class="works__slider-arrow works__slider-arrow--prev"><img src="./img/works/arrow-prev.png" alt="#"></button>',
    nextArrow: '<button type="button" class="works__slider-arrow works__slider-arrow--next"><img src="./img/works/arrow-next.png" alt="#"></button>',
    asNavFor: bot
  });

  bot.slick({
    slidesToShow: 5,
    arrows: false,
    asNavFor: top,
    centerMode: true,
    focusOnSelect: true
  });
});

$('.reviews__slider').slick({
  slidesToShow: 3,
  prevArrow: '<button type="button" class="reviews__slider-arrow reviews__slider-arrow--prev"><img src="./img/reviews/arrow-prev.png" alt="#"></button>',
  nextArrow: '<button type="button" class="reviews__slider-arrow reviews__slider-arrow--next"><img src="./img/reviews/arrow-next.png" alt="#"></button>',
  asNavFor: '.reviews__slider--bot',
  responsive: [
    {
      breakpoint: 901,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.reviews__slider--bot').slick({
  slidesToShow: 3,
  asNavFor: '.reviews__slider',
  arrows: false,
  focusOnSelect: true
});