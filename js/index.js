$(document).ready(function () {
    $(window).scrollTop(0)
    $(window).scroll(function () {
        //$(window).scrollTop()这个方法是当前滚动条滚动的距离
        // 获取滚动的高度
        var scrollHeight=$(window).scrollTop();
        // console.log(scrollHeight)
        if(scrollHeight > 0){
            $("nav").addClass("scroll");
        }
        if(scrollHeight == 0){
            $("nav").removeClass("scroll");
        }
        //滚动到对应楼层，对应导航选中
        var array1= [0,800,1500,2700,3200]
        for(let i=0;i<=5;i++){
            if(scrollHeight >= array1[i]){
                $(".nav-item").removeClass("active")
                $(".nav-item").eq(i).addClass("active")
            }
        }
        //获取当前浏览器窗口高度
        var windowHeight = $(window).height()

        //主页动画 （两方块随滚动条同步动画）
        var bgimg2Top = $(".bgimg2").position().top
        // console.log(bgimg2Top-windowHeight+60)
        if(scrollHeight >= bgimg2Top-windowHeight+60 && scrollHeight < 800){
            var bgimgHeight = (scrollHeight-(bgimg2Top-windowHeight+68))*0.5
            $(".bgimg2>img").css('bottom', bgimgHeight)
            $(".bgimg1>img").css('bottom', bgimgHeight)
        }

        //产品动画 （中显边拉动画）
        var item2Top = $(".item-2").position().top
        if(scrollHeight < item2Top-windowHeight+80){
            $(".pro-item .pro-itembox.pro-item2").removeClass("active")
        }
        if(scrollHeight >= item2Top-windowHeight+100){
            $(".pro-item .pro-itembox.pro-item2").addClass("active");
        }
        if(scrollHeight >= item2Top-windowHeight+100){
            setTimeout(function () { 
                $(".pro-item .pro-itembox.pro-item1").addClass("active");
                $(".pro-item .pro-itembox.pro-item3").addClass("active");
            }, 700);
            $(".pro-item .pro-itembox.pro-item1").css({"opacity":"0"})
            $(".pro-item .pro-itembox.pro-item3").css({"opacity":"0"})
            var item2Height = (scrollHeight-(item2Top-windowHeight+68))*0.55
            if((200-item2Height) >= 0){
                $(".pro-item .pro-itembox.pro-item1").css({"transform":"translateX("+(200-item2Height)+"px)"})
                $(".pro-item .pro-itembox.pro-item3").css("transform","translateX("+(-200+item2Height)+"px)")
            }
        }
        // if(scrollHeight >= item2Top-windowHeight+100){
        //     setTimeout(function () { 
        //         $(".pro-item .pro-itembox.pro-item1").addClass("active");
        //         $(".pro-item .pro-itembox.pro-item3").addClass("active");
        //     }, 1500);
        //     $(".pro-item .pro-itembox.pro-item1").css({"opacity":"0"})
        //     $(".pro-item .pro-itembox.pro-item3").css({"opacity":"0"})
        // }
        if(scrollHeight >= item2Top-windowHeight+160){        
            $(".pro-item .pro-itembox.pro-item1").css({"opacity":"0.2"})
            $(".pro-item .pro-itembox.pro-item3").css({"opacity":"0.2"})
        }
        if(scrollHeight >= item2Top-windowHeight+200){        
            $(".pro-item .pro-itembox.pro-item1").css({"opacity":"0.5"})
            $(".pro-item .pro-itembox.pro-item3").css({"opacity":"0.5"})
        }
        if(scrollHeight >= item2Top-windowHeight+240){        
            $(".pro-item .pro-itembox.pro-item1").css({"opacity":"0.7"})
            $(".pro-item .pro-itembox.pro-item3").css({"opacity":"0.7"})
        }
        if(scrollHeight >= item2Top-windowHeight+280){
            $(".pro-item .pro-itembox.pro-item1").css({"opacity":"1"})
            $(".pro-item .pro-itembox.pro-item3").css({"opacity":"1"})
        }
        // if(scrollHeight >= item2Top-windowHeight+360){
        //     $(".pro-item .pro-itembox.pro-item1").css({"opacity":"0.8"})
        //     $(".pro-item .pro-itembox.pro-item3").css({"opacity":"0.8"})
        // }
        // if(scrollHeight >= item2Top-windowHeight+440){
        //     $(".pro-item .pro-itembox.pro-item1").css({"opacity":"1"})
        //     $(".pro-item .pro-itembox.pro-item3").css({"opacity":"1"})
        // }
        //规划历程动画 （时间历程跟随滚动条从下方渐性出现）
        var item3Top = $(".item-3").position().top-windowHeight+320
        if(scrollHeight < item3Top){
            $(".time-tree .time-treebox").removeClass("active")
        }
        if(scrollHeight>=item3Top){//2017
            $(".time-tree .time-treebox.time-tree1").addClass("active");
        }
        if(scrollHeight>=item3Top+80){//1月
            $(".time-tree .time-treebox.time-tree2").addClass("active");
        }
        if(scrollHeight>=item3Top+180){//2018
            $(".time-tree .time-treebox.time-tree3").addClass("active");
        }
        if(scrollHeight>=item3Top+300){//3月
            $(".time-tree .time-treebox.time-tree4").addClass("active");
        }
        if(scrollHeight>=item3Top+380){//5月
            $(".time-tree .time-treebox.time-tree5").addClass("active");
        }
        if(scrollHeight>=item3Top+500){//6月
            $(".time-tree .time-treebox.time-tree6").addClass("active");
        }
        if(scrollHeight>=item3Top+580){//7月
            $(".time-tree .time-treebox.time-tree7").addClass("active");
        }
        if(scrollHeight>=item3Top+680){//11月
            $(".time-tree .time-treebox.time-tree8").addClass("active");
        }
        if(scrollHeight>=item3Top+770){//12月
            $(".time-tree .time-treebox.time-tree9").addClass("active");
        } 
        if(scrollHeight>=item3Top+900){//12月
            $(".time-tree .time-treebox.time-tree10").addClass("active");
        } 
        if(scrollHeight>=item3Top+1000){//12月
            $(".time-tree .time-treebox.time-tree11").addClass("active");
        } 
        //规划历程动画 （背景方块随滚动条同步动画）
        //背景方块到浏览器顶端距离
        var bgimg3Top = $(".b-r-bimg").position().top
        if(scrollHeight >= item3Top+900 && scrollHeight < item3Top+1600){
            var bgimg3Height = (scrollHeight-(bgimg3Top-windowHeight+1800))*0.8
            $(".b-r-bimg>img").css('bottom', bgimg3Height)
        }

        //关于我们动画
        var item4Top = $(".item-3").position().top + $(".content.content1").position().top-windowHeight+250;
        if(scrollHeight < item4Top){
            $(".about-left p").removeClass("active");
            $(".about-right .about-itembox").removeClass("active");
        }
        if(scrollHeight >= item4Top){
            $(".about-left p.p1").addClass("active");
            $(".about-right .about-itembox.item1").addClass("active");
        }
        if(scrollHeight >= item4Top+100){
            $(".about-left p.p2").addClass("active");
        }
        if(scrollHeight >= item4Top+230){
            $(".about-left p.p3").addClass("active");
            $(".about-right .about-itembox.item2").addClass("active");
        }
        //联系我们动画
        var item5Top = $(".item-3").position().top + $(".content.content2").position().top-windowHeight+340;
        if(scrollHeight < item5Top){
            $(".contact-left .text").removeClass("active");
            $(".contact-right li").removeClass("active");
        }
        if(scrollHeight >= item5Top){
            $(".contact-right .item1").addClass("active");
        }
        if(scrollHeight >= item5Top+80){
            $(".contact-right .item2").addClass("active");
        }
        if(scrollHeight >= item5Top+120){
            $(".contact-left .text.text1").addClass("active");
        }
        if(scrollHeight >= item5Top+160){
            $(".contact-left .text.text2").addClass("active");
            $(".contact-right .item3").addClass("active");
        }
        if(scrollHeight >= item5Top+240){
            $(".contact-left .text.text3").addClass("active");
            $(".contact-right .item4").addClass("active");
        }
        if(scrollHeight >= item5Top+320){
            $(".contact-right .item5").addClass("active");
        }
        if(scrollHeight >= item5Top+500){
            $(".contact-left .text.text4").addClass("active");
            $(".contact-right .item6").addClass("active");
        }
    });
    var array= [0,1140,1610,2860,3650]
    // 点击导航到达指定楼层
    $(".nav-item").click(function(){
        // 获取楼层到顶部的高度
        var conHeight= array[$(this).index()];
        /*指定滚动条*/
        $('body,html').animate({scrollTop: conHeight},1000);
    });
    $(".logo").click(function(){
        $('body,html').animate({scrollTop: 0},10);
    });
});