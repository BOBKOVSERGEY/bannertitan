
$(function(){
  var elHtml = document.getElementsByTagName('body');
  setTimeout(function () {
    $('.wrap-banner').addClass('wrap-banner__active');
    $(elHtml).addClass('body-sale-banner');
    return false;
  }, 1000);
  $('.wrap-banner__close').click(function (event) {
    event.preventDefault();
    $('.wrap-banner').removeClass('wrap-banner__active');
    $(elHtml).removeClass('body-sale-banner');
  });
});