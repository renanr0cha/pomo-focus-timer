import { buttonPLay,
  buttonPause,
  buttonStop,
  buttonAddTime,
  buttonSoundStart,
  buttonSoundStop,
  minutesDisplay,
  minutesChoice,
  buttonBgSound } from './elements.js'
import Controls from './controls.js'

const controls = Controls({
  buttonPLay,
  buttonPause,
  buttonAddTime,
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
  controls.chooseTime()
})

buttonSoundStop.addEventListener('click', function() {
  controls.soundStart()
  
})

buttonSoundStart.addEventListener('click', function() {
  controls.soundStop()  
})



console.log(buttonBgSound)
let isChecked = [
  {
    id: 0,
    checked: false
  },
  {
    id: 1,
    checked: false
  },
  {
    id: 2,
    checked: false
  },
  {
    id: 3,
    checked: false
  },
]
buttonBgSound.forEach(element => {
  element.addEventListener('click', function() {
    console.log(element.value)
    console.log(element)
    console.log(Array.prototype.indexOf.call(buttonBgSound, element))
    if ( element.value == "unchecked" || element.value == "" ) {
      addButtonColor(element.id)
      element.value = "checked"
      
    } else {
      removeButtonColor(element.id)
      element.value = "unchecked"
    }
  }) 
})

function addButtonColor(elementClicked) {
  document.querySelector(`#${elementClicked}`).style.backgroundColor = getComputedStyle(document.querySelector(':root')).getPropertyValue(`--bg-button-${elementClicked}`);
      document.querySelector(`#${elementClicked}-svg`).style.fill = "#FFFFFF"
}

function removeButtonColor(elementClicked) {
  document.querySelector(`#${elementClicked}`).style.backgroundColor = getComputedStyle(document.querySelector(':root')).getPropertyValue('--bg-button')
  document.querySelector(`#${elementClicked}-svg`).style.fill = "#323238"
}

// function checkIfClicked() {
//   switch (element.id) {
//     case "forest":
//       if
//   }
// }