var bannerImg = document.getElementById("bannerImg");
var divs1 = bannerImg.getElementsByTagName("div");
var lnuBoTuImg = document.getElementById("lnuBoTuImg");
var lis = lnuBoTuImg.getElementsByTagName("li");
var timer = null, step = 0;
function delay() {
    for (var i = 0; i < divs1.length; i++) {
        (function (i) {
            var cur = divs1[i];
            if (i === 0) {
                utils.setCss(cur.parentNode.parentNode, 'display', 'block');
                utils.setCss(cur, 'zIndex', 1);
                zhufengAnimate(cur, {opacity: 1}, 200, function () {
                    var siblings = utils.siblings(this);
                    for (var i = 0; i < siblings.length; i++) {
                        var cur = siblings[i];
                        utils.css(cur, 'opacity', 0);
                    }
                })
            }
            utils.css(cur, 'Index', 0);
        })(i)
    }
    changeBg()
}
setTimeout(delay, 0);

function delayAll() {
    for (var i = 0; i < divs1.length; i++) {
        (function (i) {
            var cur = divs1[i];
            if (i === step) {
                utils.setCss(cur, 'zIndex', 1);
                zhufengAnimate(cur, {opacity: 1}, 200, function () {
                    var siblings = utils.siblings(this);
                    for (var i = 0; i < siblings.length; i++) {
                        var cur = siblings[i];
                        utils.css(cur, 'opacity', 0);
                    }
                });
            }
            utils.css(cur, 'Index', 0);
        })(i)
    }
    changeBg();
}
function setBanner() {
    if (step === divs1.length - 1) {
        step = -1;
    }
    step++;
    delayAll();
}


timer = window.setInterval(setBanner, 2000);
function changeBg() {
    for (var i = 0; i < lis.length; i++) {
        (function (i) {
            var curLis = lis[i];
            if (i === step) {
                curLis.className = 'bg';
            } else {
                curLis.className = '';
            }
        })(i)
    }
}
function onclick() {
    for (var i = 0; i < lis.length; i++) {
        (function (i) {
            var curLis = lis[i];
            curLis.index = i;
            curLis.onclick = function () {
                step = this.index;
                delayAll();
            }
        })(i)
    }
}
onclick();
var up = document.getElementById("up");
var lis1 = up.getElementsByTagName("li");
var divs = up.getElementsByTagName("div");
for (var i = 0; i < lis1.length; i++) {
    var curLis = lis1[i];
    curLis.index = i;
    curLis.onmouseover = function () {
        change(this.index)
    }
}
function change(index) {
    for (var i = 0; i < lis1.length; i++) {
        lis1[i].className = '';
        divs[i].className = '';
    }
    lis1[index].className = 'bg';
    divs[index].className = 'play';
}