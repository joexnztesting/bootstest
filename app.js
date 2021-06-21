


const $tituProd = document.querySelector('.titu-prod');
const $tituContacto = document.querySelector('.titu-social');
const $firstCard = document.querySelectorAll('.card:first-child');
const $lastCard = document.querySelectorAll('.card:last-child');
const $sectionAcerca = document.querySelectorAll('.acerca');
const $formuinput = document.querySelector('.formu-input');
const $formu = document.querySelectorAll('.formu');
const $abc = document.querySelector('.abc');
const $tituContc = document.querySelector('.titu-contc');






const $infoCards = document.querySelector('.info-cards');
const $body = document.querySelector('.container-princ');
const $docum = document.querySelector('.htemele');

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

const observer1 = new IntersectionObserver(stickyOut, {threshold:0.6});
const observer2 = new IntersectionObserver(stickyIn, {threshold:0.2});


$socialIcons.forEach((el)=>observer1.observe(el));
$marcoPlantas.forEach((el)=>observer2.observe(el));


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