<template>
	<Transition
		appear
		enter-active-class="transition duration-300 delay-300"
		enter-from-class="opacity-0"
		enter-to-class="opacity-100"
		v-show="true"
	>
		<div
			class="flex flex-row gap-x-4 items-center md:justify-start justify-center -ml-2"
		>
			<DarkModeSwitch />
			<a
				v-for="socialMedia in socialMedias"
				:class="shadowButtonClass"
				:href="socialMedia.link"
				:key="socialMedia.name"
				target="_blank"
			>
				<font-awesome-icon :icon="['fab', socialMedia.name]" size="xl" />
			</a>
		</div>
	</Transition>
</template>

<script setup lang="ts">
const { shadowButtonClass } = useTailwindClasses()
const socialMedias = [
	{
		name: "instagram",
		link: "https://www.instagram.com/rianwp05",
	},
	{
		name: "github",
		link: "https://github.com/rianwp",
	},
	{
		name: "linkedin",
		link: "https://www.linkedin.com/in/adrian-wahyu-prasetya-37a43323a",
	},
]
</script>
