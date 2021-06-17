


const $tituProd = document.querySelector('.titu-prod');
const $tituAcerca = document.querySelector('.titu-acerca');
const $tituContacto = document.querySelector('.titu-social');
const $firstCard = document.querySelectorAll('.card:first-child');
const $lastCard = document.querySelectorAll('.card:last-child');
const $sectionAcerca = document.querySelectorAll('.acerca');
const $fondoManos = document.querySelectorAll('.fondo-manos');
const $socialIcons = document.querySelector('.row-icons');
const $formuinput = document.querySelector('.formu-input');
const $formu = document.querySelectorAll('.formu');
const $formuAb = document.querySelector('.formu');
const $footer = document.querySelectorAll('.footer');
const $sumate = document.querySelector('.contacto-sumate');


const $infoCards = document.querySelector('.info-cards');
const $body = document.querySelector('.container-princ');
const $docum = document.querySelector('.htemele');



const tituIn = (entries)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    //$tituProd.classList.remove('titu-opac-out');
    //$tituProd.classList.add('titu-header-in');
  }
})
}

const observer1 = new IntersectionObserver(tituIn, {threshold:0.2});

$lastCard.forEach((el)=>observer1.observe(el));



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