$(function(){
    $(".fixed-weixin").click(function(){
        $(".fail-pop").fadeIn();
        $(".add-qr,.footer").addClass("stop")
    })
    $(".close-btn").click(function(){
        $(".fail-pop").fadeOut();
        $(".add-qr,.footer").removeClass("stop")
    })
})

