<script lang="ts">
	import IconButton from '$lib/components/IconButton.svelte';
	import Card from '$lib/components/Card.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import Icon from '@iconify/svelte';
	import type { Color } from '$lib/colors';
	import { onMount } from 'svelte';

	const populate = async () => {
		loaded = false;
		const data = await fetch('/api/getMatch', {
			method: 'GET'
		}).then((data) => data.json());
		console.log(data);
		tags = data.tags;
		description = data.description;
		image = data.image;
		colors = data.colors;
		name = data.name;
		slackId = data.slackId;
		loaded = true;
	};

	const like = async () => {
		setTimeout(async () => {
			await populate();
		}, 500);
	};
	const dislike = async () => {
		setTimeout(async () => {
			await populate();
		}, 500);
	};
	let tags: String[] = $state([]);
	let colors: Color[] = $state([]);
	let description = $state('');
	let image = $state('');
	let name = $state('');
	let link = $state('');
	let slackId: { id: string }[] | null = $state(null);
	let loaded = $state(false);

	onMount(() => populate());
</script>

<div id="container">
	{#if loaded}
		<Card>
			<div class="card">
				<h1>
					{name}
					<a id="custom_link" href={link}><Icon icon="mdi:link" width={20} height={20} /></a>
				</h1>
				<img src={image} alt={`Profile picture of ${name}`} width={350} />
				<p>{description}</p>
				<div class="buttons">
					<IconButton tooltip="Like" type="heart" onclick={() => like()} />
					<IconButton tooltip="Dislike" type="cross" onclick={() => dislike()} />
					{#if !!slackId}
						<a
							href={`https://hackclub.slack.com/team/${slackId.length > 1 ? (slackId[0].id.length < slackId[1].id.length ? slackId[0].id : slackId[1].id) : slackId[0].id}`}
							target="_blank"
						>
							<IconButton tooltip="Chat" type="chat" onclick={null} />
						</a>
					{:else}
						<IconButton tooltip="Chat" type="chat" onclick={null} />
					{/if}
				</div>
				<div class="tags">
					{#each tags as tag, index}
						<Tag color={colors[index]}>{tag}</Tag>
					{/each}
				</div>
			</div>
		</Card>
	{:else}
		<!-- TODO: Replace with an actual loading wheel sometime -->
		<p>Loading...</p>
	{/if}
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
