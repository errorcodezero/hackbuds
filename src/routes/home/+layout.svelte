<script lang="ts">
	import { page } from '$app/state';
	import { redirect } from '@sveltejs/kit';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();

	if (!page.data.session) {
		redirect(303, '/');
	}
</script>

<Navbar />
{@render children()}
