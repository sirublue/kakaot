$(function(){

    // 배너섹션 크기조정
    var current=$('.banner_img01');
    var cnt=1;
    current.addClass('active');
    var myInterval=setInterval(function(){
        if(cnt<5){cnt++;}else{cnt=1;}
        current.removeClass('active');
        current=$('.banner_img0'+cnt);
        current.addClass('active');
    },6000)

    $(window).on('scroll',function(){
        if($(window).scrollTop()>100){
            clearInterval(myInterval);
        }
    })

    $(window).on('resize',function(){
        if($(window).width()<=759){
            clearInterval(myInterval);
        }
    })

    // 모달창 열기
    $('.video01').on('click',function(){
        $('.modal01').fadeIn(500);
    })
    $('.video02').on('click',function(){
        $('.modal02').fadeIn(500);
    })

    // 모달창 닫기
    $('.close_btn').on('click',function(){
        $('.modal').fadeOut(0);
        $('#iframe01').attr('src',$('#iframe01').attr('src'));
        $('#iframe03').attr('src',$('#iframe02').attr('src'));
    })

    // <!-- Initialize Swiper -->
    var swiper = new Swiper('.swiper-container', {
        effect: 'flip',
        grabCursor: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    });

    // 네비게이터 정보확인
    function osSelector(){
        var naviInfo=navigator.userAgent.toLowerCase();
        if(naveInfo.indexOf('window')>0){
            $('#google').show();
            $('#apple').show();
        }else if(naveInfo.indexOf('iphone')>0){
            $('#google').hide();
            $('#apple').show();
        }else{
            $('#google').show();
            $('#apple').hide();
        }
    }
    osSelector();


})
