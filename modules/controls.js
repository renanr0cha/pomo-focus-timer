import {
  secondsDisplay,
  minutesDisplay,
  minutesChoice
} from './elements.js'

import Sounds from './sounds.js'

import Timer from './timer.js'

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  minutesChoice
})

export default function Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  minutesDisplay
}) {

  function addTime() {
    Sounds().pressButton()
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
  }

  function removeTime() {
    Sounds().pressButton()
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "0")
  }

  function play() {
    Sounds().pressButton()
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
    buttonStop.classList.remove("hide")
    timer.count()
  }
  
  function stop() {
    Sounds().pressButton()
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
    timer.pauseCountdown()
    timer.resetDisplay()
  }
  
  
  function pause() {
    Sounds().pressButton()
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
    timer.pauseCountdown()
  }

  
  return {
    addTime,
    removeTime,
    play,
    stop,
    pause
  }

}