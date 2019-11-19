$(document).ready(function () {
    svg4everybody({});

    let openSearchForm = () => {
        $(document).on('click', '.search__icon', function () {
            $(this).parent().addClass('search--open');
        });
    };

    let clearSearchForm = () => {
        $(document).on('click', '.search__clear', function () {
            $('.search__input').val('');
        });
    };

    let bannerSlider = () => {
      $('.js-banner').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '.banner__navigation--prev',
          nextArrow: '.banner__navigation--next',
          dots: true,
          customPaging: function (slider, i) {
              return '<a class="banner__dot" href="#"></a>';

          },
          appendDots: '.banner__dots',
      });
    };

    let tabs = function() {
        $('.tabs-navigation__item').click(function () {
            let tabName = $(this).attr('show-tab'),
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

    let productPrevSlider = function () {
        $('.js-product-prev__slider').each(function (idx) {
            let carouselID = "carousel" + idx;
            this.closest('.product-prev').id = carouselID;
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                appendDots: '#' + carouselID + ' .product-prev__colors',
                customPaging: function (slider, i) {
                    let color = $(slider.$slides[i]).data('color');
                    return '<a class="product-prev__color" style="background-color:' + color + '"></a>'
                }
            });
        });
    };

    let productLineSlider = () => {
      $('.js-products-line-slider').slick({
          slidesToShow: 4,
          slidesToScroll: 1
      })
    };

    clearSearchForm();
    bannerSlider();
    openSearchForm();
    tabs();
    productLineSlider();
    productPrevSlider();
});
