window.onload = function() {
  let button1 = document.querySelector("button.darkmode");
  let button2 = document.querySelector("button.lightmode");
  let body = document.querySelector("body");
  button1.onmousedown = function() {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
  button2.onmousedown = function() {
    body.style.backgroundColor = "white"
    body.style.color = "black"
  }
}