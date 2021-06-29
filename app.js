


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
const $slidesCont = document.querySelector('.slides-container');
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

const s2focus = function(e){
  e.classList.add('left1')  
  e.classList.remove('right0')
}
const s3focus = function(e){
  e.classList.add('left2')
  e.classList.remove('left1')
  e.classList.remove('right1')
}
const s4focus = function(e){
  e.classList.add('left3')
  e.classList.remove('left2')
  e.classList.remove('right2')
}
const s5focus = function(e){
  e.classList.add('left4')
  e.classList.remove('left3')
  e.classList.remove('right3')
}
// ***********
const s4focusBack = function(e){
  e.classList.add('right3')
  e.classList.remove('right2')
  e.classList.remove('left4')
}
const s3focusBack = function(e){
  e.classList.add('right2')
  e.classList.remove('right3')
  e.classList.remove('left3')
}
const s2focusBack = function(e){
  e.classList.add('right1')
  e.classList.remove('right2')
  e.classList.remove('left2')
}
const s1focusBack = function(e){
  e.classList.add('right0') 
  e.classList.remove('right1')
  e.classList.remove('left1')
}


$selectRight.addEventListener('click',(e)=>{
    
  if($slide2.classList.contains('on-center')){
    s1focusBack($slidesCont)
    $slide2.classList.remove('on-center') 
    $slide1.classList.add('on-center') 
  }
  if($slide3.classList.contains('on-center')){
    s2focusBack($slidesCont)
    $slide3.classList.remove('on-center') 
    $slide2.classList.add('on-center') 
  }
  if($slide4.classList.contains('on-center')){
    s3focusBack($slidesCont)
    $slide4.classList.remove('on-center') 
    $slide3.classList.add('on-center') 
  }
  if($slide5.classList.contains('on-center')){
    s4focusBack($slidesCont)
    $slide5.classList.remove('on-center') 
    $slide4.classList.add('on-center') 
  }
})

$selectLeft.addEventListener('click',(e)=>{
  if($slide4.classList.contains('on-center')){
    s5focus($slidesCont)
    $slide4.classList.remove('on-center') 
    $slide5.classList.add('on-center') 
  }
  if($slide3.classList.contains('on-center')){
    s4focus($slidesCont)
    $slide3.classList.remove('on-center') 
    $slide4.classList.add('on-center') 
  }
  if($slide2.classList.contains('on-center')){
    s3focus($slidesCont)
    $slide2.classList.remove('on-center') 
    $slide3.classList.add('on-center') 
  }
  if($slide1.classList.contains('on-center')){
    s2focus($slidesCont)
    $slide1.classList.remove('on-center') 
    $slide2.classList.add('on-center') 
  }
})

window.addEventListener('DOMContentLoaded',(e)=>{ 
  $slide1.classList.add('on-center') 
})

