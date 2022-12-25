<script lang="ts">
	import Stars from "$lib/components/icons/Stars.svelte";
	import { Datepicker } from "svelte-calendar";
	import dayjs from "dayjs";

	let store: any;

	const theme = {
		calendar: {
			// width: "400px;",
			shadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
			colors: {
				background: {
					highlight: "#f9ac66",
				},
			},
		},
	};

	/** @type {import('./$types').PageData} */
	export let data;
	const { teacher } = data;

	const lessons = [
		{
			name: "Intro",
			date: "2021-09-01T10:00:00.000Z",
			time: "10:00 - 10:30",
		},
		{
			name: "Mainnet",
			date: "2021-09-08T10:00:00.000Z",
			time: "10:00 - 10:30",
		},
		{
			name: "Smart contracts",
			date: "2021-09-015T10:00:00.000Z",
			time: "10:00 - 10:30",
		},
	];
</script>

<main>
	<section class="profile-card">
		<div class="profile">
			<img src={teacher.image.src} alt={teacher.image.alt} />
			<span>
				<i class="dot" />
				<h2>{teacher.name}</h2>
			</span>
			<h4>{teacher.title}</h4>
			<a href="mailto:{teacher.email}" class="email">
				{teacher.email || "enyjh15@nottingham.ac.uk"}
			</a>
			<p class="bio">
				{teacher.description}
			</p>
			<div class="reviews">
				<p>5.0</p>
				<Stars stars={5.0} />
				<i />
				<a href="#">See reviews</a>
				<!-- <span>{teacher.reviews}</span> -->
			</div>
		</div>
	</section>

	<section class="lessons">
		<div>
			<span class="text">
				<h3>Upcoming lessons</h3>
				<span class="view-all">
					<a href="#">View all</a>

					<i class="fa-solid fa-chevron-right" />
				</span>
			</span>
			{#each lessons as lesson}
				<div class="lesson">
					<h4>{lesson.name}</h4>
					<p>{lesson.date}</p>
					<p>{lesson.time}</p>
				</div>
			{/each}
		</div>
		<div>
			<h3>Book a 1-1 session with {teacher.name}</h3>
			<Datepicker {theme} bind:store let:key let:send let:receive>
				<button in:receive|local={{ key }} out:send|local={{ key }}>
					{#if $store?.hasChosen}
						{dayjs($store.selected).format("ddd MMM D, YYYY")}
					{:else}
						Pick a Date
					{/if}
				</button>
			</Datepicker>
			<!-- <InlineCalendar {theme} /> -->
		</div>
	</section>
</main>

<style lang="scss">
	$displacement: 4rem;

	main {
		display: flex;
		align-items: flex-start;
		justify-content: space-evenly;
		flex-wrap: wrap;
		gap: 2rem;
		.profile-card {
			background-color: white;
			width: calc(400px + 4rem);
			margin-top: $displacement;
			.profile {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 1.5rem;
				transform: translateY(-$displacement);

				img {
					border-radius: 100%;
					height: 25vh;
				}
				span {
					display: flex;
					align-items: center;
					gap: 1rem;
					.dot {
						height: 0.5rem;
						width: 0.5rem;
						border-radius: 100%;
						background-color: #00a67e;
					}
				}
				a.email {
					color: var(--orange);
				}
				p.bio {
					text-align: center;
					max-width: 500px;
					margin: 0 1rem;
				}
				.reviews {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 1rem;
					p {
						font-weight: 600;
					}
					i {
						height: 1rem;
						width: 1px;
						border-radius: 100%;
						background-color: #d3d3d3;
					}
					a {
						color: #d3d3d3;
						text-decoration: none;
					}
				}
			}
		}
		button {
			background: var(--orange);
			color: #fff;
			border: 0;
			padding: 18px 30px;
			font-size: 1.2em;
			border-radius: 6px;
			cursor: pointer;
		}
		.lessons {
			margin-top: $displacement;
			div {
				margin-bottom: 2rem;
				span.text {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 1rem;
					a,
					i {
						color: var(--orange);
						text-decoration: none;
					}
					i {
						margin-left: 0.5rem;
					}
				}

				h3,
				a,
				i {
					margin-bottom: 1rem;
				}

				span.view-all {
					position: relative;

					&::after {
						position: absolute;
						content: "";
						bottom: 0.5rem;
						left: 0;
						height: 2px;
						width: 0;
						background-color: var(--orange);
					}

					&:hover::after {
						width: 100%;
						transition: width 0.3s ease-in-out;
					}
				}

				.lesson {
					position: relative;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background-color: white;
					border-radius: 1rem;
					padding: 2rem;
					margin-bottom: 1rem;
					&::before {
						position: absolute;
						content: "";
						left: 0;
						width: 1rem;
						height: 100%;
						background-color: var(--orange);
						border-radius: 1rem 0 0 1rem;
					}
					h4 {
						font-weight: 600;
					}
				}
			}
		}
	}
</style>
