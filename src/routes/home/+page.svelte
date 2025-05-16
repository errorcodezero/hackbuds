<script lang="ts">
	import { page } from '$app/state';

	console.log(page.data);
	console.log(page.data.session);
</script>

<h1>testing this {page.data}</h1>

<h1>
	e {page.data.session?.expires}
</h1>
