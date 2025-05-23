<script lang="ts">
	import { page } from '$app/state';
	import IconButton from '$lib/components/IconButton.svelte';
	import Card from '$lib/components/Card.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	const populate = async () => {
		const data = await fetch('/api/getMatch', {
			method: 'GET'
		}).then((data) => data.json());
		console.log(data);
		tags = data.tags;
		description = data.description;
		image = data.image;
		name = data.name;
	};

	const like = async () => {
		populate();
	};
	const dislike = async () => {
		populate();
	};
	let tags: String[] = $state([]);
	let description = $state('');
	let image = $state('');
	let name = $state('');
	let link = $state('');

	onMount(() => populate());
</script>

<div id="container">
	<Card>
		<div class="card">
			<h1>
				{name}
				<a id="custom_link" href={link}><Icon icon="mdi:link" width={20} height={20} /></a>
			</h1>
			<img src={image} alt={`Profile picture of ${name}`} width={350} />
			<p>{description}</p>
			<div class="buttons">
				<IconButton tooltip="Like" href="" type="heart" onclick={() => like()} />
				<IconButton tooltip="Dislike" href="" type="cross" onclick={() => dislike()} />
			</div>
			<div class="tags">
				{#each tags as tag}
					<Tag color="blue">{tag}</Tag>
				{/each}
			</div>
		</div>
	</Card>
</div>

<svelte:head>
	<title>Home - HackBuds</title>
</svelte:head>

<style>
	#custom_link {
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
