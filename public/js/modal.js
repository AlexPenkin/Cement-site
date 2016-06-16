$(document).ready(function() {
  //само модальное окно
  var modal = $('.modal');
  var auth = false;

  $(document).on('click', '.order', function(event) {
    var name = $(this).parent('center').parent('.productOrder').parent('tr').find('.productName').html();

    event.preventDefault();

    modal.fadeIn(400);
    var name1 =
      $('.makeBidInpTheme').val(name)
      /*$.ajax({
          url: 'https://www.google.com/recaptcha/api/siteverify',
          method: "POST",
          secret: '6LdjwSITAAAAAG0_vSr_bC_1trXsoRuvq_fkRwjJ',
          response: 'g-recaptcha-response',
          success: function (data) {
            console.log(data);
            auth = true;
          },
        })*/
  });

  $(document).on('click', '.close', function(event) {
    event.preventDefault();
    modal.fadeOut(400);
  });

  $(document).on('click', '.modal', function(event) {
    event.preventDefault();
    modal.fadeOut(400);

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
      g-recaptcha-response = $(".modal").find('.g-recaptcha-response').val();
    $.ajax({
      method: "POST",
      url: "send_mail.php",
      data: {
        action: "order",
        name: name,
        email: email,
        theme: theme,
        text: text
        g-recaptcha-response:
      },
    })

  });
});
