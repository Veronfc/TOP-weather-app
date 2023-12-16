/** @format */

// date
// humidity
// temp-max
// temp-min
// description
// main
// wind-speed
import { currentDate } from './weather'

function Hour() {
	return (
		<article>
			<div>time</div>
			<div>temp min</div>
			<div>temp max</div>
			<div>main</div>
		</article>
	)
}

function Main() {
	return (
		<main className='no-scrollbar grid h-[calc(100vh-12.5rem)] w-screen grid-rows-[20rem_3rem_1fr] items-start justify-center overflow-y-auto bg-c1 p-8 pt-4 xs:h-[calc(100vh-9.5rem)] md:h-[calc(100vh-7rem)]'>
			<section className='w-[calc(100vw-4rem)] max-w-[50rem]'>
				<div className='h-80 w-full rounded-2xl bg-c2 p-2'>
					<div className='flex h-12 items-center justify-between gap-2 px-2 font-gsl text-3xl text-c1'>
						<h2>{currentDate().weekday}</h2>
						<h2 className='whitespace-nowrap'>{currentDate().date}</h2>
					</div>
				</div>
				<div>
					<button></button>
					<div></div>
					<button></button>
				</div>
			</section>
			<section>//TODO add vertical scroll for every 3 hours</section>
		</main>
	)
}

export { Main }
