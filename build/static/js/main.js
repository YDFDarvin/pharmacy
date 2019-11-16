"use strict";

$(document).ready(function () {
  svg4everybody({});

  var openSearchForm = function openSearchForm() {
    $(document).on('click', '.search__icon', function () {
      $(this).parent().addClass('search--open');
    });
  };

  var clearSearchForm = function clearSearchForm() {
    $(document).on('click', '.search__clear', function () {
      $('.search__input').val('');
    });
  };

  var bannerSlider = function bannerSlider() {
    $('.js-banner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '.banner__navigation--prev',
      nextArrow: '.banner__navigation--next',
      dots: true,
      customPaging: function customPaging(slider, i) {
        return '<a class="banner__dot" href="#"></a>';
      },
      appendDots: '.banner__dots'
    });
  };

  clearSearchForm();
  bannerSlider();
  openSearchForm();
});