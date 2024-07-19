let startButton = document.querySelector("#startButton")
let title = document.querySelector("#title")
let right = document.querySelector("#right")
let left = document.querySelector("#left")
let textElement = document.getElementById("text")
let text = 'one';
let pancakeCounter = 0;
function start() {
  document.getElementById("title").style.visibility = "hidden";
  document.getElementById("startButton").style.visibility = "hidden";
  document.getElementById("right").style.visibility = "visible";
  document.getElementById("left").style.visibility = "visible";
  document.getElementById("next").style.visibility = "visible";
  textElement.style.visibility = "visible";
  textElement.innerText = text;
  let pancake = document.createElement('img')
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
startButton.addEventListener("click",function(){
start()
})
left.addEventListener("click",function(){
  if (pancakeCounter<1) {
    pancakeCounter=2
  }
  else {
    pancakeCounter --
  }
  renderPancake()
})
console.log(right)
right.addEventListener("click",function () {
  if (pancakeCounter>1) {
    pancakeCounter=0
  }
  else {
    pancakeCounter ++
  }
  renderPancake()
})
//start()
