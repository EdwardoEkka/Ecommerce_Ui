const message = document.querySelector(".notification");
message.style.position = "fixed";
message.style.top = "-100px";
message.style.color = "white";
message.style.backgroundColor = "black";
message.style.padding = "10px";
message.style.borderRadius = "5px";
message.style.left = "50%";
message.style.textAlign="center";
message.style.transform = "translate(-50%)";
message.style.transition = "top 0.3s ease";

function notification(text) {
    message.innerText=text;
    message.style.top = "5px";
    setTimeout(() => {
      message.style.top = "-100px";
    }, 3000);
  }