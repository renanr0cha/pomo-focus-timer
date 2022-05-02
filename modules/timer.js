import { minutesDisplay, secondsDisplay } from './elements.js'

let counter, minutes, seconds
let minutesChoice = Number(minutesDisplay.textContent)

function chooseTime() {
  minutesChoice = Number(prompt("Timer time?"))
  changeMinutes(minutesChoice)
}

function changeMinutes(min) {
  if (min == 0 || isNaN(min) == true ) {
    alert(`You didn't entered a valid number! Try again`)
    chooseTime()
  } 
  
  else {
    minutesDisplay.textContent = String(min).padStart(2, "0")
  }
}

function countdown() {
  seconds = Number(secondsDisplay.textContent)
  minutes = Number(minutesDisplay.textContent)
  if (minutes <= 0 && seconds == 0) {
    stop()
    return
  }
  if (seconds == 0) {
    seconds = 2
    updateDisplay(String(minutes - 1), seconds)
  }

  updateDisplay(minutesDisplay.textContent, String(seconds - 1))

}

function count() {
  counter = setInterval(countdown, 1000)
}

function pauseCountdown() {
  clearInterval(counter)
}

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetDisplay() {
  updateDisplay(minutesChoice, 0)
}

export { chooseTime, changeMinutes, countdown, count, pauseCountdown, updateDisplay, resetDisplay }