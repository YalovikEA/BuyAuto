
$(document).ready(function () {

  $("#header-link").click(function (e) {
    e.preventDefault();
    $('#header-form').toggle();
  });

  $("#footer-link").click(function (e) {
    e.preventDefault();
    $('#footer-form').toggle();
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest(".call").length) {
      $('.contacts__form').hide();
    }
    e.stopPropagation();
  });

  $('.review__form-link').click(function (e) {
    e.preventDefault();
    $('.modal-overlay').css('display', 'block');
    $('.modal-review').addClass('modal-show');
  });

  $("#feedback-header").submit(
    function (e) {
      sendFeedbackForm('feedback-header', 'action_ajax_form.php');
      return false;
    }
  );

  $("#feedback-footer").submit(
    function (e) {
      sendFeedbackForm('feedback-footer', 'action_ajax_form.php');
      return false;
    }
  );

  $(".sale-form").submit(
    function (e) {
      sendSaleForm('sale-form', 'action_ajax_form.php');
      return false;
    }
  );

  $(".sale-form-modal").submit(
    function (e) {
      sendModalSaleForm('modal-sale', 'action_ajax_form.php');
      return false;
    }
  );

  $(".review-form").submit(
    function (e) {
      sendReviewForm('review-form', 'action_ajax_form.php');
      return false;
    }
  );

  function sendFeedbackForm(ajax_form, url) {
    jQuery.ajax({
      url: url, //url страницы (action_ajax_form.php)
      type: "GET", //метод отправки
      dataType: "html", //формат данных
      data: jQuery("#" + ajax_form).serialize(),  // Сеарилизуем объект
      success: function (response) {
        //Данные отправлены успешно
        //Скрываем диалоговое окно
        $('.contacts__form').css('display', 'none');
        //Показываем модалку
        $('.modal-overlay').css('display', 'block');
        $('.modal-feedback').addClass('modal-show');
      },
      error: function (response) {
        // Данные не отправлены
        alert('Ошибка. Данные не отправленны.');
      }
    });
  }

  function sendSaleForm(ajax_form, url) {
    jQuery.ajax({
      url: url, //url страницы (action_ajax_form.php)
      type: "GET", //метод отправки
      dataType: "html", //формат данных
      data: jQuery("#" + ajax_form).serialize(),  // Сеарилизуем объект
      success: function (response) {
        //Данные отправлены успешно

        //Показываем модалку
        $('.modal-overlay').css('display', 'block');
        $('.modal-sale').addClass('modal-show');
      },
      error: function (response) {
        // Данные не отправлены
        alert('Ошибка. Данные не отправленны.');
      }
    });
  }

  function sendModalSaleForm(ajax_form, url) {
    jQuery.ajax({
      url: url, //url страницы (action_ajax_form.php)
      type: "GET", //метод отправки
      dataType: "html", //формат данных
      data: jQuery("#" + ajax_form).serialize(),  // Сеарилизуем объект
      success: function (response) {
        //Данные отправлены успешно

        //Удаляем модалку
        $('.modal-overlay').css('display', 'none');
        $('.modal-sale').removeClass('modal-show');
      },
      error: function (response) {
        // Данные не отправлены
        alert('Ошибка. Данные не отправленны.');
      }
    });
  }

  function sendReviewForm(ajax_form, url) {
    jQuery.ajax({
      url: url, //url страницы (action_ajax_form.php)
      type: "GET", //метод отправки
      dataType: "html", //формат данных
      data: jQuery("#" + ajax_form).serialize(),  // Сеарилизуем объект
      success: function (response) {
        //Данные отправлены успешно

        //Удаляем модалку
        $('.modal-overlay').css('display', 'none');
        $('.modal-review').removeClass('modal-show');
      },
      error: function (response) {
        // Данные не отправлены
        alert('Ошибка. Данные не отправленны.');
      }
    });
  }

  $('.modal-feedback__close').click(function (e) {
    $('.modal-overlay').css('display', 'none');
    $('.modal-feedback').removeClass('modal-show');
  });

  $(this).keydown(function (e) {
    if (e.which == 27) {
      $('.modal-overlay').css('display', 'none');
      $('.modal').removeClass('modal-show');
    }
  });

});
































//   $("#footer-link").click(function (e) {
//     e.preventDefault();
//     $('#footer-form').toggle();
//     $("#feedback-footer").validate({

//       rules: {

//         user: {
//           required: true,
//           minlength: 4,
//           maxlength: 16,
//         },

//         phone: {
//           required: true,
//           minlength: 6,
//           maxlength: 16,
//         },
//       },

//       messages: {

//         user: {
//           required: "Это поле обязательно для заполнения",
//           minlength: "Логин должен быть минимум 4 символа",
//           maxlength: "Максимальное число символо - 16",
//         },

//         phone: {
//           required: "Это поле обязательно для заполнения",
//           minlength: "Пароль должен быть минимум 6 символа",
//           maxlength: "Пароль должен быть максимум 16 символов",
//         },

//       }

//     });
//   });
//   $(document).on('click', function (e) {
//     if (!$(e.target).closest(".call").length) {
//       $('.contacts__forms').hide();
//     }
//     e.stopPropagation();
//   });


//   // $("form").submit(function () {

//   //   var clikedForm = $(this); // Select Form

//   //   if (clikedForm.find("[name='user']").val() == '') {
//   //     alert('Enter Valid name');
//   //     return false;
//   //   }
//   //   if (clikedForm.find("[name='phone']").val() == '') {
//   //     alert('Enter valid phone');
//   //     return false;
//   //   }
//   //   if (clikedForm.find("[name='model']").val() == 'none') {
//   //     alert('Enter valid model');
//   //     return false;
//   //   }

//   // });




// var feedbackHeaderSubmit = document.querySelector('.feedback__submit');
// var feedbackHeaderUser = document.querySelector('.feedback-header .feedback__field-input--user');
// var feedbackHeaderPhone = document.querySelector('.feedback-header .feedback__field-input--phone');

// feedbackHeaderSubmit.addEventListener('submit', submitForm);
