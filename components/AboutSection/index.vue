<template>
	<div ref="aboutSection" :class="sectionClass" id="about">
		<h2 :class="titleClass">About Me</h2>
		<div class="gap-y-8 flex flex-col">
			<p :class="transitionClass" class="text-justify">
				I am a passionate software engineer with a strong enthusiasm for
				programming and web development. My dedication to technology drives me
				to continuously explore and master the latest industry trends and
				frameworks. I am actively seeking opportunities to apply my technical
				skills in real-world projects while expanding my expertise in modern web
				development technologies and methodologies.
			</p>
			<AboutSectionResumeLink />
		</div>
	</div>
</template>

<script setup lang="ts">
const aboutSection = ref<HTMLElement | null>(null)
const { sectionClass, titleClass, transitionClass } = useTailwindClasses()
const { setSectionPosition } = useSectionPosition()

onMounted(() => {
	setSectionPosition(aboutSection, 'about')
})
</script>
