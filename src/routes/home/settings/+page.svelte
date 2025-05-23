<script>
	import Button from '$lib/components/Button.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import { signOut } from '@auth/sveltekit/client';

	let description = $state('');
</script>

<div class="container">
	<h1>Settings</h1>
	<div class="edit">
		<Button
			type="danger"
			onclick={() => {
				fetch('/api/deleteUser', { method: 'DELETE' });
				signOut();
			}}>Delete account</Button
		>
		<!-- TODO: make an actual settings edit page -->
		<form
			onsubmit={(event) => {
				event.preventDefault();
			}}
		>
			<TextInput placeholder="Description" type="text" value={description} />
			<Button onclick={null} type="primary">Change description</Button>
		</form>
		<form
			onsubmit={(event) => {
				event.preventDefault();
			}}
		>
			<TextInput placeholder="Tags(space between each)" type="text" value={description} />
			<Button onclick={null} type="primary">Change tags</Button>
		</form>
		<form
			onsubmit={(event) => {
				event.preventDefault();
			}}
		>
			<TextInput placeholder="Colors(space between each)" type="text" value={description} />
			<Button onclick={null} type="primary">Change colors</Button>
		</form>
	</div>
</div>

<style>
	.container {
		text-align: center;
	}
</style>
