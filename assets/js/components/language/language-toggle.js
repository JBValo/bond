/* =============================================================================

    COMPONENT: LANGUAGE TOGGLE (SIDEBAR) JS

    Authored by:
        - Josh Beveridge
        - Justin Bellefontaine

============================================================================= */

(function($) {

    $(document).ready(function() {

        $('.sidebar-nav__item--language .sidebar-nav__item-link').on('click', function(e) {
            $(this).siblings('.language-toggle--sidebar').toggleClass('show');
        });

    });

})(jQuery);
