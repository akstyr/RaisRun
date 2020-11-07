$(function () {

  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function () {
    $('.menu ul').slideToggle();
  });
  $(document).ready(function() {
    $(".fancybox").fancybox({
      openEffect	: 'none',
      closeEffect	: 'none'
    });
  });

  $('#asd').html('<img src="img/photos/photo_2.jpg"../>');


});