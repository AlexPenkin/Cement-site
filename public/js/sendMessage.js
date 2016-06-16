$(document).ready(function() {

  $(document).on('click', '.makeBidBut', function(event) {
    var self = $(this);
   event.stopPropagation();
   name =  $(self).siblings('.makeBidInp1').val(),
   email =  $(self).siblings('.makeBidInp2').val(),
   text = $(self).siblings('.makeBidInp3').val();
      $.ajax({
        method: "POST",
        url: "send_mail.php",
        data: {
          action: "message",
          name: name,
          email: email,
          text: text
        }
      })
        });

});
