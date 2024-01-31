//Javascript for Navigation effect on scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//Javascript for responsive navigation sidebar Nav
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn1');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove('active');
});

function nevigate() {
    menu.classList.remove('active');

}