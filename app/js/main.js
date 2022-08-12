(function(){
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 450) {
      header.classList.add("header__active");
      document.querySelector(".header__logo-img").setAttribute("src", "img/YourTourBlack.svg");
    } else {
      header.classList.remove("header__active");
      document.querySelector(".header__logo-img").setAttribute("src", "img/YourTourWhite.svg");
    }
  };
}());