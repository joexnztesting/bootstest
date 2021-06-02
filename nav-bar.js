const hmbBtn = document.querySelector('.hamburger');
const panel = document.querySelector('.panel');
const panelMenu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-item');  
const items = document.querySelector('.items');
     

function menuOpen(e){
  hmbBtn.classList.toggle('isactive');      
  panel.classList.remove('panel-not-active'); 
  panel.classList.add('panel-active');   
  panelMenu.classList.remove('menu-not-actv');      
  panelMenu.classList.add('menu-actv');
  items.classList.add('menu-items-active');
};
function menuClose(e){
  if(hmbBtn.classList.contains('isactive')){
    hmbBtn.classList.toggle('isactive');
    panel.classList.replace('panel-active', 'panel-not-active');
    panelMenu.classList.replace('menu-actv', 'menu-not-actv');
    items.classList.remove('menu-items-active');
  }
};

hmbBtn.addEventListener('click', function(e){
  if(!hmbBtn.classList.contains('isactive')){
    menuOpen()
  }else{
    menuClose()
  }
});
panel.addEventListener('click', menuClose);
menuItem.forEach(elem=>{
  elem.addEventListener('click', menuClose)
});