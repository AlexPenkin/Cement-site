$(document).ready(function() {
  //само модальное окно
  var modal = $('.modal');
  var auth = false;
  function cleanInputs () {
    $('.makeBid').find('.makeBidInp1').val('');
    $('.makeBid').find('.makeBidInp2').val('');
    $('.makeBid').find('.makeBidInp3').val('');
    modal.find('.makeBidInp1').val('');
    modal.find('.makeBidInp2').val('');
    modal.find('.makeBidInp3').val('');
  }

  $(document).on('click', '.order', function(event) {
    var name = $(this).parent('center').parent('.productOrder').parent('tr').find('.productName').html();

    event.preventDefault();
    var widgetId1;

    var onloadCallback = function() {
      widgetId1 = grecaptcha.render('captcha1', {
             'sitekey' : '6LdjwSITAAAAAJHU2NNFtHtQZuv9NY3FKcKlBWjb'
       });
     };
    modal.fadeIn(400);
    var name1 =
      $('.makeBidInpTheme').val(name)
    });

  $(document).on('click', '.close', function(event) {
    event.preventDefault();
    modal.fadeOut(400);
    cleanInputs();
  });

  $(document).on('click', '.modal', function(event) {
    event.preventDefault();
    modal.fadeOut(400);
    cleanInputs();
  });

  $(document).on('click', '.modal-content', function(event) {
    event.stopPropagation();
  });

  // отправка
  $(document).on('click', '.makeOrder', function(event) {
    event.stopPropagation();


    var theme = $(".modal").find('.makeBidInpTheme').val(),
      name = $(".modal").find('.makeBidInp1').val(),
      email = $(".modal").find('.makeBidInp2').val(),
      text = $(".modal").find('.makeBidInp3').val(),
      gRecaptchaResponse = $(".modal").find('.g-recaptcha-response').val() || false;
    $.ajax({
        method: "POST",
        url: "send_mail.php",
        data: {
          action: "order",
          name: name,
          email: email,
          theme: theme,
          text: text,
          gRecaptchaResponse: gRecaptchaResponse
        },
        success: function(json) {
          if (json['success'] == true) {
            modal.fadeOut(400);
            cleanInputs();
          } else {
            $('.onError').show();
            $('.onError').html('Проверьте, все ли поля заполнены правильно');
          }
        }
      })
      .done(function() {
        grecaptcha.reset();
      })
  });
});

//////////////////////////////////////////////


$(document).ready(function() {
  //само модальное окно
  var modal = $('.modal2');
  var auth = false;
  function cleanInputs () {
    $('.makeBid').find('.makeBidInp1').val('');
    $('.makeBid').find('.makeBidInp2').val('');
    $('.makeBid').find('.makeBidInp3').val('');
    modal.find('.makeBidInp1').val('');
    modal.find('.makeBidInp2').val('');
    modal.find('.makeBidInp3').val('');
  }

  $(document).on('click', '.makeBidBut', function(event) {
    //var name = $(this).parent('center').parent('.productOrder').parent('tr').find('.productName').html();
    console.log('sss');
    event.preventDefault();
    var widgetId2;
    var onloadCallback = function() {
      widgetId2 = grecaptcha.rende(document.getElementById('captcha2'), {
             'sitekey' : '6LdjwSITAAAAAJHU2NNFtHtQZuv9NY3FKcKlBWjb'
       });
     };

    modal.fadeIn(400);
    modal.find('.makeBidInp1').val($(this).siblings('.makeBidInp1').val());
    modal.find('.makeBidInp2').val($(this).siblings('.makeBidInp2').val())
    modal.find('.makeBidInp3').val($(this).siblings('.makeBidInp3').val())
    var name1 =
      $('.makeBidInpTheme').val(name)
    });

  $(document).on('click', '.close', function(event) {
    event.preventDefault();
    modal.fadeOut(400);
    cleanInputs();
  });

  $(document).on('click', '.modal2', function(event) {
    event.preventDefault();
    modal.fadeOut(400);
    cleanInputs();
  });

  $(document).on('click', '.modal-content', function(event) {
    event.stopPropagation();
  });

  // отправка
  $(document).on('click', '.makeOrder', function(event) {
    event.stopPropagation();


    var theme = $(".modal").find('.makeBidInpTheme').val(),
      name = $(".modal").find('.makeBidInp1').val(),
      email = $(".modal").find('.makeBidInp2').val(),
      text = $(".modal").find('.makeBidInp3').val(),
      gRecaptchaResponse = $(".modal").find('.g-recaptcha-response').val() || false;
    $.ajax({
        method: "POST",
        url: "send_mail.php",
        data: {
          action: "message",
          name: name,
          email: email,
          text: text,
          gRecaptchaResponse: gRecaptchaResponse
        },
        success: function(json) {
          if (json['success'] == true) {
            modal.fadeOut(400);
            cleanInputs();
          } else {
            $('.onError').show();
            $('.onError').html('Проверьте, все ли поля заполнены правильно');
          }
        }
      })
      .done(function() {
        grecaptcha.reset();
      })
  });
});
