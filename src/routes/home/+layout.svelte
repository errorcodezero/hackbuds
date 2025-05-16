<script lang="ts">
	import { page } from '$app/state';
	import { redirect } from '@sveltejs/kit';

	let { children } = $props();

	if (page.data.session) {
		redirect(302, '/');
	}
</script>

{@render children()}
