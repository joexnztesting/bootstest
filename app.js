


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


// SLIDER  ***************************************************
const $selectLeft = document.querySelector('.select-left');
const $selectRight = document.querySelector('.select-right');
const $slide1 = document.querySelector('.slide:nth-child(1)');
const $slide2 = document.querySelector('.slide:nth-child(2)');
const $slide3 = document.querySelector('.slide:nth-child(3)');
const $slide4 = document.querySelector('.slide:nth-child(4)');
const $slide5 = document.querySelector('.slide:nth-child(5)');




const slide1center = function(){
}
const slide2center = function(){
}
const slide3center = function(){
}
const slide4center = function(){
}
const slide5center = function(){ 
}

const slide5center2 = function(){
}
const slide4center2 = function(){
}
const slide3center2 = function(){
}
const slide2center2 = function(){
}
const slide1center2 = function(){
}
/*
const clearClass = function(e){
  e.classList.remove('to-left')
  e.classList.remove('to-center')
  e.classList.remove('to-center2')
  e.classList.remove('to-right')
}
const toCenter = function(e){
  e.classList.add('to-center')
}
const toLeft = function(e){
  e.classList.add('to-left')
}
const toCenter2 = function(e){
  e.classList.add('to-center2')
}
const toRight = function(e){
  e.classList.add('to-right')
}
*/







window.addEventListener('DOMContentLoaded',(e)=>{

  

  $selectRight.addEventListener('click',(e)=>{
    if($selectLeft.classList.contains('l1') && $slide2.classList.contains('to-center2')){    
      $slide2.classList.add('to-right')
      $slide2.classList.remove('to-center2')
      $slide1.classList.add('to-center2')
      $slide1.classList.remove('to-left')
      $slide1.classList.remove('opacity-out')
      $slide5.classList.add('to-left')
      $slide5.classList.remove('to-right')
      $slide4.classList.remove('to-right')
      $slide3.classList.add('opacity-out')
      $slide1.classList.add('fk')
    } 
    if($selectLeft.classList.contains('l1') && $slide3.classList.contains('to-center2')){    
      $slide3.classList.add('to-right')
      $slide3.classList.remove('to-center2')
      $slide2.classList.add('to-center2') 
      $slide2.classList.remove('to-left')
      $slide2.classList.remove('opacity-out')
      $slide1.classList.remove('to-right')
      $slide1.classList.add('to-left')    
      $slide4.classList.add('opacity-out')
    } 
    if($selectLeft.classList.contains('l1') && $slide4.classList.contains('to-center2')){    
      $slide4.classList.add('to-right')
      $slide4.classList.remove('to-center2')   
      $slide3.classList.remove('opacity-out')
      $slide3.classList.add('to-center2')
      $slide3.classList.remove('to-left')    
      $slide2.classList.add('to-left')     
      $slide2.classList.remove('to-right')    
      $slide5.classList.add('opacity-out')
    } 
    if($selectLeft.classList.contains('l1') && $slide5.classList.contains('to-center2')){    
      $slide5.classList.add('to-right')
      $slide5.classList.remove('to-center2')    
      $slide4.classList.remove('opacity-out')
      $slide4.classList.add('to-center2') 
      $slide4.classList.remove('to-left')    
      $slide3.classList.add('to-left')     
      $slide3.classList.remove('to-right')
      $slide1.classList.add('opacity-out')
    } 
  
    if($selectLeft.classList.contains('l1') && $slide1.classList.contains('to-center22')){    
      $slide1.classList.add('to-right')
      $slide1.classList.remove('to-center')
      $slide1.classList.remove('to-center2')
      $slide5.classList.add('to-center2')
      $slide5.classList.remove('to-left')
      $slide5.classList.remove('opacity-out')    
      $slide4.classList.add('to-left')     
      $slide4.classList.remove('to-right')
      $slide2.classList.add('opacity-out')
      $slide1.classList.remove('to-center22')    
    }
  
    if($slide1.classList.contains('fk')){    
      $slide1.classList.remove('fk')
      $slide1.classList.add('to-center22')    
    }
  })
  // *************************************************
  $selectLeft.addEventListener('click',(e)=>{
    
    if($selectRight.classList.contains('r0')  && $slide5.classList.contains('to-center')){      
      
      $slide5.classList.add('to-left')
      $slide5.classList.remove('to-center')

      $slide1.classList.add('to-center')    
      $slide1.classList.remove('opacity-out')  
      $slide1.classList.remove('to-right')
  
      $slide3.classList.add('opacity-out')
      $slide3.classList.add('to-right')
      $slide3.classList.remove('to-left')

      $slide1.classList.add('af')
  
    }
    if($selectRight.classList.contains('r0')  && $slide4.classList.contains('to-center')){
      
      $slide5.classList.remove('opacity-out')
      $slide5.classList.add('to-center')
      $slide5.classList.remove('to-right')
      
  
      $slide4.classList.add('to-left')
      $slide4.classList.remove('to-center')
  
      $slide3.classList.add('opacity-out')
      $slide3.classList.add('to-right')
      $slide3.classList.remove('to-left')
  
    }
    if($selectRight.classList.contains('r0')  && $slide3.classList.contains('to-center')){
      
      $slide3.classList.add('to-left')
      $slide3.classList.remove('to-center')
      
      $slide4.classList.remove('opacity-out')
      $slide4.classList.add('to-center')
      $slide4.classList.remove('to-right')   
      
      $slide2.classList.add('opacity-out')
      $slide2.classList.add('to-right')
      $slide2.classList.remove('to-left')
    }
    if($selectRight.classList.contains('r0')  && $slide2.classList.contains('to-center')){  
      
      $slide3.classList.add('to-center')
      $slide3.classList.remove('to-right')
      $slide3.classList.remove('opacity-out')    
      
      $slide2.classList.add('to-left')
      $slide2.classList.remove('to-center')
            
      $slide1.classList.add('to-right')    
      $slide1.classList.remove('to-left')
      $slide1.classList.add('opacity-out')    
    }/*
    if($selectRight.classList.contains('r0')  && $slide1.classList.contains('to-center')){ 

      $slide5.classList.add('opacity-out')   
      $slide5.classList.add('to-right')
      $slide5.classList.remove('to-left')
  
      $slide1.classList.add('to-left')
      $slide1.classList.remove('to-center') 
  
      $slide2.classList.add('to-center')
      $slide2.classList.remove('to-right')   
      $slide2.classList.remove('opacity-out')   

      $slide2.classList.remove('to-center11')         
      
    }  */
    if($selectRight.classList.contains('r0')  && $slide1.classList.contains('to-center11')){ 

      
  
      $slide1.classList.add('to-left')
      $slide1.classList.remove('to-center') 
  
      $slide2.classList.add('to-center')
      $slide2.classList.remove('to-right')   
      $slide2.classList.remove('opacity-out')   

      $slide2.classList.remove('to-center11')         
      
    }  
    if($slide1.classList.contains('af')){
      $slide1.classList.remove('af')
      $slide1.classList.add('to-center11')
    }
  })



  // clase habilitadora
  $slide1.classList.add('to-center')
  // clases auxiliares
  $slide1.classList.add('to-center22')
  $slide1.classList.add('to-center11')

  $slide5.classList.add('opacity-out')    
  $slide4.classList.add('opacity-out')    
  $slide3.classList.add('opacity-out')    
  $slide2.classList.add('opacity-out') 
  
  $selectLeft.classList.add('l1') // cuenta como que ya dio una vuelta
  $selectRight.classList.add('r0')
})

// FIN SLIDER  ***************************************************
