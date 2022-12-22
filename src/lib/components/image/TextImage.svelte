<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	interface Image {
		src: string;
		alt: string;
		style?: string;
	}
	export let image: Image;
	export let textLeft: boolean = false;
	export let justify: boolean = false;
</script>

<main style={textLeft ? 'flex-wrap:wrap-reverse' : 'flex-wrap:wrap'} class:justify>
	{#if textLeft}
		<!-- <Saos once animation={`from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95)`}> -->
		<div in:fly={{ y: 200, duration: 1600 }} class="slot slideup">
			<slot />
		</div>
		<!-- </Saos>
		<Saos once animation={`from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95)`}> -->
		<img
			in:fly={{ y: 200, duration: 1600 }}
			class=" slideup"
			style={image.style}
			src={image.src}
			alt={image.alt}
		/>
		<!-- </Saos> -->
	{:else}
		<!-- <Saos once animation={`from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95)`}> -->
		<img in:fly={{ y: 200, duration: 1600 }} style={image.style} src={image.src} alt={image.alt} />
		<!-- </Saos>

		<Saos once animation={`from-bottom 1s cubic-bezier(0.35, 0.5, 0.65, 0.95)`}> -->
		<div in:fly={{ y: 200, duration: 1600 }} class="slot slideup">
			<slot />
		</div>
		<!-- </Saos> -->
	{/if}
</main>

<style lang="scss">
	main {
		&.justify {
			text-align: justify;
		}
		// width: 100vw;
		display: flex;
		// flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;

		div,
		img {
			width: 80vw;
			max-width: 500px;
			margin: 50px;
		}
	}

	// :global {
	// 	.slideup {
	// 		animation: slideup 1s cubic-bezier(0.35, 0.5, 0.65, 0.95);
	// 	}
	// 	@keyframes slideup {
	// 		0% {
	// 			transform: translateY(16vh);
	// 		}
	// 		100% {
	// 			transform: translateY(0);
	// 		}
	// 	}
	// }
</style>
