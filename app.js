
window.addEventListener('DOMContentLoaded',(e)=>{  
  
  // INICIADORES CAROUSEL
  const d=document, n=navigator, ua=n.userAgent,
  $slidesContainer = d.querySelector('.slides-container'),
  $slide = d.querySelectorAll('.slide'),   
  $lastSlide = d.querySelector('.slides-container').lastElementChild,
  $firstSlide = d.querySelector('.slides-container').firstElementChild;
  
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
  }

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
  }


  //********************************************************************** 
  // document.addEventListener('click', e=>{  
    //   // CAROUSEL
    //   if(e.target.matches('.btn-carousel-l')){      
      //     e.preventDefault();      
      //     btnLeft()
      //   }
      //   if(e.target.matches('.btn-carousel-r')){      
        //     e.preventDefault(); 
        //     btnRight()
        //   }// FIN CAROUSEL  
        // });   
  e.preventDefault();        
});