'use strict';

$('.owl-carousel').owlCarousel({
  loop:true,
  nav: false,
  dots: true,
  margin:10,
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      nav:false
    }
  }
});

$(document).ready(function() {
  $('#description-photo').on('click', function(ev) {
    var player = $("#description-video")[0];
    player.src += "&autoplay=1";
    $("#description-photo").hide();
    $("#description-play").hide();
    ev.preventDefault();
  });

// ---------------------------------

  $('#show-all-photos').on('click', function(ev) {
    ev.preventDefault();
    $("#photos-container").slideToggle("fast");
    $("#photos-container").css("display", "flex");
  });

// ---------------------------------

  var header = $('.about__button');
  function accordion() {
    $(this).toggleClass('active');
    $(this).prev().slideToggle('normal');
  }
  header.click(accordion);

});

(function () {

  let reserveButton = document.querySelector('.header-middle__button');
  let modalClose = document.querySelector('.modal__close');
  let modalReserve = document.querySelector('.modal-reserve');
  let modalOverlay = document.querySelector('.modal__overlay');

  reserveButton.addEventListener('click', function (e) {
    e.preventDefault();
    modalReserve.classList.remove('visually-hidden');
    modalReserve.classList.add('modal-show-animate');
    modalOverlay.classList.add('modal__background');
  });

  modalClose.addEventListener('click', function (e) {
    e.preventDefault();
    modalReserve.classList.remove('modal-show-animate');
    modalReserve.classList.add('visually-hidden');
    modalOverlay.classList.remove('modal__background');
  });

})();