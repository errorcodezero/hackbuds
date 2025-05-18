<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	const {
		children,
		type = 'primary',
		onclick = null
	}: {
		children: any;
		type: 'primary' | 'secondary' | 'danger';
		onclick: MouseEventHandler<HTMLButtonElement> | null | undefined;
	} = $props();
</script>

{#if type == 'primary'}
	<button {onclick} class="primary">{@render children()}</button>
{:else if type == 'secondary'}
	<button {onclick} class="secondary">{@render children()}</button>
{:else if type == 'danger'}
	<button {onclick} class="danger">{@render children()}</button>
{/if}

<style>
	button {
		padding-left: 1em;
		padding-right: 1em;
		padding-top: 0.5em;
		padding-bottom: 0.5em;
		background-color: var(--ctp-blue);
		border: none;
		border-radius: 2em;
		transition-duration: 0.65s;
		cursor: pointer;
		font-size: 1em;
	}

	button:hover {
		transition-duration: 0.65s;
	}

	.primary {
		background-color: var(--ctp-blue);
	}
	.primary:hover {
		background-color: var(--ctp-sapphire);
	}

	.secondary {
		background-color: var(--ctp-pink);
	}
	.secondary:hover {
		background-color: var(--ctp-mauve);
	}

	.danger {
		background-color: var(--ctp-red);
	}
	.danger:hover {
		background-color: var(--ctp-maroon);
	}
</style>
