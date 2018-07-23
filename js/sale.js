$(document).ready(function () {

  $(".sale-form").submit(
    function (e) {
      sendSaleForm('sale-form', 'action_ajax_form.php');
      return false;
    }
  );

  $(".modal-sale-form").submit(
    function (e) {
      sendModalSaleForm('modal-sale', 'action_ajax_form.php');
      return false;
    }
  );

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

});