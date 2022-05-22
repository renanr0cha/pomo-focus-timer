import { buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddTime,
  buttonRemoveTime,
  buttonSoundStart,
  buttonSoundStop,
  minutesDisplay,
  minutesChoice,
  buttonBgSound,
  volumeSlider,
  buttonChangeTheme
} from './elements.js'

import Controls from './controls.js'

import Sounds from './sounds.js'

const sound = Sounds()

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonAddTime,
  buttonRemoveTime,
  buttonStop,
  minutesDisplay,
  minutesChoice,
  buttonSoundStart,
  buttonSoundStop
})

buttonPlay.addEventListener('click', function() {
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
    sound.playBg(element)
    sound.pressButton()
  })
})

volumeSlider.forEach( element => {
  element.addEventListener('input', () => {
    switch(element.id) {
      case 'forest-volume':
        sound.setVolumeForest()
        break
      case 'rain-volume':
        sound.setVolumeRain()
        break
      case 'city-volume':
        sound.setVolumeCity()
        break
      case 'fire-volume':
        sound.setVolumeFire()
        break
      default:
        break
    }
  })
})

buttonChangeTheme.onclick = () => {
    document.body.classList.toggle("dark")
}