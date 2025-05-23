<script lang="ts">
	let {
		type = 'text',
		value = $bindable(),
		placeholder = ''
	}: {
		type: 'text' | 'email' | 'password' | 'url';
		value: any;
		placeholder: string | null | undefined;
	} = $props();
</script>

<input {placeholder} {type} bind:value />

<style>
	input {
		border: 0.2em, solid, var(--ctp-surface1);
		border-radius: 2em;
		padding: 0.6em;
		background-color: var(--ctp-surface0);
		color: var(--ctp-text);
		outline: none;
		transition-duration: 0.3s;
	}

	input:focus {
		border-color: var(--ctp-mauve);
		transition-duration: 0.3s;
	}
</style>
