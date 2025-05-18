<script lang="ts">
	const {
		children,
		color
	}: { children: any; color: 'blue' | 'red' | 'green' | 'orange' | 'yellow' | 'white' } = $props();
</script>

{#if color == 'blue'}
	<p class="blue">{@render children()}</p>
{:else if color == 'orange'}
	<p class="orange">{@render children()}</p>
{:else if color == 'red'}
	<p class="red">{@render children()}</p>
{:else if color == 'green'}
	<p class="green">{@render children()}</p>
{:else if color == 'yellow'}
	<p class="yellow">{@render children()}</p>
{:else if color == 'white'}
	<p class="white">{@render children()}</p>
{/if}

<style>
	p {
		color: var(--ctp-text);
		background-color: var(--ctp-crust);
		border-radius: 4em;
		padding: 0.5em;
		padding-bottom: 0.2em;
		padding-top: 0.2em;
		font-size: 1em;
		transition-duration: 0.65s;
	}

	p:hover {
		transition-duration: 0.65s;
	}

	p.blue {
		background-color: var(--ctp-blue);
		color: var(--ctp-surface0);
	}
	p.green {
		background-color: var(--ctp-green);
		color: var(--ctp-surface0);
	}
	p.orange {
		background-color: var(--ctp-peach);
		color: var(--ctp-surface0);
	}
	p.red {
		background-color: var(--ctp-red);
		color: var(--ctp-surface0);
	}
	p.yellow {
		background-color: var(--ctp-yellow);
		color: var(--ctp-surface0);
	}
	p.white {
		background-color: var(--ctp-surface0);
		color: var(--ctp-text);
	}

	p.blue:hover {
		background-color: var(--ctp-sapphire);
		color: var(--ctp-surface0);
	}
	p.green:hover {
		background-color: var(--ctp-teal);
		color: var(--ctp-surface0);
	}
	p.orange:hover {
		background-color: var(--ctp-flamingo);
		color: var(--ctp-surface0);
	}
	p.red:hover {
		background-color: var(--ctp-maroon);
		color: var(--ctp-surface0);
	}
	p.yellow:hover {
		background-color: var(--ctp-rosewater);
		color: var(--ctp-surface0);
	}
	p.white:hover {
		background-color: var(--ctp-surface1);
		color: var(--ctp-text);
	}
</style>
