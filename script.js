let startButton = document.querySelector("#startButton")
let title = document.querySelector("#title")
let right = document.querySelector("#right")
let left = document.querySelector("#left")
let textElement = document.getElementById("text")
let topText = document.getElementById("topText")
let pancake = document.createElement('img')
let topping = document.createElement('img')
let topping2 = document.createElement('img')
let topping3 = document.createElement('img')
let sparkleButton = document.createElement('button')
let toppingDiv = document.createElement('div');
let plate = document.createElement('img')
let sparkle = document.createElement('img')
let text = 'white';
let text2 = 'choose a plate';
let textNext = 'next';
let screen = 1;
let pancakeCounter=0;
let toppingCounter=0;
let topping3Counter=0;
let topping2Counter=0;
let sparkleCounter=0;
let plateCounter=0;
function start() {
  screenAnimation()
  setTimeout(() => { document.getElementById("title").style.visibility = "hidden";
  document.getElementById("startButton").style.visibility = "hidden";
  document.getElementById("right").style.visibility = "visible";
  document.getElementById("left").style.visibility = "visible";
  document.getElementById("next").style.visibility = "visible";
  document.getElementById("topText").style.visibility = "visible";
  textElement.style.visibility = "visible";
  textElement.innerText = text;
  topText.style.visibility = "visible";
  topText.innerText = text2;
  next.style.visibility = "visible";
  next.innerText = textNext;
  plate.src = './assets/plates/white.PNG';
  plate.setAttribute("id", "plate")
  plate.classList.add('topping')
  plate.style.width='700px';
  document.body.appendChild(plate);
}, 200);
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
    topping.style.bottom='0px';
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
    topping.style.bottom= `${pancakeCounter * 68}px`;
    topping.src = './assets/syrup/nutella.PNG'
  }
  if (toppingCounter==3) {
    document.getElementById("topping").style.visibility = "visible";
    text = 'strawberry jam';
    textElement.innerText = text;
    topping.style.bottom= `${pancakeCounter * 68}px`;
    topping.src = './assets/syrup/jam.PNG'
  }
}
function renderTopping2() {
  if (topping2Counter == 0) {
    text = 'none';
    textElement.innerText = text;
    document.getElementById("topping2").style.visibility = "hidden";
  }
  if (topping2Counter==1) {
    text = 'butter';
    textElement.innerText = text;
    topping2.src = './assets/toppingMain/butter.PNG'
    document.getElementById("topping2").style.visibility = "visible";
  }
  if (topping2Counter==2) {
    text = 'strawberry';
    textElement.innerText = text;
    topping2.src = './assets/toppingMain/strawberry.PNG'
  }
  if (topping2Counter==3) {
    text = 'blueberry';
    textElement.innerText = text;
     topping2.src = './assets/toppingMain/blueberry.PNG'
  }
  if (topping2Counter==4) {
    text = 'banana';
    textElement.innerText = text;
     topping2.src = './assets/toppingMain/banana.PNG'
  }
  if (topping2Counter==5) {
    text = 'whipped cream';
    textElement.innerText = text;
     topping2.src = './assets/toppingMain/whippedCream.PNG'
  }
  if (topping2Counter==6) {
    text = 'vanilla icecream';
    textElement.innerText = text;
    topping2.src = './assets/toppingMain/vanilla.PNG'
  }
  if (topping2Counter==7) {
    text = 'strawberry icecream';
    textElement.innerText = text;
     topping2.src = './assets/toppingMain/strawberryIce.PNG'
  }
  if (topping2Counter==8) {
    text = 'chocolate icecream';
    textElement.innerText = text;
     topping2.src = './assets/toppingMain/choc.PNG'
  }
  if (topping2Counter==9) {
    text = 'mint icecream';
    textElement.innerText = text;
     topping2.src = './assets/toppingMain/mintChoc.PNG'
     document.getElementById("topping2").style.visibility = "visible";
  }
  }
function renderTopping3() {
    if (topping3Counter == 0) {
      text = 'none';
      textElement.innerText = text;
      document.getElementById("topping3").style.visibility = "hidden";
    }
    if (topping3Counter==1) {
      text = 'strawberry';
      textElement.innerText = text;
      topping3.src = './assets/toppingSide/strawberry.PNG'
      document.getElementById("topping3").style.visibility = "visible";
    }
    if (topping3Counter==2) {
      text = 'blueberry';
      textElement.innerText = text;
      topping3.src = './assets/toppingSide/blueberry.PNG'
    }
    if (topping3Counter==3) {
      text = 'banana';
      textElement.innerText = text;
       topping3.src = './assets/toppingSide/banana.PNG'
       document.getElementById("topping3").style.visibility = "visible";
    }
   
  }
  function renderPlate() {
    if (plateCounter == 0) {
      text = 'white';
      textElement.innerText = text;
      plate.src = './assets/plates/white.PNG'
    }
    if (plateCounter==1) {
      text = 'blue';
      textElement.innerText = text;
      plate.src = './assets/plates/blue.PNG'
    }
    if (plateCounter==2) {
      text = 'pink';
      textElement.innerText = text;
      plate.src = './assets/plates/pink.PNG'
    }
    if (plateCounter==3) {
      text = 'yellow';
      textElement.innerText = text;
       plate.src = './assets/plates/yellow.PNG'
    }
    if (plateCounter==4) {
      text = 'green';
      textElement.innerText = text;
       plate.src = './assets/plates/green.PNG'
    }
    if (plateCounter==5) {
      text = 'purple';
      textElement.innerText = text;
       plate.src = './assets/plates/purple.PNG'
    }
  }
  function renderSparkle() {
    if (sparkleCounter == 0) {
      document.getElementById("sparkle").style.visibility= "hidden";
    }
    if (sparkleCounter==1) {
      sparkle.src = './assets/sparkle.PNG'
      document.getElementById("sparkle").style.visibility= "visible";
    }
    if (sparkleCounter==2) {
      sparkle.src = './assets/EXTRASPARKLE!!!!.PNG'
      document.getElementById("sparkle").style.visibility= "visible";
    }
  }
