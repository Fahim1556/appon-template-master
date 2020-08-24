$(function () {
    $('.slick_slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    $('.slick_sceen').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    $('.team_slick').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    //feedback text slider
    $('.slide-for-fbtxt').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        asNavFor: '.user_slider',
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });

    //user comment slider
    $('.user_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        asNavFor: '.slide-for-fbtxt',
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });

    $('.video_icon').venobox();

    $(".scroll_top").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 3000);
    })
    $(window).scroll(function () {
        let scroll = $(this).scrollTop();
        if (scroll >= 500) {
            $(".scroll_top").show();
        } else {
            $(".scroll_top").hide();
        }
    })
    

    // sticky menu start   
$(".full_nav").offset().top;
    
    $(window).scroll(function(){
        
        let $scrolling = $(this).scrollTop();
        
        if($scrolling >= 100){
            $(".full_nav").css({
                position:"fixed",
                zIndex:"10",
                background:"#000",
                padding:"10px 0",
              
                
              
            });
        }
        else{
            $(".full_nav").css({
                background:"transparent",
                 padding:"40px 0",
                
            });
        }
        
    })
});