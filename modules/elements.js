const buttonPLay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSetTimer = document.querySelector(".set-timer")
const buttonSoundStart = document.querySelector(".sound-continue")
const buttonSoundStop = document.querySelector(".sound-stop")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutesChoice = Number(minutesDisplay.textContent)

export {
  buttonPLay,
  buttonPause,
  buttonStop,
  buttonSetTimer,
  buttonSoundStart,
  buttonSoundStop,
  minutesDisplay,
  secondsDisplay,
  minutesChoice
}