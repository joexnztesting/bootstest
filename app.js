


const $tituProd = document.querySelector('.titu-prod'),
$tituAcerca = document.querySelector('.titu-acerca'),
$tituContacto = document.querySelector('.titu-social'),
//$firstCard = document.querySelectorAll('.card:first-child'),
$lastCard = document.querySelectorAll('.card:last-child'),
$sectionAcerca = document.querySelectorAll('.acerca'),
$fondoManos = document.querySelectorAll('.fondo-manos'),
$socialIcons = document.querySelector('.row-icons'),
$formuinput = document.querySelector('.formu-input'),
$formu = document.querySelectorAll('.formu'),
$formuAb = document.querySelector('.formu'),
$footer = document.querySelectorAll('.footer'),
$sumate = document.querySelector('.contacto-sumate');



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
  if(e.target.matches('.formu-input')){
    //alert('hi') ;
  }
})