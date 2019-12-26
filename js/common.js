$(document).ready(function () {

    let openMenuBtn = $("#triggerMenuBtn"),
        closeMenuBtn = $("#closeMenuBtn"),
        sideNav = $("#siderNav"),
        searchBtn = $("#searchBtn"),
        searchWrap = $("#searchWrap"),
        mFontSize= parseInt($("html").css("font-size")) / 100;

    openMenuBtn.on("click", function () {
        sideNav.addClass("show").removeClass("hidden")
    })
    closeMenuBtn.on("click", function () {
        sideNav.removeClass("show").addClass("hidden")
    })
    searchBtn.on("click", function () {
        let state = searchWrap[0].className.indexOf("show") > -1;
        searchWrap.toggleClass("show", !state).toggleClass("hidden", state)
    })
    searchWrap.on("click", function (e) {
        searchWrap.removeClass("show").addClass("hidden")
    })

    $(".searchWrap-wrap").on("click", function (e) {
        e.stopPropagation()
    })

    $(".siderNav-wrap ul").on('touchstart', function (e) {
        e.stopPropagation()
        $(".siderNav-wrap ul").on('touchend', function (e) {
            e.stopPropagation()
        })
    })

    $(".siderNav-first > li >a").on("click", function (e) {
        var state = $(this).siblings(".siderNav-child").is(":visible");
        $(this).siblings("i").toggleClass("icon-zuobian", state).toggleClass("icon-sandian", !state)
        $(this).siblings(".siderNav-child").stop().slideToggle(300)
    })


    sideNav.on('touchstart', function (e) {
        var touch = e.originalEvent,
            startX = event.touches[0].pageX;
        startY = event.touches[0].pageY;
        sideNav.on('touchend', function (e) {
            var spanX = event.changedTouches[0].pageX - startX;
            var spanY = event.changedTouches[0].pageY - startY;
            if (Math.abs(spanX) < Math.abs(spanY)) {
                if (spanY > 20) {
                } else if (spanY < -30) {
                    sideNav.removeClass("show").addClass("hidden")
                }
            }
        });
    });

    $("#container").scroll(function () {
        if (this.scrollTop > 300) {
            $("#totop").fadeIn()
        } else {
            $("#totop").fadeOut()
        }
    })

    $("#totop").click(function () {
        $('#container').animate({scrollTop: 0}, 500);
    });


    if ($(".banner .swiper-slide").length > 1) {
        new Swiper(".banner .swiper-container", {
            speed: 600,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            }
        })
    }


    if ($(".hot-list").length > 0) {
        $(".hot-list").slide({
            mainCell: "ul",
            autoPlay: true,
            effect: "leftMarquee",
            vis: 3,
            interTime: 40,
            autoPlay: true,
        });
    }
    if ($(".business-list").length > 0) {
        $(".business-list").slide({
            mainCell: "ul",
            autoPlay: true,
            effect: "topMarquee",
            vis: 5,
            interTime: 40,
            autoPlay: true,
        });
    }
    // $(".about-tabs li").on("click", function () {
    //     var _index = $(this).index()
    //     $(this).children("a").addClass("active").parents("li").siblings().children("a").removeClass("active")
    //     $(".about-box .item").eq(_index).fadeIn(400).siblings().hide()
    // })

    $(".news-tabs li").on("click", function () {
        var _index = $(this).index()
        $(this).children("a").addClass("active").parents("li").siblings().children("a").removeClass("active")
        $(".news-box .item").eq(_index).fadeIn(400).siblings().hide()
    })

    $(".recruit-item-tit i").on("click", function () {
        var state = $(this).parents(".recruit-item-tit").siblings(".recruit-item-content").is(":visible");
        $(this).toggleClass("icon-jia",state).toggleClass("icon-jian",!state)
        $(this).parents(".recruit-item-tit").siblings(".recruit-item-content").stop().slideToggle(200).parent(".recruit-item").toggleClass("open")
        $(this).parents(".recruit-item").siblings().removeClass("open").children(".recruit-item-content").slideUp(300);
        $(this).parents(".recruit-item").siblings().children(".recruit-item-tit").children("i").removeClass("icon-jian").addClass("icon-jia")
    })


    if ($(".recruit-swiper").length > 0) {
        new Swiper(".recruit-swiper .swiper-container", {
            speed: 600,
            loop:true,
            spaceBetween:mFontSize*20,
            autoHeight:true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            navigation:{
                prevEl:".recruit-swiper .swiper-button-prev",
                nextEl:".recruit-swiper .swiper-button-next",
            }
        })
    }

    //
    //
    //
    //
    if($("#danmu").length>0){
        var arrdata = [
            {
                "message": "66666",
                "id": 0,
                "state": 1
            }, {
                "message": "不错666",
                "id": 1,
                "state": 0
            },
            {
                "message": "很好666很好很好很好",
                "id": 2,
                "state": 1
            },
        ]
        var locaScreen = [120, 160, 200, 240, 280];


        var num = -1;
        var timer;
        initScreen();

        function initScreen() {
            timer = setInterval(function () {
                num++;
                if (num > arrdata.length - 1) {
                    num = 0
                }
                $(".danmubox").append(createScreenPraise( arrdata[num].message, arrdata[num].state, arrdata[num].id));
            }, 1500);
        }

        function createScreenPraise( message) {
            var div = document.createElement("div");
            var divContent = document.createElement("div");
            divContent.className = "danmuContent";
            divContent.innerHTML = message;
            div.className = "danmu";
            div.appendChild(divContent);
            createScreen(div)
            return div;
        }

        var olN = 0;

        function createScreen(elem) {
            var _top = 0;
            var _left = $(window).width();
            var _height = $(window).height();
            var lN = Math.floor(5 * Math.random());
            if (olN == lN) {
                lN++;
                if (lN > locaScreen.length - 1) {
                    lN = 0;
                }
            }
            olN = lN;
            _top = locaScreen[lN];
            $(elem).css({left: _left, top: _top, color: "#333"});
            var time = 30000;
            $(elem).animate({left: "-" + _left + "px"}, time, function () {
                // var docum = $(".danmubox");
                // docum.removeChild(this);
            });
        }




    }

})
