"use strict";
const btn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
console.log(menu);

btn.addEventListener("click", navToggle);
function navToggle(e) {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
