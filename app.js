


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

const acelgaToCenter = function(e){
  $slide1.classList.add('to-left1')
  $slide1.classList.remove('to-right2')  
}
const acelgaToLeft = function(e){
  $slide1.classList.add('to-left2')
  $slide1.classList.remove('to-left1')
  $slide1.classList.remove('to-right2') 
}
const acelgaToCenter2 = function(e){
  $slide1.classList.add('to-right2')  
  $slide1.classList.remove('to-left2')
}

const sandiaToCenter = function(e){
  $slide2.classList.add('to-left1')
  $slide2.classList.remove('to-right1')
  $slide2.classList.remove('to-right2')
}
const sandiaToLeft = function(e){
  $slide2.classList.add('to-left2')
  $slide2.classList.remove('to-left1')
  $slide2.classList.remove('to-right2')
}
const sandiaToRight = function(e){
  $slide2.classList.add('to-right1')  
  $slide2.classList.remove('to-left1')
  $slide2.classList.remove('to-left2')
  $slide2.classList.remove('to-right2')
}
const sandiaToCenter2 = function(e){
  $slide2.classList.add('to-right2')
  $slide2.classList.remove('to-right1')
  $slide2.classList.remove('to-left2')
}


const tomateToCenter = function(e){
  $slide3.classList.add('to-left1')
  $slide3.classList.remove('to-right1')
  $slide3.classList.remove('to-right2')
}
const tomateToLeft = function(e){
  $slide3.classList.add('to-left2')
  $slide3.classList.remove('to-left1')
  $slide3.classList.remove('to-right2')
}
const tomateToRight = function(e){
  $slide3.classList.add('to-right1')  
  $slide3.classList.remove('to-left1')
  $slide3.classList.remove('to-left2')
  $slide3.classList.remove('to-right2')
}
const tomateToCenter2 = function(e){
  $slide3.classList.add('to-right2')
  $slide3.classList.remove('to-right1')
  $slide3.classList.remove('to-left1')
}


const anquitoToCenter = function(e){
  $slide4.classList.add('to-left1')
  $slide4.classList.remove('to-right1')
  $slide4.classList.remove('to-right2')
}
const anquitoToRight = function(e){
  $slide4.classList.add('to-right1')
  $slide4.classList.remove('to-left1')
  $slide4.classList.remove('to-left2')
}
const anquitoToLeft = function(e){
  $slide4.classList.add('to-left2')
  $slide4.classList.remove('to-left1')
  $slide4.classList.remove('to-right1')
  $slide4.classList.remove('to-right2')
}


const lastSlideToCenter = function(e){
  $slide5.classList.add('to-left1')
  $slide5.classList.remove('to-right1')
  $slide5.classList.remove('to-right2')
}
const lastSlideToRight = function(e){
  $slide5.classList.add('to-right1')
  $slide5.classList.remove('to-left1')
  $slide5.classList.remove('to-left2')
}
const lastSlideToleft = function(e){
  $slide5.classList.add('to-left2')
  $slide5.classList.remove('to-left1')
  $slide5.classList.remove('to-right1')
  $slide5.classList.remove('to-right2')
}



$selectRight.addEventListener('click',(e)=>{

  if($selectRight.classList.contains('r0') && $slide3.classList.contains('n3')){    
    tomateToRight()    
    sandiaToCenter2() 
    
    $slide3.classList.remove('n3')    
    $slide3.classList.remove('n1')
    $slide3.classList.add('n4')    
  }
  
  if($selectRight.classList.contains('r0') && $slide3.classList.contains('n2')){
    anquitoToRight()
    tomateToCenter2()
    sandiaToLeft()
    
    $slide3.classList.add('n1')
    $slide3.classList.remove('n2')
    
    $slide2.classList.remove('k1')
    $slide3.classList.add('n3')  
    $slide3.classList.remove('n4')    
  }

  if($selectRight.classList.contains('r0') && $slide2.classList.contains('k12')){
    sandiaToRight()
    acelgaToCenter2()

    $slide2.classList.remove('k12')
    $slide1.classList.add('s1')
  }

  if($selectRight.classList.contains('r0') && $slide2.classList.contains('k1')){
    tomateToRight()    
    sandiaToCenter2()

    $slide2.classList.remove('k1')
    $slide2.classList.add('k12')
    $slide3.classList.remove('n1')
  }

  if($selectRight.classList.contains('r0') && $slide1.classList.contains('s12')){
    sandiaToRight()
    acelgaToCenter2()
    
    $slide1.classList.add('s1')
    $slide1.classList.remove('s12')   
  }
  
})


$selectLeft.addEventListener('click',(e)=>{

  if($selectLeft.classList.contains('l0') && $slide4.classList.contains('d1')){
    anquitoToLeft()

    $slide4.classList.remove('d1')  
  }
  
  if($selectLeft.classList.contains('l0') && $slide3.classList.contains('n5')){
    anquitoToCenter()
    tomateToLeft()

    
    $slide4.classList.add('d1')  
  }
  
  if($selectLeft.classList.contains('l0') && $slide3.classList.contains('n4')){
    tomateToCenter()
    sandiaToLeft()

    $slide3.classList.remove('n4') 
    $slide3.classList.add('n5') 
  }

  if($selectLeft.classList.contains('l0') && $slide3.classList.contains('n1')){
    anquitoToCenter()
    tomateToLeft()

    $slide3.classList.remove('n1')
    $slide2.classList.remove('k1')
    $slide3.classList.add('n2')
  }

  if($selectLeft.classList.contains('l0') && $slide2.classList.contains('k12')){
    tomateToCenter()
    sandiaToLeft()

    $slide1.classList.add('s12')
    $slide2.classList.remove('k12')   
  } 
  
  if($selectLeft.classList.contains('l0') && $slide1.classList.contains('s12')){
    tomateToCenter()
    sandiaToLeft()
    
    $slide1.classList.remove('s12')
    $slide2.classList.add('k1')
    $slide3.classList.add('n1')
  } 
  
  if($selectLeft.classList.contains('l0') && $slide1.classList.contains('s1')){
    acelgaToLeft()
    sandiaToCenter()
    
    $slide1.classList.add('s12')
    $slide1.classList.remove('s1') 
    
  }
})


window.addEventListener('DOMContentLoaded',(e)=>{
    acelgaToCenter()  
    $slide1.classList.add('s1')
})

