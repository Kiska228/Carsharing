$(function(){
    $('.top__heading-slider').slick({
       arrows: false,
       dots:true,
    
       fade:true,
    });

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 870,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 612,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
      });

});

menuBtn = document.querySelector('.menu__btn');
menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click',function(){
    menuList.classList.toggle('show-menu');
});
