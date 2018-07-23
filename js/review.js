$(document).ready(function () {

  $('.review__form-link').click(function (e) {
    e.preventDefault();
    $('.modal-overlay').css('display', 'block');
    $('.modal-review').addClass('modal-show');
  });


  $(".review-form").submit(
    function (e) {
      sendReviewForm('review-form', 'action_ajax_form.php');
      return false;
    }
  );

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

});