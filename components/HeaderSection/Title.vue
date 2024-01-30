<template>
	<Transition
		appear
		enter-active-class="transition duration-300 delay-150"
		enter-from-class="opacity-0"
		enter-to-class="opacity-100"
		v-show="true"
	>
		<h2 :class="transitionClass">Frontend Developer | Fullstack Developer</h2>
	</Transition>
</template>

<script setup lang="ts">
const { transitionClass } = useTailwindClasses()
</script>
