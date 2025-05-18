<script lang="ts">
	import '../app.css';
	import { redirect } from '@sveltejs/kit';

	let { children } = $props();
</script>

{@render children()}
