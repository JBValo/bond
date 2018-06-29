/* =============================================================================

    COMPONENT: SOCIAL SHARING JS

    Authored by:
        - Josh Beveridge
        - Justin Bellefontaine

============================================================================= */

(function($) {

    $(document).ready(function() {

        // Show and Hide Options
        $('.social-sharing__trigger').on('click', function(e) {
            $(this).hide();
            $(this).siblings('.social-sharing__list').addClass('show');
        });

        // Email Option
        $('.social-sharing__list-item-link--email').on('click', function(e) {
            $('.social-sharing__email-form').addClass('show');
        });

    });

})(jQuery);
