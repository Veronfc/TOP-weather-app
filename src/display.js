import './styles.css'

const header = document.createElement('header')

const cityContainer = document.createElement('div')
cityContainer.className = 'city-container'

const setCity = document.createElement('button')
setCity.id = 'set-city'
setCity.title = 'Set a default city for whenever you load The Weatherman'
setCity.innerHTML = '<span class="material-symbols-outlined">save</span>'

const inputCity = document.createElement('input')
inputCity.id = 'input-city'
inputCity.name = 'input-city'
inputCity.placeholder = 'CITY NAME'
inputCity.title = 'Press enter to search'
inputCity.classList.add('input-city')

const main = document.createElement('main')

const days = document.createElement('div')
days.className = 'days'

for (let i = 1; i <= 3; i++) {
  const day = document.createElement('div')
  day.className = 'day'
  day.innerText = `Day ${i}`
  days.appendChild(day)
}

main.appendChild(days)

const hours = document.createElement('div')
hours.className = 'hours'

for (let i = 1; i <= 12; i++) {
  const hour = document.createElement('div')
  hour.className = 'hour'
  hour.innerText = `Hour ${i}`
  hours.appendChild(hour)
}

main.appendChild(hours)

const footer = document.createElement('footer')
footer.innerHTML = 'Created by <a href="https://github.com/Veronfc">Veronfc</a>'

cityContainer.appendChild(inputCity)
cityContainer.appendChild(setCity)
header.appendChild(cityContainer)
document.body.appendChild(header)
document.body.appendChild(main)
document.body.appendChild(footer)