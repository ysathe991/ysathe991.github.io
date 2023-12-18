const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

navToggle.addEventListener('click', () => {
   navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', () => {
   navMenu.classList.remove('show-menu')
})


var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
   loop: true
});

typewriter.typeString('Web Developer')
   .pauseFor(2500)
   .deleteAll()
   .typeString('Web Designer')
   .pauseFor(2500)
   .deleteAll()
   .typeString('<strong>FrontEnd Developer</strong>')
   .pauseFor(2500)
   .start();