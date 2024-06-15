<template>
	<a
		href="https://drive.google.com/file/d/1q-y4J36x0fT17JqgG_IQ-cVKIXT_75-o/view?usp=sharing"
		class="group/resume flex flex-row items-center gap-x-1 font-semibold"
		:class="linkClass"
		target="_blank"
	>
		<p>View Full Resume</p>
		<font-awesome-icon
			:class="transitionClass"
			class="group-hover/resume:translate-x-0.5 group-hover/resume:-translate-y-0.5"
			:icon="['fas', 'arrow-up-right-from-square']"
			size="xs"
		/>
	</a>
</template>

<script setup lang="ts">
const { linkClass, transitionClass } = useTailwindClasses()
</script>
