


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
  
  const leftTocenter = function(e){
    e.classList.add('opacity-in') 
    e.classList.add('left-to-center') 
    e.classList.remove('right-to-center')
    e.classList.remove('center-to-left') 
  }
  const rightTocenterOut = function(e){
    e.classList.remove('opacity-in') 
    e.classList.add('right-to-center') 
    e.classList.remove('center-to-right')
  }
  const centerToright = function(e){
    e.classList.add('center-to-right') 
    e.classList.remove('left-to-center')
    e.classList.remove('right-to-center')
  }


  const c1fl = function(e){  
    leftTocenter($slide1)  
    centerToright($slide2)  
    rightTocenterOut($slide3)     
  }
  const c5fl = function(e){
    leftTocenter($slide5)
    centerToright($slide1)
    rightTocenterOut($slide2)     
    $slide5.classList.remove('center-to-left') /* aux because start */      
    $slide1.classList.remove('right-to-center') /* aux because start */       
    $slide4.classList.remove('left-to-center') /* aux because start */
  }
  const c4fl = function(e){
    leftTocenter($slide4)      
    centerToright($slide5)
    rightTocenterOut($slide1)     
  }
  const c3fl = function(e){
    leftTocenter($slide3)     
    centerToright($slide4)
    rightTocenterOut($slide5)     
  }
  const c2fl = function(e){
    leftTocenter($slide2)
    centerToright($slide3)     
    rightTocenterOut($slide4)     
  }
  
  const c1fr = function(e){
    $slide1.classList.add('opacity-in') 
    $slide1.classList.add('right-to-center') 
    $slide1.classList.remove('center-to-left')
    $slide5.classList.add('center-to-left') 
    $slide5.classList.remove('right-to-center')  
    $slide4.classList.remove('opacity-in')
    $slide4.classList.add('left-to-center') 
    $slide4.classList.remove('center-to-left')
  }
  const c2fr = function(e){
    $slide2.classList.add('opacity-in') 
    $slide2.classList.add('right-to-center') 
    $slide2.classList.remove('center-to-left')      
    $slide5.classList.remove('opacity-in')
    $slide5.classList.add('left-to-center') 
    $slide5.classList.remove('center-to-left')
    $slide1.classList.add('center-to-left') 
    $slide1.classList.remove('right-to-center') 
  }
  const c3fr = function(e){
    $slide3.classList.add('opacity-in') 
    $slide3.classList.add('right-to-center') 
    $slide3.classList.remove('center-to-left')
    $slide2.classList.add('center-to-left') 
    $slide2.classList.remove('right-to-center')
    $slide1.classList.remove('opacity-in')
    $slide1.classList.add('left-to-center') 
    $slide1.classList.remove('center-to-left')
  }
  const c4fr = function(e){
    $slide4.classList.add('opacity-in') 
    $slide4.classList.add('right-to-center') 
    $slide4.classList.remove('center-to-left')
    $slide3.classList.add('center-to-left') 
    $slide3.classList.remove('right-to-center')
    $slide2.classList.remove('opacity-in')
    $slide2.classList.add('left-to-center') 
    $slide2.classList.remove('center-to-left')
  }
  const c5fr = function(e){
    $slide5.classList.add('opacity-in') 
    $slide5.classList.add('right-to-center') 
    $slide5.classList.remove('center-to-left')      
    $slide4.classList.add('center-to-left') 
    $slide4.classList.remove('right-to-center')      
    $slide3.classList.remove('opacity-in')
    $slide3.classList.add('left-to-center') 
    $slide3.classList.remove('center-to-left')
  }
  
  // *************************************************
  
  $selectRight.addEventListener('click',(e)=>{

    if($selectRight.classList.contains('r4')){      
      c2fl()
      $selectRight.classList.remove('r4')
      $selectRight.classList.add('fk')
    } 
    if($selectRight.classList.contains('r3')){      
      c3fl()
      $selectRight.classList.remove('r3')
      $selectRight.classList.add('r4')
    } 
    if($selectRight.classList.contains('r2')){      
      c4fl()
      $selectRight.classList.remove('r2')
      $selectRight.classList.add('r3')
    } 

    
    if($selectRight.classList.contains('r1')){      
      c5fl()   
      $selectRight.classList.remove('r1')
      $selectRight.classList.add('r2')
    }
    
    if($selectRight.classList.contains('r11')){ 
      $selectRight.classList.remove('r11')   
      $selectRight.classList.add('r0')  
      //$selectRight.classList.remove('r1')
      //$selectRight.classList.add('r2')
    }
    
    if($selectRight.classList.contains('r0')){
      c1fl()
      $selectRight.classList.remove('r0')
      $selectRight.classList.add('r1')
    }    

    if($selectRight.classList.contains('fk')){    
      $selectRight.classList.remove('fk')
      $selectRight.classList.add('r0')    
    }

  })


  $selectLeft.addEventListener('click',(e)=>{    
    if($selectLeft.classList.contains('l4')){
      c5fr()      
      $selectLeft.classList.remove('l4')
      $selectLeft.classList.add('fk')
    }
    if($selectLeft.classList.contains('l3')){
      c4fr()
      $selectLeft.classList.remove('l3')
      $selectLeft.classList.add('l4')
    }
    if($selectLeft.classList.contains('l2')){      
      c3fr()
      $selectLeft.classList.remove('l2')
      $selectLeft.classList.add('l3')
    }
    if($selectLeft.classList.contains('l1')){
      c2fr()
      $selectLeft.classList.remove('l1')
      $selectLeft.classList.add('l2')
      $selectLeft.classList.remove('l0') /* aux because start */

      $selectRight.classList.add('r11') /* * */
      $selectRight.classList.remove('r1') /* * */
      
    }    
    if($selectLeft.classList.contains('l0')){      
      c1fr() 
      $selectLeft.classList.remove('l0')
      $selectLeft.classList.add('l1')
    }
    if($selectLeft.classList.contains('fk')){
      $selectLeft.classList.remove('fk')
      $selectLeft.classList.add('l0')
    }
  })

  c1fr()  /* to start  */
  $selectLeft.classList.add('l1') /* to start  */
  $selectRight.classList.add('r1') /* to start */
})

// FIN SLIDER  ***************************************************
