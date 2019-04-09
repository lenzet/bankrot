$(function() {
  $('.examples-slider').owlCarousel({
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      751: {
        items: 3
      }
    },
    loop: false,
    smartSpeed: 700,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    margin: 30
  });

  $('.team-slider').owlCarousel({
    items: 1,
    loop: false,
    smartSpeed: 700,
    margin: 30,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  });
  $('.docs-slider').owlCarousel({
    responsive: {
      0: {
        items: 1
      },
      425: {
        items: 2
      },
      481: {
        items: 3
      }
    },
    loop: false,
    smartSpeed: 700,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    mouseDrag: false,
    margin: 10
  });

  $('.cases-slider').owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 700,
    nav: true,
    autoHeight: true,
    navText: ['<div class="prev-arrow">Назад</div>', '<div class="next-arrow">Вперед</div>'],
    margin: 10
  });

  $('[name="Телефон"]').mask('+7 (999) 999 99 99');

  $('.fancybox').fancybox({
    loop: true,
    buttons: ['fullScreen', 'thumbs', 'close'],
    clickContent: function(current, event) {
      return current.type === 'image' ? 'next' : false;
    },
    i18n : {
      'en' : {
        CLOSE       : 'Закрыть',
        NEXT        : 'Вперед',
        PREV        : 'Назад',
        ERROR       : 'Произошла ошибка! <br/> Попробуйте позднее.',
        PLAY_START  : 'Слайдшоу',
        PLAY_STOP   : 'Остановить',
        FULL_SCREEN : 'На весь экран',
        THUMBS      : 'Миниатюры'
      }
    }
  });

  $('.show-form').click(function(e){
    e.preventDefault();
    $('.popup.form-wrapper').fadeIn();
    
  });
  $('.popup').click(function(e){
    $(this).fadeOut();
  });
  $('.popup .thanks, .popup .form').click(function(e){
    e.stopPropagation();
  });
  $('.close').click(function(e){
    e.preventDefault();
    $('.popup').fadeOut();
  });

  $('form.mail').submit(function() { 
    var th = $(this);
    if ($(this).hasClass('pdf')) window.open('plan.pdf');
    $.ajax({
      type: "POST",
      url: "mail.php", 
      data: th.serialize()
    }).done(function() {
      th.trigger("reset");
      $('.popup').fadeOut();
      $('.popup.thanks-wrapper').fadeIn();
      setTimeout(function(){
        $('.popup.thanks-wrapper').fadeOut();
      }, 3000);
    });
    return false;
  });
  $('a[href^="#"]').mPageScroll2id({
    scrollEasing: 'swing'
  });
});
