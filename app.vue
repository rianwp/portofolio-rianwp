<template>
	<Html class="scroll-smooth" :class="darkMode ? 'dark' : undefined">
		<Title>I'm Adrian</Title>
		<Body
			class="font-inter bg-white dark:bg-slate-800 h-screen w-full dark:text-white/75 text-slate-700"
		>
			<div
				:class="isHeaderResized ? 'md:flex-row flex-col' : 'flex-col'"
				class="px-4 md:px-0 w-full md:w-10/12 mx-auto flex"
			>
				<HeaderSection />
				<div class="h-1 w-full" v-if="!isHeaderResized" />
				<div
					v-else="isHeaderResized"
					:class="[
						isHeaderResized ? 'md:w-1/2 w-full' : 'w-full',
						sectionBottomClass,
					]"
					class="flex flex-col gap-y-8"
				>
					<AboutSection />
					<ExperienceSection />
					<ProjectsSection />
				</div>
			</div>
		</Body>
	</Html>
</template>

<script setup lang="ts">
const { sectionBottomClass } = useTailwindClasses()
const { isHeaderResized } = useResizeHeader()
const { darkMode } = useDarkMode()
</script>
