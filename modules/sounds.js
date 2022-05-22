export default function Sounds() {
  const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const pomoTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

  bgAudio.loop

  function pressButton() {
    buttonPress.play()
  }

  function timerFinished() {
    pomoTimer.play()
  }

  function bgOn() {
    bgAudio.play()
  }

  function bgOff() {
    console.log(bgAudio.pause())
  }

  return {
    pressButton,
    timerFinished,
    bgOn,
    bgOff
  }
}