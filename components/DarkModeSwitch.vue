<template>
	<button
		class="w-10 h-10"
		:class="[transitionClass, shadowButtonClass]"
		@click="switchDarkMode"
	>
		<font-awesome-icon v-if="darkMode" :icon="['fas', 'moon']" size="xl" />
		<font-awesome-icon v-else="darkMode" :icon="['fas', 'sun']" size="xl" />
	</button>
</template>

<script setup lang="ts">
const { switchDarkMode, darkMode } = useDarkMode()
const { transitionClass, shadowButtonClass } = useTailwindClasses()
</script>
