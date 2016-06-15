    $(document).ready(function() {
      var element_position = $('.n').offset().top - 600;
      var screen_height = $(window).height();
      var activation_offset = 0.5;
      var activation_point = element_position - (screen_height * activation_offset);
      var notCompleted = true;
      var max_scroll_height = $('body').height() - screen_height - 5; //-5 for a little bit of buffer


      $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;

        var element_in_view = y_scroll_pos > activation_point;
        var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

        if (element_in_view && notCompleted) {
          notCompleted = false;
          $(".w").spincrement({
            duration: 4000,
            easing: 'easeInOutQuint'
          });
          $(".years").spincrement({
            duration: 3500,
            easing: 'easeInOutQuint'
          });

        }
      });
    });
