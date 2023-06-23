//메인메뉴의 움직이는 바
$('.gnb li a').mouseenter(function () {
    let bar = $(this).position().left;
    // console.log(bar);
    let widNum = $(this).width();
    // $('.mainmenu .bar').animate({실행문},시간)
    $('.mainmenu .bar').animate({
        'left': bar + "px",
        'width': widNum + "px",
        'opacity': 1
    }, 200)
})
$('.gnb').mouseleave(function () {
    $('.mainmenu .bar').animate({
        'left': 0,
        'width': 0,
        'opacity': 0
    }, 10)
}, )


//전체화면 애니메이션
$('.animate').scrolla({
    // default
    mobile: true, // 모바일 버전에서 활성화
    once: false, // 스크롤 시 한 번 또는 여러번 실행
    animateCssVersion: 4 // scrolla animate.css version (3 or 4)
});

// menuopen
// $('.menuopen .open').on('click',function(){})
$('.menuopen .open').click(function (e) {
    e.preventDefault();
    $('.menuopen .menuwrap').addClass('on');
})
$('.menuwrap .close').click(function (e) {
    e.preventDefault();
    $('.menuopen .menuwrap').removeClass('on');
})


$('.menuwrap ul li').click((e) => {
    e.preventDefault();
    $('.menuopen .menuwrap').removeClass('on');
})


//background color 변경
$(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    //$(this)는 window
    // console.log(scrollTop);
    let offset = $('.service').offset().top -300 ;
    if (scrollTop > offset) {
        $('body').addClass('on')
    } else {
        $('body').removeClass('on')
    }
})