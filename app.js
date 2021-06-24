


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

// slide 5 to left
$selectLeft.addEventListener('click',(e)=>{
  if(e.target.matches('.a3')){
    $slide5.classList.add('to-left-4b')
    $slide4.classList.remove('to-left-3b')
    $slide4.classList.add('to-left-4')
    $slide3.classList.remove('to-left-3')
  }
})
// slide 4 to left
$selectLeft.addEventListener('click',(e)=>{
  if(e.target.matches('.a2')){
    $slide4.classList.add('to-left-3b')
    $slide3.classList.remove('to-left-2')
    $slide3.classList.add('to-left-3')
    $slide2.classList.remove('to-left-2')
    $selectLeft.classList.add('a3')    
  }
})
// slide 3 to left
$selectLeft.addEventListener('click',(e)=>{
  if(e.target.matches('.a1')){
    $slide3.classList.remove('to-right-2b')
    $slide3.classList.add('to-left-2b')
    $slide2.classList.remove('to-right-2')
    $slide2.classList.remove('to-left-1')
    $slide2.classList.add('to-left-2')
    $slide1.classList.remove('to-left-1')
    $selectLeft.classList.add('a2')
    $selectRight.classList.add('b1')
    $selectRight.classList.remove('b0') 
  }
})
// slide 2 to left
$selectLeft.addEventListener('click', (e)=>{
    $slide1.classList.remove('to-right-1')
    $slide1.classList.add('to-left-1')
    $slide2.classList.remove('to-right-1')
    $slide2.classList.add('to-left-1')
    $selectLeft.classList.add('a1')  
})

// TO RIGHT

$selectRight.addEventListener('click', (e)=>{
  $slide2.classList.remove('to-left-1')
  $slide2.classList.add('to-right-1')
  $slide1.classList.remove('to-left-1')
  $slide1.classList.add('to-right-1') 
  $selectLeft.classList.remove('a1')  
})

 // slide 3 to 1 back
$selectLeft.addEventListener('click', (e)=>{
  if(e.target.matches('.a0')){
    $slide1.classList.remove('to-right-3')
    $slide1.classList.remove('to-right-2')    
    $slide2.classList.remove('to-right-2')
    $slide2.classList.remove('to-right-3')             
  }
}) 
// slide 3 to 1
$selectRight.addEventListener('click', (e)=>{
  if(e.target.matches('.b0')){
    $slide2.classList.remove('to-left-2')
    $slide2.classList.add('to-right-3')
    $slide1.classList.remove('to-left-1')
    $slide1.classList.add('to-right-3')
    $selectRight.classList.remove('b1') 
    $selectLeft.classList.add('a0')  
  }
}) 
// slide 3 to 2
$selectRight.addEventListener('click', (e)=>{
  if(e.target.matches('.b1')){
    $slide3.classList.remove('to-left-2b')
    $slide3.classList.add('to-right-2b')
    $slide2.classList.remove('to-right-1')
    $slide2.classList.add('to-right-2')    
    $slide1.classList.remove('to-right-1')
    $slide1.classList.add('to-right-2')
    $selectLeft.classList.remove('a2')
    $selectLeft.classList.add('a1')
    $selectRight.classList.add('b0')
  }
})
