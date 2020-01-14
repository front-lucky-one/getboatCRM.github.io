"use strict";

var owl = $('.owl-carousel'),
    slides = $('.swiper-slide');
owl.owlCarousel({
  margin: 20,
  autoWidth: true,
  items: 2,
  loop: false
});
$('.owl-carousel').magnificPopup({
  delegate: 'a',
  // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
    enabled: true // other options

  }
});