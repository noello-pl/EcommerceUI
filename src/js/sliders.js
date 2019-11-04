var SliderDesktop = new Swiper('.section-entry-slider', {
      slidesPerView: 1,
       slidesPerGroup: 1,
   //   autoHeight:true,
   loop:false,
     preventClicksPropagation:false,
        pagination: {
        el: '.section-entry-slider .swiper-pagination',
       type: 'bullets',
      },
      pagination: '.section-entry-slider .swiper-pagination',
  paginationClickable: true,
    breakpoints: {

              767: {
     
          
        },
      }
,
    
      nextButton: '.section-entry-slider  .swiper-button-next',
    prevButton: '.section-entry-slider  .swiper-button-prev',
   
    });


var SliderProduct = new Swiper('.slider-product', {
      slidesPerView: 4,
       slidesPerGroup: 1,
        spaceBetween: 65,
   //   autoHeight:true,
   loop:false,
     preventClicksPropagation:false,
        pagination: {
        el: '.slider-product .swiper-pagination',
       type: 'bullets',
      },
      pagination: '.slider-product  .swiper-pagination',
  paginationClickable: true,
    breakpoints: {
   1200: {
      slidesPerView: 3,
      spaceBetween: 35,
          
        },
              767: {
      slidesPerView: 3,
      spaceBetween: 10,
          
        },
           500: {
      slidesPerView: 2,
            spaceBetween: 10,
        },
      }
,
    
       nextButton: '.product-list .swiper-button-next',
    prevButton: '.product-list .swiper-button-prev',
   
    });



    $(document).ready(function() {
  var productSlider = new Swiper('.productGalleryLargeVer', {
   
    spaceBetween: 10,
    scrollbar:'.swiper-scrollbar',
  });
  var productThumbs = new Swiper('.thumbVertical', {
    spaceBetween: 5,
    centeredSlides: true,
    slidesPerView: 4,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    direction: 'vertical'
  });
  productSlider.params.control = productThumbs;
  productThumbs.params.control = productSlider;
});