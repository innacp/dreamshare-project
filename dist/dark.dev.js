"use strict";

var body = document.querySelector("body");
var button = document.querySelector(".dark-btn");
button.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  changeBtnText();
});

function changeBtnText() {
  var hasBodyDarkMode = body.classList.contains('dark-mode');

  if (hasBodyDarkMode) {
    button.innerHTML = 'To Light Theme';
  } else {
    button.innerHTML = 'To Dark Theme';
  }
}