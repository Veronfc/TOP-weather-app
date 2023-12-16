/** @format */

async function getGeocode(city) {
	const geoRes = await fetch(
		`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=b69ec8534d1cf3acd1cc8366b0128940`,
	)
	const geocode = await geoRes.json()

	return geocode
}

async function getWeather(city, unit) {
	const geocode = await getGeocode(city)
	const weatherRes = await fetch(
		`http://api.openweathermap.org/data/2.5/forecast?lat=${geocode[0].lat}&lon=${geocode[0].lon}&units=${unit}&appid=b69ec8534d1cf3acd1cc8366b0128940`,
	)
	const weather = await weatherRes.json()

	return weather
}

function currentDate() {
	const locale =
		navigator.languages && navigator.languages.length
			? navigator.languages[0]
			: navigator.language

	const now = new Date()
	let weekday = now.toLocaleDateString(locale, { weekday: 'long' })
	let day = now.getDate()
	let month = now.toLocaleDateString(locale, { month: 'short' })
	let year = now.getFullYear()

	return { weekday: weekday, date: `${day} ${month} ${year}` }
}

export { getWeather, currentDate }
