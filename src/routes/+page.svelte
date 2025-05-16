<script lang="ts">
	import { page } from '$app/state';
	import { redirect } from '@sveltejs/kit';
	import { SignIn } from '@auth/sveltekit/components';

	console.log(page.data);
	console.log(page.data.session);

	// if (page.data.session) {
	// 	redirect(302, '/home');
	// }
</script>

<h1>Hackbuds</h1>
<p>Find a programming buddy!</p>
