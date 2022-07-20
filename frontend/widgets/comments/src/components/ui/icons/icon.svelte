<script lang="ts">
	import { icon } from './icon.lib'

	// icons
	import bell from './assets/bell.svg'
	import exit from './assets/exit.svg'
	import angle from './assets/angle.svg'

	const IconsMap = {
		// icons
		angle,
		bell,
		cog: null,
		exit,
		rss: null,
		paid: null,
		verified: null,
	} as const

	export let name: keyof typeof IconsMap = 'bell'
	let className: string = ''
	export { className as class }
</script>

<div class="icon {className}" use:icon={IconsMap[name]} />

<style lang="postcss">
	.icon > :global(svg) {
		@apply h-full w-full;
	}
</style>
