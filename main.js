/*
NAV BAR JS
*/
let navBtn = document.querySelector('.nav-btn');
let navItems = document.querySelector('.navItems');
let body = document.querySelector('body');
let header = document.querySelector('header');

navBtn.addEventListener('click', () => {
 let navActive = navItems.classList.toggle('notActive');
  body.classList.toggle('notScroll');
  if(!navActive){
    header.style.background ="hsl(var(--bg))";
    header.style.borderRadius = "0%";
  }
  else{
    header.style.backdropFilter = 'blur()';
  }

});


/* 
PARALLAX Effects
*/
let heroSection = document.querySelector('.hero')
let heroContentH1 = document.querySelector('.hero-content h1')
let heroContentH2 = document.querySelector('.hero-content h2')
let heroContentImg = document.querySelector('.hero-content img')


window.addEventListener('scroll' , (e) => {
  let winScrollYValue = window.scrollY/heroSection.offsetHeight;
  
  if(winScrollYValue < 1){
  heroContentH1.style.transform = `translateX(${winScrollYValue * -100}px)`;
  heroContentH2.style.transform = `translateX(${winScrollYValue * 100}px)`;
  heroContentImg.style.transform = `translateY(${winScrollYValue * -100}px)`;
  heroSection.style.opacity = `${1 - winScrollYValue * 1.3}`
  header.style.backdropFilter = 'none';
  header.style.background = "transparent"
  }
  if(winScrollYValue >= 0.9){
  header.style.backdropFilter = 'blur()';
    header.style.background = `linear-gradient(${winScrollYValue * 100}deg, hsla(var(--bg), 0.6) 60%, hsla(var(--light-pink), 0.5) 90%, hsla(var(--light-yellow), 0.6) 100%)`
  }
});

/* Custom  Curson */

let invertSection = document.querySelector('.cursor-invert');
let hin = document.querySelector('.cursor-invert h2');
let invertCursor = document.querySelector('.custom-cursor');

invertSection.addEventListener('mousemove', (e) => {
  
    let rect = invertSection.getBoundingClientRect();
    let cursorX = e.clientX - rect.left;
    let cursorY = e.clientY - rect.top;
    
    invertCursor.style.left = cursorX + "px";
    invertCursor.style.top = cursorY + "px";
});
