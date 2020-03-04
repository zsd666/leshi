 //offsetWidth和offsetHeight不能获取隐藏元素的高度
    //要使用自己封装的getStyle
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        }
        return obj.currentStyle[attr];
    }

    // * 公式: 小图 / 大图 = 小区域 / 大区域 *
    //     只能修改小区域 *
    //     小区域 = (小图 / 大图) * 大区域 *
    //     比例 = 大区域 / 小区域

    var oBox = document.querySelector('#box')

    var middleImg = document.querySelector("#middleImg"); //小图
    var bigImg = document.querySelector("#bigImg"); //大图
    var middleArea = document.querySelector('#middleArea'); //小区域
    var bigArea = document.querySelector('#bigArea'); //大区域
    // 350 / 800 =  100/ 400
    middleArea.style.width = (parseFloat(getStyle(middleImg, "width")) / parseFloat(getStyle(bigImg, "width"))) *
        parseFloat(getStyle(
            bigArea,
            "width")) + "px"
    middleArea.style.height = (parseFloat(getStyle(middleImg, "height")) / parseFloat(getStyle(bigImg, "height"))) *
        parseFloat(getStyle(
            bigArea,
            "height")) + "px"
    // 注意:只有在小区域调整了大小后,才能计算比例
    //     比例 = 大区域 / 小区域
    var oScale = parseFloat(getStyle(bigArea, "width")) / parseFloat(getStyle(middleArea, "width"))
    //鼠标进入
    middleImg.addEventListener("mouseenter", function () {
        middleArea.style.display = "block"; // 小区显示
        bigArea.style.display = "block"; //大区域显示

        document.onmousemove = function (evt) {
            var e = evt || window.event;
            var disX = e.pageX - oBox.offsetLeft - middleImg.offsetLeft - middleArea.offsetWidth / 2;
            var disY = e.pageY - oBox.offsetTop - middleImg.offsetTop - middleArea.offsetWidth / 2;

            if (disX <= 0) {
                disX = 0
            }

            if (disX >= middleImg.offsetWidth - middleArea.offsetWidth) {
                disX = middleImg.offsetWidth - middleArea.offsetWidth
            }

            if (disY <= 0) {
                disY = 0
            }
            if (disY >= middleImg.offsetHeight - middleArea.offsetHeight) {
                disY = middleImg.offsetHeight - middleArea.offsetHeight
            }
            middleArea.style.left = disX + "px";
            middleArea.style.top = disY + "px";
            console.log(oScale)

            bigImg.style.left = -oScale * disX + "px";
            bigImg.style.top = -oScale * disY + "px"

        }
    })

    middleImg.addEventListener("mouseleave", function () {
        middleArea.style.display = "none"; // 小区隐藏
        bigArea.style.display = "none"; //大区域隐藏
        document.onmousemove = null;
    })


    var oLis = document.querySelectorAll("#small li");
    for (var i = 0; i < oLis.length; i++) {
        oLis[i].tempindex = i; // ?

        oLis[i].onclick = function () {
            console.log(this.tempindex)
            middleImg.children[0].setAttribute("src", `../images/${this.tempindex+1}_2.jpg`);
            bigImg.src = `../images/${this.tempindex+1}_3.jpg`
        }
    }