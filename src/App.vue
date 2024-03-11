<!-- @format -->

<script setup>
	import Header from './components/Header.vue'
	import Forecast from './components/Forecast.vue'
</script>

<template>
	<Header />
	<main>
		<Forecast />
	</main>
</template>

<style lang="postcss" scoped>
	main {
		@apply flex flex-col gap-2 p-8 pt-0 lg:flex-row;
		scrollbar-gutter: stable both-edges;
	}
</style>
