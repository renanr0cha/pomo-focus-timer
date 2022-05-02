import { buttonPLay, buttonPause, buttonStop, buttonSetTimer, buttonSoundContinue, buttonSoundStop } from './elements.js'
import { count, pauseCountdown, resetDisplay } from './timer.js'

function play() {
  buttonPLay.classList.add("hide")
  buttonPause.classList.remove("hide")
  buttonStop.classList.remove("hide")
  buttonSetTimer.classList.add("hide")
  count()
}

function stop() {
  buttonPLay.classList.remove("hide")
  buttonPause.classList.add("hide")
  buttonSetTimer.classList.remove("hide")
  buttonStop.classList.add("hide")
  pauseCountdown()
  resetDisplay()
}



function pause() {
  buttonPLay.classList.remove("hide")
  buttonPause.classList.add("hide")
  pauseCountdown()
}

export { play, stop, pause }
