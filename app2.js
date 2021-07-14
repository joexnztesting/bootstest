
const $btn = document.querySelector('.btn-prueba');

const acd = function(){
  alert('hi')
}
const ace = function(){
  alert('hola')
}
const acf = function(){
  alert('khe')
}
const acg = function(){
  alert('hace')
}

if(window.PointerEvent){
  $btn.addEventListener('pointerdown', acd, true)  
}else{
  $btn.addEventListener('touchstart', acd, true)  
  $btn.addEventListener('touchmove', ace, true)  
  $btn.addEventListener('touchend', acf, true)  
  $btn.addEventListener('touchcancel', acg, true)  
}

