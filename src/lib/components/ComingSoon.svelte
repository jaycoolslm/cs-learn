<main>
	<h1 class="loading">Page coming soon</h1>
</main>

<style lang="scss">
	main {
		min-height: 100vh;
		position: relative;
		overflow-x: hidden;

		h1 {
			// position: absolute;
			// text-align: right;
			display: inline-block;
			margin: 20vh 0;
			margin-left: 50%;
			transform: translateX(-50%);
		}
	}

	.loading:after {
		overflow: hidden;
		display: inline-block;
		vertical-align: bottom;
		-webkit-animation: ellipsis steps(4, end) 900ms infinite;
		animation: ellipsis steps(4, end) 900ms infinite;
		content: '\2026'; /* ascii code for the ellipsis character */
		width: 0px;
	}

	@keyframes ellipsis {
		to {
			width: 40px;
		}
	}

	@-webkit-keyframes ellipsis {
		to {
			width: 40px;
		}
	}
</style>
