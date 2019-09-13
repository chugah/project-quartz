$(document).ready(function() {
    var $window = $(window);
        function checkWidth() {
        if ($window.width() <= 768) {
            $('#toggle-flex')
              .removeClass('flex-row')
              .removeClass('column-width')
              .addClass('flex-column-reverse');

            $('#toggle-cineworld')
              .removeClass('cineworld')
              .addClass('cineworld-alt');

              $('#toggle-edTech')
                .removeClass('edTech')
                .addClass('edTech-alt');
        }

        if ($window.width() > 768) {
            $('#toggle-flex')
              .removeClass('flex-column-reverse')
              .addClass('flex-row');

            $('#toggle-cineworld')
              .removeClass('cineworld-alt')
              .addClass('cineworld');

              $('#toggle-edTech')
                .removeClass('edTech-alt')
                .addClass('edTech');
        }
    }
    checkWidth();
    $(window).resize(checkWidth);
});
