
document.addEventListener('DOMContentLoaded',(e)=>{
  // INICIADORES NAV
  $panelFondo = document.querySelector('.panel-fondo');
  $navPanel = document.querySelector('.panel5');
  $btnHamb = document.querySelector('.btn-hamb5');
  $navRowItem = document.querySelectorAll('.nav-row-item5 a');
  // FIN INICIADORES NAV

  // INICIADORES CAROUSEL
  $slide = document.querySelectorAll('.slideB');   
  let i = 0;
  let ii = $slide.length-1  
  $slide.forEach((slid)=>{
    slid.style.opacity = '0'
    slid.style.visibility = 'hidden'
  })  
  $slide[i].classList.add('centrado')
  $slide[i].style.opacity = '1'
  $slide[i].style.visibility = 'visible'  
  if($slide[i].classList.contains('centrado')){   
    $slide[ii].style.transform = `translateX(-${$slide.length}00%)`;
    $slide[ii].classList.add('on-left');
  }
    
  function btnLeft(){
    if($slide[i].classList.contains('centrado')){ 
      $slide[i].classList.remove('centrado');
      $slide[i].style.opacity = '0'
      $slide[i].style.visibility = 'hidden'
      $slide[i].style.transform = `translateX(-${i+1}00%)`;
      $slide[i].classList.add('on-left');
      i++;      
      if(i===$slide.length){
        i=0
      };
      ii++
      if(ii===$slide.length){
        ii=0
      };
      $slide[i].style.opacity = '1';
      $slide[i].classList.add('centrado');
      $slide[i].style.opacity = '1'
      $slide[i].style.visibility = 'visible'
      $slide[i].style.transform = `translateX(-${i}00%)`;
      if(i<$slide.length-1){
        $slide[i+1].style.transform = `translateX(-${i}00%)`;
      };      
      if(i===$slide.length-2){
        $slide[0].style.transform = `translateX(100%)`;
      };
    };
  }

  function btnRight(){
    if($slide[ii].classList.contains('on-left')){
      
      $slide[ii].classList.remove('on-left');
      $slide[ii].classList.add('centrado');
      $slide[ii].style.opacity = '1'
      $slide[ii].style.visibility = 'visible'     
      $slide[ii].style.transform = `translateX(-${ii}00%)`;
      ii--      
      
      if(i>0){
        $slide[i].classList.remove('centrado');
        $slide[i].style.transform = `translateX(-${i-1}00%)`; 
        $slide[i].style.opacity = '0'
        $slide[i].style.visibility = 'hidden'
      }
      if(i===0){
        $slide[i].classList.remove('centrado');
        $slide[i].style.transform = `translateX(${i+1}00%)`;
        $slide[i].style.opacity = '0'
        $slide[i].style.visibility = 'hidden'
        i=$slide.length
      }
      i-- 
      
      if(ii<0){
        ii=$slide.length-1
      }
      $slide[ii].style.transform = `translateX(-${ii+1}00%)`;
      $slide[ii].classList.add('on-left');       
    }
  }
  // FIN INICIADORES CAROUSEL
  

  // **********************************************************
  
  document.addEventListener('click', e=>{
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

    // CAROUSEL
    if(e.target.matches('.btn-carousel-l')){      
      e.preventDefault();      
      btnLeft()
    }
    if(e.target.matches('.btn-carousel-r')){      
      e.preventDefault(); 
      btnRight()
    }
    // FIN CAROUSEL
  })

  // **********************************************************

})