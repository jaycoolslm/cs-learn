<script lang="ts">
    let topics: any[] = [];
    // const fetchTopics = (() => getCollection('topics'))();
    // fetchTopics.then((res) => (topics = res));
</script>

<main>
    <!-- <Center
		title="What is the P2P network?"
		paragraph="Nostrud pariatur eu tempor exercitation eu adipisicing do reprehenderit labore. Nostrud pariatur eu tempor exercitation eu adipisicing do reprehenderit labore."
	>
		<div style="display: flex; align-items: flex-start">
			<div class="dropdown">
				<button class="dropbtn btn-1"
					>Topics
					<i class="fa fa-caret-down" />
				</button>
				<div class="dropdown-content ">
					{#each topics as { data, id }}
						<a href="learn/{id}" value={data.name}>{data.name}</a>
					{/each}
				</div>
			</div>

			<p style="margin: 0.5rem 1rem">or</p>
			<div>
				<button style="display: block;" class="btn-2">Host your own topic</button>
				<a href="/">Why host?</a>
			</div>
		</div>
	</Center>

	<Carousel>
		{#if topics.length}
			<div class="wrap-space-even">
				{#each topics as topic}
					<Topic data={topic.data} id={topic.id} />
				{/each}
			</div>
		{:else}
			<Loading />
		{/if}
	</Carousel> -->
</main>

<style lang="scss">
    .dropdown {
        float: left;
        overflow: hidden;
    }

    .dropdown .dropbtn {
        font-size: 17px;
        border: none;
        outline: none;
        font-family: inherit;
        margin: 0;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown-content a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }

    .dropdown-content a:hover {
        background-color: #ddd;
        color: var(--green);
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }
</style>
