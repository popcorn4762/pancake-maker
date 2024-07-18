let startButton = document.querySelector("#startButton")
let title = document.querySelector("#title")
function start() {
  document.getElementById("title").style.visibility = "hidden";
  document.getElementById("startButton").style.visibility = "hidden";
  console.log ('hi')
}
startButton.addEventListener("click",function(){
start()
})