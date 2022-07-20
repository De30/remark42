<script lang="ts">
	export let as: keyof HTMLElementTagNameMap = 'button'
	export let disabled: boolean = false
	export let kind: 'primary' | 'seamless' = 'primary'
	export let type = 'button'
</script>

<svelte:element this={as} class="button {kind}" on:click {type} {disabled}>
	<slot />
</svelte:element>

<style lang="postcss">
	.button {
		@apply py-1 px-3;
	}

	.seamless {
		@apply p-0 text-inherit;
	}

	.primary {
		@apply bg-teal-700 text-white rounded text-sm;
	}
</style>
