window.onload = function() {
  //работа мобильного меню
  burger.onclick = function () {
    document.getElementById("navbar").classList.toggle('active');
    this.classList.toggle('active-burg');
  }
  // плавный скрол при навигации
  $(".navbar__menu a").mPageScroll2id(); 
  // кнопка вверх
  $('body').append('<button class="btn_up" />');
  $('.btn_up').click(function() {
    $('body').animate({'scrollTop': 0}, 1000);
    $('html').animate({'scrollTop': 0}, 1000);
  });
  $(window).scroll(function(){
    if($(window).scrollTop() > 200) {
      $('.btn_up').addClass('btn_up-active');
    }
    else {
      $('.btn_up').removeClass('btn_up-active');
    }
  });
}