
window.addEventListener('DOMContentLoaded',(e)=>{  
  
  const d=document, n=navigator, ua=n.userAgent,
  // Nav
  $panelFondo = d.querySelector('.panel-fondo'),
  $navPanel = d.querySelector('.panel'),
  $btnHamb = d.querySelector('.btn-hamb'),
  $navRowItem = d.querySelectorAll('.nav-row-item a'),
  // Cards
  $imgsCard = document.querySelectorAll('.card img'),
  $btnsCard = document.querySelectorAll('.btn-card'),
  infoJson = './img/cards/info/info-cards.json',
  $infoCardsArray = [], 
  $templateContainer = d.querySelector('.template-container'),
  $template = d.getElementById('info-card-template').content, 
  $fragment = d.createDocumentFragment(),
  // Carousel
  $slidesContainer = d.querySelector('.slides-cntr'),
  $slide = d.querySelectorAll('.slide'),
  $listaSemCont = d.querySelector('.lista-semll-cntr');

  
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

  // PARA TODOS LOS BTN ******

  const btnOn = (btn)=>{
    btn.classList.add('btn-on');
    setTimeout(() => {
      btn.classList.remove('btn-on');
    }, 200)
  }
  ////////////////////////////////////////////////////////////////////////////
  
  // PANEL NAV ******

  const navPanelShow = ()=>{
    $panelFondo.classList.toggle('fondo-active');
    $navPanel.classList.toggle('panel-active');
    $btnHamb.classList.toggle('isactive');
    $navRowItem.forEach((itm)=>{
      itm.classList.toggle('item')
    });
  }

  ////////////////////////////////////////////////////////////////////////////
  
    // TÁCTIL CARDS Swipe Left / Right
    let initialX = null;
    const startTouch = (e)=> initialX = e.touches[0].clientX;  
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

  // CARDS ******

  // ***********************************************
  // Poblar Array de cards-info

  async function loadCards(url){
    try{
      let res = await fetch(url),
      json = await res.json()
      for(let i=0; i<json.length; i++){         
        $infoCardsArray.push({
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
  // Asignar índice a img y btn de c/card
  
  const card_img_i = (value, index, array)=>{
    i=index;
    $imgsCard[i].setAttribute('index', i);
  };  
  $imgsCard.forEach(card_img_i);  

  const card_btn_i = (value, index, array)=>{
    i=index;
    $btnsCard[i].setAttribute('index', i);
  };  
  $btnsCard.forEach(card_btn_i);   

  // ***********************************************
  // mostrar info 

  const showCardInfo = (elem)=>{
    const i = elem.getAttribute('index'); 
    $template.querySelector('img').setAttribute('src', $infoCardsArray[i].img);
    $template.querySelector('.info-card-h1').textContent = $infoCardsArray[i].h1;
    $template.querySelector('.description').textContent = $infoCardsArray[i].description;
    $template.querySelector('.modo-d-uso').textContent = $infoCardsArray[i].modoDeUso;
    $template.querySelector('.composition').textContent = $infoCardsArray[i].composition;
    $template.querySelector('.info-anexa').textContent = $infoCardsArray[i].infoAnexa;
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone); 
    $templateContainer.appendChild($fragment); 
    d.body.style.overflow = "hidden";    
  }
  const hideCardInfo = ()=>{
    $templateContainer.removeChild($templateContainer.lastElementChild);
    d.body.style.overflow = "visible";
  }   

  ////////////////////////////////////////////////////////////////////////////

  // CAROUSEL ******

  let i_L=$slide.length-1, i_C=0, i_R=1;

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
    $slide[i_R].classList.remove('center-to-right', 'right-2-to-right');
    $slide[i_R].classList.add('right-to-center');    
    if(i_R===$slide.length-1){
      i_R=-1;
    };    
    i_R++;    
    $slide[i_R].classList.add('right-2-to-right');
    $slide[i_R].style.opacity = '1';
    //----------------------------------------------
    $slide[i_C].classList.remove('left-to-center', 'right-to-center');
    $slide[i_C].classList.add('center-to-left');    
    if(i_C===$slide.length-1){
      i_C=-1;
    };   
    i_C++;
    //----------------------------------------------
    $slide[i_L].classList.remove('center-to-left', 'left-2-to-left');
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
    $slide[i_L].classList.remove('center-to-left', 'left-2-to-left');
    $slide[i_L].classList.add('left-to-center');    
    if(i_L===0){
      i_L=$slide.length;
    };
    i_L--;    
    $slide[i_L].classList.add('left-2-to-left');
    $slide[i_L].style.opacity = '1';
    //----------------------------------------------
    $slide[i_C].classList.remove('left-to-center', 'right-to-center');
    $slide[i_C].classList.add('center-to-right');
    if(i_C===0){
      i_C=$slide.length;
    };    
    i_C--;
    //----------------------------------------------
    $slide[i_R].classList.remove('center-to-right', 'right-2-to-right');
    $slide[i_R].classList.add('to-right-2');    
    if(i_R===0){
      i_R=$slide.length;
    };   
    i_R--;
    //----------------------------------------------    
  };    

  ////////////////////////////////////////////////////////////////////////////

  // SEMILLAS LISTA ******

  const verListaSemll = (elm)=>{
    const btnSmll = elm.parentElement;
    btnOn(btnSmll);
    if($listaSemCont.classList.contains('cerrar-lista')){
      $listaSemCont.classList.remove('cerrar-lista');
      $listaSemCont.classList.add('list-cont-hidden');
    };
    if($listaSemCont.classList.contains('ver-lista')){
      $listaSemCont.classList.add('cerrar-lista');
      $listaSemCont.classList.remove('ver-lista');
      setTimeout(() => {
        elm.innerHTML = `Ver Lista</br>Completa`;
        btnSmll.style.top = '473px'
      }, 250);
      $slidesContainer.scrollIntoView(); 
    };    
    if($listaSemCont.classList.contains('list-cont-hidden')){
      $listaSemCont.classList.add('ver-lista');
      $listaSemCont.classList.remove('list-cont-hidden');
      setTimeout(() => {
        elm.innerHTML = `Cerrar Lista`;
        btnSmll.style.top = '484px'
      }, 250); 
      elm.scrollIntoView(); 
    };
  };
  
  ////////////////////////////////////////////////////////////////////////////
  
  // LLAMADORES 
  
  $slidesContainer.addEventListener("touchstart", startTouch, false); // **
  $slidesContainer.addEventListener("touchmove", moveTouch, false);  // **
  
  if(isMobile.android() || isBrowser.any()){
    d.addEventListener('click', (e)=>{
      // nav *****
      if(e.target.matches('.btn-hamb') || e.target.matches('.btn-hamb *') || e.target.matches('.item') || e.target.matches('.panel-fondo')){
        navPanelShow();      
      };
      // cards *****
      if(e.target.matches('.btn-card') || e.target.matches('.card img')){
        showCardInfo(e.target)
        if(e.target.classList.contains('btn-card')){
          btnOn(e.target.parentElement);
        }
      };
      if(e.target.matches('.xclose')||e.target.matches('.info-card-fondo')){
        hideCardInfo()
      };
      // carousel *****
      if(e.target.matches('.btn-crsl-l *')){
        btnLeft();
        btnOn(d.querySelector('.btn-crsl-l'));
      };
      if(e.target.matches('.btn-crsl-r *')){
        btnRight();
        btnOn(d.querySelector('.btn-crsl-r'));
      };
      // semillas lista *****
      if(e.target.matches('.btn-semll')){
        verListaSemll(e.target); // window.scrollTo(0, 100);    
      };
    });    
    // **
  };
  //**************************************************** */
  if(isMobile.ios()){
    d.addEventListener('touchstart', (e)=>{

    }, false);    
    // **
  };

  
  ////////////////////////////////////////////////////////////////////////////
  
  e.preventDefault();        
});

