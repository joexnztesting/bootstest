

/*
// **************************

function reportWindowSize() {
  console.log('Hight: ' + window.innerHeight);
  console.log('Width: ' + window.innerWidth);
}

window.onresize = reportWindowSize;

// **************************

$slideImg = document.querySelectorAll('.slideB img')[0];
console.log($slideImg);
$style = window.getComputedStyle($slideImg);
$width = $style.getPropertyValue('width');
console.log($width);

for(i=0; i<$slide.length; i++){     
  //$style = window.getComputedStyle(slid);
  //$order = $style.getPropertyValue('order');
  //console.log($order);    
  $slide[i].style.setProperty('order', `${i}`, 'important');    
  $last.style.setProperty('order', `${-1}`, 'important');   
  console.log($slide[i]);
}

// **************************
*/



document.addEventListener('DOMContentLoaded',(e)=>{

  // INICIADORES NAV
  $panelFondo = document.querySelector('.panel-fondo');
  $navPanel = document.querySelector('.panel');
  $btnHamb = document.querySelector('.btn-hamb');
  $navRowItem = document.querySelectorAll('.nav-row-item a');
  navShowOnOff = ()=>{
    $panelFondo.classList.toggle('fondo-active');
    $navPanel.classList.toggle('panel-active');
    $btnHamb.classList.toggle('isactive');
    $navRowItem.forEach((itm)=>{
      itm.classList.toggle('item')
    });
  }
  // FIN INICIADORES NAV

  // INICIADORES CAROUSEL
  $contenedor = document.querySelector(".slides-container");
  $btnL = document.querySelector(".btn-carousel-l");
  $btnR = document.querySelector(".btn-carousel-r");  
  let margin=-100;
  let max=margin*2;


  toLeft = ()=>{
    let id= setInterval(()=>{
      margin--;
      $contenedor.style.marginLeft=`${margin}%`;
      if(margin<=max){
        clearInterval(id);
        let hijo=$contenedor.firstElementChild;
        let clon=hijo.cloneNode(true);
        $contenedor.appendChild(clon);
        $contenedor.removeChild(hijo);
        margin=-100;
        $contenedor.style.marginLeft=`${margin}%`;
      }
    },3)
  };

  toRight = ()=>{
    let id= setInterval(()=>{
      margin++;
      $contenedor.style.marginLeft=`${margin}%`;
      if(margin>=0){
        clearInterval(id);
        let hijo=$contenedor.lastElementChild;
        let clon=hijo.cloneNode(true);
        $contenedor.insertBefore(clon,$contenedor.firstElementChild);
        $contenedor.removeChild(hijo);
        margin=-100;
        $contenedor.style.marginLeft=`${margin}%`;
      }
    },3)
  }// FIN INICIADORES CAROUSEL


  // ***********************************

  // LLAMADORES

  document.addEventListener('click', (e)=>{ 
    // nav
    if(e.target.matches('.btn-hamb') || e.target.matches('.btn-hamb *') || e.target.matches('.item') || e.target.matches('.panel-fondo')){
      navShowOnOff()
    }// fin nav    
    
    // carousel
    if(e.target.matches('.btn-carousel-l')){
      toLeft()
    }
    if(e.target.matches('.btn-carousel-r')){
      toRight()
    }// fin carousel
  });


  document.addEventListener('touchstart', (e)=>{
    // nav
    //if(e.target.matches('.btn-hamb') || e.target.matches('.btn-hamb *') || e.target.matches//('.item') || e.target.matches('.panel-fondo')){
    //  navShowOnOff()
    //}// fin nav

    // carousel
    //if(e.target.matches('.btn-carousel-l')){
    //  toLeft()
    //}
    //if(e.target.matches('.btn-carousel-r')){
    //  toRight()
    //}// fin carousel

  }, true);


  e.preventDefault();
})

// ***************************************





