<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import Icon from '@iconify/svelte';

	const {
		type = 'heart',
		onclick = null
	}: {
		type: 'heart' | 'cross';
		onclick: MouseEventHandler<HTMLButtonElement> | undefined | null;
		href: string;
	} = $props();

	let clicked = $state(false);
</script>

{#if type === 'heart'}
	<button
		class="heart"
		onclick={(event) => {
			clicked = !clicked;
			if (onclick) onclick(event);
		}}
	>
		{#if !clicked}
			<Icon width={40} height={40} icon="mdi:favorite-outline" />
		{:else}
			<Icon width={40} height={40} icon="mdi:favorite" />
		{/if}
	</button>
{:else if type === 'cross'}
	<button
		class="cross"
		onclick={(event) => {
			clicked = !clicked;
			if (onclick) onclick(event);
		}}
	>
		{#if !clicked}
			<Icon width={40} height={40} icon="mdi:close" />
		{:else}
			<Icon width={40} height={40} icon="mdi:close" />
		{/if}
	</button>
{/if}

<style>
	button {
		padding-left: 1em;
		padding-right: 1em;
		padding-top: 0.75em;
		padding-bottom: 0.5em;
		border: none;
		border-radius: 100%;
		transition-duration: 0.65s;
		cursor: pointer;
	}

	button:hover {
		transition-duration: 0.65s;
	}

	button.heart {
		color: var(--ctp-surface0);
		background-color: var(--ctp-lavender);
	}

	button.heart:hover {
		color: var(--ctp-base);
		background-color: var(--ctp-mauve);
	}

	button.cross {
		color: var(--ctp-surface0);
		background-color: var(--ctp-red);
	}

	button.cross:hover {
		color: var(--ctp-base);
		background-color: var(--ctp-maroon);
	}
</style>
