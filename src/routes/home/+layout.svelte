<script lang="ts">
	import { page } from '$app/state';
	import { redirect } from '@sveltejs/kit';

	let { children } = $props();

	if (!page.data.session) {
		redirect(303, '/');
	}

	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
{@render children()}
