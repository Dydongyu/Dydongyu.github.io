

// pc

// xuexiao
$(function(){
        var timer = null;
    function zhan(a,b,c){
        $(a).hover(function(){
            $(b).css('display','block');
            clearTimeout(timer);
        },function(){
            timer = setTimeout(function(){
            $(c).css('display','none');
            },150);
        });
    }
    zhan('.didian .li3','.xuexiao_bg,.xuexiao_bg .xuexiao','.xuexiao_bg,.xuexiao_bg .xuexiao')
    zhan('.logo_top .li4','.logo_top .xuexiao','.logo_top .xuexiao')
    zhan('.fenye span,.fen .container2','.fen .container2','.fen .container2')
});

$(function(){
    $('.container2').css('display','none')
});



$(function(){
    function show(a,b,c){
        $(a).hover(function(){
            $(this).children(b).css('display','block');
        },function(){
            $(c).css('display','none');
        });
    }

    show('.footer .li1','.hezuo1','.hezuo1')
    show('.footer .li2','.hezuo2','.hezuo2')
    show('.footer .li3','.hezuo3','.hezuo3')
    show('.div4 .li1','.weixin','.weixin')
});

// daohang
$(function(){
    $(window).scroll(function(){
        var h2 = $(document).scrollTop();
        if(h2>=150){
            $('.pc_genshui').fadeIn(500);
        }else{
            $('.pc_genshui').fadeOut(500);
        }

    });
})


// 
$(function(){

    function search(a,s,d,f,g,h,j,k,l,z,x){

        $(function(){
            var flag = false;
            $(a).click(function(){
                if(flag == false){
                    $(s).animate({'height':76},500);
                    flag = true;
                }else{
                    $(d).animate({'height':38},300);
                    flag = false;
                }
            });
            $(f).click(function(){
                var a = $(g).html();
                var b = $(h).html();
                $(j).html(b);
                $(k).html(a);
                $(l).animate({'height':38},300);
                flag = false;
            })

            $(document).click(function(){
                var h = $(z).height();
                if(h == 76){
                    $(x).animate({'height':38},300);
                }
                flag = false;
            })
        });
    }

    search('.search .content_search ul .li1','.search .content_search ul','.search .content_search ul','.search .content_search ul .li2','.search .content_search ul .li1','.search .content_search ul .li2','.search .content_search ul .li1','.search .content_search ul .li2','.search .content_search ul','.search .content_search ul','.search .content_search ul')
    search('.pc_genshui .genshui_search ul .li1','.pc_genshui .genshui_search ul','.pc_genshui .genshui_search ul','.pc_genshui .genshui_search ul .li2','.pc_genshui .genshui_search ul .li1','.pc_genshui .genshui_search ul .li2','.pc_genshui .genshui_search ul .li1','.pc_genshui .genshui_search ul .li2','.pc_genshui .genshui_search ul','.pc_genshui .genshui_search ul','.pc_genshui .genshui_search ul')

});



// tuijian
// $(function(){
//     var num = 0;
//     var timer = null;

//     clearInterval(timer);
    
//     function autoPlay(){
//         num ++;
//         if(num == 5){
//             num = 0;
//         }
//         console.log(num)
//             $('.tuijian ul').animate({'top':-num*80},2000)
//     };

//     timer = setInterval(autoPlay,1500);


//     $('.tuijian ul li').hover(function(){
//         clearInterval(timer);
//     },function(){
//         timer = setInterval(autoPlay,1500);
//     });

// });
