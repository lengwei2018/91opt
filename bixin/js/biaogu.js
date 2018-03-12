$(function () {
    //名义本金
    $("#money").on("click", "li", function () {
        var num = $(this).attr('data-num');
        $("#money li").removeClass("current");
        $(this).addClass('current');
        $("#moneyInput").val(num);
    })
    $("#moneyInput").on("keyup",function () {
        var num = $("#moneyInput").val();
        console.log(num);
        if (num == 50){
            $("#money li").removeClass("current");
            $("#money li:nth-child(1)").addClass('current');
        }else if(num == 100){
            $("#money li").removeClass("current");
            $("#money li:nth-child(2)").addClass('current');
        }else if (num == 200){
            $("#money li").removeClass("current");
            $("#money li:nth-child(3)").addClass('current');
        }else {
            $("#money li").removeClass("current");
        }
    })
    //权益周期
    $("#cycle").on("click", "li", function () {
        $("#cycle li").removeClass("current");
        $(this).addClass("current");
    })
    $('.icon-question').click(function () {
        var msg = $(this).attr('data-msg');
        var time = msg.length > 30?6:3;
        layer.open({
            content: msg
            ,shade:'background-color: rgba(0,0,0,0)'
            ,shadeClose: true
            ,style:'bottom:3rem;text-align: left;background: rgba(46, 49, 69, 0.90);border-radius: 0.1rem;color:#fff'
            ,time: time //n秒后自动关闭
        });
    })
    //快 惠 畅 诚
    $(".tips").on("click","li",function () {
        var str = $(this).children("p").text();
        switch(str)
        {
            case "询价快捷":
                $(".mask h3").text("询价快捷");
                $(".mask .text").text("91期权网对接中金、中信、招商、国信等20多家实力期权卖方券商，给您提供最及时、最快捷询价、报价服务。")
                break;
            case "询价实惠":
                $(".mask h3").text("询价实惠");
                $(".mask .text").text("91期权网覆盖全市场90%期权卖方，不仅能够给您提供快捷的询价服务，同时能够帮您找到最优惠的期权报价。")
                break;
            case "一站式服务":
                $(".mask h3").text("一站式服务");
                $(".mask .text").text("91期权网提供询价、报价、委托、交易、结算一站式个股场外期权配套服务，为您提供方便、顺畅的投资体验。")
                break;
            default:
                $(".mask h3").text("诚信委托");
                $(".mask .text").text(" 91期权网合作私募上海光夏投资管理公司是正规私募机构，保证对所有投资者诚信委托、真实成交、刚性兑付，充分保障投资者合法权益。")
        }
        $('.mask').fadeIn();
    })
    $(".close-btn").click(function () {
        $(this).parents('.mask').fadeOut();
    })
    //股票代码出入检索层弹出  检索条数给适当限制 不要太多 样式不好看
    $("#sharesInput").keyup(function () {
        $(".search-item").fadeIn();
        //ajax 检索。。。。
    })

    $(".search-close").click(function () {
        $(".search-item").fadeOut();
    })
    $(".search-item").on("click",".item",function () {
        var text = $(this).children(".name").text() + "(" + $(this).children(".num").text() + ")";
        $("#sharesInput").val(text);
        $(".search-item").fadeOut();
    })
})