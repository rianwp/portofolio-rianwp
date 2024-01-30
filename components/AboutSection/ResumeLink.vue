<template>
	<a
		href="https://drive.google.com/file/d/1HcoalIB2Tw-MvxuADuFpvQowGnf0QDqH/view?usp=sharing"
		class="group/resume flex flex-row items-center gap-x-2 font-semibold"
		:class="linkClass"
	>
		<p>View Full Resume</p>
		<font-awesome-icon
			:class="transitionClass"
			class="group-hover/resume:scale-110"
			:icon="['fas', 'arrow-up-right-from-square']"
			size="xs"
		/>
	</a>
</template>

<script setup lang="ts">
const { linkClass, transitionClass } = useTailwindClasses()
</script>
