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
  buttonSetTimer,
  buttonStop,
  minutesDisplay,
  minutesChoice,
  buttonSoundStart,
  buttonSoundStop
}) {

  function chooseTime() {
    Sounds().pressButton()
    minutesChoice = Number(prompt("Timer time?"))
    changeMinutes(minutesChoice)

  }
  
  function changeMinutes(minutes) {
    if (minutes == 0 || isNaN(minutes) == true ) {
      alert(`You didn't entered a valid number! Try again`)
      chooseTime()
    } 
    
    else {
      minutesDisplay.textContent = String(minutes).padStart(2, "0")
      timer.updateMinutes(minutes)
    }
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
    buttonSoundStart.classList.add("hide")
    buttonSoundStop.classList.remove("hide")
    sound.bgOff()
  }

  function soundStart() {
    Sounds().pressButton()
    buttonSoundStart.classList.remove("hide")
    buttonSoundStop.classList.add("hide")
    sound.bgOn()

  }
  
  return {
    chooseTime,
    changeMinutes,
    play,
    stop,
    pause,
    soundStart,
    soundStop
  }

}

