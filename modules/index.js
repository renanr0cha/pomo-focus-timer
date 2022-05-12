import { buttonPLay,
  buttonPause,
  buttonStop,
  buttonAddTime,
  buttonSoundStart,
  buttonSoundStop,
  minutesDisplay,
  minutesChoice } from './elements.js'
import Controls from './controls.js'

const controls = Controls({
  buttonPLay,
  buttonPause,
  buttonAddTime,
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

buttonAddTime.addEventListener('click', function() {
  controls.chooseTime()
})

buttonSoundStop.addEventListener('click', function() {
  controls.soundStart()
  
})

buttonSoundStart.addEventListener('click', function() {
  controls.soundStop()  
})