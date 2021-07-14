
const $btn = document.querySelector('.btn-prueba');

const acd = function(){
  alert('hi')
}

if(window.PointerEvent){
  $btn.addEventListener('pointerdown', acd, true)  
}else{
  $btn.addEventListener('touchstart', acd, true)  
}

