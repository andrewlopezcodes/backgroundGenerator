let bodyItem = document.querySelector("#documentBody");
let currentCssBackground = document.querySelector(".changeDisplay");
let leftColorSelector = document.querySelector(".leftColorPicker");
let rightColorSelector = document.querySelector(".rightColorPicker");

function initialCSSBackgroundStatement (){
  let initialLeftColor = leftColorSelector.value;
  let initialRightColor = rightColorSelector.value;
  bodyItem.style.background = 
     "linear-gradient(to right,"
    + initialLeftColor
    + ", "
    + initialRightColor;
  
    currentCssBackground.textContent = "     " + bodyItem.style.background + ";";

}



let changeBackgroundColor = function(){
  bodyItem.style.background = 
    "linear-gradient(to right, "
    + leftColorSelector.value
    + ", "
    + rightColorSelector.value
    + ")";
  initialCSSBackgroundStatement();
  currentCssBackground.textContent = bodyItem.style.background + ";";
};



leftColorSelector.addEventListener("input", changeBackgroundColor);

rightColorSelector.addEventListener("input", changeBackgroundColor);

initialCSSBackgroundStatement();



