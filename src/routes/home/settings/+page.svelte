<script>
	import { goto, invalidate, invalidateAll } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import { signOut } from '@auth/sveltekit/client';
</script>

<div class="container">
	<h1>Settings</h1>
	<Button
		type="danger"
		onclick={() => {
			fetch('/api/deleteUser', { method: 'DELETE' });
			signOut();
		}}>Delete account</Button
	>
</div>

<style>
	.container {
		text-align: center;
	}
</style>
