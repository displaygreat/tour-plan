$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button_next',
      prevEl: '.hotel-slider__button_prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  })

  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button_next',
      prevEl: '.reviews-slider__button_prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  })

  $('.parallax-window').parallax({
    imageSrc: 'img/newsletter-bg.jpg',
    speed: 0.2,
  });

  var menuButton = $('.menu-button');
  menuButton.on('click', function () {
    $('.navbar-bottom').toggleClass('navbar-bottom_visible');
  });

  var modalButton = $("[data-toggle=modal]");
  var modalCloseButton = $(".modal__close");

  modalButton.on('click', openModal);
  modalCloseButton.on('click', closeModal);

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      $(".modal").hide();
    }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass('modal__overlay-visible');
    modalDialog.addClass('modal__dialog-visible')
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay-visible');
    modalDialog.removeClass('modal__dialog-visible')
  }

  //Обработка форм
  $('.form').each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minLength: "Еhe name must be at least two letters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Phone number is required",
        },

      },
    });
  });
  AOS.init();

  //Оптимизация карты
  $(".map-show-on-click").click(function () {
    var map = $(this).attr("data-map");
    var map_width = $(window).width();
    // var map_height = $(window).height();
    var map_height = $(this).attr("data-map-height");
    $(this).css("height", map_height);
    if (map_width > 690) {
      map_width = 690;
    }
    $(this).html('<iframe src="' + map + '" width="' + map_width + '" height="' + map_height + '" frameborder="0" style="border:0" allowfullscreen></iframe>');
  });

  //Маска для ввода номера телефона
  // $(document).ready(function () {
  //   $('.date').mask('00/00/0000');
  //   $('.time').mask('00:00:00');
  //   $('.date_time').mask('00/00/0000 00:00:00');
  //   $('.cep').mask('00000-000');
  //   $('.phone').mask('0000-0000');
  //   $('.phone_with_ddd').mask('(00) 0000-0000');
  //   $('.phone_us').mask('(000) 000-0000');
  //   $('.mixed').mask('AAA 000-S0S');
  //   $('.cpf').mask('000.000.000-00', {
  //     reverse: true
  //   });
  //   $('.cnpj').mask('00.000.000/0000-00', {
  //     reverse: true
  //   });
  //   $('.money').mask('000.000.000.000.000,00', {
  //     reverse: true
  //   });
  //   $('.money2').mask("#.##0,00", {
  //     reverse: true
  //   });
  //   $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
  //     translation: {
  //       'Z': {
  //         pattern: /[0-9]/,
  //         optional: true
  //       }
  //     }
  //   });
  //   $('.ip_address').mask('099.099.099.099');
  //   $('.percent').mask('##0,00%', {
  //     reverse: true
  //   });
  //   $('.clear-if-not-match').mask("00/00/0000", {
  //     clearIfNotMatch: true
  //   });
  //   $('.placeholder').mask("00/00/0000", {
  //     placeholder: "__/__/____"
  //   });
  //   $('.fallback').mask("00r00r0000", {
  //     translation: {
  //       'r': {
  //         pattern: /[\/]/,
  //         fallback: '/'
  //       },
  //       placeholder: "__/__/____"
  //     }
  //   });
  //   $('.selectonfocus').mask("00/00/0000", {
  //     selectOnFocus: true
  //   });
  // });

});