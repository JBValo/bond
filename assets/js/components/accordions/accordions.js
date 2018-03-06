/* =============================================================================

    COMPONENT: ACCORDIONS JS

    Authored by:
        - Josh Beveridge
        - Justin Bellefontaine

============================================================================= */

(function($) {

    $(document).ready(function() {

        $('.accordions__item-title-link').on('click', function(e) {
            if($(this).parent().parent().hasClass('show')) {
                $(this).parent().parent().removeClass('show');
            } else {
                $('.accordions__item').removeClass('show');
                $(this).parent().parent().toggleClass('show');
            }
        });

    });

})(jQuery);
