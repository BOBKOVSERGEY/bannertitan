
$(function(){
  setTimeout(function () {
    $('.wrap-banner').addClass('wrap-banner__active');
    return false;
  }, 1000);
  $('.wrap-banner__close').click(function (event) {
    event.preventDefault();
    $('.wrap-banner').removeClass('wrap-banner__active');
  });
});