/* =============================================================================

    COMPONENT: DEMO NAV JS

    Authored by:
        - Josh Beveridge
        - Justin Bellefontaine

============================================================================= */

(function($) {

    $(document).ready(function() {

        $('.demo-nav__item-link').on('click', function(e) {
            $('.demo-nav__item-link').removeClass('current');
            $(this).addClass('current');
            $('div[data-sidebar-pane]').removeClass('current');
            $('ul[data-sidebar-level]').removeClass('current');
            $('a[data-sidebar-pane]').removeClass('current');
            $('.sidebar-nav__overlay').removeClass('show');
            $('html').removeClass('hide-overflow');
        });

    });

})(jQuery);
