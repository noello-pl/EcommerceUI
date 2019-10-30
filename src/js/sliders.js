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
  
    breakpoints: {

              767: {
     
          
        },
      }
,
      navigation: {
        nextEl: '.section-entry-slider .swiper-button-next',
        prevEl: '.section-entry-slider .swiper-button-prev',
      },
   
    });


var SliderProduct = new Swiper('.slider-product', {
      slidesPerView: 4,
       slidesPerGroup: 1,
        spaceBetween: 10,
   //   autoHeight:true,
   loop:false,
     preventClicksPropagation:false,
        pagination: {
        el: '.slider-product .swiper-pagination',
       type: 'bullets',
      },
  
    breakpoints: {

              767: {
      slidesPerView: 3,
          
        },
           500: {
      slidesPerView: 2,
          
        },
      }
,
      navigation: {
        nextEl: '.slider-sidebar .swiper-button-next',
        prevEl: '.slider-sidebar .swiper-button-prev',
      },
   
    });