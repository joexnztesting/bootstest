


const $tituloProd = document.querySelector('.titu-prod'),
$firstCard = document.querySelectorAll('.card:first-child'),
$lastCard = document.querySelectorAll('.card:last-child'),
$sectionAcerca = document.querySelectorAll('.acerca'),
$tituloAcerca = document.querySelector('.titu-acerca'),
$tituloContacto = document.querySelector('.titu-social'),
$formu = document.querySelectorAll('.contact-form');



const tituIn = (entries)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    $tituloProd.classList.remove('titu-opac-out')
    $tituloProd.classList.add('titu-header-in')
  }
})
}
const tituOut1 = (entries)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    $tituloProd.classList.add('titu-opac-out');
    $tituloAcerca.classList.add('titu-sticky');
  }
})
}  
const tituOut2 = (entries)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    $tituloAcerca.classList.remove('titu-sticky');
    $tituloContacto.classList.add('titu-sticky');
  }
})
}

const observer1 = new IntersectionObserver(tituIn, {threshold:0.2});
const observer2 = new IntersectionObserver(tituOut1, {threshold:0.6});
const observer3 = new IntersectionObserver(tituOut2, {threshold:0.2});

$firstCard.forEach((el)=>observer1.observe(el));
$lastCard.forEach((el)=>observer1.observe(el));
$sectionAcerca.forEach((el)=>observer2.observe(el));
$formu.forEach((el)=>observer3.observe(el));