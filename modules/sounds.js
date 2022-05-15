export default function Sounds() {
  const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const pomoTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const forestAudio = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Floresta.wav?raw=true")
  const rainAudio = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Chuva.wav?raw=true")
  const cityAudio = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Cafeteria.wav?raw=true")
  const fireAudio = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Lareira.wav?raw=true")

  forestAudio.loop,
  rainAudio.loop,
  cityAudio.loop,
  fireAudio.loop = true

  function pressButton() {
    buttonPress.play()
  }

  function timerFinished() {
    pomoTimer.play()
  }

  return {
    pressButton,
    timerFinished,
    fireAudio,
    cityAudio,
    forestAudio,
    rainAudio
  }
}