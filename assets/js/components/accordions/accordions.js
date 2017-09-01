/* =============================================================================

    COMPONENT: ACCORDIONS JS

    Authored by:
        - Josh Beveridge
        - Justin Bellefontaine

============================================================================= */

(function($) {

    $(document).ready(function() {

        $('.accordions__item-title-link').on('click', function(e) {
            $('.accordions__item').removeClass('show');
            $(this).parent().parent().toggleClass('show');
        });

    });

})(jQuery);
