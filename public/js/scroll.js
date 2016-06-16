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
      $('.menuNav.active').removeClass('active');

      $('html, body').animate({
        'scrollTop': $('#' + $(this).attr('rel')).offset().top-70
      }, 700, 'easeOutCubic', function() {});

    });

    checkLocation();
  });

  function checkLocation() {

    var m1 = $('.head').offset().top - 70,
      m2 = $('#blocks').offset().top - 70,
      m3 = $('#bordurs').offset().top - 70,
      m4 = $('#plates').offset().top - 70,
      m5 = $('#cement').offset().top - 70;
      m6 = $('#about').offset().top - 70;
      m7 = $('#footer').offset().top - 70;

    //m5 = $('#head').offset().top - 300;

    if ($(window).scrollTop() > 0) $('.head').addClass('go');
    else $('.head').removeClass('go');

    $('.menuNav a.active').removeClass('active');

    if ($(window).scrollTop() < m2)
      $('.menuNav a[rel="head"]').find('span').addClass('active');
    else
    if ($(window).scrollTop() < m3)
      $('.menuNav a[rel="blocks"]').addClass('active');
    else
    if ($(window).scrollTop() < m4)
      $('.menuNav a[rel="bordurs"]').addClass('active');
    else
    if ($(window).scrollTop() < m5)
      $('.menuNav  a[rel="plates"]').addClass('active');
    else
    if ($(window).scrollTop() < m6)
      $('.menuNav  a[rel="cement"]').addClass('active');
      else
      if ($(window).scrollTop() < m7)
        $('.menuNav  a[rel="about"]').addClass('active');
        else
        if($(window).scrollTop() + $(window).height() > $(document).height() - 950) {
       $('.menuNav  a[rel="footer"]').addClass('active');
   }


  }
});
