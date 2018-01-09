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
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(window);
$('.menubutton').click(function() {
    $('.navlinks-mob').addClass('show');
});
$('.returntop').click(function() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
});
$('.moreitem').click(function() {
    $('.linkspanel').find('li').toggle(true);
    $('.moreitem').toggle(false);
});
$('.close-btn').click(function() {
    $('.navlinks-mob').removeClass('show');
});
$('.index-arrow').click(function() {
    var target = $('#jump');
    $('html,body').animate({
        scrollTop: target.offset().top - 80
    }, 250);
});
$('#job li').click(function() {
    $('#job li').removeClass('active');
    $(this).addClass('active');
    var type = $(this).data('type');
    $.ajax({
        url: '/getrecruits?type=' + type,
        success: function(data) {
            $('.recruitlist').html(data);
        }
    });
});
$(document).ready(function() {
    var isabout = document.URL.indexOf('about') > 0;
    if (isabout) {
        $('body').append('<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=5b31afcdea6af2d7d3677ca5c1a22c46&services=&t=20151223175945"></script>');
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = script.onreadystatechange = function() {
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                $('body').append('<script type="text/javascript">var map = new BMap.Map("contactmap");var point = new BMap.Point(116.310349, 39.992039);var marker = new BMap.Marker(point);map.addOverlay(marker);map.centerAndZoom(point, 16);map.enableScrollWheelZoom();</script>');
                // Handle memory leak in IE 
                script.onload = script.onreadystatechange = null;
            }
        };
        script.src = 'http://api.map.baidu.com/getscript?v=2.0&ak=5b31afcdea6af2d7d3677ca5c1a22c46&services=&t=20170926125934';
        head.appendChild(script);
    }
});
//wallace 2015 7 14
Element.prototype.typewriter = function(callback) {
    var d = this,
        c = d.innerHTML,
        b = 0;
    d.innerHTML = "";
    var e = setInterval(function() {
        var f = c.substr(b, 1);
        if (f == "<") {
            b = c.indexOf(">", b) + 1
        } else {
            b++
        }
        d.innerHTML = c.substring(0, b);
        if (b >= c.length) {
            clearInterval(e)
            if (callback) {
                callback();
            }
        }
    }, 100)
    return this
};
$(document).ready(function() {
    if ($(".videotitle h1").length > 0) {
        $($(".videotitle h1")[0]).toggle(true);
        $(".videotitle h1")[0].typewriter(function() {
            $($(".videotitle h1")[1]).toggle(true);
            $(".videotitle h1")[1].typewriter(function() {
                $($(".videotitle p")[0]).toggle(true);
                $(".videotitle p")[0].typewriter();
            });
        });
    }
    $('.valueitem').each(function() {
        $(this).waypoint((function() {
            $(this.element).addClass('slideUp');
        }), {
            offset: '60%'
        });
    });
    $('.productblk').each(function() {
        $(this).waypoint((function() {
            $(this.element).addClass('slideUp');
        }), {
            offset: '80%'
        });
    });
});