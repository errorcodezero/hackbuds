<script lang="ts">
	import { page } from '$app/state';
	import { signIn } from '@auth/sveltekit/client';
</script>

<h1>testing this {page.data.session?.user?.id}</h1>
<button onclick={() => signIn()}>Sign in with slack</button>
