<script lang="ts">
	export let src: string | undefined
	export let username: string | undefined
	export let size = 20
</script>

<img class="avatar" {src} alt={username} style="--size:{size}px" />

<style lang="postcss">
	.avatar {
		@apply rounded-sm overflow-hidden object-cover;
		@apply bg-slate-100 dark:bg-slate-800;
		width: var(--size);
		height: var(--size);
	}
</style>