function screenAnimation() {
  document.getElementById("screen").style.visibility = "visible";
  document.getElementById("screen").style.opacity= 1;
  setTimeout(() => { document.getElementById("screen").style.opacity= 0; }, 250);
  setTimeout(() => { document.getElementById("screen").style.visibility= "hidden"; }, 400);
}
startButton.addEventListener("click",function(){
start()
})
left.addEventListener("click",function(){
  if (screen==1){
    if (plateCounter<1) {
      plateCounter=5
    }
    else {
      plateCounter --
    }
    renderPlate()
  }
  if (screen==2){
    if (pancakeCounter<1) {
      pancakeCounter=4
    }
    else {
     pancakeCounter --
    }
    renderPancake()
  }
  else if (screen==3){
    if (toppingCounter<2) {
      toppingCounter=3
    }
    else {
     toppingCounter --
    }
    renderTopping()
  }
  else if (screen==4){
    if (topping2Counter<1) {
      topping2Counter=9
    }
    else {
     topping2Counter --
    }
    renderTopping2()
  }
  else if (screen==5){
    if (topping3Counter<1) {
      topping3Counter=3
    }
    else {
     topping3Counter --
    }
    renderTopping3()
  }
})
right.addEventListener("click",function () {
  if (screen==1){
    if (plateCounter>4) {
      plateCounter=0
    }
    else {
      plateCounter ++
    }
    renderPlate()
  }
  if (screen==2){
   if (pancakeCounter>3) {
     pancakeCounter=0
   }
   else {
      pancakeCounter ++
    }
    renderPancake()
  }
  else if (screen==3){
    if (toppingCounter>2) {
      toppingCounter=0
    }
    else {
     toppingCounter ++
    }
    renderTopping()
  }
  else if (screen==4){
    if (topping2Counter>8) {
      topping2Counter=0
    }
    else {
     topping2Counter ++
    }
    renderTopping2()
  }
  else if (screen==5){
    if (topping3Counter>3) {
      topping3Counter=0
    }
    else {
     topping3Counter ++
    }
    renderTopping3()
  }
})
sparkleButton.addEventListener("click",function () {
  if (sparkleCounter>1) {
    sparkleCounter=0
  }
  else {
   sparkleCounter ++
  }
  renderSparkle()
})
next.addEventListener("click", function() {
if (screen<5) {
  if(screen==1){
    text2 = "how many pancakes?";
  topText.innerText = text2;
  text="none"
  textElement.innerText = text;
  pancake.src = './assets/pancake.PNG';
  pancake.classList.add('pancake')
  pancake.style.width='700px';
  document.body.appendChild(pancake);
  }
  if (screen==2) {
  text2 = "choose a topping";
  topText.innerText = text2;
  text="none"
  textElement.innerText = text;
  topping.src = './assets/syrup/syrup1.PNG';
  topping.setAttribute("id", "topping")
  topping.classList.add('topping')
  topping.style.width='700px';
  toppingDiv.appendChild(topping);
  document.body.appendChild(toppingDiv)
  document.body.appendChild(topping);
  document.getElementById("topping").style.visibility = "hidden";
}
if (screen==3) {
  text2 = "choose a second topping";
  topText.innerText = text2;
  text="none"
  textElement.innerText = text;
  topping2.src = './assets/toppingMain/strawberry.PNG';
  topping2.setAttribute("id", "topping2")
  topping2.classList.add('topping')
  topping2.style.width='700px';
  toppingDiv.appendChild(topping2);
  document.body.appendChild(toppingDiv)
  document.getElementById("topping2").style.visibility = "hidden";
  topping2.style.bottom= `${pancakeCounter * 68}px`;
}
if (screen==4) {
  text2 = "choose a side";
  topText.innerText = text2;
  text="none"
  textElement.innerText = text;
  topping3.src = './assets/toppingMain/strawberry.PNG';
  topping3.setAttribute("id", "topping3")
  topping3.classList.add('topping')
  topping3.style.width='700px';
  document.body.appendChild(topping3);
  document.getElementById("topping3").style.visibility = "hidden";
  textNext = "finish!"
  next.innerText = textNext;
}
screen ++
}
else {
  screenAnimation()
  setTimeout(() => {
  text2 = "c o m p l e t e !";
  topText.classList.add('font')
  topText.innerText = text2;
  document.getElementById("left").style.visibility = "hidden";
  document.getElementById("text").style.visibility = "hidden";
  document.getElementById("right").style.visibility = "hidden";
  document.getElementById("next").style.visibility = "hidden";
  sparkle.src = './assets/EXTRASPARKLE!!!!.PNG';
  sparkle.setAttribute("id", "sparkle")
  sparkle.classList.add('topping')
  sparkle.style.width='700px';
  document.body.appendChild(sparkle);
  sparkleButton.textContent = "change sparkle"
  sparkleButton.classList.add('sparkleButton')
  document.body.appendChild(sparkleButton);
  document.getElementById("sparkle").style.visibility = "hidden";
  }, 250)
}
})
//start()
