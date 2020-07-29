$('.seo__btn').on('click', (e) => {
  $('.seo__text').toggleClass('seo__text--show');
});

$('.header__burger').on('click', function(e) {
  $('.nav').addClass('nav--active');
});

$('.nav__close').on('click', function (e) {
  $('.nav').removeClass('nav--active');
});

$('.nav__link').on('click', function (e) {
  $('.nav').removeClass('nav--active');
});

$('.fancy-class, .equip__play, .reviews__slider .reviews__slider-item').fancybox({
  buttons: [
    'slideShow',
    'zoom',
    'fullScreen',
    'close'
  ],
  animationEffect: "zoom-in-out",
  animationDuration: 600,
  transitionEffect: "circular",
  transitionDuration: 420,

});

$(document).ready(function ($) {
  var offsetHeight = $(".map").offset().top - $(window).height() - 300;
  var mapFooter = false;
  mapActivate();

  $(window).scroll(function (event) {
    offsetHeight = $(".map").offset().top - $(window).height() - 300;
    mapActivate();
  });

  function mapActivate() {
    if (!mapFooter) {
      if ($(document).scrollTop() > offsetHeight) {
        ymaps.ready(init);
        function init() {
          var expertMap = new ymaps.Map("map", {
            center: [55.424878, 37.769334],
            zoom: 17
          }, {
            searchControlProvider: 'yandex#search'
          });

          var placemark = new ymaps.Placemark([55.424878, 37.769334], null, {
            iconLayout: 'default#image',
            iconImageHref: "./img/map/1.png",
            iconImageSize: [116, 141],
            iconImageOffset: [-60, -150]
          });
          expertMap.geoObjects.add(placemark);
        }

        mapFooter = true;
      }
    }
  }
});