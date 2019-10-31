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
        spaceBetween: 65,
   //   autoHeight:true,
   loop:false,
     preventClicksPropagation:false,
        pagination: {
        el: '.slider-product .swiper-pagination',
       type: 'bullets',
      },
  
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
      navigation: {
        nextEl: '.product-list .swiper-button-next',
        prevEl: '.product-list .swiper-button-prev',
      },
   
    });

 var pgalleryThumbsver = new Swiper('.thumbVertical', {
      spaceBetween: 0,
    //  slidesPerView: 3,
     //freeMode: true,
      clickable:true,
       direction: 'vertical',
        slideToClickedSlide: true,
      //watchSlidesVisibility: true,
    //  watchSlidesProgress: true,
  //  spaceBetween: 10,
  // loop: true, bug too
  //centeredSlides: true,
  slidesPerView: 6,
  touchRatio: 1,
  slideToClickedSlide: true,
  simulateTouch:true,
  breakpoints: {
             991: {
        direction: 'horizontal',
          centeredSlides: false,
          
        }
      }
    });
    var pgalleryTopver = new Swiper('.productGalleryLargeVer', {
      spaceBetween: 0,
       slidesPerView: 1,
        freeMode: false,
         scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
     /* navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },*/
      thumbs: {
        swiper: pgalleryThumbsver
      },
        breakpoints: {
             600: {
          slidesPerView: 1,
          
          
        }
      }

    });