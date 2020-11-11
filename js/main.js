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


    $('.minimized').click(function(event) {
      var i_path = $(this).attr('src');
      $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
      $('#magnify').css({
       left: ($(document).width() - $('#magnify').outerWidth())/2,
       // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
              top: ($(window).height() - $('#magnify').outerHeight())/2
     });
      $('#overlay, #magnify').fadeIn('fast');
    });
    
    $('body').on('click', '#close-popup, #overlay', function(event) {
      event.preventDefault();
      $('#overlay, #magnify').fadeOut('fast', function() {
        $('#close-popup, #magnify, #overlay').remove();
      });
    });
 

});