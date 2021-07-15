const $iniTouch = document.querySelector('.carousel-container');

$iniTouch.addEventListener("touchstart", startTouch, false);
$iniTouch.addEventListener("touchmove", moveTouch, false);
 
// Swipe Left / Right
var initialX = null;
 
function startTouch(e) {
  initialX = e.touches[0].clientX;
};
 
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
 
  var currentX = e.touches[0].clientX;
 
  var diffX = initialX - currentX;
 
  if (Math.abs(diffX)) {
    if (diffX > 0 && $slide5.classList.contains('centrado')) {
      c1fr()
      $slide1.classList.add('centrado2')
      $slide1.classList.remove('centrado')
    }else{
      if ($slide5.classList.contains('centrado')) {
        c4fl() 
      }
    } 
    if (diffX > 0 && $slide4.classList.contains('centrado')) {
      c5fr() 
    }else{
      if ($slide4.classList.contains('centrado')) {
        c3fl() 
      }
    }  
    if (diffX > 0 && $slide3.classList.contains('centrado')) {
      c4fr() 
    }else{
      if ($slide3.classList.contains('centrado')) {
        c2fl() 
      }
    }  
    if (diffX > 0 && $slide2.classList.contains('centrado')) {
      c3fr() 
    }else{
      if ($slide2.classList.contains('centrado')) {
        c1fl()
      }
    }  
    if (diffX > 0 && $slide1.classList.contains('centrado')) {
      c2fr() 
    }else{
      if ($slide1.classList.contains('centrado')) {
        c5fl() 
      }
    }

    if ($slide1.classList.contains('centrado2')) {// swiped left      
      $slide1.classList.add('centrado')
      $slide1.classList.remove('centrado2')
    }     
      
  }
 
  initialX = null;
   
  e.preventDefault();
};
