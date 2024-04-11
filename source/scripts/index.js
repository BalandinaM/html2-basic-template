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

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  direction: 'horizontal',
  loop: false,
  autoHeight: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

/* Map */

const map = L.map('map-canvas')
  .on('load', () => {
  })
  .setView({
    lat: 59.968029,
    lng: 30.316416,
  }, 25);


L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../images/map_pin.png',
  iconSize: [38, 50],
});

const mainPinMarker = L.marker(
  {
    lat: 59.968029,
    lng: 30.316416,
  },
  {
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(map);

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

const sortingButton = document.querySelector('.sorting__button');
const sortingList = document.querySelector('.sorting__list');

if (sortingList.classList.contains('sorting__list--nojs')) {
  sortingList.classList.remove('sorting__list--nojs');
  sortingList.classList.add('sorting__list--closed');
}

sortingButton.addEventListener('click', () => {
  if (sortingList.classList.contains('sorting__list--closed')) {
    sortingList.classList.remove('sorting__list--closed');
    sortingList.classList.add('sorting__list--open');
  } else {
    sortingList.classList.remove('sorting__list--open');
    sortingList.classList.add('sorting__list--closed');
  }
});
