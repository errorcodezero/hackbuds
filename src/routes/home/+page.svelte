<script lang="ts">
	import { page } from '$app/state';
	import IconButton from '$lib/components/IconButton.svelte';
	import Icon from '@iconify/svelte';
</script>

<main>
	<h1>John Doe</h1>
	<p>C++ and rust fanatic. HATES javascript with a passion.</p>
	<IconButton onclick={null} href="" type="heart" />
	<IconButton onclick={null} href="" type="cross" />
</main>
