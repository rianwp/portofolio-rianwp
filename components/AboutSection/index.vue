<template>
	<div ref="aboutSection" :class="sectionClass" id="about">
		<h2 :class="titleClass">About Me</h2>
		<div class="gap-y-8 flex flex-col">
			<p :class="transitionClass" class="text-justify">
				I am an undergraduate student from
				<b>University of AMIKOM Yogyakarta</b>, majoring in Information Systems,
				i have strong enthusiasm for programming. Currently, I am actively
				seeking work experience in the field of programming, specifically in web
				development. My goal is to continue learning and exploring the latest
				technologies within the industry, consistently enhancing my skills over
				time.
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
	setSectionPosition(aboutSection, "about")
})
</script>
