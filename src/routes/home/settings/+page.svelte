<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Dialog from '$lib/components/Dialog.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import { signOut } from '@auth/sveltekit/client';

	let description = $state('');
	let link = $state('');
	let dialog: HTMLDialogElement | undefined = $state();
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
		<TextInput placeholder="Description" type="text" bind:value={description} />
		<Button
			onclick={async () =>
				await fetch('/api/updateUser', {
					method: 'POST',
					body: JSON.stringify({
						description: description
					})
				})}
			type="primary">Change description</Button
		>
		<TextInput placeholder="Link" type="text" bind:value={link} />
		<Button
			onclick={async () =>
				await fetch('/api/updateUser', {
					method: 'POST',
					body: JSON.stringify({
						link: link
					})
				})}
			type="primary">Change link</Button
		>
		<Button
			type="primary"
			onclick={() => {
				dialog?.showModal();
			}}>Add Tag</Button
		>
	</div>
	<Dialog bind:dialog>
		<form onsubmit={(event) => event.preventDefault()}>
			<TextInput value="" type="text" placeholder="Tag Name" />
			<TextInput value="" type="text" placeholder="Color" />
		</form>
	</Dialog>
</div>

<style>
	.container {
		text-align: center;
	}
</style>
