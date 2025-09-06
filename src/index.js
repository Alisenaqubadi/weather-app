import './css/style.css'
import './css/header.css'
import './css/container.css'
import { main as container } from './js/container'

async function getDate(city, regionName) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${regionName}?key=RYVF4R37Y79NDYLDYNXVYBM75`
  const resopnse = await fetch(url, { mode: 'cors' })
  resopnse.json().then((resopnse) => {
    console.log(resopnse.currentConditions)
    container(resopnse.currentConditions)
  })
}

async function getCity(useCallback) {
  const res = await fetch('http://ip-api.com/json/')
  let city
  let regionName
  res
    .json()
    .then(async (data) => {
      console.log('IP:', data.query)
      console.log('City:', data.city) // Tashkent
      console.log('Region:', data.regionName) // Tashkent
      console.log('Country:', data.country)
      city = await data.city
      regionName = await data.regionName
    })
    .then(() => {
      useCallback(city, regionName)
    })
}

getCity(getDate)
