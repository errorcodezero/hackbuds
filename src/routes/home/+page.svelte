<script lang="ts">
	import { page } from '$app/state';
	import IconButton from '$lib/components/IconButton.svelte';
	import Card from '$lib/components/Card.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import Icon from '@iconify/svelte';
</script>

<div id="container">
	<Card>
		<div class="card">
			<h1>
				{page.data.session?.user?.name}
				<a id="github_link" href="https://github.com/errorcodezero"
					><Icon icon="mdi:link" width={25} height={25} /></a
				>
			</h1>
			<img
				src={page.data.session?.user?.image}
				alt={`Profile picture of ${page.data.session?.user?.name}`}
				width={350}
			/>
			<p>C++ and rust fanatic. HATES javascript with a passion.</p>
			<div class="buttons">
				<IconButton tooltip="Like" href="" type="heart" onclick={null} />
				<IconButton tooltip="Dislike" href="" type="cross" onclick={null} />
				<IconButton
					tooltip={`${page.data.session?.user?.name}'s Github`}
					href="https://github.com/errorcodezero/hackbuds"
					type="code"
					onclick={null}
				/>
				<IconButton
					tooltip={`${page.data.session?.user?.name}'s Hackatime`}
					href="https://hackatime.hackclub.com"
					type="schedule"
					onclick={null}
				/>
			</div>
			<div class="tags">
				<Tag color="blue">C++</Tag>
				<Tag color="orange">Rust</Tag>
				<Tag color="yellow">Svelte</Tag>
				<Tag color="red">Astro</Tag>
			</div>
		</div>
	</Card>
</div>

<svelte:head>
	<title>Home - HackBuds</title>
</svelte:head>

<style>
	#github_link {
		padding-top: 1em;
		color: var(--ctp-blue);
		text-decoration: none;
	}

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

	.tags {
		display: flex;
		gap: 0.5em;
	}
</style>
