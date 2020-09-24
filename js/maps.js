// function init() {
//   var myMap = new ymaps.Map("map", {
//     center: [47.90172153, 1.86241034],
//     zoom: 15
//   });
// }

// var myMap;

// // Дождёмся загрузки API и готовности DOM.
// ymaps.ready(init);

// function init() {
//   // Создание экземпляра карты и его привязка к контейнеру с
//   // заданным id ("map").
//   myMap = new ymaps.Map('map', {
//     // При инициализации карты обязательно нужно указать
//     // её центр и коэффициент масштабирования.
//     center: [42.48929906, 27.47782830], // Бургас
//     zoom: 10
//   }, {
//     searchControlProvider: 'yandex#search'
//   });

//   document.getElementById('destroyButton').onclick = function () {
//     // Для уничтожения используется метод destroy.
//     myMap.destroy();
//   };

// }

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
      "map", {
        center: [42.48979137, 27.47764591],
        zoom: 16,
      }, {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создание макета содержимого хинта.
    // Макет создается через фабрику макетов с помощью текстового шаблона.
    HintLayout = ymaps.templateLayoutFactory.createClass(
      "<div class='my-hint'>" +
      "<b>{{ properties.object }}</b><br />" +
      "{{ properties.address }}" +
      "</div>", {
        // Определяем метод getShape, который
        // будет возвращать размеры макета хинта.
        // Это необходимо для того, чтобы хинт автоматически
        // сдвигал позицию при выходе за пределы карты.
        getShape: function () {
          var el = this.getElement(),
            result = null;
          if (el) {
            var firstChild = el.firstChild;
            result = new ymaps.shape.Rectangle(
              new ymaps.geometry.pixel.Rectangle([
                [0, 0],
                [firstChild.offsetWidth, firstChild.offsetHeight],
              ])
            );
          }
          return result;
        },
      }
    );

  var myPlacemark = new ymaps.Placemark(
    [42.48979137, 27.47764591], {
      address: "ul. Knyaz Alexander Batenberg 1,Burgas",
      object: "Port of Burgas",
    }, {
      hintLayout: HintLayout,
    }
  );

  myMap.geoObjects.add(myPlacemark);
}