<script lang="ts">
	import { signOut } from '@auth/sveltekit/client';
	import Icon from '@iconify/svelte';
</script>

<div id="container">
	<nav>
		<a href="/home" class="link"><Icon icon="mdi:home" width={40} height={40} /></a>
		<a href="/home/settings" class="link"><Icon icon="mdi:settings" width={40} height={40} /></a>
		<button
			class="link"
			onclick={async () => {
				await signOut();
			}}><Icon icon="mdi:logout" width={40} height={40} /></button
		>
	</nav>
</div>

<style>
	.link {
		color: var(--ctp-mauve);
		transition-duration: 0.65s;
	}

	#container {
		place-items: center;
	}

	nav {
		background-color: var(--ctp-surface0);
		border-radius: 2em;
		padding-left: 1em;
		padding-right: 1em;
		padding-top: 0.3em;
		margin-bottom: 0.5em;
	}

	.link:hover {
		color: var(--ctp-blue);
		transition-duration: 0.65s;
	}

	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		cursor: pointer;
		outline: inherit;
	}
</style>
