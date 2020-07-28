$('.seo__btn').on('click', (e) => {
  $('.seo__text').toggleClass('seo__text--show');
});

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
    iconImageHref: "/img/map/1.png",
    iconImageSize: [116, 141],
    iconImageOffset: [-60, -150]
  });
  expertMap.geoObjects.add(placemark);
}