/* =============================================================================

    COMPONENT: NAVIGATION (BASIC) JS

    Authored by:
        - Josh Beveridge
        - Justin Bellefontaine

============================================================================= */

(function($) {

    $(document).ready(function() {

        // Basic Nav: Hide/Show on Mobile
        $('.nav-toggle').on('click', function(e) {
            $('html').toggleClass('hide-overflow');
            $(this).toggleClass('show');
            $('.main-nav').toggleClass('show');
            if($(this).hasClass('show')) {
                $(this).text('Hide Menu');
            } else {
                $(this).text('Menu');
            }
        });

        // Basic Nav: Submenu Expanders
        // $('.sub-menu').prev().append('<span class="expand"></span>');
        //
        // $('.expand').on('click',function(e){
        //     $(this).parent().siblings('.sub-menu').toggleClass('active');
        //     $(this).toggleClass('active');
        //     e.preventDefault();
        // });

    });

})(jQuery);
