import { buttonPlay,
  buttonPause,
  buttonStop,
  minutesDisplay,
  minutesChoice } from './elements.js'

  import Controls from './controls.js'

  import Sounds from './sounds.js'

  const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    minutesDisplay,
    minutesChoice
  })

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  minutesChoice
}) {

  let counter

  function countdown() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    if (minutes <= 0 && seconds == 0) {
      controls.stop()
      Sounds().timerFinished()
      return
    }
    if (seconds == 0) {
      seconds = 60
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

  function updateMinutes(newMinutes) {
    minutesChoice = newMinutes
  }
  
  function resetDisplay() {
    updateDisplay(minutesChoice, 0)
  }

  return {
    countdown,
    count,
    pauseCountdown,
    updateDisplay,
    resetDisplay,
    updateMinutes
  }
}