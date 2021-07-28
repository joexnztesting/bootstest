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