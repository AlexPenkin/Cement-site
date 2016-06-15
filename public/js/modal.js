$(document).ready(function() {

var modal = $('.modal');
$(document).on('click', '.order', function(event) {
  event.preventDefault();
  console.log('clicked');
  modal.fadeIn(400);

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

});
