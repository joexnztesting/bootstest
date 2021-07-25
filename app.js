

/*

function reportWindowSize() {
  console.log('Hight: ' + window.innerHeight);
  console.log('Width: ' + window.innerWidth);
}

window.onresize = reportWindowSize;

$slideImg = document.querySelectorAll('.slideB img')[0];
console.log($slideImg);
$style = window.getComputedStyle($slideImg);
$width = $style.getPropertyValue('width');
console.log($width);

*/



document.addEventListener('DOMContentLoaded',(e)=>{

  $panelFondo = document.querySelector('.panel-fondo');
  $navPanel = document.querySelector('.panel');
  $btnHamb = document.querySelector('.btn-hamb');
  $navRowItem = document.querySelectorAll('.nav-row-item a');

  $caja = document.querySelector('.sct-0');


  
  document.addEventListener('click', (e)=>{    
    // NAV
    if(e.target.matches('.btn-hamb') || e.target.matches('.btn-hamb *') || e.target.matches('.item') || e.target.matches('.panel-fondo')){
      $panelFondo.classList.toggle('fondo-active');
      $navPanel.classList.toggle('panel-active');
      $btnHamb.classList.toggle('isactive');
      $navRowItem.forEach((itm)=>{
        itm.classList.toggle('item')
      });
    }
    // FIN NAV
  });

  document.addEventListener('touchstart', (e)=>{
    // NAV
    if(e.target.matches('.btn-hamb') || e.target.matches('.btn-hamb *') || e.target.matches('.item') || e.target.matches('.panel-fondo')){
      $panelFondo.classList.toggle('fondo-active');
      $navPanel.classList.toggle('panel-active');
      $btnHamb.classList.toggle('isactive');
      $navRowItem.forEach((itm)=>{
        itm.classList.toggle('item')
      });
    }
    // FIN NAV  
  }, true);

  e.preventDefault();
})





window.addEventListener('DOMContentLoaded',(e)=>{

  //console.log($carousel.firstElementChild);
  //console.log($carousel.lastElementChild); 
  //console.log($carousel.firstElementChild.nextElementSibling);
  //console.log($carousel.lastElementChild.previousElementSibling);

  // INICIADORES CAROUSEL
  $carousel = document.querySelector('.carousel-slides');   
  $slide = document.querySelectorAll('.slideB');
  


  $slide.forEach((slid)=>{
    slid.classList.toggle('pos-absolute')
    slid.classList.toggle('visib-0')
    slid.classList.toggle('opac-0')
  }); 
  
  let i = 0;
  
  $slidePrev = $slide[i].previousElementSibling;
  $slideNext = $slide[i].nextElementSibling;  
  
  let vh = 32
  
  $carousel.lastElementChild.style.margin = `0 0 0 -${vh*3}vh`;
  $carousel.lastElementChild.classList.toggle('pos-absolute');
  $carousel.lastElementChild.classList.toggle('visib-0')
  $carousel.lastElementChild.classList.toggle('opac-0')
  // $carousel.lastElementChild.classList.toggle('order-0');
  
  $slide[i].style.margin = `0 0 0 -${vh}vh`;
  $slide[i].classList.toggle('pos-absolute');
  $slide[i].classList.toggle('visib-0')
  $slide[i].classList.toggle('opac-0')
  // $carousel.firstElementChild.classList.toggle('order-1');
  
  $slide[i].nextElementSibling.classList.toggle('pos-absolute');
  $slide[i].nextElementSibling.classList.toggle('visib-0')
  $slide[i].nextElementSibling.classList.toggle('opac-0')
  // $carousel.firstElementChild.nextElementSibling.classList.toggle('order-2');



  
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
    $carousel.lastElementChild.style.margin = `0 0 0 ${0}vh`;
    $slide[i].style.margin = `0 0 0 -${0}vh`;
    // $slide[i].nextElementSibling.classList.toggle('opac-0');
  };
  
  function btnRight(){
    $carousel.lastElementChild.style.margin = `0 0 0 ${0}vh`;
    $slide[i].style.margin = `0 0 0 ${vh}vh`;
    // $carousel.lastElementChild.classList.toggle('opac-0');
    $slide[i].nextElementSibling.style.margin = `0 0 0 -${vh*3}vh`;
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




