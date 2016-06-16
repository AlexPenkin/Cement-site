$(document).ready(function() {
  //само модальное окно
  var modal = $('.modal');

  $(document).on('click', '.order', function(event) {
    var name = $(this).parent('center').parent('.productOrder').parent('tr').find('.productName').html();

    event.preventDefault();

    modal.fadeIn(400);
    var name1 =
    $('.makeBidInpTheme').val(name)
  });

  $(document).on('click', '.close', function(event) {
    event.preventDefault();
    console.log('clicked');
    modal.fadeOut(400);
  });

  $(document).on('click', '.modal', function(event) {
    event.preventDefault();
    console.log('clicked');
    modal.fadeOut(400);

  });

  $(document).on('click', '.modal-content', function(event) {
    event.stopPropagation();
  });

  // отправка
  $(document).on('click', '.makeOrder', function(event) {
   event.stopPropagation();
   var theme =  $(".modal").find('.makeBidInpTheme').val(),
   name =  $(".modal").find('.makeBidInp1').val(),
   email =  $(".modal").find('.makeBidInp2').val(),
   text = $(".modal").find('.makeBidInp3').val();

   console.log(theme);
    console.log('AAA');
    $.ajax({
        method: "POST",
        url: "send_mail.php",
        data: {
          action: "order",
          name: name,
          email: email,
          theme: name,
          text: text
        }
      })
      .done(function(msg) {
        alert("Message: " + msg);
      });
  });
  });
