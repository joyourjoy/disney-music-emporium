$(document).ready(function(){

  AOS.init();

  media();
    function media(){
        let windowWidth = $(window).width();
        if(windowWidth >= 1400){
             //풀페이지
            new fullpage('#wrap',{
                scrollBar : true,
                normalScrollElements: '.sec-3,.footer',
                fitToSection: false,
                scrollingSpeed: 500,
            })

            //스크롤 위치값에 맞춰 클래스 제어
            $(window).scroll(function(){
                const sct = $(window).scrollTop();
                console.log(sct);
        
                //섹션별 상단 위치값 변수에 저장
                const banner = $('.banner').offset().top;
                const sec1 = $('.sec-1').offset().top;
                const sec2 = $('.sec-2').offset().top;
            });

        }else{
          new fullpage('#wrap',{
            scrollBar : false,
        })
        }
    }

  // 스와이퍼
    var swiper = new Swiper(".first", {
        loop : true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 0,
          slideShadows: false,
        },
      pagination: {
        el: ".pag1",
        clickable: true,
      },
    }); 
  
    var swiper2 = new Swiper(".second", {
      loop : true,
      pagination: {
        el: ".pag2",
        clickable: true,
      },
    });

    // 탑버튼
    let btn = $('.top-btn');
    $(window).scroll(function(){
        if($(window).scrollTop() >= 300){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });
    btn.click(function(){
        $('html,body').animate({
            scrollTop:0
        },500);
    });

    // 서브메뉴버튼
    $('.header #hamburger').click(function(){
      $('.menu-gallery-box').addClass('active');
    });

    $('.box #hamburger').click(function(){
      $('.menu-gallery-box').removeClass('active');
    });

})