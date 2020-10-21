/* =============================================================================

    COMPONENT: PAGINATION JS

    Authored by:
        - Josh Beveridge
        - Justin Bellefontaine

============================================================================= */

(function($) {

    $(document).ready(function() {

        var pageCount = 0;

        // Get the number of pages
        $('.pagination__list-item--number').each(function(e) {
            pageCount++;
        });

        // Append the number of pages to the current page (for mobile)
        $('.pagination__list-item--number.current .pagination__number').append('<span class="pagination__page-count"> of ' + pageCount + '</span>');

    });

})(jQuery);
