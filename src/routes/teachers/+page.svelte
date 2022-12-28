<script lang="ts">
	import Teacher from "$lib/components/card/learn/Teacher.svelte";
	/** @type {import('./$types').PageData} */
	export let data;
	const { teachers } = data;
	console.log(teachers);
</script>

<h1>Teachers</h1>

<main>
	{#each teachers as teacher}
		<Teacher {teacher} />
	{/each}
</main>

<style lang="scss">
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 2rem;
	}
</style>
