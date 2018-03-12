$(function () {
    var num = Math.floor ( Math.random ( ) * 10 + 1 );
    //$("#qrImg").attr("src","images/qr_b/xfc("+num+").jpg");
    $(window).longPress(function(){
      //  alert(1);
    })
})
$.fn.longPress = function(fn) {
    var $this = this;
    for(var i = 0;i<$this.length;i++){
        (function(target) {
            var timeout;
            target.addEventListener('touchstart', function(event) {
                timeout = setTimeout(function() {
                    fn.apply(target);
                }, 800);
            }, false);
            target.addEventListener('touchend', function(event) {
                clearTimeout(timeout);
            }, false);
        })($this[i]);
    }
}