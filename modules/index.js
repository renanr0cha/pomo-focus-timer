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
    sound.pressButton()
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

function setVolumeForest() {
  sound.forestAudio.volume = document.querySelector("#forest-volume").value
}

function setVolumeRain() {
  sound.rainAudio.volume = document.querySelector("#rain-volume").value
}

function setVolumeCity() {
  sound.cityAudio.volume = document.querySelector("#city-volume").value
}

function setVolumeFire() {
  sound.fireAudio.volume = document.querySelector("#fire-volume").value
}

document.querySelectorAll(".volume").forEach( element => {
  element.addEventListener('input', () => {
    switch(element.id) {
      case 'forest-volume':
        setVolumeForest()
        break
      case 'rain-volume':
        setVolumeRain()
        break
      case 'city-volume':
        setVolumeCity()
        break
      case 'fire-volume':
        setVolumeFire()
        break
      default:
        break
    }
  })
})

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
  document.body.classList.toggle("dark")
} else {
  
}

document.querySelector(".theme-chooser").onclick = () => {
    document.body.classList.toggle("dark")
}
