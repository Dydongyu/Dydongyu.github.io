// mp

// chouti
$(function () {
    var flag = false;

    $('.btn_bg').click(function () {
        var h2 = $(document).scrollTop();
        document.cookie = "top=" + h2;
        $('.main').addClass('act')
        $('.main').css("top", -h2);
        $('.c_nav').toggle();
        $('.bg').css({'display':'block'})
    });

    $('.gn_img').click(function () {
        var top = getCookie("top");
        $('.main').removeClass('act');
        $('.main').css( "top", 0);
        $(document).scrollTop(top);
        $('.c_nav').toggle();
        $('.bg').css({'display':'none'})
    });

    $('.bg').click(function () {
        var top = getCookie("top");
        $('.main').removeClass('act');
        $('.main').css( "top", 0);
        $(document).scrollTop(top);
        $('.c_nav').toggle();
        $('.bg').css({'display':'none'})
    });

    $('.kecheng').click(function () {
        if (flag == false) {
            $('.kecheng ul').slideUp(400)
            flag = true;
        } else {
            $('.kecheng ul').slideDown(400)
            flag = false;
        }
    });
});


function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return "";
}


// genshui search
$(function(){
    var flag = false;
    $('.mp_search').click(function(){
        if(flag == false){
           $('.logo .show').fadeIn(400);
            var h2 = $(document).scrollTop();
            document.cookie = "top=" + h2;
            $('.main').addClass('ps_fixed')
            $('.main').css("top", -h2);
            $('.logo .mp_search').css('background','none')
            flag = true;
        }else{
           $('.logo .show').fadeOut(400);
            var top = getCookie("top");
            $('.main').removeClass('ps_fixed');
            $('.main').css( "top",'');
            $(document).scrollTop(top);
            flag = false;
        }
    })
});


$(function(){
    $(window).scroll(function(){
        var h = $(document).scrollTop();
        if(h>=110){
            $('.logo').css('border-bottom','solid 1px #cccccc');
            $('.logo .mp_search').css({'background':'url(images/mp_search.png) no-repeat 70% center','background-size':'70%'})
        }else{
            $('.logo').css('border-bottom','');
            $('.logo .mp_search').css('background','')
        }
    });
});


// tuijian
$(function(){
    var num = 0;
    var timer = null;

    clearInterval(timer);
    
    function autoPlay(){
        num ++;
        if(num == 5){
            num = 0
        }
        $('.tuijian ul').animate({'top':-num*45},2000)
    };

    timer = setInterval(autoPlay,2000);


    $('.tuijian ul li').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(autoPlay,2000);
    });

});

// sousuoqiehuan
$(function(){

    function search(a,s,d,f,g,h,j,k,l,z,x){

        $(function(){
            var flag = false;
            $(a).click(function(){
                if(flag == false){
                    $(s).animate({'height':70},500);
                    flag = true;
                }else{
                    $(d).animate({'height':35},200);
                    flag = false;
                }
            });
            $(f).click(function(){
                var a = $(g).html();
                var b = $(h).html();
                $(j).html(b);
                $(k).html(a);
                $(l).animate({'height':35},200);
                flag = false;
            })

            $(document).click(function(){
                var h = $(z).height();
                if(h == 70){
                    $(x).animate({'height':35},200);
                }
                flag = false;
            })
        });
    }

    search('.content_search ul .li1','.content_search ul','.content_search ul','.content_search ul .li2','.content_search ul .li1','.content_search ul .li2','.content_search ul .li1','.content_search ul .li2','.content_search ul','.content_search ul','.content_search ul')
    search('.br ul .li_1','.br ul','.br ul','.br ul .li_2','.br ul .li_1','.br ul .li_2','.br ul .li_1','.br ul .li_2','.br ul','.br ul','.br ul')

});
