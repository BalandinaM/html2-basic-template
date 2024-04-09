/* Mobile menu */

const navMain = document.querySelector('.header__nav');
const navToggle = document.querySelector('.nav__button');
const userNav = document.querySelector('.header__user-nav');

navMain.classList.remove ('header__nav--nojs');
userNav.classList.remove ('header__user-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('header__nav--closed')) {
    navMain.classList.remove('header__nav--closed');
    navMain.classList.add('header__nav--open');
  } else {
    navMain.classList.remove('header__nav--open');
    navMain.classList.add('header__nav--closed');
  }
});

/* Slider */

// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 0,
  //direction: 	'vertical',
  direction: 'horizontal',
  //spaceBetween: 30,
  loop: false,
  autoHeight: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

/* Map */

const map = L.map('map-canvas')
  .on('load', () => {
    console.log('Карта загружена');
  })
  .setView({   //координаты города
    lat: 59.968029,
    lng: 30.316416,
  }, 25);


L.tileLayer(//подключение слоя карты
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);//добавить на карту

// const latTokyo = 35.68950;
// const lngTokyo = 139.69200;

const mainPinIcon = L.icon({ //добавляем свой пин
  iconUrl: '../images/map_pin.png',//адрес
  iconSize: [38, 50],//размер
  //iconAnchor: [20, 40],//размер хвостика
});

const mainPinMarker = L.marker( //задаем параметры пина
  {
    lat: 59.968029,//координаты
    lng: 30.316416,
  },
  {
    //draggable: true,//означает что маркер моно двигать по карте
    icon: mainPinIcon,//подставляем свою картинку
  }
);

mainPinMarker.addTo(map);//добавление маркера на карту
