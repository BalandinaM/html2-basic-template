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

/* Pagination */

const buttonBack = document.querySelector('.pagination__item--back');
const firstPage = document.querySelector('.pagination__item--first');
const buttonOnward = document.querySelector('.pagination__item--onward');
const lastPage = document.querySelector('.pagination__item--last');

if (firstPage.classList.contains('pagination__item--current')) {
  buttonBack.classList.add('pagination__item--hidden');
} else {
  buttonBack.classList.remove('pagination__item--hidden');
}

if (lastPage.classList.contains('pagination__item--current')) {
  buttonOnward.classList.add('pagination__item--hidden');
} else {
  buttonOnward.classList.remove('pagination__item--hidden');
}

/*Sorting*/

//const sortingButton = document.querySelector('.sorting__button');
const sortingList = document.querySelector('.sorting__list');
//const sortingItems = Array.from(sortingList.querySelectorAll('.sorting__link'));
// console.log(sortingItems);


if (sortingList.classList.contains('sorting__list--nojs')) {
  sortingList.classList.remove('sorting__list--nojs');
  sortingList.classList.add('sorting__list--closed');
}

// sortingButton.addEventListener('click', () => {
//   //console.log('+++');
//   sortingList.classList.remove('sorting__list--closed');
//   sortingList.classList.add('sorting__list--open');
// });

// for (const item of sortingItems) {
//   item.addEventListener('click', () => {
//     const text = this.textContent;
//     console.log(text);
//   });
// }
