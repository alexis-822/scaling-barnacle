<script>


	
gform.addFilter( 'gform_datepicker_options_pre_init', function( optionsObj, formId, fieldId ) {
    if ( formId == 1 && fieldId == 16 ) {
        optionsObj.minDate = 0;
        optionsObj.onClose = function (dateText, inst) {
            dateText = new Date(dateText);
					 dateMin = new Date(dateText.getFullYear(), dateText.getMonth(),dateText.getDate()+1);
            jQuery('#input_1_17').datepicker('option', 'minDate', dateMin).datepicker('setDate', dateMin);
        };
    }
    return optionsObj;
});
	
	
	</script>
