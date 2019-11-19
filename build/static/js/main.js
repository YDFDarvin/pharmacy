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

  var tabs = function tabs() {
    $('.tabs-navigation__item').click(function () {
      var tabName = $(this).attr('show-tab'),
          tabsBody = $(this).closest('.tabs').find('.tabs__body')[0],
          tab = $(tabsBody).find('.' + tabName);
      $(this).addClass('tabs-navigation__item--active').siblings().removeClass('tabs-navigation__item--active');
      $(tab).addClass('tab--active').siblings().removeClass('tab--active');

      if ($(tabsBody).find('.js-products-line-slider').length) {
        $('.js-products-line-slider').each(function () {
          $(this).slick('refresh');
        });
        $('.js-product-prev__slider').each(function () {
          $(this).slick('refresh');
        });
      }
    });
  };

  var productPrevSlider = function productPrevSlider() {
    $('.js-product-prev__slider').each(function (idx) {
      var carouselID = "carousel" + idx;
      this.closest('.product-prev').id = carouselID;
      $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        appendDots: '#' + carouselID + ' .product-prev__colors',
        customPaging: function customPaging(slider, i) {
          var color = $(slider.$slides[i]).data('color');
          return '<a class="product-prev__color" style="background-color:' + color + '"></a>';
        }
      });
    });
  };

  var productLineSlider = function productLineSlider() {
    $('.js-products-line-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1
    });
  };

  clearSearchForm();
  bannerSlider();
  openSearchForm();
  tabs();
  productLineSlider();
  productPrevSlider();
});