/* =============================================================================

    COMPONENT: HERO JS

    Authored by:
        - Josh Beveridge
        - Justin Bellefontaine

============================================================================= */

(function($) {

    $(document).ready(function() {

        // Slick Init
        if($('.hero').length) {
            $('.hero').slick({
                prevArrow: '<a href="" class="hero__arrow--prev slick-prev"><img src="assets/icons/core-icon-arrow-left.svg" alt="Previous Slide" class="hero__arrow-icon--prev"></a>',
                nextArrow: '<a href="" class="hero__arrow--next slick-next"><img src="assets/icons/core-icon-arrow-right.svg" alt="Next Slide" class="hero__arrow-icon--next"></a>',
                cssEase: 'ease',
                fade: false,
                useTransform: true,
                dots: true,
                appendDots: '.hero',
                appendArrows: '.hero'
            });
        }

        // Autoplay background video
        if($('.hero video').length) {
            var vid = $('.hero__video-container video')[0];
            vid.play();
        }

    });

})(jQuery);
