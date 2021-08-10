
window.addEventListener('DOMContentLoaded',(e)=>{  
  
  // INICIADORES CAROUSEL
  const d=document, n=navigator, ua=n.userAgent,
  $slidesContainer = d.querySelector('.slides-container'),
  $slide = d.querySelectorAll('.slide'),   
  $lastSlide = d.querySelector('.slides-container').lastElementChild,
  $firstSlide = d.querySelector('.slides-container').firstElementChild;
  
  // **************************************************

  function userDeviceInfo(){
    isMobile = {
        android:()=>ua.match(/android/i),
            ios:()=>ua.match(/iphone|ipad|ipod/i),
        windows:()=>ua.match(/windows phone/i)
    },
    isBrowser = {
        chrome:()=>ua.match(/chrome/i),
        safarai:()=>ua.match(/safarai/i),
        firefox:()=>ua.match(/firefox/i),
        opera:()=>ua.match(/opera|opera mini/i),
        ie:()=>ua.match(/msie|iemobile/i),
        edge:()=>ua.match(/edge/i),
        any:function(){
          return(
            this.ie()||
            this.edge()||
            this.chrome()||
            this.safarai()||
            this.firefox()||
            this.opera()
          );
        }
    };
  }  
  userDeviceInfo()
  
  // **************************************************
  
  let i = 0;  
  let ii = 0;  

  $slide[i].classList.add('centrado');
  $slide[i].style.opacity = '1';
  
  $lastSlide.classList.add('on-left');
  $lastSlide.classList.add('left-2-to-left');
  $lastSlide.style.opacity = '1';
  
  $slide[i].nextElementSibling.classList.add('on-right');
  $slide[i].nextElementSibling.classList.add('center-to-right');
  $slide[i].nextElementSibling.style.opacity = '1';

  // console.log(`centrado ${i} voy a centrar ${i+1}`); 
  console.log(i); 

  function btnLeft(){
    // if($lastSlide.classList.contains('center-to-left')){
    //   $lastSlide.classList.remove('center-to-left');
    //   $lastSlide.style.zIndex = '99';
    // };
    // if($slide[i-1]){
    //   $slide[i-1].classList.remove('center-to-left')
    //   $slide[i-1].style.zIndex = '99';
    // };
    // if($slide[i].classList.contains('centrado')){        
    //   $slide[i].classList.remove('centrado');
    //   $slide[i].classList.remove('right-to-center');
    //   $slide[i].classList.remove('left-to-center'); 
    //   $slide[i].classList.add('center-to-left');        
    //   i++;
    //   if(i===$slide.length){
    //     i=0;
    //   };
    //   $slide[i].style.zIndex = '100';
    //   $slide[i].classList.add('centrado');
    //   $slide[i].classList.add('right-to-center');  
    //   $slide[i].classList.remove('center-to-right');
    // }; 
    
    //******************************************** */

    // if(i===0){
    //   if($slide[0].classList.contains('centrado')){
    //     i=$slide.length-1;
    //   }
    //   if($slide[1].classList.contains('centrado')){
    //     i=$slide.length;
    //   }
    // }; 
    
    
    if(ii===$slide.length-1){
      ii=-1;
    };
    if(ii===0){
      if($slide[0].classList.contains('centrado')){
        ii++
      }
    };    

    console.log(`centrado ${ii}`);

    $slide.forEach(slid=>{
      if(slid.classList.contains('to-left-2')){
        slid.classList.remove('to-left-2');
        slid.style.zIndex = '99';
      };
      if(slid.classList.contains('on-left')){
        slid.classList.remove('on-left');
        slid.classList.remove('left-2-to-left');
        slid.classList.remove('center-to-left');
        slid.classList.add('to-left-2');
      };        
      if(slid.classList.contains('centrado')){
        slid.classList.remove('centrado');
        slid.classList.remove('right-to-center');
        slid.classList.remove('left-to-center');//*
        slid.classList.add('on-left');
        slid.classList.add('center-to-left');
      }; 
      if(slid.classList.contains('on-right')){
        slid.classList.remove('on-right');
        slid.classList.remove('right-2-to-right');
        slid.classList.remove('center-to-right');//*
        slid.classList.add('centrado');
        slid.classList.add('right-to-center');
        slid.style.zIndex = '100';  
      }; 
      //*     
      if(slid.classList.contains('to-right-2')){
        slid.classList.remove('to-right-2');
        slid.classList.add('right-2-to-right');
        slid.classList.add('on-right');
      };
      //*     
    }); 
    
    
    ii++;    
    
    $slide[ii].classList.add('on-right');
    $slide[ii].classList.add('right-2-to-right');
    $slide[ii].style.zIndex = '100';      
    
    console.log(`voy a centrar ${ii}`); 

  };


  
  function btnRight(){

    if(i===0){
      if($slide[0].classList.contains('centrado')){
        i=$slide.length-1;
      }
      if($slide[1].classList.contains('centrado')){
        i=$slide.length;
      }
    };  
    
    console.log(i);
    
    $slide.forEach(slid=>{
      if(slid.classList.contains('to-right-2')){
        slid.classList.remove('to-right-2');
        slid.style.zIndex = '99';
      };
      if(slid.classList.contains('on-right')){
        slid.classList.remove('on-right');
        slid.classList.remove('center-to-right');
        slid.classList.remove('right-2-to-right');//*
        slid.classList.add('to-right-2');
      };      
      if(slid.classList.contains('centrado')){
        slid.classList.remove('centrado');
        slid.classList.remove('left-to-center');
        slid.classList.remove('right-to-center');//*
        slid.classList.add('on-right');
        slid.classList.add('center-to-right');
      }; 
      if(slid.classList.contains('on-left')){
        slid.classList.remove('on-left');
        slid.classList.remove('left-2-to-left');
        slid.classList.remove('center-to-left');//*
        slid.classList.add('centrado');
        slid.classList.add('left-to-center');
      };   
      //*     
      if(slid.classList.contains('to-left-2')){
        slid.classList.remove('to-left-2');
        slid.classList.add('left-2-to-left');
        slid.classList.add('on-left');
      };
      //*
    }); 
    
    console.log(`R centrado ${i} voy a centrar ${i-1}`); 

    i--;
    $slide[i].classList.add('on-left');
    $slide[i].classList.add('left-2-to-left');
    $slide[i].style.zIndex = '100';    
    
  }; 
  
  // **************************************************
  
  // Swipe Left / Right
  var initialX = null; 
  function startTouch(e) {
    initialX = e.touches[0].clientX;
  }; 
  function moveTouch(e) {
    if (initialX === null) {
      return;
    } 
    var currentX = e.touches[0].clientX; 
    var diffX = initialX - currentX; 
    if (Math.abs(diffX)) {
      if (diffX > 0) {
        btnLeft()  
      }
      if (diffX < 0) {
        btnRight()
      }
    } 
    initialX = null;
  };// FINSwipe Left / Right 
  
  // **************************************************

  if(isMobile.android() || isBrowser.any()){
    d.addEventListener('click', (e)=>{
      if(e.target.matches('.btn-carousel-l')){
        btnLeft()
      }
      if(e.target.matches('.btn-carousel-r')){
        btnRight()
      }
    });    
    $slidesContainer.addEventListener("touchstart", startTouch, false);
    $slidesContainer.addEventListener("touchmove", moveTouch, false);
  };
  if(isMobile.ios()){
    d.addEventListener('touchstart', (e)=>{
      if(e.target.matches('.btn-carousel-l')){
        btnLeft()
      }
      if(e.target.matches('.btn-carousel-r')){
        btnRight()
      }
    }, true);    
    $slidesContainer.addEventListener("touchstart", startTouch, false);
    $slidesContainer.addEventListener("touchmove", moveTouch, false);
  };
  
  //********************************************************************** 

  e.preventDefault();        
});