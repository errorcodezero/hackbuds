<script>
	import Button from '$lib/components/Button.svelte';
</script>

<form action="/" onsubmit={null}>
	<p>
		Type this: <span
			>THIS IS NOT A DATING APP. IF YOU COME INTO TRYING TO DATE THEN YOU WILL BE BANISHED</span
		>
	</p>
	<input type="text" />
	<Button type="primary" onclick={null}>Confirm</Button>
</form>

<style>
	span {
		color: var(--ctp-blue);
	}
</style>
