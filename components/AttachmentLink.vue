<template>
	<a
		:href="link"
		class="flex flex-row items-center gap-x-1.5 text-sm"
		:class="linkSecondaryClass"
	>
		<font-awesome-icon :icon="['fas', 'link']" size="sm" />
		<p>
			<slot></slot>
		</p>
	</a>
</template>
<script setup lang="ts">
const { linkSecondaryClass } = useTailwindClasses()
defineProps<{
	link: string
}>()
</script>
