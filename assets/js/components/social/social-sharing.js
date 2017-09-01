/* =============================================================================

    COMPONENT: SOCIAL SHARING JS

    Authored by:
        - Josh Beveridge
        - Justin Bellefontaine

============================================================================= */

(function($) {

    $(document).ready(function() {

        $('.social-sharing__trigger').on('click', function(e) {
            $(this).hide();
            $(this).siblings('.social-sharing__list').addClass('show');
        });

    });

})(jQuery);
