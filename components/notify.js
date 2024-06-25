const message = document.querySelector(".notification");
message.style.position = "fixed";
message.style.top = "-100px";
message.style.color = "black";
message.style.backgroundColor="white";
message.style.padding = "10px";
message.style.borderRadius = "5px";
message.style.left = "50%";
message.style.textAlign="center";
message.style.transform = "translate(-50%)";
message.style.transition = "top 0.3s ease";
message.style.zIndex="999";
message.style.border="2px solid black"

function notification(text,booly) {
  if(booly){
    message.innerHTML=`&#9989; ${text}`;
  }
  else
  {
    message.innerHTML=`&#10060; ${text}`;
  }
    message.style.top = "5px";
    setTimeout(() => {
      message.style.top = "-100px";
    }, 3000);
  }