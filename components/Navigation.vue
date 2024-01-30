<template>
	<Transition
		enter-active-class="transition duration-300 delay-300"
		enter-from-class="opacity-0"
		enter-to-class="opacity-100"
		v-show="isHeaderResized"
	>
		<div class="md:flex flex-col gap-y-8 justify-start hidden">
			<a
				v-for="navigation in navigations"
				:href="navigation.link"
				:key="navigation.link"
				:class="[
					transitionClass,
					linkClass,
					sectionPosition === navigation.link ? clickedLinkClass : '',
				]"
				>{{ navigation.name }}</a
			>
		</div>
	</Transition>
</template>

<script setup lang="ts">
const { sectionPosition } = useSectionPosition()
const { isHeaderResized } = useResizeHeader()
const { transitionClass, linkClass, clickedLinkClass } = useTailwindClasses()
const navigations = [
	{
		name: "About Me",
		link: "#about",
	},
	{
		name: "Experience",
		link: "#experience",
	},
	{
		name: "Projects",
		link: "#projects",
	},
]
</script>
