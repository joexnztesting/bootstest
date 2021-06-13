


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
const tituOut1 = (entries)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    //$tituProd.classList.add('titu-opac-out');
  }
})
} 

const tituOut2 = (entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      $socialIcons.classList.add('visi-out');
      $sumate.classList.add('visi-out'); 
    }
    if(!entry.isIntersecting){
      $socialIcons.classList.remove('visi-out');
      $sumate.classList.remove('visi-out'); 
    }
  })
}
const tituIn2 = (entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      $socialIcons.classList.add('visi-out');
      $sumate.classList.add('visi-out'); 
  }
})
}

const observer1 = new IntersectionObserver(tituIn, {threshold:0.2});
const observer2 = new IntersectionObserver(tituOut1, {threshold:0.9});
const observer3 = new IntersectionObserver(tituOut2, {threshold:0.6});
const observer4 = new IntersectionObserver(tituIn2, {threshold:0.5});

//$firstCard.forEach((el)=>observer1.observe(el));
$lastCard.forEach((el)=>observer1.observe(el));
$sectionAcerca.forEach((el)=>observer2.observe(el));
$formu.forEach((el)=>observer3.observe(el));
$footer.forEach((el)=>observer4.observe(el));


window.addEventListener('click',(e)=>{
  if(e.target.matches('.formu-input')){
    alert('hi') ;
    //$formuAb.classList.add('form-abslt');
  }
  //$tituloProd.classList.add('titu-sticky');
})