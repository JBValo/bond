/* =============================================================================

    COMPONENT: GALLERY JS

    Authored by:
        - Josh Beveridge
        - Justin Bellefontaine

============================================================================= */

(function($) {

    $(document).ready(function() {

        // Full Gallery (Slick)
        if($('.gallery__slides').length) {
            $('.gallery__slides').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                centerMode: true,
                prevArrow: '<a href="" class="gallery__arrow--prev slick-prev"><img src="assets/icons/core-icon-arrow-left.svg" alt="Previous Slide" class="gallery__arrow-icon--prev"></a>',
                nextArrow: '<a href="" class="gallery__arrow--next slick-next"><img src="assets/icons/core-icon-arrow-right.svg" alt="Next Slide" class="gallery__arrow-icon--next"></a>',
                variableWidth: true
            });
        }

        // Open Gallery
        $('.gallery__item-link').on('click', function(e) {
            $('html').addClass('hide-overflow');
            $('.gallery--full').addClass('open');
        });

        // Close Gallery
        $('.gallery__close-button').on('click', function(e) {
            $('html').removeClass('hide-overflow');
            $('.gallery--full').removeClass('open');
        });

        // Gallery: Esc Keypress
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                if($('.gallery--full').hasClass('open')) {
                    $('html').removeClass('hide-overflow');
                    $('.gallery--full').removeClass('open');
                }
            }
        });

    });

})(jQuery);
