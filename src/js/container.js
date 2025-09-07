import Cel from '../icons/celsius.svg'
import fah from '../icons/fahrenheit.svg'

let iscel = true
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const icon = document.querySelector('.icon')
const temp = document.querySelector('.temp')
const tempMark = document.querySelector('.temp-mark')
const address = document.querySelector('.address')
const feelslike = document.querySelector('.feelslike')
const description = document.querySelector('.description')
const rightSide = document.querySelectorAll('.week')


function main(res, response, a) {
  import(`../icons/${res.icon}.svg`)
    .then((data) => {
      icon.src = data.default
    })
    .catch((error) => {
      console.error('error', error)
    })

  
  if(a){
    tempMark.src = fah
    feelslike.innerText = `Feels like: ${res.feelslike}°F`
    temp.innerText = res.temp
    forweek(response,iscel)
  } else {
    tempMark.src = Cel
    feelslike.innerText = `Feels like: ${converttemp(res.feelslike)}°C`
    temp.innerText = converttemp(res.temp)
    forweek(response)
  }
  address.innerText = `${response.address}`
  description.innerText = `${response.description}`
}

function forweek(response,a) {
  let num = 1
  rightSide.forEach((el) => {
    if (num < response.days.length) {
      const newIcon = el.querySelector('img')
      const date = el.querySelector('.date')
      const dateTemp = el.querySelector('.date-temp')

      import(`../icons/${response.days[num].icon}.svg`)
        .then((data) => {
          newIcon.src = data.default
        })
        .catch((error) => {
          console.error('error', error)
        })
      const newDate = new Date(response.days[num].datetime).getDay()
      date.innerText = `${days[newDate]}`
      if(a){dateTemp.innerText = `${response.days[num].temp}°F`} else {
      dateTemp.innerText = `${converttemp(response.days[num].temp)}°C`
      }
      console.log(response.days[num].icon)
      num++
    }
  })
}

function converttemp(a) {
  if (iscel) {
    return Math.round((a - 32) * (5 / 9))
  } else {
    return a
  }
}

export { main }
