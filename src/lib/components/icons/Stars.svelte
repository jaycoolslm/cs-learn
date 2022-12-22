<script lang="ts">
	export let stars: number = 5;
	let remainingStars: number = 5 - stars;
</script>

<div>
	{#each Array(stars) as _}
		<i class="fa-solid fa-star" />
	{/each}
	{#each Array(remainingStars) as _}
		<i class="fa-regular fa-star" />
	{/each}
</div>

<style>
	i,
	i::before,
	i::after {
		padding: 0 !important;
		color: goldenrod;
	}
</style>
