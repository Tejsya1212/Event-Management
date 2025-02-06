var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop :true,
    autoplay :{
        delay:5000,
        disableOnInteraction:false,
    },
    });
var menuBtn = document.querySelector("#menu-bar");
    var navBar = document.querySelector(".navbar");

    menuBtn.onclick = () => {
      menuBtn.classList.toggle("fa-times");
      navBar.classList.toggle("active");
    };
