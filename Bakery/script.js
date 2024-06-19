$(".autoplay").slick({
    dots: true,
    infinite: true,
    speed: 500,
    pauseOnHover:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    arrows: true, 
  });

 

let menuBtn = document.querySelector('.header__menu-btn');
let menu = document.querySelector('.header__dropdown-menu');
console.log(menuBtn);
console.log(menu);

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});
