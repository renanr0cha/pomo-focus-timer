import { buttonPLay,
  buttonPause,
  buttonStop,
  buttonAddTime,
  buttonRemoveTime,
  buttonSoundStart,
  buttonSoundStop,
  minutesDisplay,
  minutesChoice,
  buttonBgSound,
  volumeSlider
} from './elements.js'

import Controls from './controls.js'

import Sounds from './sounds.js'

const sound = Sounds()

const controls = Controls({
  buttonPLay,
  buttonPause,
  buttonAddTime,
  buttonRemoveTime,
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
  controls.addTime()
})

buttonRemoveTime.addEventListener('click', function() {
  controls.removeTime()
})

buttonBgSound.forEach(element => {
  element.addEventListener('click', function() {
    if ( element.value == "unchecked" || element.value == ""  ) {
      element.value = "checked"
      document.querySelector(`#${element.id}-wrapper`).classList.remove("hide")
      document.querySelector(`#${element.id}`).classList.add("range-active")
      
    } else {
      element.value = "unchecked"
      document.querySelector(`#${element.id}-wrapper`).classList.add("hide")
      document.querySelector(`#${element.id}`).classList.remove("range-active")
    }
  })

  element.addEventListener('click', function() {
    playBg(element)
  })
})


function playBg(bgButton) {
  switch(bgButton.id) {
    case 'city':
      if ( bgButton.value == "unchecked" || bgButton.value == "" ) {
        sound.cityAudio.pause()
      } else {
        sound.cityAudio.play()
      }
      break
    case 'fire':
      if ( bgButton.value == "unchecked" || bgButton.value == "" ) {
        sound.fireAudio.pause()
      } else {
        sound.fireAudio.play()
      }
      break
    case 'forest':
      if ( bgButton.value == "unchecked" || bgButton.value == "" ) {
        sound.forestAudio.pause()
      } else {
        sound.forestAudio.play()
      }
      break
    case 'rain':
      if ( bgButton.value == "unchecked" || bgButton.value == "" ) {
        sound.rainAudio.pause()
      } else {
        sound.rainAudio.play()
      }
      break
    default:
      break
  }
}

document.querySelectorAll(".volume").forEach(element => {
  element.addEventListener('change', (event) => {
    element.volume = document.querySelector(`#${element.id}`).value
  })
})

document.querySelector(".theme-chooser").onclick = () => {
    document.body.classList.toggle("dark")
}
