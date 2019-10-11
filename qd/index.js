var starCount = 0;

window.onload = function() {
    var stars = document.getElementById('stars');
    // stars.outerHTML = '<div id="stars"></div>';
    // 在id为stars,把它的元素与属性调出来,　除了包含innerHTML的全部内容外, 还包含对象标签本身。
    addStars();
    var oimg=document.getElementsByClassName("img");
   oimg[0].onclick=function(){
    window.location.assign("ps.html");
   }
}
function addStars() {
    // console.log('test');
    var starLoop = setInterval(function() {
        // setInterval计时器
        console.log('test');
        var starChoice = Math.random();
        // 把任意随机数赋给变量
        var x = Math.floor(window.innerWidth * Math.random());
        // 把何以是浮点数的innerWidth 返回窗口的文档显示区的宽度的随机数赋给x。
        if(starChoice <= .5) {
            // 当随机数变量<=0.5
            stars.outerHTML += `<div id="star${starCount}" class="star-wrapper">
            <svg class="star star1" viewBox="0 0 54 54"><g><g><rect y="18" width="54" height="18" fill="#fff"/>
            <rect x="18" width="18" height="54" fill="#fff"/></g></g></svg></div>`;
          // 放在stars为id的div的后面 .
        } else {
            // 当随机数变量>0.5
            stars.outerHTML += `<div id="star${starCount}" class="star-wrapper"><svg class="star star2" viewBox="0 0 18 18"><g id="Layer_2" data-name="Layer 2"><g id="Content"><rect width="18" height="18" fill="#fff"/></g></g></svg></div>`;
        // 放在stars为id的div的后面 .
        }
        var currStar = document.getElementById(`star${starCount}`);
        // 获取添加元素的id
        currStar.style.left = (x-15)+'px';
        // 返回窗口的文档显示区的宽度的随机数x的px为指定的id元素的左移动

        starCount++;
        // 变量每执行一次加一
        if ( starCount > 99 ) {
            clearInterval(starLoop);
            // 如果变量执行到70就清除本身计时器
        }
    }, 200);
}
/** 定时器让每一颗星星都竖直分布在一个屏幕上，让每200秒产生的随机数分类是svg星星的类型,
/让窗口文档显示宽度的随机数的让每个星星的div容器定位左偏移。**/