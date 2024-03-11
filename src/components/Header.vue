<!-- @format -->

<script setup></script>

<template>
	<header>
		<p>The Weatherman</p>
	</header>
</template>

<style lang="postcss">
	header {
		@apply mb-4 flex h-44 w-full flex-col items-center justify-between p-4 px-8 xs:h-32 md:h-20 md:flex-row;

		p {
			@apply text-center font-rts text-5xl text-white;
		}

		div {
			@apply flex w-min gap-1 overflow-hidden rounded-r-md font-fin;

			input {
				@apply h-8 rounded-l-md border border-black px-2 focus:outline-active;
			}

			button {
				@apply border border-black bg-white px-2 text-black duration-300 hover:bg-active hover:text-black;
			}
		}
	}
</style>
