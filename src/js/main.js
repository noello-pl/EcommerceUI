$('input.form-control.form-control--slide').blur(function()
{
    if( $(this).val() ) {
          $(this).parent().addClass('write-input');
    }
    else{
        $(this).parent().removeClass('write-input');
    }
});

$('.form-control--slide').click(function(){
	$(this).parent().addClass('write-input');
});

 $('input:radio').click(function () {
        $('input:not(:checked)').parent().find('label').removeClass("check-radio");
        $('input:checked').parent().find('label').addClass("check-radio");
    });    

$('.form-control--slide').focusout(function() {

	$(this).parent().removeClass('write-input');

 });