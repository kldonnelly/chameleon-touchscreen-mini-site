if (!document.querySelector(".loading")) {
    var divmessage = document.createElement('div');
    divmessage.className = 'loading';
    divmessage.innerHTML = "%s";
    divmessage.style.cursor = "pointer";
    divmessage.style.left = "%dpx";
    divmessage.style.top = "%dpx";
    divmessage.style.position = "fixed";
    divmessage.style.padding = "10px 20px";
    divmessage.style.width = "10rem";
    divmessage.style.color = "#FFFFFF";
    divmessage.style.background = "linear-gradient(90deg, black, transparent)";
    divmessage.style.zIndex = "9999";
  
    var body = document.getElementsByTagName('body')[0];
    if(body!=null)body.insertBefore(divmessage, body.childNodes[0]);
  
  }