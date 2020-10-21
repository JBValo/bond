/* =============================================================================

    CORE JS

    Authored by:
        - Josh Beveridge
        - Justin Bellefontaine

    NOTE: This file is not to be edited on a per project basis.

============================================================================= */

(function($) {

    $(document).ready(function() {

        var $root = $('html, body');

        // User Agent Data Attributes ==========================================
        var ua = navigator.userAgent;
        ua = ua.toString();
        $('body').attr('id', ua);

        // Smooth Scrolling (Page Anchors) =====================================
        $('a[href*="#"]:not([href="#"])').on('click',function() {
            $root.animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500); // change the duration of your animation in ms
            return false;
         });

         // Empty Anchor Handling ==============================================
         $('a[href="#"]').on('click', function(e) {
             e.preventDefault();
         });

         // Disabled Button Handling ===========================================
         $('.disabled').on('click', function(e){
             e.preventDefault();
             e.stopPropagation();
             return false;
         });

    });

})(jQuery);
