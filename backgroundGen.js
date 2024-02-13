let bodyItem = document.querySelector("#documentBody");
let currentCssBackground = document.querySelector(".changeDisplay");
let leftColorSelector = document.querySelector(".leftColorPicker");
let rightColorSelector = document.querySelector(".rightColorPicker");
let randomBackgroundButton = document.querySelector(".feelingLucky");
let leftRandomColorPicker = document.querySelector(".leftColorPickerRandom")
let rightRandomColorPicker = document.querySelector(".rightColorPickerRandom");
let colorNumbers = [];
let randomLeftColor;
let randomRightColor;


function initialCSSBackgroundStatement (){
  let initialLeftColor = leftColorSelector.value;
  let initialRightColor = rightColorSelector.value;
  bodyItem.style.background = 
     "linear-gradient(to right,"
    + initialLeftColor
    + ", "
    + initialRightColor
  ;
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

function getRandomNumbers(){
  for(let index = 0; index < 3; index++){
   colorNumbers.push( Math.floor(Math.random() * 250));
  };
};

let changeRGBToHeX = (r, g, b) => '#' + [r, g, b].map(
    function(x){
      const hex = x.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }
).join('');

function getLeftRandomRGB(){
  let leftRedNumber = colorNumbers[0];
  let leftGreenNumber = colorNumbers[1];
  let leftBlueNumber = colorNumbers[2];
  randomLeftColor = changeRGBToHeX(leftRedNumber, leftGreenNumber, leftBlueNumber);
  colorNumbers = [];
  return randomLeftColor;
};

function getRightRandomRGB(){
  getRandomNumbers();
  let rightRedNumber = colorNumbers[0];
  let rightGreenNumber = colorNumbers[1];
  let rightBlueNumber = colorNumbers[2];
  randomRightColor = changeRGBToHeX(rightRedNumber, rightGreenNumber, rightBlueNumber);
  colorNumbers=[];
  return randomRightColor;                          
};

function feelingLuckyPressed (){
  getRandomNumbers();
  getLeftRandomRGB();
  getRightRandomRGB();
  bodyItem.style.background = 
    "linear-gradient(to right, "
    + randomLeftColor
    + ", "
    + randomRightColor
    + ")";
  leftRandomColorPicker.value = randomLeftColor;
  rightRandomColorPicker.value = randomRightColor;
  currentCssBackground.textContent = bodyItem.style.background + ";";
}

leftColorSelector.addEventListener("input", changeBackgroundColor);

rightColorSelector.addEventListener("input", changeBackgroundColor);

randomBackgroundButton.addEventListener("click", feelingLuckyPressed);

initialCSSBackgroundStatement();

//written by @andrewlopezcodes