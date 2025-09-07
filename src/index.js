import './css/style.css'
import './css/header.css'
import './css/container.css'
import { main as container } from './js/container'
import { main as header } from './js/header'

const buttonfah = document.querySelector('.fah')
const buttoncel = document.querySelector('.cel')
const a = true;
const b = false;

async function getDate(city) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=PAYT2JBQ4R9LA9ZZ5BSEC9VG5`
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();

  console.log(data.currentConditions);
  console.log(data);
  container(data.currentConditions, data);

  buttonfah.addEventListener("click", () => {
    container(data.currentConditions, data, a);
  });
  buttoncel.addEventListener("click", () => {
    container(data.currentConditions, data, b);
  });
}

async function getCity(useCallback) {
  const res = await fetch('http://ip-api.com/json/')
  let city
  res
    .json()
    .then(async (data) => {
      console.log('IP:', data.query)
      console.log('City:', data.city) // Tashkent
      console.log('Region:', data.regionName) // Tashkent
      console.log('Country:', data.country)
      city = await data.city
    })
    .then(() => {
      useCallback(city,)
    })
}

getCity(getDate)
header();




export {
  getDate,
}