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
$('body').on('click', '.btn-main--submit', function() {

    $(this).parents().find('.form-group').addClass('write-input');
});
 $('input:radio').click(function () {
        $('input:not(:checked)').parent().find('label').removeClass("check-radio");
        $('input:checked').parent().find('label').addClass("check-radio");
    });    

$('.form-control--slide').focusout(function() {

	$(this).parent().removeClass('write-input');

 });


$('.header-main__nav__list > li').click(function() {
     if (window.matchMedia('(max-width: 991px)').matches)
{ var $this = $(this);
    $this.find('.header-main__nav__list__sub-content').slideToggle();
    
    $this.toggleClass('active');
    $this.siblings().find('.header-main__nav__list__sub-content').slideUp();
    $this.siblings().find('.header-main__nav__list > li').removeClass('active');
     }

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

$('.header-main__group__search-btn').click(function() {
    $("html,body").addClass('overflow-hidden');
    $(".header-main__group__search").addClass('open-nav');
   //  $(".header-main__logo").addClass('index-high');
});
$('.close-search').click(function() {
    
    $(".header-main__group__search").removeClass('open-nav');
     $("html,body").removeClass('overflow-hidden');
});

$('.product-filters__block__heading').click(function() {
    $(this).parent().find('.product-filters__content').slideToggle();
   $(this).toggleClass("active");

});

$('.btn-filters').click(function() {
    $(".product-filters").addClass('open-filters');
    $(".product-filters__block--first").find(".product-filters__block__heading").toggleClass('active');
 //  $(this).toggleClass("active");
});
$('.btn-filters-close').click(function() {
    $(".product-filters").removeClass('open-filters');
 //  $(this).toggleClass("active");
});
/*   if (window.matchMedia('(min-width: 992px)').matches)
{
$('.product-filters__block__heading').removeClass('active');
}*/
   if (window.matchMedia('(max-width: 992px)').matches)
{
$('.header-main__nav__list > li > a').click(function(e) {
e.preventDefault();

});
 }


$(document).on({
    mouseenter: function () {
        $('.header-main').addClass("nav-open");
        $(this).addClass("current");
       
    },
    mouseleave: function () {
             $('.header-main').removeClass("nav-open");
              $(this).removeClass("current");
             //  $('.header-main__nav__list__sub-content').css({'height': '100%'});
    }
}, ".header-main__nav__list > li");

$(document).on({
    mouseenter: function () {
       
       $(this).find('.header-main__nav__list__sub-content').css({'height': $('.sub-content-nav').innerHeight()});
    },
    mouseleave: function () {
            
            
    }
}, ".header-main__nav__list > li.current");

$(window).scroll(function() {
    if ($(".fixed-top").offset().top > 1) {
        $(".fixed-top").addClass("top-nav-collapse");
        $("body").addClass("clear-padding");
     
        
       
    } else {
        $(".fixed-top").removeClass("top-nav-collapse");
         $("body").removeClass("clear-padding");
        
     
    }
});

$('.header-main__nav__list > li > a').on({ 'touchstart' : function(){ 
 // passive: true,
   if (window.matchMedia('(min-width: 992px)').matches)
{
$('.header-main__nav__list > li > a').click(function(e) {
e.preventDefault();

});
 }

 } });


$('.footer-main__nav__heading').click(function() {
    var $this = $(this);
    $this.parent().find('.footer-main__nav__list').slideToggle();
    
    $this.toggleClass('active');
    $this.parents().siblings().find('.footer-main__nav__list').slideUp();
    $this.parents().siblings().find('.footer-main__nav__heading').removeClass('active');
     

});


