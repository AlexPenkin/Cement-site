/*$(document).ready(function() {

  $(document).on('click', '.makeBidBut', function(event) {
    var self = $(this);
    event.stopPropagation();
    name = $(self).siblings('.makeBidInp1').val(),
      email = $(self).siblings('.makeBidInp2').val(),
      text = $(self).siblings('.makeBidInp3').val();
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
          $('.onError').hide();
          $('.order').addClass('messageSent');
          $('.order').html('Сообщение отправлено!')
          $('.order').removeClass('.order');
        } else {
          alert('Произошла ошибка!\nПроверьте, все ли поля заполнены правильно');
          //$('.onError').show();
          $('.onError').html('Проверьте, все ли поля заполнены правильно.');
        }
      }
    })
  });

});
*/
