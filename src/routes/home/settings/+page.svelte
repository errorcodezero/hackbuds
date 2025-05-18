<script>
	import Button from '$lib/components/Button.svelte';
</script>

<div class="container">
	<h1>Settings</h1>
	<Button type="danger" onclick={() => alert("you'll never leave(for now at least)")}
		>Delete account</Button
	>
</div>

<style>
	.container {
		text-align: center;
	}
</style>
