


const $tituContacto = document.querySelector('.titu-social');
const $firstCard = document.querySelectorAll('.card:first-child');
const $formuinput = document.querySelector('.formu-input');
const $formu = document.querySelectorAll('.formu');
const $abc = document.querySelector('.abc');
const $tituContc = document.querySelector('.titu-contc');








const $infoCards = document.querySelector('.info-cards');
const $body = document.querySelector('.container-princ');
const $docum = document.querySelector('.htemele');
const $socialIcons = document.querySelectorAll('.row-icons');
const $marcoPlantas = document.querySelectorAll('.marco-plantas');
const $sectionAcerca = document.querySelectorAll('.acerca');
const $lastCard = document.querySelectorAll('.card:last-child');
const $tituProd = document.querySelector('.titu-prod');
const $tituAcerca = document.querySelector('.titu-acerca');



//const $carousel = document.querySelector('.carousel-container');
const $selectLeft = document.querySelector('.select-left');
const $selectRight = document.querySelector('.select-right');
const $slide1 = document.querySelector('.slide:nth-child(1)');
const $slide2 = document.querySelector('.slide:nth-child(2)');
const $slide3 = document.querySelector('.slide:nth-child(3)');
const $slide4 = document.querySelector('.slide:nth-child(4)');
const $slide5 = document.querySelector('.slide:nth-child(5)');


// MEJORAR
const stickyOut = (entries)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    if($tituAcerca.classList.contains('separador')){
      $tituAcerca.classList.add('ocultar-titu')
      $tituAcerca.classList.remove('mostrar-titu')
    }    
  }
})
}
const stickyIn = (entries)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    if($tituAcerca.classList.contains('ocultar-titu')){
      $tituAcerca.classList.add('mostrar-titu')
      $tituAcerca.classList.remove('ocultar-titu')
    }    
  }
})
}
const stickyOut2 = (entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      if($tituProd.classList.contains('separador')){
        $tituProd.classList.add('ocultar-titu')
        $tituProd.classList.remove('mostrar-titu')
      }      
    }
  })
}
const stickyIn2 = (entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      if($tituProd.classList.contains('ocultar-titu')){
        $tituProd.classList.add('mostrar-titu')
        $tituProd.classList.remove('ocultar-titu')
      }    
    }
  })
}
const observer1 = new IntersectionObserver(stickyOut, {threshold:0.4});
const observer2 = new IntersectionObserver(stickyIn, {threshold:0.3});
const observer3 = new IntersectionObserver(stickyOut2, {threshold:0.1});
const observer4 = new IntersectionObserver(stickyIn2, {threshold:1});
$socialIcons.forEach((el)=>observer1.observe(el));
$marcoPlantas.forEach((el)=>observer2.observe(el));
//$sectionAcerca.forEach((el)=>observer3.observe(el));
//$lastCard.forEach((el)=>observer4.observe(el));
// MEJORAR


// INFO CARDS
window.addEventListener('click',(e)=>{
  if(e.target.matches('.mas-info')){
    $infoCards.classList.remove('visib-out');
    $body.classList.add('no-scroll');
    $docum.classList.add('fondo-htemele');
  }
  if(e.target.matches('.xclose')){
    $infoCards.classList.add('visib-out')
    $body.classList.remove('no-scroll');
    $docum.classList.remove('fondo-htemele');
  }  
})


// SLIDER

const rightToCenter = function(e){
   e.classList.add('to-left1')
   e.classList.remove('to-right1')
   e.classList.remove('to-right2')
   e.classList.add('on-center')
}
const centerToLeft = function(e){
  e.classList.add('to-left2')
  e.classList.remove('to-left1')
  e.classList.remove('to-right1')
  e.classList.remove('to-right2')
  e.classList.remove('on-center')
}
const leftToCenter = function(e){
  e.classList.add('to-right2')
  e.classList.remove('to-right1')
  e.classList.remove('to-left1')
  e.classList.remove('to-left2')
  e.classList.add('on-center')
}
const centerToRight = function(e){
  e.classList.add('to-right1')
  e.classList.remove('to-right2')
  e.classList.remove('to-left1')
  e.classList.remove('to-left2')
  e.classList.remove('on-center')
}


$selectRight.addEventListener('click',(e)=>{
  
  if($slide2.classList.contains('on-center')){
    centerToRight($slide2)
    leftToCenter($slide1)
    $selectRight.classList.add('select-visibOut')
  }
  if($slide3.classList.contains('on-center')){
    centerToRight($slide3)
    leftToCenter($slide2)
  }
  if($slide4.classList.contains('on-center')){
    centerToRight($slide4)
    leftToCenter($slide3)
  }
  if($slide5.classList.contains('on-center')){
    centerToRight($slide5)
    leftToCenter($slide4)
    $selectLeft.classList.remove('select-visibOut')
  }
})

$selectLeft.addEventListener('click',(e)=>{
  if($slide4.classList.contains('on-center')){
    centerToLeft($slide4)
    rightToCenter($slide5)
    $selectLeft.classList.add('select-visibOut')
  }
  if($slide3.classList.contains('on-center')){
    centerToLeft($slide3)
    rightToCenter($slide4)
  }
  if($slide2.classList.contains('on-center')){
    centerToLeft($slide2)
    rightToCenter($slide3)
  }
  if($slide1.classList.contains('on-center')){
    centerToLeft($slide1)
    rightToCenter($slide2)
    $selectRight.classList.remove('select-visibOut')
  }
})

window.addEventListener('DOMContentLoaded',(e)=>{  
  rightToCenter($slide1)
  $selectRight.classList.add('select-visibOut')
})

