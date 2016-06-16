ymaps.ready(init);
var myMap,
  myPlacemark;

function init() {
  myMap = new ymaps.Map("map", {
    center: [54.730505, 39.461868],
    zoom: 14
  });
  myMap.behaviors.disable('scrollZoom'); 
  myPlacemark = new ymaps.Placemark([54.730505, 39.461868], {
    hintContent: 'Москва!',
    balloonContent: 'Столица России'
  });

  myMap.geoObjects.add(myPlacemark);
}
