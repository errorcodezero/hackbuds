<script lang="ts">
	// more types coming soon probably
	const { children, type = 'primary', onclick = null, href = '' } = $props();
</script>

{#if href == ''}
	{#if type == 'primary'}
		<button {onclick} class="primary">{@render children()}</button>
	{/if}
{:else}
	<a {href}><button {onclick} class="primary">{@render children()}</button></a>
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
</style>
