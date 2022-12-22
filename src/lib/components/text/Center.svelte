<script lang="ts">
	export let title: string;
	export let paragraph: string;
</script>

<section>
	<h1>{title}</h1>
	<p>{paragraph}</p>

	<slot />
</section>

<style lang="scss">
	section {
		min-height: 50vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 2rem;
		text-align: center;
		h1 {
			font-family: 'Alfa Slab One';
			font-size: 2em;
		}
		p {
			margin: 2em 0;
			max-width: 700px;
		}
	}
</style>
