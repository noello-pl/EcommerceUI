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
        nextEl: '.slider-sidebar .swiper-button-next',
        prevEl: '.slider-sidebar .swiper-button-prev',
      },
   
    });
