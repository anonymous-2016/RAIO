/**
 * @description auto scroll to #hash anchor
 */

document.addEventListener("DOMContentLoaded", function(event) {
    var hash = location.hash.replace('#', '');
    if (hash !== '') {
        var element = document.getElementById(hash);
        if (element) {
            var offset = element.offsetTop;
            // Wait for the browser to finish rendering before scrolling.
            setTimeout((function() {
                window.scrollTo(0, offset - 0);
            }), 0);
        }
    }
});
