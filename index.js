$(document).ready(function(){
    $('.slider-nav').slick({
            infinite: true,
            speed: 600,
            slidesToShow: 3,
            autoplay:true,
            autoplaySpeed: 1800,
            slidesToScroll: 1,
            prevArrow:"<img class='a-left control-c prev slick-prev' src='https://static.tildacdn.com/tild3136-3235-4436-b162-353962616539/back.svg'>",
            nextArrow:"<img class='a-right control-c next slick-next' src='https://static.tildacdn.com/tild3863-6336-4263-a466-356536656537/next.svg'>",
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,   // Показываем по три слайда
                    slidesToScroll: 1, // листаем по одному слайду
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,   // Показываем по два слайда
                    slidesToScroll: 1, // листаем по одному слайду
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,   // Показываем по одномк слайду
                    slidesToScroll: 1, // листаем по одному слайду
                  }
                }
              ]
  });
});