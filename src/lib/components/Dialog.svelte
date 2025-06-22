<script>
	let { dialog = $bindable(), children } = $props();
</script>

<dialog bind:this={dialog}>
	{@render children()}
</dialog>

<style>
	dialog {
		background-color: var(--ctp-surface0);
		color: var(--ctp-text);
		border: none;
	}
</style>
