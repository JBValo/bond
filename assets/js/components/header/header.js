/* =============================================================================

    COMPONENT: HEADER JS

    Authored by:
        - Josh Beveridge
        - Justin Bellefontaine

============================================================================= */

(function($) {

    $(document).ready(function() {

        // Fixed Header
        if($('.main-header').hasClass('fixed')) {
            var header_height = $('.main-header.fixed').outerHeight();
            $(window).on('scroll', function(e) {
                if($(window).scrollTop() > header_height) {
                    $('body').css('padding-top', header_height + 'px');
                    $('.main-header').addClass('fixed');
                } else {
                    $('body').css('padding-top', 0);
                    $('.main-header').removeClass('fixed');
                }
            });
        }

    });

})(jQuery);
