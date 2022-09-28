//_________________________fixed header begin_________________________________________
(function(){
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 450) {
      header.classList.add("header__active");
      // document.querySelector(".header__logo-img").setAttribute("src", "images/YourTourBlack.svg");
    } else {
      header.classList.remove("header__active");
      // document.querySelector(".header__logo-img").setAttribute("src", "images/YourTourWhite.svg");
    }
  };
}());
//_________________________fixed header end___________________________________________


//_________________________mask phone begin___________________________________________
function doFormat(x, pattern, mask) {
  var strippedValue = x.replace(/[^0-9]/g, "");
  var chars = strippedValue.split('');
  var count = 0;
  var formatted = '';
  const phone = document.querySelector(".booking__element-tel");

  for (var i=0; i<pattern.length; i++) {
    const c = pattern[i];
    if (chars[count]) {
      if (/\*/.test(c)) {
        formatted += chars[count];
        count++;
        phone.style.color = '#1B1F2B';
       } else if (/^\S*$/.test(c) ){
        formatted += c;
      }
    } else if (mask) {
      if (mask.split('')[i])
        formatted += mask.split('')[i];
    }
  }
  if (formatted=="+7(_ _ _)_ _ _-_ _-_ _"){
    phone.style.color = '#A6A6A6';
    // phone.style.color = 'rgba(0, 0, 0, 0.2)';
  }
  // return formatted.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7 ($1) $2-$3-$4');
  return formatted;
}


document.querySelectorAll('[data-mask]').forEach(function(e) {
  
  function format(elem) {
    const val = doFormat(elem.value, elem.getAttribute('data-format'));
    elem.value = doFormat(elem.value, elem.getAttribute('data-format'), elem.getAttribute('data-mask'));
    
      if (elem.createRange) {
         var range = elem.createRange();
         range.move('character', val.length);
         range.select();        

      // } else if (window.getSelection) {        
    
      }else  {
        //  elem.focus();
         elem.setSelectionRange(val.length, val.length);
      }
  }
 
  e.addEventListener('keyup', function() {
    format(e);
  });
  e.addEventListener('keydown', function() {
    format(e);
  });
  format(e);
});
//_________________________mask phone end___________________________________________

//_________________________selected menu item begin___________________________________________
document.querySelectorAll(".direction__menu-link").forEach(function(menuLink) {

  //menuLink.classList.add("direction__menu-link-default");
  //menuLink.classList.remove("direction__menu-link-active");

  // menuLink.onclick = function () {
  //   menuLink.classList.remove("direction__menu-link-active");
  //    });
    

  menuLink.addEventListener('click', () => {
    document.querySelectorAll(".direction__menu-link").forEach(function(menuLink) {
      menuLink.classList.remove("direction__menu-link-active"); 
    });


    
//     var self = $(this);

//     if (self.hasClass('active')) {
//         $('.dropdown').removeClass('active');
//         return false;
//     }

//     $('.dropdown').removeClass('active');

//     self.toggleClass('active');
//     hide = false;

  //    if (menuLink.classList.contains("direction__menu-link-active")) {
	//      menuLink.classList.remove("direction__menu-link-active"); 
	//  } else {
	 	menuLink.classList.add("direction__menu-link-active"); 
	 //}	
    //menuLink.classList.add("direction__menu-link-default");
    //menuLink.classList.remove("direction__menu-link-default");
    //menuLink.classList.add("direction__menu-link-active");
   });
});
//_________________________selected menu item end___________________________________________


// remove all .active classes when clicked anywhere
// hide = true;
// $('body').on("click", function () {
//     if (hide) $('.dropdown').removeClass('active');
//     hide = true;
// });

// // add and remove .active
// $('body').on('click', '.dropdown', function () {

//     var self = $(this);

//     if (self.hasClass('active')) {
//         $('.dropdown').removeClass('active');
//         return false;
//     }

//     $('.dropdown').removeClass('active');

//     self.toggleClass('active');
//     hide = false;
// });

