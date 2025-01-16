"use strict";

var box = document.querySelectorAll('.viewBox');
var bgCard = document.querySelectorAll('.bgCard');
var menuBtn = document.querySelector('.menuBtn');
var mobilePanel = document.querySelector('.mobilePanel');
var closePanelBtn = document.querySelector('.closePanelBtn');
box.forEach(function (card, i) {
  card.addEventListener('mousemove', function (_ref) {
    var x = _ref.layerX,
        y = _ref.layerY,
        _ref$target = _ref.target,
        w = _ref$target.clientWidth,
        h = _ref$target.clientHeight;
    var ratioX = x / w - 0.5;
    var ratioY = (y / h - 0.5) * -1;
    var deg = (Math.abs(ratioX) + Math.abs(ratioY)) * 10;
    box[i].style.transform = "perspective(500px) rotate3d(".concat(ratioY, ",").concat(ratioX, ",0,").concat(deg, "deg)");
    bgCard[i].style.transform = "perspective(500px) translate3d(".concat(ratioX * -10, "px,").concat(ratioY * 10, "px,0px)");
  });
});
box.forEach(function (card, i) {
  card.addEventListener('mouseleave', function () {
    box[i].style.transform = "perspective(500px) rotate3d(0,0,0,0)";
    bgCard[i].style.transform = "perspective(500px) translate3d(0,0,0)";
  });
});
menuBtn.addEventListener('click', function () {
  return mobilePanel.classList.add('active');
});
closePanelBtn.addEventListener('click', function () {
  return mobilePanel.classList.remove('active');
});