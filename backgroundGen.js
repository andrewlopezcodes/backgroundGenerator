let bodyItem = document.querySelector("#documentBody");
let currentCssBackground = document.querySelector("h3");
let leftColorSelector = document.querySelector(".leftColorPicker");
let rightColorSelector = document.querySelector(".rightColorPicker");

let changeBackgroundColor = function(){
  bodyItem.style.background = 
    "linear-gradient(to right, "
    + leftColorSelector.value
    + ", "
    + rightColorSelector.value
    + ")";
};

leftColorSelector.addEventListener("input", changeBackgroundColor);

rightColorSelector.addEventListener("input", changeBackgroundColor);

