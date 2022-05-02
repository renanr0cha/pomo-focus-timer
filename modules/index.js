import { buttonPLay, buttonPause, buttonStop, buttonSetTimer, buttonSoundContinue, buttonSoundStop } from './elements.js'
import { play, stop, pause } from './controls.js'
import { chooseTime } from './timer.js'

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