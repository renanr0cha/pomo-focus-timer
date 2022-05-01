import { buttonPLay,
  buttonPause,
  buttonStop,
  buttonSetTimer,
  buttonSoundContinue,
  buttonSoundStop,
  minutesDisplay,
  secondsDisplay,
   } from './modules/elements.js'

let counter, minutes, secondsTimer
let defaultMinutes = String(minutesDisplay.textContent).padStart(2, "0")


function chooseTime() {
  minutes = Number(prompt("Timer time?"))
  console.log(minutes)
  changeMinutes(minutes)
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
  secondsTimer = Number(secondsDisplay.textContent)
  minutes = Number(minutesDisplay.textContent)
  if (minutes <= 0 && secondsTimer == 0) {
    stop()
    return
  }
  if (secondsTimer == 0) {
    secondsTimer = 2
    minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
  }

  secondsDisplay.textContent = String(secondsTimer - 1).padStart(2, "0")

}

function count() {
  counter = setInterval(countdown, 1000)
}

function pauseCountdown() {
  clearInterval(counter)
}

function stop() {
  buttonPLay.classList.remove("hide")
  buttonPause.classList.add("hide")
  buttonSetTimer.classList.remove("hide")
  buttonStop.classList.add("hide")
  pauseCountdown()
  minutesDisplay.textContent = String(defaultMinutes).padStart(2, "0")
}

function play() {
  buttonPLay.classList.add("hide")
  buttonPause.classList.remove("hide")
  buttonStop.classList.remove("hide")
  buttonSetTimer.classList.add("hide")
  count()
}

function pause() {
  buttonPLay.classList.remove("hide")
  buttonPause.classList.add("hide")
  pauseCountdown()
}


buttonPLay.addEventListener('click', function() {
  play()
})

buttonPause.addEventListener('click', function() {
  pause()
})

buttonStop.addEventListener('click', function() {
  stop()
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