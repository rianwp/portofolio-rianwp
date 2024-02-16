<template>
	<p class="text-sm">
		Made with
		<a href="https://nuxt.com/" :class="[linkSecondaryHoverClass, titleClass]"
			>Nuxt 3</a
		>
		and
		<a
			href="https://tailwindcss.com/"
			:class="[linkSecondaryHoverClass, titleClass]"
			>Tailwind CSS</a
		>, deployed with
		<a href="https://vercel.com/" :class="[linkSecondaryHoverClass, titleClass]"
			>Vercel</a
		>
	</p>
</template>

<script setup lang="ts">
const { linkSecondaryHoverClass, titleClass } = useTailwindClasses()
</script>
