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


$('.header-main__nav__list > li').click(function() {
    var $this = $(this);
    $this.find('.header-main__nav__list__sub-content').slideToggle();
    
    $this.toggleClass('active');
    $this.siblings().find('.header-main__nav__list__sub-content').slideUp();
    $this.siblings().find('.header-main__nav__list > li').removeClass('active');
     

});
$('.close-nav').click(function() {
    $(".header-main__nav__list").find('.header-main__nav__list__sub-content').slideUp();
    $(".header-main__nav").removeClass('open-nav');
     $("html,body").removeClass('overflow-hidden');
});
$('.header-main__group__nav-btn').click(function() {
    $("html,body").addClass('overflow-hidden');
    $(".header-main__nav").addClass('open-nav');
});

   if (window.matchMedia('(max-width: 992px)').matches)
{
$('.header-main__nav__list > li > a').click(function(e) {
e.preventDefault();

});
 }

$(window).scroll(function() {
    if ($(".fixed-top").offset().top > 1) {
        $(".fixed-top").addClass("top-nav-collapse");
        $("body").addClass("clear-padding");
     
        
       
    } else {
        $(".fixed-top").removeClass("top-nav-collapse");
         $("body").removeClass("clear-padding");
        
     
    }
});