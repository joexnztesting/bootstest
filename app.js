document.addEventListener('DOMContentLoaded',(e)=>{

  $cuadrado = document.querySelector('.caja');
  
  document.addEventListener('click', (e)=>{
    if(e.target.matches('.item-1')){      
      $cuadrado.classList.toggle('azul')
      setTimeout(function(){
        $cuadrado.classList.toggle('azul')
      },200);
    }
  });

  document.addEventListener('touchstart', (e)=>{
    if(e.target.matches('.item-2')){
      $cuadrado.classList.toggle('verde')
      setTimeout(function(){
        $cuadrado.classList.toggle('verde')
      },200);
    }
  }, true);

  document.addEventListener('touchstart', (e)=>{
    if(e.target.matches('.item-3')){
      $cuadrado.classList.toggle('rojo')
      setTimeout(function(){
        $cuadrado.classList.toggle('rojo')
      },200);
    }
  }, false);
  
  if(/iP(hone|ad)/.test(window.navigator.userAgent)) {
    var elements = document.querySelectorAll('.item');
    var emptyFunction = function() {
      $cuadrado.classList.toggle('naranja')
      setTimeout(function(){
        $cuadrado.classList.toggle('naranja')
      },200);
    };
    for(var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('touchstart', emptyFunction, false);
    }
  };

  e.preventDefault();
})

window.onload = function() {
  if(/iP(hone|ad)/.test(window.navigator.userAgent)) {
    document.body.addEventListener('touchstart', function() {
      $cuadrado.classList.toggle('celeste')
      setTimeout(function(){
        $cuadrado.classList.toggle('celeste')
      },200);
    }, false);
  }
};

window.onload = function() {
  if(/iP(hone|ad)/.test(window.navigator.userAgent)) {
    var elements = document.querySelectorAll('.item');
    var emptyFunction = function() {
      $cuadrado.classList.toggle('lima')
      setTimeout(function(){
        $cuadrado.classList.toggle('lima')
      },200);
    };
    for(var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('touchstart', emptyFunction, false);
    }
  }
};