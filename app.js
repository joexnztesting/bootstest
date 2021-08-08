window.addEventListener('DOMContentLoaded',(e)=>{  
  // INICIADORES CAROUSEL
  const $slide = document.querySelectorAll('.slide'),   
  $lastSlide = document.querySelector('.slides-container').lastElementChild,
  $firstSlide = document.querySelector('.slides-container').firstElementChild;
  let i = 0;    
  $slide[i].classList.add('centrado');
  $slide[i].style.opacity = '1';
    
  function btnLeft(){
    if($lastSlide.classList.contains('center-to-left')){
      $lastSlide.classList.remove('center-to-left');
      $lastSlide.style.opacity = '0';
    };
    if($slide[i-1]){
      $slide[i-1].classList.remove('center-to-left')
      $slide[i-1].style.opacity = '0';
    };
    if($slide[i].classList.contains('centrado')){        
      $slide[i].classList.remove('centrado');
      $slide[i].classList.remove('right-to-center');
      $slide[i].classList.remove('left-to-center'); 
      $slide[i].classList.add('center-to-left');        
      i++;
      if(i===$slide.length){
        i=0;
      };
      $slide[i].style.opacity = '1';
      $slide[i].classList.add('centrado');
      $slide[i].classList.add('right-to-center');  
      $slide[i].classList.remove('center-to-right');
    };          
  };

  function btnRight(){
    if($firstSlide.classList.contains('center-to-right')){
      $firstSlide.classList.remove('center-to-right');
      $firstSlide.style.opacity = '0';
    };
    if($slide[i+1]){
      $slide[i+1].classList.remove('center-to-right');
      $slide[i+1].style.opacity = '0';
    };
    if($slide[i].classList.contains('centrado')){        
      $slide[i].classList.remove('centrado');
      $slide[i].classList.remove('left-to-center');
      $slide[i].classList.remove('right-to-center');
      $slide[i].classList.add('center-to-right');
      if(i===0){
        i=$slide.length;
      };
      i--;        
      $slide[i].style.opacity = '1';
      $slide[i].classList.add('centrado');
      $slide[i].classList.add('left-to-center');
      $slide[i].classList.remove('center-to-left');
    };       
  };// FIN INICIADORES CAROUSEL  
  //********************************************************************** 
  document.addEventListener('click', e=>{  
    // CAROUSEL
    if(e.target.matches('.btn-carousel-l')){      
      e.preventDefault();      
      btnLeft()
    }
    if(e.target.matches('.btn-carousel-r')){      
      e.preventDefault(); 
      btnRight()
    }// FIN CAROUSEL  
  });      
});