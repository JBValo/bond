/* =============================================================================

    APP JS

    Authored by:
        - Josh Beveridge
        - Justin Bellefontaine

============================================================================= */

(function($) {

    $(document).ready(function() {

        // Wordpress Image Wrapper
        if($('[class*="wp-image"]').length) {
            $('[class*="wp-image"]').parent().addClass("wp-image__wrapper");
        }

        // Responsive Tables
        if($('.content-area table').length) {
            $('.content-area table').each(function(e) {
                $(this).wrap($('<div class="table-wrapper"></div>'));
            });
        }

    });

})(jQuery);
