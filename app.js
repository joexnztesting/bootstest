

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
  
// *********************************************************************
d=document, n=navigator, ua=n.userAgent;

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


document.addEventListener('DOMContentLoaded',(e)=>{  

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
        toLeft()  
      }
      if (diffX < 0) {
        toRight()
      }
    } 
    initialX = null;
  };// FINSwipe Left / Right  




  if(isMobile.android() || isBrowser.any()){
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
    $contenedor.addEventListener("touchstart", startTouch, false);
    $contenedor.addEventListener("touchmove", moveTouch, false);
  }

  if(isMobile.ios()){
    document.addEventListener('touchstart', (e)=>{
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
    }, true);
    
    $contenedor.addEventListener("touchstart", startTouch, false);
    $contenedor.addEventListener("touchmove", moveTouch, false);
  }
// }  
// userDeviceInfo()


// *********************************************************************

  e.preventDefault();
})









