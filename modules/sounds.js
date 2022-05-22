export default function Sounds() {
  const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const pomoTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const forestAudio = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Floresta.wav?raw=true")
  const rainAudio = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Chuva.wav?raw=true")
  const cityAudio = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Cafeteria.wav?raw=true")
  const fireAudio = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Lareira.wav?raw=true")

  forestAudio.loop = true
  rainAudio.loop = true
  cityAudio.loop = true
  fireAudio.loop = true

  function pressButton() {
    buttonPress.play()
  }

  function timerFinished() {
    pomoTimer.play()
  }

  function setVolumeForest() {
    forestAudio.volume = document.querySelector("#forest-volume").value
  }
  
  function setVolumeRain() {
    rainAudio.volume = document.querySelector("#rain-volume").value
  }
  
  function setVolumeCity() {
    cityAudio.volume = document.querySelector("#city-volume").value
  }
  
  function setVolumeFire() {
    fireAudio.volume = document.querySelector("#fire-volume").value
  }


function playBg(bgButton) {
  switch(bgButton.id) {
    case 'city':
      if ( bgButton.value == "unchecked" || bgButton.value == "" ) {
        cityAudio.pause()
      } else {
        cityAudio.play()
      }
      break
    case 'fire':
      if ( bgButton.value == "unchecked" || bgButton.value == "" ) {
        fireAudio.pause()
      } else {
        fireAudio.play()
      }
      break
    case 'forest':
      if ( bgButton.value == "unchecked" || bgButton.value == "" ) {
        forestAudio.pause()
      } else {
        forestAudio.play()
      }
      break
    case 'rain':
      if ( bgButton.value == "unchecked" || bgButton.value == "" ) {
        rainAudio.pause()
      } else {
        rainAudio.play()
      }
      break
    default:
      break
  }
}

  return {
    pressButton,
    timerFinished,
    fireAudio,
    cityAudio,
    forestAudio,
    rainAudio,
    setVolumeCity,
    setVolumeFire,
    setVolumeForest,
    setVolumeRain,
    playBg
  }
}
