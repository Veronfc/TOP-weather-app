/** @format */

import { getWeather } from './weather'

function Header({ city, change }) {
	return (
		<header className='flex h-[10.5rem] w-screen flex-wrap items-start justify-center gap-3 overflow-x-hidden bg-c1 py-4 text-center font-als text-c2 xs:h-[7.5rem] md:h-20 md:items-center md:gap-24 md:px-4 md:py-0'>
			<h1 className='-mr-4 text-5xl tracking-[1rem] md:text-6xl'>
				THE WEATHERMAN
			</h1>
			<div className='flex'>
				<input
					className='rounded-l-md px-2 font-gsl text-xl font-semibold text-c2 placeholder:font-normal placeholder:text-c2'
					type='text'
					placeholder='City name'
					onChange={change}></input>
				<button
					className='material-symbols-outlined bg-white px-2 text-xl text-c2 duration-200 hover:bg-c2 hover:text-c3'
					title='Search for weather data'
					onClick={() =>
						getWeather(city, 'metric').then(res => console.log(res))
					}>
					search
				</button>
				<button
					className={buttonClass + ' material-symbols-outlined rounded-r-md'}
					title='Save city as default'
					onClick={() => {
						localStorage.setItem('default_city', city)
					}}>
					save
				</button>
			</div>
		</header>
	)
}

export { Header }
