const buttonPLay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonAddTime = document.querySelector(".add-time")
const buttonSoundStart = document.querySelector(".sound-continue")
const buttonSoundStop = document.querySelector(".sound-stop")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutesChoice = Number(minutesDisplay.textContent)

const buttonBgSound = document.getElementsByClassName("bg-music-button")

export {
  buttonPLay,
  buttonPause,
  buttonStop,
  buttonAddTime,
  buttonSoundStart,
  buttonSoundStop,
  minutesDisplay,
  secondsDisplay,
  minutesChoice,
  buttonBgSound
}