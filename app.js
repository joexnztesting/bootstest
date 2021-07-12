const $span1 = document.querySelectorAll('.bq-semillas');
const $span2 = document.querySelectorAll('.card:nth-child(5)');
const $span3 = document.querySelectorAll('.titu-acerca');
const $span4 = document.querySelectorAll('.row-icons');
const $span5 = document.querySelectorAll('.marco-plantas');
const $span6 = document.querySelectorAll('.btn-cont');
const $span7 = document.querySelectorAll('.contacto-envios');

const $tituProd = document.querySelector('.titu-prod');
const $tituHuerta = document.querySelector('.titu-huerta');
const $tituAcerca = document.querySelector('.titu-acerca');
const $tituVentas = document.querySelector('.titu-ventas');



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
const stickyOut3 = (entries)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    if($tituHuerta.classList.contains('separador')){
      $tituHuerta.classList.add('ocultar-titu')
      $tituHuerta.classList.remove('mostrar-titu')
    }    
  }
})
}
const stickyIn3 = (entries)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    if($tituHuerta.classList.contains('ocultar-titu')){
      $tituHuerta.classList.add('mostrar-titu')
      $tituHuerta.classList.remove('ocultar-titu')
    }    
  }
})
}
const stickyOut4 = (entries)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    if($tituVentas.classList.contains('separador')){
      $tituVentas.classList.add('ocultar-titu')
      $tituVentas.classList.remove('mostrar-titu')
    }    
  }
})
}
const stickyIn4 = (entries)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    if($tituVentas.classList.contains('ocultar-titu')){
      $tituVentas.classList.add('mostrar-titu')
      $tituVentas.classList.remove('ocultar-titu')
    }    
  }
})
}

const observer1 = new IntersectionObserver(stickyOut, {threshold:0.5});
const observer2 = new IntersectionObserver(stickyIn, {threshold:0.9});
const observer3 = new IntersectionObserver(stickyOut2, {threshold:0.5});
const observer4 = new IntersectionObserver(stickyIn2, {threshold:0.5});
const observer5 = new IntersectionObserver(stickyOut3, {threshold:0.1});
const observer6 = new IntersectionObserver(stickyIn3, {threshold:0.1});
const observer7 = new IntersectionObserver(stickyOut4, {threshold:0.1});
const observer8 = new IntersectionObserver(stickyIn4, {threshold:0.1});

$span4.forEach((el)=>observer1.observe(el));
$span5.forEach((el)=>observer2.observe(el));
$span1.forEach((el)=>observer3.observe(el));
$span2.forEach((el)=>observer4.observe(el));
$span3.forEach((el)=>observer5.observe(el));
$span1.forEach((el)=>observer6.observe(el));
$span6.forEach((el)=>observer7.observe(el));
$span7.forEach((el)=>observer8.observe(el));



/*
// SLIDER
window.addEventListener('DOMContentLoaded', (e)=>{

    const $nextBtn = document.querySelector('.slider-btns .next'),
        $prevBtn = document.querySelector('.slider-btns .prev'),
        $slides = document.querySelectorAll('.slider2-slide');

        let i = 0;

        document.addEventListener('click',(e)=>{
            if(e.target===$prevBtn){
                e.preventDefault()
                $slides[i].classList.remove('active')

                i--   

                if(i<0){
                    i = $slides.length - 1
                }
                $slides[i].classList.add('active')
            }
            if(e.target===$nextBtn){
                e.preventDefault()
                $slides[i].classList.remove('active')
                
                i++
                
                if(i>=$slides.length){
                    i = 0
                }
                $slides[i].classList.add('active')
            }
        })

})
// FIN SLIDER
*/

// DETALLE INFO CARDS
/*
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
*/