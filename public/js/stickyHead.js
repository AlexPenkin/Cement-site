$(document).ready(function() {
var winWidth = $(window).innerWidth();
  var wrap = $(".menuWrap");
  var titleWidth = wrap.width();
  var win = $(window);
  $(win).on("scroll", function(e) {
    var x = $(this).scrollLeft();
    var y = $(this).scrollTop();
    var scroll = $(this).scrollTop();
    if (scroll > 71) {
      wrap.addClass("fix");
      $(".fix").css("width", winWidth);
      $(".fix").offset(function(i, coord) {
        var newCoord = {};
        newCoord.left = win.scrollLeft() - x;
        return newCoord;
      });
    } else {
      wrap.removeClass("fix");
      wrap.toggleClass('.menuWrap');
      $(".menuWrap").css("width", '')
    }
  });
  $(win).resize(function(){
       winWidth = $(window).innerWidth();
       $(".fix").css("width", winWidth);
   });
});
