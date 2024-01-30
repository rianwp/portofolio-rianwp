<template>
	<Transition
		appear
		enter-active-class="transition duration-300"
		enter-from-class="opacity-0"
		enter-to-class="opacity-100"
		v-show="true"
	>
		<h1
			:class="[
				isHeaderResized
					? 'xl:text-5xl lg:text-4xl'
					: 'xl:text-9xl lg:text-7xl ',
				transitionClass,
			]"
			class="font-bold text-blue-400 md:text-6xl text-5xl"
		>
			Adrian Wahyu Prasetya
		</h1>
	</Transition>
</template>

<script setup lang="ts">
const { transitionClass } = useTailwindClasses()
const { isHeaderResized } = useResizeHeader()
</script>
