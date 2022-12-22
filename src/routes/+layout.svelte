<script lang="ts">
	import Nav from "$lib/components/navigation/Nav.svelte";
	import { page } from "$app/stores";

	let current = $page.route.id;
	$: {
		current = $page.route.id!.split("/")[1]!;
	}
</script>

<Nav />
<main style="margin-top: var(--nav-height);">
	<nav>
		<ul>
			<a class:active={current === ""} href="/">
				<i class="fa-sharp fa-solid fa-house" />
				<li>Home</li>
			</a>
			<a class:active={current === "topics"} href="/topics">
				<i class="fa-solid fa-book-open" />
				<li>Topics</li>
			</a>
			<a class:active={current === "host"} href="/host">
				<i class="fa-solid fa-circle-plus" />
				<li>Host</li>
			</a>
			<a class:active={current === "teachers"} href="/teachers">
				<i class="fa-solid fa-chalkboard-user" />
				<li>Teachers</li>
			</a>
			<a class:active={current === "community"} href="/community">
				<i class="fa-solid fa-user-group" />
				<li>Community</li>
			</a>
		</ul>
	</nav>
	<div>
		<slot />
	</div>
</main>

<style lang="scss">
	nav {
		height: calc(100vh - var(--nav-height));
		// width: 100%;
		left: 0;
		position: fixed;
		background-color: white;
		ul {
			padding: 2rem 1rem;
			list-style: none;

			a {
				display: flex;
				align-items: center;
				text-decoration: none;
				color: black;
				border-radius: 1rem;
				transition: 0.2s ease-in-out;
				padding: 1rem;
				margin-bottom: 1rem;
				&:hover {
					color: var(--orange);
				}
				i {
					margin-right: 1rem;
				}
				li {
				}
				&.active {
					background-color: var(--orange);
					color: white;
				}
			}
		}
	}

	div {
		margin-left: 195px;
		padding: 2rem;
		background-color: #eee;
	}

	@media screen and (max-width: 768px) {
		nav {
			a {
				justify-content: center;
				i {
					margin-right: 0 !important;
				}
				li {
					display: none;
				}
			}
		}
		div {
			margin-left: 84px;
		}
	}
</style>
