const $span1 = document.querySelectorAll('.span-1');
const $span2 = document.querySelectorAll('.span-2');
const $tituHuerta = document.querySelector('.titu-huerta');

const $socialIcons = document.querySelectorAll('.row-icons');
const $marcoPlantas = document.querySelectorAll('.marco-plantas');
const $tituAcerca = document.querySelector('.titu-acerca');


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
const stickyOut2 = (entries)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    if($tituHuerta.classList.contains('separador')){
      $tituHuerta.classList.add('ocultar-titu')
      $tituHuerta.classList.remove('mostrar-titu')
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
const stickyIn2 = (entries)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    if($tituHuerta.classList.contains('ocultar-titu')){
      $tituHuerta.classList.add('mostrar-titu')
      $tituHuerta.classList.remove('ocultar-titu')
    }    
  }
})
}

const observer1 = new IntersectionObserver(stickyOut, {threshold:0.4});
const observer2 = new IntersectionObserver(stickyIn, {threshold:0.3});
const observer3 = new IntersectionObserver(stickyOut2, {threshold:0.3});
const observer4 = new IntersectionObserver(stickyIn2, {threshold:0.1});

$socialIcons.forEach((el)=>observer1.observe(el));
$marcoPlantas.forEach((el)=>observer2.observe(el));
$span2.forEach((el)=>observer3.observe(el));
$span1.forEach((el)=>observer4.observe(el));





// DETALLE INFO CARDS

const $infoCards = document.querySelector('.info-cards');
const $body = document.querySelector('.container-princ');
const $docum = document.querySelector('.htemele');

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
