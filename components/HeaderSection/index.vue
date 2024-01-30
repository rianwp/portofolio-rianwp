<template>
	<div
		:class="[
			isHeaderResized
				? 'md:w-1/2 w-full md:pr-8 justify-center md:justify-start'
				: 'w-full justify-center',
			transitionClass,
			wrapperClass,
		]"
		class="h-screen md:sticky md:top-0 md:text-start text-center md:items-start items-center"
	>
		<HeaderSectionName />
		<div class="flex flex-col gap-y-4">
			<HeaderSectionTitle />
			<HeaderSectionSocialMediaList />
			<Navigation />
		</div>
	</div>
</template>

<script setup lang="ts">
const { transitionClass, wrapperClass } = useTailwindClasses()
const { isHeaderResized } = useResizeHeader()
</script>
