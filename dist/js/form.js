"use strict";window.onload=function(){var e=document.querySelector(".form_login"),n=document.querySelector(".form_register");function i(t,e){for(var n in e)t&&(t.style[n]=e[n])}document.querySelectorAll(".switch").forEach(function(t){t.addEventListener("click",function(){"注册账号"==this.innerText?(i(e,{height:"0",transitionDelay:"0s"}),i(n,{height:"548px",transitionDelay:"1.2s"})):"登录"==this.innerText&&(i(e,{height:"422px",transitionDelay:"1.2s"}),i(n,{height:"0",transitionDelay:"0s"}))})})};