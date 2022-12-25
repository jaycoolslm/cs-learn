<script lang="ts">
	import Topic from "$lib/components/card/learn/Topic.svelte";
	/** @type {import('./$types').PageData} */
	export let data;
	const { topics } = data;
</script>

<h1>Topics</h1>

<main class="topics">
	{#each topics as { data }}
		<Topic {data} />
	{/each}
</main>

<style lang="scss">
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: flex-start;
		gap: 2rem;
	}
</style>
