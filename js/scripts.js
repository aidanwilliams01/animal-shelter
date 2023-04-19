window.onload = function() {
  const button1 = document.querySelector("button.darkmode");
  const button2 = document.querySelector("button.lightmode");
  const button3 = document.querySelector("button.increasefont");
  const button4 = document.querySelector("button.defaultfont");
  const body = document.querySelector("body");
  button1.onmousedown = function() {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
  button2.onmousedown = function() {
    body.style.backgroundColor = "white"
    body.style.color = "black"
  }
  button3.onmousedown = function() {
    body.style.fontSize = "large"
  }
  button4.onmousedown = function() {
    body.style.fontSize = "medium"
  }
}