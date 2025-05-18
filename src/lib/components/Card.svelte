<script lang="ts">
	const { children } = $props();
</script>

<div class="card">
	{@render children()}
</div>

<style>
	.card {
		border: solid var(--ctp-surface0) 0.1em;
		border-radius: 1em;
		padding: 1.4em;
		background-color: var(--ctp-mantle);
	}
</style>
