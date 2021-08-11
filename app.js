
window.addEventListener('DOMContentLoaded',(e)=>{  
  
  const d=document, n=navigator, ua=n.userAgent,
  // Nav
  $panelFondo = d.querySelector('.panel-fondo'),
  $navPanel = d.querySelector('.panel'),
  $btnHamb = d.querySelector('.btn-hamb'),
  $navRowItem = d.querySelectorAll('.nav-row-item a'),
  // Cards
  $btnsCard = document.querySelectorAll('.btn-card'),
  $cardContent = [], 
  infoJson = './img/cards/info/info-cards.json', // URL
  $cards = document.querySelector('.info-cards'), // conteiner gral
  $template = document.getElementById('info-card-template').content, 
  $fragment = document.createDocumentFragment(),
  // Carousel
  $slidesContainer = d.querySelector('.slides-container'),
  $slide = d.querySelectorAll('.slide');

  
  ////////////////////////////////////////////////////////////////////////////

  const userDeviceInfo = ()=>{
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
  
  // Swipe Left / Right
  let initialX = null; 
  const startTouch = (e)=>{
    initialX = e.touches[0].clientX;
  }; 
  const moveTouch = (e)=>{
    if (initialX === null) {
      return;
    };
    let currentX = e.touches[0].clientX; 
    let diffX = initialX - currentX; 
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
  

  const navPanelShow = ()=>{
    $panelFondo.classList.toggle('fondo-active');
    $navPanel.classList.toggle('panel-active');
    $btnHamb.classList.toggle('isactive');
    $navRowItem.forEach((itm)=>{
      itm.classList.toggle('item')
    });
  }

  ////////////////////////////////////////////////////////////////////////////
  
  // CARDS ******
  
  async function loadCards(url){
    try{
      let res = await fetch(url),
      json = await res.json()
      for(let i=0; i<json.length; i++){         
        $cardContent.push({
          img :`${json[i].img}`, 
          h1 : `${json[i].h1}`, 
          description : `${json[i].description}`,
          modoDeUso : `${json[i].modoDeUso}`,
          composition : `${json[i].composition}`,
          infoAnexa : `${json[i].infoAnexa}`
        }); 
      }        
    }catch(err){
      console.log(err);
    }
  }
  loadCards(infoJson)
  
  // ***********************************************
  
  const btn_i = (value, index, array)=>{
    i=index;
    $btnsCard[i].setAttribute('index', i);
  };  
  $btnsCard.forEach(btn_i);  
  
  // ***********************************************
  
  document.addEventListener('click', e=>{
    if(e.target.matches('.btn-card')){
      const i = e.target.getAttribute('index'); 
      $template.querySelector('img').setAttribute('src', $cardContent[i].img);
      $template.querySelector('.info-card-h1').textContent = $cardContent[i].h1;
      $template.querySelector('.description').textContent = $cardContent[i].description;
      $template.querySelector('.modo-d-uso').textContent = $cardContent[i].modoDeUso;
      $template.querySelector('.composition').textContent = $cardContent[i].composition;
      $template.querySelector('.info-anexa').textContent = $cardContent[i].infoAnexa;
      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone); 
      $cards.appendChild($fragment); 
    }
    if(e.target.matches('.xclose')||e.target.matches('.info-card-fondo')){
      $cards.removeChild($cards.lastElementChild);
    }
  });   

  ////////////////////////////////////////////////////////////////////////////

  let i_L = $slide.length-1, i_C = 0, i_R = 1;  
  
  $slide[i_C].style.opacity = '1';  
  $slide[i_L].classList.add('center-to-left');
  $slide[i_L].style.opacity = '1';  
  $slide[i_R].classList.add('center-to-right');
  $slide[i_R].style.opacity = '1';


  const btnLeft = ()=>{
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
  
  const btnRight = ()=>{    
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
  
  const btnActive = (btn)=>{
    btn.classList.add('btn-crsl-on');
    setTimeout(() => {
      btn.classList.remove('btn-crsl-on');
    }, 200)
  };

  ////////////////////////////////////////////////////////////////////////////

  // LLAMADORES
  
  $slidesContainer.addEventListener("touchstart", startTouch, false);
  $slidesContainer.addEventListener("touchmove", moveTouch, false);

  if(isMobile.android() || isBrowser.any()){
    d.addEventListener('click', (e)=>{
      if(e.target.matches('.btn-hamb') || e.target.matches('.btn-hamb *') || e.target.matches('.item') || e.target.matches('.panel-fondo')){
        navPanelShow();
      };
      if(e.target.matches('.btn-carousel-l')){
        btnLeft();
        btnActive(e.target);
      };
      if(e.target.matches('.btn-carousel-r')){
        btnRight();
        btnActive(e.target);
      };
    });    
    // $slidesContainer.addEventListener("touchstart", startTouch, false);
    // $slidesContainer.addEventListener("touchmove", moveTouch, false);
  };
  if(isMobile.ios()){
    d.addEventListener('touchstart', (e)=>{
      if(e.target.matches('.btn-hamb') || e.target.matches('.btn-hamb *') || e.target.matches('.item') || e.target.matches('.panel-fondo')){
        navPanelShow();
      };
      if(e.target.matches('.btn-carousel-l')){
        btnLeft();
        btnActive(e.target);
      };
      if(e.target.matches('.btn-carousel-r')){
        btnRight();
        btnActive(e.target);
      };
    }, true);    
  };
  
  ////////////////////////////////////////////////////////////////////////////
  
  e.preventDefault();        
});

