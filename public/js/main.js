(function(win) {
    var doc = win.document,
        html = doc.documentElement;
    var resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = html.clientWidth || 375;
            if (clientWidth < 750) {
                html.style.fontSize = (clientWidth - 40) / 2 * 100 / 220 + 'px';
            } else {
                html.style.fontSize = '100px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(window);
// $(window).resize(function() {
//     location.reload();
// });
$('.menubutton').click(function() {
    $('.navlinks-mob').addClass('show');
});
$('.returntop').click(function() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
})