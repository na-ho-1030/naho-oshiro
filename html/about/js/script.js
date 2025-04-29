const targetElement = document.querySelectorAll(".scroll-in");
console.log("jsが通ることを確認");

document.addEventListener("scroll",function(){
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight * 0.5

    if(window.innerHeight > getElementDistance){
      targetElement[i].classList.add("show");
    }
  }
})

$(function(){
  var pagetop = $('.btn-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 120) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

window.addEventListener('DOMContentLoaded', function(){

  const ham = document.querySelector('#js-hamburger');
  const nav = document.querySelector('#js-nav');
  const blackBg = document.querySelector('#js-black-bg');
  
  ham.addEventListener('click', function () {
  
    ham.classList.toggle('active');
    nav.classList.toggle('active');
    blackBg.classList.toggle('active');
  
  });
});
