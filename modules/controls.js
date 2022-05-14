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

const sound = Sounds()

export default function Controls({
  buttonPLay,
  buttonPause,
  buttonStop,
  minutesDisplay,
  buttonSoundStart,
  buttonSoundStop
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
    buttonPLay.classList.add("hide")
    buttonPause.classList.remove("hide")
    buttonStop.classList.remove("hide")
    timer.count()
  }
  
  function stop() {
    Sounds().pressButton()
    buttonPLay.classList.remove("hide")
    buttonPause.classList.add("hide")
    timer.pauseCountdown()
    timer.resetDisplay()

  }
  
  
  
  function pause() {
    Sounds().pressButton()
    buttonPLay.classList.remove("hide")
    buttonPause.classList.add("hide")
    timer.pauseCountdown()
  }

  function soundStop() {
    Sounds().pressButton()
    sound.bgOff()
  }

  function soundStart() {
    Sounds().pressButton()
    sound.bgOn()

  }
  
  return {
    addTime,
    removeTime,
    play,
    stop,
    pause,
    soundStart,
    soundStop
  }

}

