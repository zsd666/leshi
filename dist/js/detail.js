"use strict";function getStyle(e,t){return window.getComputedStyle?window.getComputedStyle(e,null)[t]:e.currentStyle[t]}var oBox=document.querySelector("#box"),middleImg=document.querySelector("#middleImg"),bigImg=document.querySelector("#bigImg"),middleArea=document.querySelector("#middleArea"),bigArea=document.querySelector("#bigArea");middleArea.style.width=parseFloat(getStyle(middleImg,"width"))/parseFloat(getStyle(bigImg,"width"))*parseFloat(getStyle(bigArea,"width"))+"px",middleArea.style.height=parseFloat(getStyle(middleImg,"height"))/parseFloat(getStyle(bigImg,"height"))*parseFloat(getStyle(bigArea,"height"))+"px";var oScale=parseFloat(getStyle(bigArea,"width"))/parseFloat(getStyle(middleArea,"width"));middleImg.addEventListener("mouseenter",function(){middleArea.style.display="block",bigArea.style.display="block",document.onmousemove=function(e){var t=e||window.event,i=t.pageX-oBox.offsetLeft-middleImg.offsetLeft-middleArea.offsetWidth/2,d=t.pageY-oBox.offsetTop-middleImg.offsetTop-middleArea.offsetWidth/2;i<=0&&(i=0),i>=middleImg.offsetWidth-middleArea.offsetWidth&&(i=middleImg.offsetWidth-middleArea.offsetWidth),d<=0&&(d=0),d>=middleImg.offsetHeight-middleArea.offsetHeight&&(d=middleImg.offsetHeight-middleArea.offsetHeight),middleArea.style.left=i+"px",middleArea.style.top=d+"px",console.log(oScale),bigImg.style.left=-oScale*i+"px",bigImg.style.top=-oScale*d+"px"}}),middleImg.addEventListener("mouseleave",function(){middleArea.style.display="none",bigArea.style.display="none",document.onmousemove=null});for(var oLis=document.querySelectorAll("#small li"),i=0;i<oLis.length;i++)oLis[i].tempindex=i,oLis[i].onclick=function(){console.log(this.tempindex),middleImg.children[0].setAttribute("src","../images/".concat(this.tempindex+1,"_2.jpg")),bigImg.src="../images/".concat(this.tempindex+1,"_3.jpg")};