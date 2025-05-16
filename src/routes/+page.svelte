<script lang="ts">
	import { page } from '$app/state';
	import { SignIn } from '@auth/sveltekit/components';

	console.log(page.data);
	console.log(page.data.session);
</script>

{#if page.data.session}
	<h1>authenticated</h1>
{:else}
	<SignIn provider="slack" />
{/if}
