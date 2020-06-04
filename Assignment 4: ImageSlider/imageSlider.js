var slider_content =  document.getElementById("box");
//contains images array
var images = ['a','b','c','d'];
var i = images.length;
// function for next slide

function nextImage(){
  if(i < images.length){
    i += 1;
  }else{
    i = 1;
  }
  slider_content.innerHTML = "<img src="+images[i-1]+".jpg>";
}

function prevImage(){
  if(i < images.length+1 && i>1){
    i -= 1;
  }else{
    i = images.length;
  }
  slider_content.innerHTML = "<img src="+images[i-1]+".jpg>";
}