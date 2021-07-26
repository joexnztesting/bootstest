

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

// *********************************************************************
d=document, n=navigator, ua=n.userAgent;

function userDeviceInfo(id){
  const $id=d.getElementById(id),
  isMobile = {
      android:()=>ua.match(/android/i),
          ios:()=>ua.match(/iphone|ipad|ipod/i),
      windows:()=>ua.match(/windows phone/i),
      any:function(){
          return this.android()||this.ios()||this.windows();
      }
  },
  isDesktop = {
      linux:()=>ua.match(/linux/i),
      mac:()=>ua.match(/mac os/i),
      windows:()=>ua.match(/windows nt/i),
      any:function(){
        return this.linux()||this.mac()||this.windows();
      }
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

  $id.innerHTML=`
  <ul>
      <li>User agent: <b>${ua}</b></li>
      <li>Plataforma: <b>${isMobile.any()? isMobile.any():isDesktop.any()}</b></li>
      <li>Navegador: <b>${isBrowser.any()}</b></li>
  </ul>
  `

  if(isBrowser.chrome()){
    $id.innerHTML+=`<p>Este contenido es exclusivo Chrome</p>`
  }
  if(isBrowser.firefox()){
      $id.innerHTML+=`<p>Este contenido es exclusivo Firefox</p>`
    }
  if(isDesktop.linux()){
      $id.innerHTML+=`<p>Descarga nuestro Software para Linux</p>`
    }
  if(isDesktop.windows()){
      $id.innerHTML+=`<p>Descarga nuestro Software para Windows</p>`
    }

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
  }       
  //redireccionando
  //if(isMobile.android()){
  //    let option = confirm(`Estas desde Android, quieres arir el redireccionamiento?`)
  //    if(option)window.location.href='https://jonmircha.com'
  //}
}  
userDeviceInfo('user-device')

// *********************************************************************

  e.preventDefault();
})









