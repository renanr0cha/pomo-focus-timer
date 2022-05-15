export default function Sounds() {
  const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const pomoTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const forestAudio = new Audio("https://github.com/renanrochadev/pomo-focus-timer/blob/pomo-focus-timer-2/sounds/forest.wav")
  const rainAudio = new Audio("https://github.com/renanrochadev/pomo-focus-timer/blob/pomo-focus-timer-2/sounds/rain.wav")
  const cityAudio = new Audio("https://github.com/renanrochadev/pomo-focus-timer/blob/pomo-focus-timer-2/sounds/city.wav")
  const fireAudio = new Audio("https://github.com/renanrochadev/pomo-focus-timer/blob/pomo-focus-timer-2/sounds/fire.wav")

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