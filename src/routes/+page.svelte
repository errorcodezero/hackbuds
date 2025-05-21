<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';
	import { signIn } from '@auth/sveltekit/client';
</script>

<a href="https://hackclub.com"><img id="flag" src="/flag.svg" alt="Hackclub Flag Logo" /></a>
<main>
	<h1>Hackbuds</h1>
	<p>Find a programming buddy and build projects together!</p>
	{#if !page.data.session}
		<Button type="primary" onclick={() => signIn('slack')}>Sign In With slack</Button>
	{:else}
		<a href="/home"><Button onclick={null} type="primary">Open Dashboard</Button></a>
	{/if}
</main>

<svelte:head>
	<title>Find a programming buddy! - HackBuds</title>
</svelte:head>

<style>
	#flag {
		position: absolute;
		top: 0;
		left: 0;
		width: 14em;
		visibility: hidden;
	}

	@media (min-width: 750px) {
		#flag {
			visibility: visible;
		}
	}

	main {
		text-align: center;
		line-height: 1em;
		padding: 0em;
		margin: 0em;
	}
</style>
