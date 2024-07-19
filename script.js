let startButton = document.querySelector("#startButton")
let title = document.querySelector("#title")
let right = document.querySelector("#right")
let left = document.querySelector("#left")
let textElement = document.getElementById("text")
let topText = document.getElementById("topText")
let pancake = document.createElement('img')
let topping = document.createElement('img')
let text = 'one';
let text2 = 'How many pancakes?';
let screen = 1;
let pancakeCounter=0;
let toppingCounter=0;
function start() {
  document.getElementById("title").style.visibility = "hidden";
  document.getElementById("startButton").style.visibility = "hidden";
  document.getElementById("right").style.visibility = "visible";
  document.getElementById("left").style.visibility = "visible";
  document.getElementById("next").style.visibility = "visible";
  document.getElementById("topText").style.visibility = "visible";
  textElement.style.visibility = "visible";
  textElement.innerText = text;
  topText.style.visibility = "visible";
  topText.innerText = text2;
  pancake.src = './assets/pancake.PNG';
  pancake.classList.add('pancake')
  pancake.style.width='700px';
  document.body.appendChild(pancake);
}
function renderPancake() {
if (pancakeCounter == 0) {
  text = 'one';
  textElement.innerText = text;
  pancake.src = './assets/pancake.PNG'
}
if (pancakeCounter==1) {
  text = 'two';
  textElement.innerText = text;
  pancake.src = './assets/pancake2.PNG'
}
if (pancakeCounter==2) {
  text = 'three';
  textElement.innerText = text;
   pancake.src = './assets/pancake3.PNG'
}
}
function renderTopping() {
  if (toppingCounter==0) {
    text = 'none';
    textElement.innerText = text;
    document.getElementById("topping").style.visibility = "hidden";
  }
  if (toppingCounter == 1) {
    document.getElementById("topping").style.visibility = "visible";
    if (pancakeCounter==0) {
    topping.src = './assets/syrup/syrup1.PNG'
    }
    if (pancakeCounter==1) {
      topping.src = './assets/syrup/syrup2.PNG'
    }
    if (pancakeCounter==2) {
      topping.src = './assets/syrup/syrup3.PNG'
    }
    text = 'maple syrup';
    textElement.innerText = text;
  }
  if (toppingCounter==2) {
    document.getElementById("topping").style.visibility = "visible";
    text = 'nutella';
    textElement.innerText = text;
    topping.src = './assets/syrup/nutella.PNG'
  }
}
startButton.addEventListener("click",function(){
start()
})
left.addEventListener("click",function(){
  if (screen==1){
    if (pancakeCounter<1) {
      pancakeCounter=2
    }
    else {
     pancakeCounter --
    }
    renderPancake()
  }
  else if (screen==2){
    if (toppingCounter<1) {
      toppingCounter=2
    }
    else {
     toppingCounter --
    }
    renderTopping()
  }
})
right.addEventListener("click",function () {
  if (screen==1){
   if (pancakeCounter>1) {
     pancakeCounter=0
   }
   else {
      pancakeCounter ++
    }
    renderPancake()
  }
  else if (screen==2){
    console.log ('test')
    if (toppingCounter>1) {
      toppingCounter=0
    }
    else {
     toppingCounter ++
    }
    renderTopping()
  }
})
next.addEventListener("click", function() {
  if (screen==1) {
  text2 = "Choose a topping";
  topText.innerText = text2;
  text="none"
  textElement.innerText = text;
  topping.src = './assets/syrup/syrup1.PNG';
  topping.setAttribute("id", "topping")
  topping.classList.add('topping')
  topping.style.width='700px';
  document.body.appendChild(topping);
  document.getElementById("topping").style.visibility = "hidden";
}
screen ++
})
//start()
