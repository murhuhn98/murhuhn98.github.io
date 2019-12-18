/*
document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector ('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  
   closeBtn.addEventListener('click', switchModal);
   
});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
        },
      navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
      },
    });
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 35 + bullets.width() + 35 )
    bullets.css('left', prev.width() + 35 )


  $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('#button-up').fadeIn('slow');
      } else {
          $('#button-up').fadeOut();
      }
  });
  
  $('#button-up').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
  });

});