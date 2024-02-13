let bodyItem = document.querySelector("#documentBody");
let currentCssBackground = document.querySelector(".changeDisplay");
let leftColorSelector = document.querySelector(".leftColorPicker");
let rightColorSelector = document.querySelector(".rightColorPicker");
let randomBackgroundButton = document.querySelector(".feelingLucky");
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

function getRandomNumbers(){
  function randomNumberGenerator (min, max){
    return Math.floor(Math.random()* (min - max + 1)) + min;
  };

  for(let index = 0; index < 6; index++){
   colorNumbers.push( Math.floor(Math.random() * 250));
    console.log(colorNumbers);
  };

};

function getLeftRandomRGB(){
  let leftRedNumber = colorNumbers[0];
  let leftGreenNumber = colorNumbers[1];
  let leftBlueNumber = colorNumbers[2];
 
  randomLeftColor = "rgb("  + leftRedNumber + ", " 
                            + leftGreenNumber + ", " 
                            + leftBlueNumber
                            + ")";
  return randomLeftColor;
};

function getRightRandomRGB(){
let rightRedNumber = colorNumbers[3];
let rightGreenNumber = colorNumbers[4];
let rightBlueNumber = colorNumbers[5];

randomRightColor = "rgb(" + rightRedNumber + ", " 
                          + rightGreenNumber + ", " 
                          + rightBlueNumber
                          + ")";
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
  currentCssBackground.textContent = bodyItem.style.background + ";";
  
}

leftColorSelector.addEventListener("input", changeBackgroundColor);

rightColorSelector.addEventListener("input", changeBackgroundColor);

randomBackgroundButton.addEventListener("click", feelingLuckyPressed);

initialCSSBackgroundStatement();




