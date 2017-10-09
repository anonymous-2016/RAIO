/**
 * https://laod.cn/invitation-code
 * 
 */

// <script type="text/javascript">
/* 鼠标特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
        // 以次显示
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 9999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#ff6651"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});
// </script>

/**
 * https://laod.cn/wp-content/themes/begin/js/activate-power-mode.js
 * https://laod.cn/registered
 * 
 * https://laod.cn/news/google-deeplearn-js.html
 * https://research.googleblog.com/2017/08/harness-power-of-machine-learning-in.html
 */