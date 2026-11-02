let hScore = document.getElementById("hScore")
let gScore = document.getElementById("gScore")
let hCounter = 0
let gCounter = 0


//Home counter
function HomeAdd1() {
  hCounter += 1
  hScore.textContent =  hCounter
}
function HomeAdd2() {
  hCounter += 2
  hScore.textContent =  hCounter
}
function HomeAdd3() {
  hCounter += 3
  hScore.textContent =  hCounter
}

//Guest counter
function GuestAdd1() {
  gCounter += 1
  gScore.textContent =  gCounter
}
function GuestAdd2() {
  gCounter += 2
  gScore.textContent =  gCounter
}
function GuestAdd3() {
  gCounter += 3
  gScore.textContent =  gCounter
}

//rest function 
function rest() {
  hCounter = 0
  gCounter = 0
  hScore.textContent = 0
  gScore.textContent = 0 
}