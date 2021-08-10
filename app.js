
window.addEventListener('DOMContentLoaded',(e)=>{  
  
  const d=document, n=navigator, ua=n.userAgent,
  $slidesContainer = d.querySelector('.slides-container'),
  $slide = d.querySelectorAll('.slide'),
  $btnL = d.querySelector('.btn-carousel-l'),
  $btnR = d.querySelector('.btn-carousel-r'); 

  
  ////////////////////////////////////////////////////////////////////////////

  function userDeviceInfo(){
    isMobile = {
        android:()=>ua.match(/android/i),
            ios:()=>ua.match(/iphone|ipad|ipod/i)
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

  ////////////////////////////////////////////////////////////////////////////

  let i_L = $slide.length-1, i_C = 0, i_R = 1;  
  
  $slide[i_C].style.opacity = '1';
  
  $slide[i_L].classList.add('center-to-left');
  $slide[i_L].style.opacity = '1';
  
  $slide[i_R].classList.add('center-to-right');
  $slide[i_R].style.opacity = '1';

  ////////////////////////////////////////////////////////////////////////////

  function btnLeft(){
    $slide.forEach(slid=>{
      if(slid.classList.contains('to-left-2')){
        slid.classList.remove('to-left-2');
        slid.style.opacity = '0';
      };      
      if(slid.classList.contains('to-right-2')){
        slid.classList.remove('to-right-2');
      };      
    });
    //----------------------------------------------
    $slide[i_R].classList.remove('center-to-right');
    $slide[i_R].classList.remove('right-2-to-right');
    $slide[i_R].classList.add('right-to-center');    
    if(i_R===$slide.length-1){
      i_R=-1;
    };    
    i_R++;    
    $slide[i_R].classList.add('right-2-to-right');
    $slide[i_R].style.opacity = '1';
    //----------------------------------------------
    $slide[i_C].classList.remove('left-to-center');
    $slide[i_C].classList.remove('right-to-center');
    $slide[i_C].classList.add('center-to-left');    
    if(i_C===$slide.length-1){
      i_C=-1;
    };   
    i_C++;
    //----------------------------------------------
    $slide[i_L].classList.remove('center-to-left');
    $slide[i_L].classList.remove('left-2-to-left');
    $slide[i_L].classList.add('to-left-2');    
    if(i_L===$slide.length-1){
      i_L=-1;
    };
    i_L++;
    //----------------------------------------------
  }; 

  //--------------------------------------------------------------------------
  
  function btnRight(){    
    $slide.forEach(slid=>{
      if(slid.classList.contains('to-right-2')){
        slid.classList.remove('to-right-2');
        slid.style.opacity = '0';
      };
      if(slid.classList.contains('to-left-2')){
        slid.classList.remove('to-left-2');
      };      
    });
    //----------------------------------------------
    $slide[i_L].classList.remove('left-2-to-left');
    $slide[i_L].classList.remove('center-to-left');
    $slide[i_L].classList.add('left-to-center');    
    if(i_L===0){
      i_L=$slide.length;
    };
    i_L--;    
    $slide[i_L].classList.add('left-2-to-left');
    $slide[i_L].style.opacity = '1';
    //----------------------------------------------
    $slide[i_C].classList.remove('left-to-center');
    $slide[i_C].classList.remove('right-to-center');
    $slide[i_C].classList.add('center-to-right');
    if(i_C===0){
      i_C=$slide.length;
    };    
    i_C--;
    //----------------------------------------------
    $slide[i_R].classList.remove('center-to-right');
    $slide[i_R].classList.remove('right-2-to-right');
    $slide[i_R].classList.add('to-right-2');    
    if(i_R===0){
      i_R=$slide.length;
    };   
    i_R--;
    //----------------------------------------------
  };
  
  ////////////////////////////////////////////////////////////////////////////
  
  // Swipe Left / Right
  var initialX = null; 
  function startTouch(e) {
    initialX = e.touches[0].clientX;
  }; 
  function moveTouch(e) {
    if (initialX === null) {
      return;
    };
    var currentX = e.touches[0].clientX; 
    var diffX = initialX - currentX; 
    if (Math.abs(diffX)) {
      if (diffX > 0) {
        btnLeft()  
      };
      if (diffX < 0) {
        btnRight()
      };
    };
    initialX = null;
  };
  
  ////////////////////////////////////////////////////////////////////////////
  
  if(isMobile.android() || isBrowser.any()){
    d.addEventListener('click', (e)=>{
      if(e.target.matches('.btn-carousel-l')){
        btnLeft();
        e.target.classList.add('btn-crsl-on');
        setTimeout(() => {
          e.target.classList.remove('btn-crsl-on');
        }, 500)
      };
      if(e.target.matches('.btn-carousel-r')){
        btnRight();
        e.target.classList.add('btn-crsl-on');
        setTimeout(() => {
          e.target.classList.remove('btn-crsl-on');
        }, 500)
      };
    });    
    $slidesContainer.addEventListener("touchstart", startTouch, false);
    $slidesContainer.addEventListener("touchmove", moveTouch, false);
  };
  if(isMobile.ios()){
    d.addEventListener('touchstart', (e)=>{
      if(e.target.matches('.btn-carousel-l')){
        btnLeft();
      };
      if(e.target.matches('.btn-carousel-r')){
        btnRight();
      };
    }, true);    
    $slidesContainer.addEventListener("touchstart", startTouch, false);
    $slidesContainer.addEventListener("touchmove", moveTouch, false);
  };

  ////////////////////////////////////////////////////////////////////////////
  
  e.preventDefault();        
});