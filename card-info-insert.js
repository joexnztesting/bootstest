
const d = document,
$cardInfo = d.querySelector(".info-cards-container");
const $body = document.querySelector('.container-princ');

const getHTML = (options)=>{
  let {url, success, error} = options;
  
  const xhr = new XMLHttpRequest()
  
  xhr.addEventListener("readystatechange", e=>{
    if(xhr.readyState !== 4)return;
    
    if(xhr.status >= 200 && xhr.status < 300){
      let html = xhr.responseText;
      success(html)
    }else{
      let message = xhr.statusText || "Ocurrió un error";
      error(`Error: ${xhr.status}:${message}`)
    }
  });
  
  xhr.open("GET", url);
  
  xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
  
  xhr.send();
}
/*
d.addEventListener("DOMContentLoaded", e=>{
  getHTML({
    url:"assets/card_alacran_info.html",
    success:(html)=>$cardInfo.innerHTML = html,
    error:(err)=> $cardInfo.innerHTML = `<h1>${err}</h1>`
  })
})
*/
d.addEventListener("click", e=>{
  if(e.target.matches(".mas-info")){
    e.preventDefault();
    getHTML({
      url: e.target.href,
      success:(html)=>$cardInfo.innerHTML = html,
      error:(err)=> $cardInfo.innerHTML = `<h1>${err}</h1>`
    })
    $body.classList.add('no-scroll');
  }
})
d.addEventListener("click", e=>{
  if(e.target.matches(".xclose")){
    //e.preventDefault();
    window.location.reload()    
    $body.classList.remove('no-scroll');
  }
})
