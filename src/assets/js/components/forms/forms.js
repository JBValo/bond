/* =============================================================================

    COMPONENT: FORMS JS

    Authored by:
        - Josh Beveridge
        - Justin Bellefontaine

============================================================================= */

(function($) {

    $(document).ready(function() {

        // File Inputs
        function inputChange() {
            if($(this)[0].files.length === 1) {
                $(this).siblings('.file-input__label').text($(this).val().split('\\').pop());
            } else {
                // TRANSLATION-ITEM
                $(this).siblings('.file-input__label').text($(this)[0].files.length + ' files selected');
            }
        }

        $('input[type="file"]').each(function() {
            // TRANSLATION-ITEM
            $(this).parent().append("<label class='file-input__label' for=" + $(this).attr('id') + ">Select a File</label>");
            $(this).change(inputChange);
        });

        // Select2
        $('select[multiple]').each(function(e) {
            $(this).select2({
                placeholder: $(this).attr('placeholder')
            });
        });

            // Reset
            $('.filters__reset-button').on('click', function(e) {
                $(this).closest('form').find('select[multiple]:not([disabled])').val(null).trigger('change');
            });

    });

})(jQuery);
