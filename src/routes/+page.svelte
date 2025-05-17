<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';
	import { signIn } from '@auth/sveltekit/client';
	import { redirect } from '@sveltejs/kit';
</script>

<a href="https://hackclub.com"><img id="flag" src="/flag.svg" alt="Hackclub Flag Logo" /></a>
<main>
	<h1>Hackbuds</h1>
	<p>Find a programming buddy and build projects together!</p>
	{#if !page.data.session}
		<Button onclick={() => signIn('slack')}>Sign in with slack</Button>
	{:else}
		<Button href="/home">Open Dashboard</Button>
	{/if}
</main>

<style>
	#flag {
		position: absolute;
		top: 0;
		left: 0;
		width: 14em;
	}

	main {
		text-align: center;
		line-height: 1em;
		padding: 0em;
		margin: 0em;
	}
</style>
