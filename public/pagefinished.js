
var loading=document.querySelector(".loading");
if(loading!=null)loading.remove();

if (!document.querySelector(".back-button")) {
    var divbackbut = document.createElement('div');
    divbackbut.className = 'back-button';
    divbackbut.innerHTML = "&#10096; Back";
    divbackbut.style.cursor = "pointer";
    divbackbut.style.left = "0";
    divbackbut.style.bottom = "0";
    divbackbut.style.position = "fixed";
    divbackbut.style.padding = "10px 20px";
    divbackbut.style.width = "10rem";
    divbackbut.style.color = "#FFFFFF";
    divbackbut.style.background = "linear-gradient(90deg, black, transparent)";
    divbackbut.style.zIndex = "9999";
    divbackbut.style.height = "50px";
    divbackbut.style.fontSize="32px";

  
    var body = document.getElementsByTagName('body')[0];
    if(body!=null)body.insertBefore(divbackbut, body.childNodes[0]);
  
    divbackbut.addEventListener('click', function () { window.history.back(); });
  }