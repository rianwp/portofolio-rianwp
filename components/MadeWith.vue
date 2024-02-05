<template>
	<p class="text-sm">
		Made with
		<a
			href="https://nuxt.com/"
			:class="[linkSecondaryClass, titleClass]"
			class="font-semibold"
			>Nuxt 3</a
		>
		and
		<a
			href="https://tailwindcss.com/"
			:class="[linkSecondaryClass, titleClass]"
			class="font-semibold"
			>Tailwind CSS</a
		>, deployed with
		<a href="https://vercel.com/" :class="[linkSecondaryClass, titleClass]"
			>Vercel</a
		>
	</p>
</template>

<script setup lang="ts">
const { linkSecondaryClass, titleClass } = useTailwindClasses()
</script>
