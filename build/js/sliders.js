$('.equip__main-slider').slick({
  slidesToShow: 2,
  prevArrow: '<button type="button" class="equip__main-arrow equip__main-arrow--prev"><img src="./img/equip/arrow-prev.png" alt="#"></button>',
  nextArrow: '<button type="button" class="equip__main-arrow equip__main-arrow--next"><img src="./img/equip/arrow-next.png" alt="#"></button>'
});

$('.works__slider').slick({
  slidesToShow: 1,
  prevArrow: '<button type="button" class="works__slider-arrow works__slider-arrow--prev"><img src="./img/works/arrow-prev.png" alt="#"></button>',
  nextArrow: '<button type="button" class="works__slider-arrow works__slider-arrow--next"><img src="./img/works/arrow-next.png" alt="#"></button>',
  asNavFor: '.works__slider--nav'
});

$('.works__slider--nav').slick({
  slidesToShow: 5,
  arrows: false,
  asNavFor: '.works__slider',
  centerMode: true,
  focusOnSelect: true
});

$('.reviews__slider').slick({
  slidesToShow: 3,
  prevArrow: '<button type="button" class="reviews__slider-arrow reviews__slider-arrow--prev"><img src="./img/reviews/arrow-prev.png" alt="#"></button>',
  nextArrow: '<button type="button" class="reviews__slider-arrow reviews__slider-arrow--next"><img src="./img/reviews/arrow-next.png" alt="#"></button>',
  asNavFor: '.reviews__slider--bot'
});

$('.reviews__slider--bot').slick({
  slidesToShow: 3,
  asNavFor: '.reviews__slider',
  arrows: false,
  focusOnSelect: true
});