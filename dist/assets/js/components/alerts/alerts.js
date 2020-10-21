/* =============================================================================

    COMPONENT: ALERTS JS

    Authored by:
        - Josh Beveridge
        - Justin Bellefontaine

============================================================================= */

(function($) {

    $(document).ready(function() {

        $('.alert__list-item-close').on('click', function(e) {
            $(this).parent().hide();
        });

    });

})(jQuery);
