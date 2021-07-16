
// SLIDER  ***************************************************

const $selectLeft = document.querySelector('.select-left');
const $selectRight = document.querySelector('.select-right');
const $slide1 = document.querySelector('.slide:nth-child(1)');
const $slide2 = document.querySelector('.slide:nth-child(2)');
const $slide3 = document.querySelector('.slide:nth-child(3)');
const $slide4 = document.querySelector('.slide:nth-child(4)');
const $slide5 = document.querySelector('.slide:nth-child(5)');
const $iniTouch = document.querySelector('.carousel-container');

const leftTocenter = function(e){
  e.classList.add('centrado')
  e.classList.add('opacity-in') 
  e.classList.add('left-to-center') 
  e.classList.remove('center-to-left') 
  e.classList.remove('right-to-center')
  e.classList.remove('center-to-right')
}
const centerToleft = function(e){
  e.classList.remove('centrado')
  e.classList.add('opacity-in')
  e.classList.add('center-to-left') 
  e.classList.remove('left-to-center')    
  e.classList.remove('right-to-center')    
  e.classList.remove('center-to-right')    
}
const rightTocenter = function(e){
  e.classList.add('centrado')
  e.classList.add('opacity-in') 
  e.classList.add('right-to-center') 
  e.classList.remove('center-to-right')
  e.classList.remove('left-to-center')
  e.classList.remove('center-to-left')
}
const centerToright = function(e){
  e.classList.remove('centrado')
  e.classList.add('opacity-in')
  e.classList.add('center-to-right') 
  e.classList.remove('right-to-center')
  e.classList.remove('left-to-center')
  e.classList.remove('center-to-left')
}

const c1fl = function(e){  
  leftTocenter($slide1)  
  centerToright($slide2)
}
const c2fl = function(e){
  leftTocenter($slide2)
  centerToright($slide3)
  $selectRight.classList.add('fk')  
  $selectRight.classList.remove('r0') 
}
const c3fl = function(e){
  leftTocenter($slide3)     
  centerToright($slide4)
}
const c4fl = function(e){
  leftTocenter($slide4)      
  centerToright($slide5)  
}
const c5fl = function(e){
  leftTocenter($slide5)
  centerToright($slide1)
  $selectLeft.classList.add('l0')
}

const c1fr = function(e){
  rightTocenter($slide1)
  centerToleft($slide5)
}
const c2fr = function(e){
  rightTocenter($slide2)
  centerToleft($slide1)
  $selectRight.classList.add('r0') 
}
const c3fr = function(e){
  rightTocenter($slide3)
  centerToleft($slide2)
}
const c4fr = function(e){
  rightTocenter($slide4)
  centerToleft($slide3)
}
const c5fr = function(e){
  rightTocenter($slide5)
  centerToleft($slide4)
  $selectLeft.classList.add('fk')
  $selectLeft.classList.remove('l0')
}

window.addEventListener('DOMContentLoaded',(e)=>{ 
  
  $selectRight.addEventListener('click',(e)=>{
    if($slide3.classList.contains('centrado')){      
      c2fl()
    } 
    if($slide4.classList.contains('centrado')){      
      c3fl()
    } 
    if($slide5.classList.contains('centrado')){      
      c4fl()
      $selectLeft.classList.remove('l0')
    }     
    if($slide1.classList.contains('centrado')){      
      c5fl()
    }    
    if($slide2.classList.contains('centrado') && $selectRight.classList.contains('r0')){
      c1fl()
    }
    if($selectRight.classList.contains('fk')){    
      $selectRight.classList.remove('fk')
      $selectRight.classList.add('r0')    
    }
  })

  $selectLeft.addEventListener('click',(e)=>{
    if($slide4.classList.contains('centrado')){
      c5fr()
    }
    if($slide3.classList.contains('centrado')){
      c4fr()
    }
    if($slide2.classList.contains('centrado')){      
      c3fr()       
    }
    if($slide1.classList.contains('centrado')){
      c2fr()        
    }    
    if($slide5.classList.contains('centrado') && $selectLeft.classList.contains('l0')){      
      c1fr()      
    }
    if($selectLeft.classList.contains('fk')){
      $selectLeft.classList.remove('fk')
      $selectLeft.classList.add('l0')
    }
  })

  c1fr()
  $selectRight.classList.add('r0')
  $selectLeft.classList.add('l0')

})

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
    }
    if (diffX > 0 && $slide4.classList.contains('centrado')) {
      c5fr() 
    }  
    if (diffX > 0 && $slide3.classList.contains('centrado')) {
      c4fr() 
    }
    if (diffX > 0 && $slide2.classList.contains('centrado')) {
      c3fr()      
    }     
    if (diffX > 0 && $slide1.classList.contains('centrado')) {
      c2fr()
    }    
    if ($slide1.classList.contains('centrado2')) {   
      $slide1.classList.add('centrado')
      $slide1.classList.remove('centrado2')
    }
    if (diffX < 0 && $slide2.classList.contains('centrado')) {
      c1fl()
      $slide1.classList.add('centrado2')
      $slide1.classList.remove('centrado') 
    }
    if (diffX < 0 && $slide3.classList.contains('centrado')) {
      c2fl()
    }
    if (diffX < 0 && $slide4.classList.contains('centrado')) {
      c3fl()
    }
    if (diffX < 0 && $slide5.classList.contains('centrado')) {
      c4fl()
    }
    if (diffX < 0 && $slide1.classList.contains('centrado')) {
      c5fl()
    }
    if ($slide1.classList.contains('centrado2')) {   
      $slide1.classList.add('centrado')
      $slide1.classList.remove('centrado2')
    }
  }
 
  initialX = null;
   
  e.preventDefault();
};

// FIN SLIDER  ***************************************************

/*  BORRAR DE ACÁ HACIA ABAJO

// SLIDER
window.addEventListener('DOMContentLoaded', (e)=>{

    const $nextBtn = document.querySelector('.slider-btns .next'),
        $prevBtn = document.querySelector('.slider-btns .prev'),
        $slides = document.querySelectorAll('.slider2-slide');

        let i = 0;

        document.addEventListener('click',(e)=>{
            if(e.target===$prevBtn){
                e.preventDefault()
                $slides[i].classList.remove('active')

                i--   

                if(i<0){
                    i = $slides.length - 1
                }
                $slides[i].classList.add('active')
            }
            if(e.target===$nextBtn){
                e.preventDefault()
                $slides[i].classList.remove('active')
                
                i++
                
                if(i>=$slides.length){
                    i = 0
                }
                $slides[i].classList.add('active')
            }
        })

})
// FIN SLIDER
*/