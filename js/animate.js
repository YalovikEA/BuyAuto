$(document).ready(function () {

  if (  jQuery(window).width() > 768 ) {
    $('.sale__title').animated('fadeInDown', 'fadeOutUp');
    $('.sale__sub-title').animated('fadeInUp', 'fadeOutDown');
    $('.section-title').animated('fadeInUp', 'fadeOutDown');
    $('.work__sub-title').animated('fadeInUp', 'fadeOutDown');
    $('.assess__sub-title').animated('fadeInUp', 'fadeOutDown');
    $('.work__list').animated('flipInY', 'fadeOutDown');
    $('.bonus__item').animated('rollIn', 'fadeOutDown');
    $('.slider').animated('zoomIn', 'fadeOutDown');
    $('.feature').animated('rollIn', 'fadeOutDown');

}

});