import { buttonPLay, minutesChoice, buttonPause, buttonStop, buttonSetTimer, buttonSoundStop, buttonSoundContinue, minutesDisplay, secondsDisplay } from './modules/elements.js'

function chooseTime() {
  minutesChoice = Number(prompt("Timer time?"))
  if (minutesChoice == 0) {
  } else {
    minutesDisplay.textContent = minutesChoice
  }
}

function countdown() {
  setInterval(function() {
    let secondsTimer = Number(secondsDisplay.textContent)
    if (secondsTimer == 0) {
      secondsTimer = 11
    }
    secondsDisplay.textContent = String(secondsTimer - 1).padStart(2, "0")
    
  }, 1000)

}



buttonPLay.addEventListener('click', function() {
  buttonPLay.classList.add("hide")
  buttonPause.classList.remove("hide")
  buttonStop.classList.remove("hide")
  buttonSetTimer.classList.add("hide")
  countdown()
})

buttonPause.addEventListener('click', function() {
  buttonPLay.classList.remove("hide")
  buttonPause.classList.add("hide")
})

buttonStop.addEventListener('click', function() {
  buttonPLay.classList.remove("hide")
  buttonPause.classList.add("hide")
  buttonSetTimer.classList.remove("hide")
  buttonStop.classList.add("hide")
})

buttonSetTimer.addEventListener('click', function() {
  chooseTime()
})



buttonSoundStop.addEventListener('click', function() {
  buttonSoundContinue.classList.remove("hide")
  buttonSoundStop.classList.add("hide")
  
})

buttonSoundContinue.addEventListener('click', function() {
  buttonSoundContinue.classList.add("hide")
  buttonSoundStop.classList.remove("hide")
  
})