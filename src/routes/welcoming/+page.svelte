<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import { redirect } from '@sveltejs/kit';
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	const string = 'THIS IS NOT A DATING APP';
	let confirm = $state('');

	if (!page.data.session) {
		redirect(303, '/');
	}
</script>

<form
	action="/home"
	onsubmit={(event) => {
		event.preventDefault();
		if (confirm === string && browser) {
			goto('/home');
		}
	}}
>
	<p>
		Type this: <span>{string}</span>
	</p>
	<div class="container">
		<TextInput type="text" bind:value={confirm} placeholder={null} />
		<p style={`color: ${confirm.toUpperCase() !== string ? 'var(--ctp-red)' : 'var(--ctp-green)'}`}>
			{confirm.toUpperCase() === string ? 'all set!' : 'type it in to confirm!'}
		</p>
		<Button type="primary" onclick={null}>Confirm</Button>
	</div>
</form>

<style>
	span {
		color: var(--ctp-red);
		font-weight: bold;
	}

	p {
		font-size: 2em;
	}

	.container {
		place-items: center;
	}

	form {
		text-align: center;
	}
</style>
