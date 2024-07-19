let startButton = document.querySelector("#startButton")
let title = document.querySelector("#title")
let right = document.querySelector("#right")
let left = document.querySelector("#left")
let textElement = document.getElementById("text")
let topText = document.getElementById("topText")
let pancake = document.createElement('img')
let topping = document.createElement('img')
let topping2 = document.createElement('img')
let text = 'one';
let text2 = 'How many pancakes?';
let screen = 1;
let pancakeCounter=0;
let toppingCounter=0;
let topping2Counter=0;
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
if (pancakeCounter==3) {
  text = 'four';
  textElement.innerText = text;
   pancake.src = './assets/pancake4.PNG'
}
if (pancakeCounter==4) {
  text = 'five';
  textElement.innerText = text;
   pancake.src = './assets/pancake5.PNG'
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
    if (pancakeCounter==3) {
      topping.src = './assets/syrup/syrup4.PNG'
    }
    if (pancakeCounter==4) {
      topping.src = './assets/syrup/syrup5.PNG'
    }
    text = 'maple syrup';
    textElement.innerText = text;
  }
  if (toppingCounter==2) {
    document.getElementById("topping").style.visibility = "visible";
    text = 'nutella';
    textElement.innerText = text;
    topping.src = './assets/syrup/nutella.PNG'
    //pancake.style.top='700px';
  }
}
function renderTopping2() {
  if (topping2Counter == 0) {
    text = 'none';
    textElement.innerText = text;
    topping2.src = './assets/toppingMain/whippedCream.PNG'
  }
  if (topping2Counter==1) {
    text = 'strawberry';
    textElement.innerText = text;
    topping2.src = './assets/toppingMain/strawberry.PNG'
  }
  if (topping2Counter==2) {
    text = 'blueberry';
    textElement.innerText = text;
     topping2.src = './assets/toppingMain/blueberry.PNG'
  }
  if (topping2Counter==3) {
    text = 'banana';
    textElement.innerText = text;
     topping2.src = './assets/toppingMain/banana.PNG'
  }
  if (topping2Counter==4) {
    console.log('toppingwhipepdcream')
    text = 'whipped cream';
    textElement.innerText = text;
     topping2.src = './assets/toppingMain/whippedCream.PNG'
  }
  if (topping2Counter==5) {
    text = 'vanilla icecream';
    textElement.innerText = text;
    topping2.src = './assets/toppingMain/vanilla.PNG'
  }
  if (topping2Counter==6) {
    text = 'strawberry icecream';
    textElement.innerText = text;
     topping2.src = './assets/toppingMain/strawberryIce.PNG'
  }
  if (topping2Counter==7) {
    text = 'chocolate icecream';
    textElement.innerText = text;
     topping2.src = './assets/toppingMain/choc.PNG'
  }
  if (topping2Counter==8) {
    text = 'mint icecream';
    textElement.innerText = text;
     topping2.src = './assets/toppingMain/mintChoc.PNG'
  }
  }
startButton.addEventListener("click",function(){
start()
})
left.addEventListener("click",function(){
  if (screen==1){
    if (pancakeCounter<1) {
      pancakeCounter=4
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
  else if (screen==3){
    if (topping2Counter<1) {
      topping2Counter=8
    }
    else {
     topping2Counter --
    }
    renderTopping2()
  }
})
right.addEventListener("click",function () {
  if (screen==1){
   if (pancakeCounter>3) {
     pancakeCounter=0
   }
   else {
      pancakeCounter ++
    }
    renderPancake()
  }
  else if (screen==2){
    if (toppingCounter>1) {
      toppingCounter=0
    }
    else {
     toppingCounter ++
    }
    renderTopping()
  }
  else if (screen==3){
    console.log ('test')
    if (topping2Counter>7) {
      topping2Counter=0
    }
    else {
     topping2Counter ++
    }
    renderTopping2()
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
if (screen==2) {
  console.log('screen2')
  text2 = "Choose a second topping";
  topText.innerText = text2;
  text="none"
  textElement.innerText = text;
  topping2.src = './assets/toppingMain/strawberry.PNG';
  topping2.setAttribute("id", "topping2")
  topping2.classList.add('topping')
  topping2.style.width='700px';
  document.body.appendChild(topping2);
  //document.getElementById("topping2").style.visibility = "hidden";
}
if (screen==3) {
  text2 = "Choose a side";
  topText.innerText = text2;
  text="none"
  textElement.innerText = text;
 //topping3.src = './assets/toppingMain/strawberry.PNG';
  //topping3.setAttribute("id", "topping3")
  //topping3.classList.add('topping')
  //topping3.style.width='700px';
  //document.body.appendChild(topping3);
  //document.getElementById("topping3").style.visibility = "hidden";
}
screen ++
})
//start()
