const buttonPLay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonAddTime = document.querySelector(".add-time")
const buttonRemoveTime = document.querySelector(".remove-time")
const buttonSoundStart = document.querySelector(".sound-continue")
const buttonSoundStop = document.querySelector(".sound-stop")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutesChoice = Number(minutesDisplay.textContent)

const buttonBgSound = document.querySelectorAll(".bg-music-button")

const volumeSlider = document.querySelectorAll(".volume")

export {
  buttonPLay,
  buttonPause,
  buttonStop,
  buttonAddTime,
  buttonRemoveTime,
  buttonSoundStart,
  buttonSoundStop,
  minutesDisplay,
  secondsDisplay,
  minutesChoice,
  buttonBgSound,
  volumeSlider
}