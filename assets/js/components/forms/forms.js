/* =============================================================================

    COMPONENT: FORMS JS

    Authored by:
        - Josh Beveridge
        - Justin Bellefontaine

============================================================================= */

(function($) {

    $(document).ready(function() {

        // File Inputs
        // TODO: Multiple file inputs (e.g. 2 files selected)
        function inputChange() {
            $(this).siblings('.file-input__label').text($(this).val().split('\\').pop());
        }

        $('input[type="file"]').each(function() {
            // TRANSLATION-ITEM
            $(this).parent().append("<label class='file-input__label' for=" + $(this).attr('id') + ">Select a File</label>");
            $(this).change(inputChange);
        });

    });

})(jQuery);
