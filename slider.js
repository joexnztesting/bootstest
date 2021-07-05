// SLIDER  ***************************************************

window.addEventListener('DOMContentLoaded',(e)=>{ 

  const $selectLeft = document.querySelector('.select-left');
  const $selectRight = document.querySelector('.select-right');
  const $slide1 = document.querySelector('.slide:nth-child(1)');
  const $slide2 = document.querySelector('.slide:nth-child(2)');
  const $slide3 = document.querySelector('.slide:nth-child(3)');
  const $slide4 = document.querySelector('.slide:nth-child(4)');
  const $slide5 = document.querySelector('.slide:nth-child(5)');

  const leftTocenter = function(e){
    e.classList.add('opacity-in') 
    e.classList.add('left-to-center') 
    e.classList.remove('center-to-left') 
    e.classList.remove('right-to-center')
    e.classList.remove('center-to-right')
  }
  const centerToleft = function(e){
    e.classList.add('opacity-in')
    e.classList.add('center-to-left') 
    e.classList.remove('left-to-center')    
    e.classList.remove('right-to-center')    
    e.classList.remove('center-to-right')    
  }
  const rightTocenter = function(e){
    e.classList.add('opacity-in') 
    e.classList.add('right-to-center') 
    e.classList.remove('center-to-right')
    e.classList.remove('left-to-center')
    e.classList.remove('center-to-left')
  }
  const centerToright = function(e){
    e.classList.add('opacity-in')
    e.classList.add('center-to-right') 
    e.classList.remove('right-to-center')
    e.classList.remove('left-to-center')
    e.classList.remove('center-to-left')
  }

  const c1fl = function(e){  
    leftTocenter($slide1)  
    centerToright($slide2)
    $slide1.classList.add('centrado')
    $slide2.classList.remove('centrado')
  }
  const c5fl = function(e){
    leftTocenter($slide5)
    centerToright($slide1)
    $slide5.classList.add('centrado')
    $slide1.classList.remove('centrado')
  }
  const c4fl = function(e){
    leftTocenter($slide4)      
    centerToright($slide5)  
    $slide4.classList.add('centrado')
    $slide5.classList.remove('centrado')  
  }
  const c3fl = function(e){
    leftTocenter($slide3)     
    centerToright($slide4)   
    $slide3.classList.add('centrado')
    $slide4.classList.remove('centrado')  
  }
  const c2fl = function(e){
    leftTocenter($slide2)
    centerToright($slide3) 
    $slide2.classList.add('centrado')
    $slide3.classList.remove('centrado')    
  }
  
  const c1fr = function(e){
    rightTocenter($slide1)
    centerToleft($slide5)
    $slide1.classList.add('centrado')
    $slide5.classList.remove('centrado')
  }
  const c2fr = function(e){
    rightTocenter($slide2)
    centerToleft($slide1)
    $slide2.classList.add('centrado')
    $slide1.classList.remove('centrado')
  }
  const c3fr = function(e){
    rightTocenter($slide3)
    centerToleft($slide2)
    $slide3.classList.add('centrado')
    $slide2.classList.remove('centrado')
  }
  const c4fr = function(e){
    rightTocenter($slide4)
    centerToleft($slide3)
    $slide4.classList.add('centrado')
    $slide3.classList.remove('centrado')
  }
  const c5fr = function(e){
    rightTocenter($slide5)
    centerToleft($slide4)
    $slide5.classList.add('centrado')
    $slide4.classList.remove('centrado')
  }
  
  $selectRight.addEventListener('click',(e)=>{
    if($slide3.classList.contains('centrado')){      
      c2fl()
      $selectRight.classList.add('fk')
    } 
    if($slide4.classList.contains('centrado')){      
      c3fl()
    } 
    if($slide5.classList.contains('centrado')){      
      c4fl()
      $selectLeft.classList.remove('l0')
    }     
    if($slide1.classList.contains('centrado')){      
      c5fl()
      $selectLeft.classList.add('l0')
    }    
    if($slide2.classList.contains('centrado') && $selectRight.classList.contains('r0')){
      c1fl()
      $selectRight.classList.remove('r0')
    }
    if($selectRight.classList.contains('fk')){    
      $selectRight.classList.remove('fk')
      $selectRight.classList.add('r0')    
    }
  })

  $selectLeft.addEventListener('click',(e)=>{
    if($slide4.classList.contains('centrado')){
      c5fr()
      $selectLeft.classList.add('fk')
    }
    if($slide3.classList.contains('centrado')){
      c4fr()
    }
    if($slide2.classList.contains('centrado')){      
      c3fr()
      $selectRight.classList.remove('r0') 
    }
    if($slide1.classList.contains('centrado')){
      c2fr()
      $selectRight.classList.add('r0')   
    }    
    if($slide5.classList.contains('centrado') && $selectLeft.classList.contains('l0')){      
      c1fr() 
      $selectLeft.classList.remove('l0')
    }
    if($selectLeft.classList.contains('fk')){
      $selectLeft.classList.remove('fk')
      $selectLeft.classList.add('l0')
    }
  })

  c1fr()
  $selectRight.classList.add('r0')
  $selectLeft.classList.add('l0')
})

// FIN SLIDER  ***************************************************
