$(document).ready(function(){
  $('.slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      waitForAnimate: false,
      

  })

});

//*MENU BURGER
const menuBtn = document.querySelector('.nav__toggle');
const icon = document.querySelector('.menu-icon');
const menuMobile = document.querySelector('.menu__wraper');
const dot = document.querySelector('.dot');
const body = document.querySelector('body');



menuBtn.onclick = function(){
  menuMobileToggle ()
  menuMobile.querySelectorAll('a').forEach(elem => {
    elem.onclick = function(){
      menuMobileToggle ()
    }
  })
}

function menuMobileToggle (){
  icon.classList.toggle('menu-icon-active');
  menuMobile.classList.toggle('menu__wraper__mobile');
  dot.classList.toggle('dot__visible');
  body.classList.toggle('lock');
}