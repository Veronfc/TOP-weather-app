<!-- @format -->

<script setup>
	import { useStorage } from '@vueuse/core'
	import { onMounted, reactive, Teleport } from 'vue'
	import moment from 'moment'

	const key = import.meta.env.VITE_API_KEY
	const defaultCity = useStorage('default_city', 'Durban')
	const data = reactive({
		city: defaultCity.value,
		units: 'metric',
		lat: 0,
		lon: 0,
		forecast: []
	})

	async function fetchGeo() {
		try {
			const response = await fetch(
				`http://api.openweathermap.org/geo/1.0/direct?q=${data.city}&limit=1&appid=${key}`
			)

			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			const geo = await response.json()

			data.lat = geo[0].lat
			data.lon = geo[0].lon

			fetchWeather()
		} catch (error) {
			console.log(error.message)
		}
	}

	async function fetchWeather() {
		try {
			const response = await fetch(
				`http://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&units=${data.units}&appid=${key}`
			)

			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			const weather = await response.json()

			data.forecast = weather.list
			console.log(weather)
		} catch (error) {
			console.log(error.message)
		}
	}

	function updateUnits() {
		if (data.units === 'metric') {
			data.units = 'imperial'
		} else {
			data.units = 'metric'
		}

		fetchGeo()
	}

	onMounted(() => fetchGeo())
</script>

<template>
	<Teleport to="header">
		<div>
			<input
				v-model="data.city"
				name="city"
			/>
			<button
				class="material-icons-round"
				@click="fetchGeo()"
			>
				search
			</button>
			<button @click="updateUnits()">
				{{ data.units.charAt(0).toUpperCase() + data.units.slice(1) }}
			</button>
			<button
				class="material-icons-round"
				title="Save as default city"
				@click="defaultCity = data.city"
			>
				save
			</button>
		</div>
	</Teleport>
	<section>
		<article v-for="forecast in data.forecast">
			<div>
				<p>
					{{
						Math.round(forecast.main.temp) +
						'\u00B0' +
						(data.units === 'metric' ? 'C' : 'F')
					}}
				</p>
				<p>
					{{ moment(forecast.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('HH:mm') }}
				</p>
				<p>
					{{
						moment(forecast.dt_txt, 'YYYY-MM-DD HH:mm:ss').format(
							'ddd, DD MMMM'
						)
					}}
				</p>
			</div>
			<div>
				<p>
					{{
						forecast.weather[0].description.charAt(0).toUpperCase() +
						forecast.weather[0].description.slice(1)
					}}
				</p>
				<img
					:src="`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`"
				/>
			</div>
		</article>
	</section>
</template>

<style lang="postcss" scoped>
	section {
		@apply flex h-[calc(100dvh-14rem)] w-[calc(100vw-4rem)] snap-y snap-mandatory flex-wrap items-center justify-start gap-6 overflow-y-auto xs:h-[calc(100dvh-11rem)] md:h-[calc(100dvh-8rem)];

		article:first-child {
			@apply min-h-[25%] w-full basis-full;

			div:first-child {
				@apply flex flex-col justify-center gap-1;

				p:first-child {
					@apply text-7xl xs:text-8xl;
				}

				p {
					@apply text-2xl;
				}
			}

			div:last-child {
				@apply flex flex-col items-end justify-end gap-2;

				p {
					@apply text-2xl;
				}

				img {
					@apply h-28 w-28 rounded-md bg-primary xs:h-32 xs:w-32;
				}
			}
		}

		article {
			background-image: linear-gradient(to right, #222831, #00adb5);
			@apply flex w-full snap-start justify-between scroll-smooth rounded-md border bg-white p-4 font-fin sm:basis-[calc((100vw-5.5rem)/2)] lg:basis-[calc((100vw-7rem)/3)] 2xl:basis-[calc((100vw-8.5rem)/4)];

			div:first-child {
				@apply flex flex-col gap-1 text-white;

				p:first-child {
					@apply text-5xl;
				}
			}

			div:last-child {
				@apply flex flex-col items-end gap-2 text-xl;

				p {
					@apply text-nowrap;
				}

				img {
					@apply h-16 w-16 rounded-md bg-primary;
				}
			}
		}
	}
</style>
