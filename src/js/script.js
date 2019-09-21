'use strict';

(function () {
  let reserveButton = document.querySelector('.header-middle__button');
  let modalClose = document.querySelector('.modal__close');
  let modalReserve = document.querySelector('.modal-reserve');

  reserveButton.addEventListener('click', function (e) {
    e.preventDefault();
    modalReserve.classList.remove('visually-hidden');
    modalReserve.classList.add('modal-show-animate');
  });

  modalClose.addEventListener('click', function (e) {
    e.preventDefault();
    modalReserve.classList.remove('modal-show-animate');
    modalReserve.classList.add('visually-hidden');
  });
})();