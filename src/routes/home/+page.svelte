<script lang="ts">
	import { page } from '$app/state';
	import IconButton from '$lib/components/IconButton.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<div id="container">
	<Card>
		<div class="card">
			<h1>{page.data.session?.user?.name}</h1>
			<img
				src={page.data.session?.user?.image}
				alt={`Profile picture of ${page.data.session?.user?.name}`}
				width={350}
			/>
			<p>C++ and rust fanatic. HATES javascript with a passion.</p>
			<div class="buttons">
				<IconButton href="" type="heart" onclick={null} />
				<IconButton href="" type="cross" onclick={null} />
				<IconButton href="https://github.com/errorcodezero/hackbuds" type="code" onclick={null} />
			</div>
		</div>
	</Card>
</div>

<svelte:head>
	<title>Home - HackBuds</title>
</svelte:head>

<style>
	.card {
		place-items: center;
	}

	#container {
		place-items: center;
	}

	img {
		border-radius: 1.5em;
	}

	.buttons {
		display: flex;
		gap: 1em;
	}
</style>
