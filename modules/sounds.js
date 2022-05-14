export default function Sounds() {
  const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const pomoTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const forestAudio = new Audio("../sounds/forest.wav")
  const rainAudio = new Audio("../sounds/rain.wav")
  const cityAudio = new Audio("../sounds/city.wav")
  const fireAudio = new Audio("../sounds/fire.wav")

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