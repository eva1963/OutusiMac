
$(function(){
    //引导页的消失
    $(".welcome").css("visibility","hidden");

    //回到顶部
    $(".top").click(function() {
        $("html,body").animate({scrollTop: 0},1000);
    });

    //控制导航在引导页时的隐藏行为
    setTimeout(function(){
        $("#menu").css("display","block");
    }, 2000);


    $("#outusi").fullpage({

        //控制导航状态
        afterLoad: function(anchorLink,index) {
           $("#menu li").eq(index-1).addClass("current").siblings().removeClass("current");
        },

        //控制导航菜单
        anchors: ['page1','page2','page3','page4','page5'],     //定义锚链接
        menu: '#menu',
        //右边的圆圈导航
        'navigationPosition': 'left',
        navigation: true
    });

    //swiper插件
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 15000,
        speed: 1000,
        autoplayDisableOnInteraction: false
    });

    //动画插件
    var mySwiper = new Swiper ('.swiper-container', {
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    })


});
