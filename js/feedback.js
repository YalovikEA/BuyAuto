
$(document).ready(function () {

  $("#header-link").click(function (e) {
    e.preventDefault();
    $('#header-form').toggle();
    $('.contacts__link--feedback').css({animationPlayState: 'paused',});
  });

  $("#footer-link").click(function (e) {
    e.preventDefault();
    $('#footer-form').toggle();
    $('.contacts__link--feedback').css({animationPlayState: 'paused',});
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest(".call").length) {
      $('.contacts__form').hide();
      $('.contacts__link--feedback').css({animationPlayState: 'running',});
    }
    e.stopPropagation();
  });


  // $("#feedback-header").submit(
  //   function (e) {
  //     sendFeedbackForm('feedback-header', 'action_ajax_form.php');
  //     return false;
  //   }
  // );

  // $("#feedback-footer").submit(
  //   function (e) {
  //     sendFeedbackForm('feedback-footer', 'action_ajax_form.php');
  //     return false;
  //   }
  // );


  // function sendFeedbackForm(ajax_form, url) {
  //   jQuery.ajax({
  //     url: url, //url страницы (action_ajax_form.php)
  //     type: "GET", //метод отправки
  //     dataType: "html", //формат данных
  //     data: jQuery("#" + ajax_form).serialize(),  // Сеарилизуем объект
  //     success: function (response) {
  //       //Данные отправлены успешно
  //       //Скрываем диалоговое окно
  //       // $('.contacts__form').css('display', 'none');
  //       //Показываем модалку
  //       // $('.modal-overlay').css('display', 'block');
  //       // $('.modal-feedback').addClass('modal-show');
  //     },
  //     error: function (response) {
  //       // Данные не отправлены
  //       alert('Ошибка. Данные не отправленны.');
  //     }
  //   });
  // }


  // $('.modal-feedback__close').click(function (e) {
  //   $('.modal-overlay').css('display', 'none');
  //   $('.modal-feedback').removeClass('modal-show');
  // });

  // $(this).keydown(function (e) {
  //   if (e.which == 27) {
  //     $('.modal-overlay').css('display', 'none');
  //     $('.modal').removeClass('modal-show');
  //   }
  // });

});