function nTabs(thisObj,Num){
    console.log(11);
    if(thisObj.className == "active")return;
    var tabObj = thisObj.parentNode.id;
    var tabList = document.getElementById(tabObj).getElementsByTagName("li");
    for(i=0; i <tabList.length; i++)
    {
        if (i == Num)
        {
            thisObj.className = "on";
            document.getElementById(tabObj+"_Content"+i).style.display = "block";
        }else{
            tabList[i].className = "";
            document.getElementById(tabObj+"_Content"+i).style.display = "none";
        }
    }
}
// JavaScript Document
$(function() {
    $(".weibo_icon").hover(function () {
        $(".weibo").fadeIn(500);
        $(".qq,.twitter,.wechat").fadeOut(0);
        $(".code_wrap").css("z-index", 200);
    }, function () {
        $(".weibo").fadeOut(0);
        $(".code_wrap").css("z-index", 50);
    });

    $(".qq_icon").hover(function () {
        $(".qq").fadeIn(500);
        $(".weibo,.twitter,.wechat").fadeOut(0);
        $(".code_wrap").css("z-index", 200);
    }, function () {
        $(".qq").fadeOut(0);
        $(".code_wrap").css("z-index", 50);
    });
    $(".twitter_icon").hover(function () {
        $(".twitter").fadeIn(500);
        $(".weibo,.qq,.wechat").fadeOut(0);
        $(".code_wrap").css("z-index", 200);
    }, function () {
        $(".twitter").fadeOut(0);
        $(".code_wrap").css("z-index", 50);
    });
    $(".wechat_icon").hover(function () {
        $(".wechat").fadeIn(500);
        $(".weibo,.qq,.twitter").fadeOut(0);
        $(".code_wrap").css("z-index", 200);
    }, function () {
        $(".wechat").fadeOut(0);
        $(".code_wrap").css("z-index", 50);
    });
    $(".weibo,.twitter,.wechat").hover(function () {
        $(this).fadeIn(0);
        $(".code_wrap").css("z-index", 200);
    }, function () {
        $(this).fadeOut(500);
        $(".code_wrap").css("z-index", 50);
    });



    $(".cont dl").hover(
        function () {
            $(this).children().stop(false,true);
            $(this).children(".serBoxOn").fadeIn();
            $(this).children(".pic1").animate({right: -205},400);
            $(this).children(".pic2").animate({left: 28},400);
            $(this).children(".txt1").animate({left: -261},400);
            $(this).children(".txt2").animate({right: 0},400);
        },
        function () {
            $(this).children().stop(false,true);
            $(this).children(".serBoxOn").fadeOut( );
            $(this).children(".pic1").animate({right:28},400);
            $(this).children(".pic2").animate({left: -205},400);
            $(this).children(".txt1").animate({left: 0},400);
            $(this).children(".txt2").animate({right: -261},400);
        }
    );

    var newhtml, i,s;
    i = 0;
    s = 0;
    $(".nTab .cont ul").each(function() {
        var xs = parseInt($(this).children("li").css("margin-right").replace('px', ''));

        $(this).width(($(this).children("li").width() + xs) * $(this).children("li").length)
    });
    /*左移*/

    function shangfan(){
        var ulElement =  $(".nTab .cont ul");

        var speed =  1000;
        ulElement.each(function(){
            var lineHeight = -( $(this).children("li").width()+parseInt( $(this).children("li").css("margin-right").replace('px', '')));

            $(this).find("li:last").prependTo($(this));
            $(this).css({marginLeft:lineHeight});
            $(this).animate({
                marginLeft:0
            },speed,function(){
                $(this).css({marginLeft:0});

            });
        })
    }


    function xiafan(){
        var ulElement = $(".nTab .cont ul");
        var speed =  1000;
        ulElement.each(function(){
            var lineHeight = ( $(this).children("li").width()+parseInt( $(this).children("li").css("margin-right").replace('px', '')));
            $(this).animate({
                marginLeft:-lineHeight
            },speed,function(){
                $(this).css({marginLeft:0});
                $(this).find("li:first").appendTo($(this));

            });
        })

    }



    $(".prev").click(function() {
        console.log(1);shangfan(); });
    $(".next").click(function() { xiafan(); })
})

