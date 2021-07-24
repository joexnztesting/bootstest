document.addEventListener('DOMContentLoaded',(e)=>{

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