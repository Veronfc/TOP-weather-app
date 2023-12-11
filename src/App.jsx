/** @format */

import { useState } from 'react'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'

function App() {
	const defaultCity = localStorage.getItem('default_city')

	const [city, setCity] = useState(defaultCity)

	const change = e => {
		setCity(e.target.value)
	}

	return (
		<>
			<Header
				city={city}
				change={change}
			/>
			<Main />
			<Footer />
		</>
	)
}

export { App }
