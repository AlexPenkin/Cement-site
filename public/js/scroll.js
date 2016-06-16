/*$(document).ready(function() {

$('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top -70}, 1500);
        return false;
});

});
*/
$(document).ready(function() {
  $(function() {

    $(window).scroll(function() {
      checkLocation();
    });

    $('.menu').find('a').click(function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      $('.menus.active').removeClass('active');

      $('html, body').animate({
        'scrollTop': $('#' + $(this).attr('rel')).offset().top-70
      }, 700, 'easeOutCubic', function() {});

    });

    checkLocation();
  });

  function checkLocation() {

    var m1 = $('#plates').offset().top - 70,
      m2 = $('#cement').offset().top - 70,
      m3 = $('#bordurs').offset().top - 70,
      m4 = $('#blocks').offset().top - 70,
      m5 = $('#about').offset().top - 70;
      m6 = $('#footer').offset().top - 70;
    //m5 = $('#head').offset().top - 300;

    if ($(window).scrollTop() > 0) $('.header').addClass('go');
    else $('.header').removeClass('go');

    $('.menus a.active').removeClass('active');

    if ($(window).scrollTop() < m2)
      $('.menus a[rel="head"]').addClass('active');
    else
    if ($(window).scrollTop() < m3)
      $('.menus a[rel="service"]').addClass('active');
    else
    if ($(window).scrollTop() < m4)
      $('.menus a[rel="soft"]').addClass('active');
    else
    if ($(window).scrollTop() < m5)
      $('.menus  a[rel="hard"]').addClass('active');
    else
    if ($(window).scrollTop() < m6)
      $('.menus  a[rel="news"]').addClass('active');


  }
});
