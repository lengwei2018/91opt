$(function(){
    var clipboard = new Clipboard('.qr-btn');
    clipboard.on('success', function(e) {
        layer.open({
            content: '复制成功<br>如复制失败请长按复制微信号'
            ,skin: 'msg'
            ,time: 2 //2秒后自动关闭
        });
       /* layer.open({
            content: '复制失败<br>你可以通过长按复制微信号'
            ,skin: 'msg'
            ,time: 3.5 //2秒后自动关闭
        });*/
    });

    clipboard.on('error', function(e) {
        layer.open({
            content: '复制失败<br>你可以通过长按复制微信号'
            ,skin: 'msg'
            ,time: 2 //2秒后自动关闭
        });

    });


    var aa = getCookie("cc");
    console.log(aa == "");
    setCookie("bb","123");
    var bb = getCookie("aa");
    console.log(bb);
    function getCookie(c_name) {
        if (document.cookie.length>0)
        {
            c_start=document.cookie.indexOf(c_name + "=")
            if (c_start!=-1) {
                c_start=c_start + c_name.length+1
                c_end=document.cookie.indexOf(";",c_start)
                if (c_end==-1) c_end=document.cookie.length
                return unescape(document.cookie.substring(c_start,c_end))
            }
        }
        return ""
    }

    function setCookie(c_name,value,expiredays) {
        var exdate=new Date()
        exdate.setDate(exdate.getDate()+expiredays)
        document.cookie=c_name+ "=" +escape(value)+
            ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
    }

    $(".qr-btn").click(function(){
        var ver = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        ver = parseInt(ver[1], 10);
        if(ver<11)
        {
            layer.open({
                content: '请长按复制微信号'
                ,skin: 'msg'
                ,time: 2 //2秒后自动关闭
            });
            return;
        }
    })
})

