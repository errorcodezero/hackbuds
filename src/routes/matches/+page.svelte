<script lang="ts">
	interface Match {
		id: String;
		matchedId: String;
	}

	const populate = async () => {
		await fetch('/getMatches').then((data) => data.json());
	};
	let loaded = $state(false);

	let matches = $state([]);
</script>
