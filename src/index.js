const key = '14bee89d094d41f59e9101311231910'

function checkStorage() {
  let storage;
  try {
    storage = window['localStorage'];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") && storage && storage.length !== 0);
  }
}

async function getWeather(city) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3`, { mode: 'cors' });

    const weather = await response.json();

    if (!response.ok) {
      alert(weather.error.message)
    } else {
      console.log(weather.forecast.forecastday[0])
    }
  } catch (e) { }
}

const inputCity = document.getElementById('input-city')
inputCity.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    getWeather(inputCity.value)
  }
})

const setCity = document.getElementById('set-city')
setCity.addEventListener('click', () => {
  localStorage.setItem('default_city', inputCity.value)
})

if (checkStorage()) {
  try {
    const city = localStorage.getItem('default_city')
    inputCity.value = city
    getWeather(city)
  } catch(e) {
    inputCity.value = 'Durban'
    getWeather('Durban')
  }
}