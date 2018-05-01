function nTabs(thisObj, Num) {
    var tabObj = thisObj.parentNode.id;
    var tabList = document.getElementById(tabObj).getElementsByTagName("li");
    for (i = 0; i < tabList.length; i++) {
        if (i == Num) {
            thisObj.classList.add("on");
            document.getElementById(tabObj + "_Content" + i).style.display = "block";
        } else {
            tabList[i].classList.remove("on");
            document.getElementById(tabObj + "_Content" + i).style.display = "none";
        }
    }
}
// JavaScript Document
$(function () {
    // 底部图片hover效果
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

    var li = $('ul .m');
    li.eq(0).find('a').eq(0).hover(function () {
        $(this).html('HOME');
    }, function () {
        $(this).html('首页');
    });

    li.eq(1).find('a').eq(0).hover(function () {
        $(this).html('NEWS');
    }, function () {
        $(this).html('新闻动态');
    });

    li.eq(2).find('a').eq(0).hover(function () {
        $(this).html('PRODUCT');
    }, function () {
        $(this).html('产品服务');
    });

    li.eq(3).find('a').eq(0).hover(function () {
        $(this).html('CASE');
    }, function () {
        $(this).html('成功案例');
    });

    li.eq(4).find('a').eq(0).hover(function () {
        $(this).html('ABOUT');
    }, function () {
        $(this).html('关于我们');
    });
    var url = window.location.href.toLowerCase();
    if (url.indexOf("/index.html") > -1) {
        $(".aa1").attr("id", "sel");
    } else if (url.indexOf("/news.html") > -1 ) {
        $(".aa3").attr("id", "sel");
    }else if (url.indexOf("/about.html") > -1 ) {
        $(".aa8").attr("id", "sel");
    }

    //控制导航
    var nav = $('.navbar'),
        doc = $(document),
        win = $(window);
    win.scroll(function () {
        if (doc.scrollTop() > 80) {
            nav.addClass('scrolled');
        } else {
            nav.removeClass('scrolled');
        }
    });
    win.scroll();


    $(".cont dl").hover(
        function () {
            $(this).children().stop(false, true);
            $(this).children(".serBoxOn").fadeIn();
          //  $(this).children(".pic1").animate({right: -205}, 400);
          //  $(this).children(".pic2").animate({left: 28}, 400);

        },
        function () {
            $(this).children().stop(false, true);
            $(this).children(".serBoxOn").fadeOut();
        }
    );

    var newhtml, i, s;
    i = 0;
    s = 0;
    /*左移*/

    function shangfan() {
        var ulElement = $(".nTab .cont ul");

        var speed = 1000;
        ulElement.each(function () {
            var lineHeight = -( $(this).children("li").width() + parseInt($(this).children("li").css("margin-right").replace('px', '')));

            $(this).find("li:last").prependTo($(this));
            $(this).css({marginLeft: lineHeight});
            $(this).animate({
                marginLeft: 0
            }, speed, function () {
                $(this).css({marginLeft: 0});

            });
        })
    }


    function xiafan() {
        var ulElement = $(".nTab .cont ul");
        var speed = 1000;
        ulElement.each(function () {
            var lineHeight = ( $(this).children("li").width() + parseInt($(this).children("li").css("margin-right").replace('px', '')));
            $(this).animate({
                marginLeft: -lineHeight
            }, speed, function () {
                $(this).css({marginLeft: 0});
                $(this).find("li:first").appendTo($(this));

            });
        })

    }


    $(".prev").click(function () {
        console.log(1);
        shangfan();
    });
    $(".next").click(function () {
        xiafan();
    })
})

