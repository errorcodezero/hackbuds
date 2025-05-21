<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import { redirect } from '@sveltejs/kit';

	const string = 'THIS IS NOT A DATING APP';
	let confirm = $state('');
</script>

<form
	onsubmit={(event) => {
		event.preventDefault();
		fetch('/api/agreeToTerms', { method: 'POST' });
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
		<Button
			type="primary"
			onclick={() => {
				if (confirm.toUpperCase() === string) redirect(302, '/home');
			}}>Confirm</Button
		>
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
