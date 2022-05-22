import { buttonPLay,
  buttonPause,
  buttonStop,
  buttonSetTimer,
  buttonSoundStart,
  buttonSoundStop,
  minutesDisplay,
  minutesChoice } from './elements.js'
import Controls from './controls.js'

const controls = Controls({
  buttonPLay,
  buttonPause,
  buttonSetTimer,
  buttonStop,
  minutesDisplay,
  minutesChoice,
  buttonSoundStart,
  buttonSoundStop
})

buttonPLay.addEventListener('click', function() {
  controls.play()
})

buttonPause.addEventListener('click', function() {
  controls.pause()
})

buttonStop.addEventListener('click', function() {
  controls.stop()
})

buttonSetTimer.addEventListener('click', function() {
  controls.chooseTime()
})

buttonSoundStop.addEventListener('click', function() {
  controls.soundStart()
  
})

buttonSoundStart.addEventListener('click', function() {
  controls.soundStop()  
})