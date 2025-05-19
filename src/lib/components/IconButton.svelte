<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import Icon from '@iconify/svelte';

	const {
		type = 'heart',
		onclick = undefined,
		tooltip
	}: {
		type: 'heart' | 'cross';
		onclick: MouseEventHandler<HTMLButtonElement> | undefined | null;
		href: string | null;
		tooltip: string | null | undefined;
	} = $props();

	let clicked = $state(false);
</script>

{#if type === 'heart'}
	<button
		title={tooltip}
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
		title={tooltip}
		class="cross"
		onclick={(event) => {
			clicked = !clicked;
			if (onclick) onclick(event);
		}}
	>
		{#if !clicked}
			<Icon width={40} height={40} icon="mdi:cancel" />
		{:else}
			<Icon width={40} height={40} icon="mdi:radio-button-checked" />
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
		background-color: var(--ctp-blue);
	}

	button.heart:hover {
		color: var(--ctp-base);
		background-color: var(--ctp-sapphire);
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
