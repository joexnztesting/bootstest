const hmbBtn = document.querySelector('.hamburger');
const panel = document.querySelector('.panel');
const panelMenu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-item');  
const navItem = document.querySelectorAll('.n-r-item');  
const items = document.querySelector('.items');
//const $bodyy = document.querySelector('.container-princ');
     

function menuOpen(e){
  hmbBtn.classList.toggle('isactive');      
  panel.classList.remove('panel-not-active'); 
  panel.classList.add('panel-active');   
  panelMenu.classList.remove('menu-not-actv');      
  panelMenu.classList.add('menu-actv');
  items.classList.add('menu-items-active');
  //$bodyy.classList.add('no-scroll');
};
function menuClose(e){
  if(hmbBtn.classList.contains('isactive')){
    hmbBtn.classList.toggle('isactive');
    panel.classList.replace('panel-active', 'panel-not-active');
    panelMenu.classList.replace('menu-actv', 'menu-not-actv');
    items.classList.remove('menu-items-active');
    //$bodyy.classList.remove('no-scroll');
  }
};


hmbBtn.addEventListener('touchstart', function(e){
  if(!hmbBtn.classList.contains('isactive')){
    menuOpen()
  }else{
    menuClose()
  }
},true);
panel.addEventListener('touchstart', menuClose,true);
menuItem.forEach(elem=>{
  elem.addEventListener('touchstart', menuClose,true)
});
navItem.forEach(elem=>{
  elem.addEventListener('touchstart', menuClose,true)
});

/*
hmbBtn.addEventListener('mousedown', function(e){
  if(!hmbBtn.classList.contains('isactive')){
    menuOpen()
  }else{
    menuClose()
  }
},true);
panel.addEventListener('mousedown', menuClose,true);
menuItem.forEach(elem=>{
  elem.addEventListener('mousedown', menuClose,true)
});
navItem.forEach(elem=>{
  elem.addEventListener('mousedown', menuClose,true)
});*/