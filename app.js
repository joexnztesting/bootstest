document.addEventListener('DOMContentLoaded',(e)=>{

  $panelFondo = document.querySelector('.panel-fondo');
  $navPanel = document.querySelector('.panel5');
  $btnHamb = document.querySelector('.btn-hamb5');
  $navRowItem = document.querySelectorAll('.nav-row-item5 a');

  $caja = document.querySelector('.sct-0');


  
  document.addEventListener('click', (e)=>{
    if(e.target.matches('.item-1')){      
      $caja.classList.toggle('azul')
      setTimeout(function(){
        $caja.classList.toggle('azul')
      },200);
    }
  });

  document.addEventListener('touchstart', (e)=>{
    if(e.target.matches('.item-2')){
      $caja.classList.toggle('verde')
      setTimeout(function(){
        $caja.classList.toggle('verde')
      },200);
    }

      // NAV
  if(e.target.matches('.btn-hamb5') || e.target.matches('.btn-hamb5 *') || e.target.matches('.item5') || e.target.matches('.panel-fondo')){
    $panelFondo.classList.toggle('fondo-active');
    $navPanel.classList.toggle('panel-active5');
    $btnHamb.classList.toggle('isactive5');
    $navRowItem.forEach((itm)=>{
      itm.classList.toggle('item5')
    });
  }
  // FIN NAV

  }, true);

  document.addEventListener('touchstart', (e)=>{
    if(e.target.matches('.item-3')){
      $caja.classList.toggle('rojo')
      setTimeout(function(){
        $caja.classList.toggle('rojo')
      },200);
    }
  }, false);
  
  if(/iP(hone|ad)/.test(window.navigator.userAgent)) {
    var $naranja = document.querySelector('.item-6');
    var emptyFunction = function() {
      $caja.classList.toggle('naranja')
      setTimeout(function(){
        $caja.classList.toggle('naranja')
      },200);
    };
    $naranja.addEventListener('touchstart', emptyFunction, false);
  };

  e.preventDefault();
})


var $celeste = document.querySelector('.item-4');
var $amarillo = document.querySelector('.item-5');


window.onload = function() {
  if(/iP(hone|ad)/.test(window.navigator.userAgent)) {
    $celeste.addEventListener('touchstart', function() {
      $caja.classList.toggle('celeste')
      setTimeout(function(){
        $caja.classList.toggle('celeste')
      },200);
    }, false);
  }
};



window.onload = function() {
  if(/iP(hone|ad)/.test(window.navigator.userAgent)) {
    var emptyFunction = function() {
      $caja.classList.toggle('amarillo')
      setTimeout(function(){
        $caja.classList.toggle('amarillo')
      },200);
    };
    $amarillo.addEventListener('touchstart', emptyFunction, false);
  }
};


window.addEventListener('DOMContentLoaded',(e)=>{

  // INICIADORES CAROUSEL
  $carousel = document.querySelector('.carousel-slides');   
  $slide = document.querySelectorAll('.slideB');

  //console.log($carousel.firstElementChild);
  //console.log($carousel.lastElementChild); 
  //console.log($carousel.firstElementChild.nextElementSibling);
  //console.log($carousel.lastElementChild.previousElementSibling);

  $slide.forEach((slid)=>{
    slid.classList.toggle('pos-absolute')
  }); 
  
  let i = 0;
  
  $slidePrev = $slide[i].previousElementSibling;
  $slideNext = $slide[i].nextElementSibling;
  
  
  
  // $carousel.lastElementChild.style.margin = `0 0 0 -${i+1}00%`;
  $carousel.lastElementChild.classList.toggle('pos-absolute');
  $carousel.lastElementChild.classList.toggle('order-0');

  $carousel.firstElementChild.classList.toggle('pos-absolute');
  $carousel.firstElementChild.classList.toggle('order-1');

  $carousel.firstElementChild.nextElementSibling.classList.toggle('pos-absolute');
  $carousel.firstElementChild.nextElementSibling.classList.toggle('order-2');

  // $carousel.firstElementChild.nextElementSibling.style.margin = `0 0 0 -${i+1}00%`;
  
  // $slide.forEach((slid)=>{
  //   slid.style.opacity = '0'
  //   slid.style.visibility = 'hidden'
  // })  
  //$slide[i].classList.add('centrado')
  //$slide[i].style.opacity = '1'
  //$slide[i].style.visibility = 'visible'  
  // if($slide[i].classList.contains('centrado')){   
  //   $slide[ii].style.transform = `translateX(-${$slide.length}00%)`;
  //   $slide[ii].classList.add('on-left');
  // }
    
  function btnLeft(){
    
    $slide[i].style.margin = `0 0 0 -${i+1}00%`;

  };

  function btnRight(){
  };

  

// **********************************************************
  
  document.addEventListener('click', e=>{

    if(e.target.matches('.btn-carousel-l')){      
      e.preventDefault();      
      btnLeft();
    };
    if(e.target.matches('.btn-carousel-r')){      
      e.preventDefault(); 
      btnRight();
    };
  });
  
});
// FIN CAROUSEL




