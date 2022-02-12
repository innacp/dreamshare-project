"use strict";

var body = document.querySelector("body");
var button = document.querySelector(".dark-btn");
button.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
});