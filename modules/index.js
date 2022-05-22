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
      addButtonColor(element.id)
      element.value = "checked"
      
    } else {
      removeButtonColor(element.id)
      element.value = "unchecked"
    }
  })

  element.addEventListener('click', function() {
    playBg(element)
  })
})

function addButtonColor(elementClickedId) {
  
  document.querySelector(`#${elementClickedId}`).style.backgroundColor = getComputedStyle(document.body).getPropertyValue(`--clr-${elementClickedId}`)
  document.querySelector(`#${elementClickedId}-svg`).style.fill = "#FFFFFF"
  document.querySelector(`#${elementClickedId}-volume`).classList.remove("hide")
}

function removeButtonColor(elementClickedId) {
  document.querySelector(`#${elementClickedId}`).style.backgroundColor = getComputedStyle(document.body).getPropertyValue(`--bg-button-${elementClickedId}`)
  document.querySelector(`#${elementClickedId}-svg`).style.fill = getComputedStyle(document.body).getPropertyValue('--button-dark')
  document.querySelector(`#${elementClickedId}-volume`).classList.add("hide")
}

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

document.querySelector(".theme-chooser").addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove("dark")
  } else {
    document.body.classList.add("dark")
  }
})

