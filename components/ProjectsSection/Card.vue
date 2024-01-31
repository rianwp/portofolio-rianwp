<template>
	<a
		:href="link"
		:class="transitionClass"
		class="group/project md:p-4 md:-ml-4 md:-mt-4 p-2 -ml-2 -mt-2 md:w-[calc(100%+32px)] w-[calc(100%+16px)] dark:hover:bg-slate-700 hover:bg-slate-200 rounded-lg"
	>
		<div class="flex md:flex-row flex-col-reverse gap-y-3">
			<div class="md:w-1/4 w-full">
				<img
					:class="transitionClass"
					:src="image"
					class="aspect-video md:w-full sm:w-1/2 w-full rounded-lg overflow-hidden md:group-hover/project:scale-95 hover:scale-95 border border-slate-400"
				/>
			</div>
			<div class="md:w-3/4 w-full md:pl-4 flex flex-col gap-y-3">
				<h3
					:class="transitionClass"
					class="font-semibold dark:text-white dark:group-hover/project:text-blue-200 group-hover/project:text-blue-500 flex flex-row gap-x-1 items-center"
				>
					<p>{{ title }}</p>
					<font-awesome-icon
						:class="transitionClass"
						class="group-hover/project:translate-x-0.5 group-hover/project:-translate-y-0.5"
						:icon="['fas', 'arrow-up-right-from-square']"
						size="xs"
					/>
				</h3>
				<p class="text-justify text-sm font-light">
					{{ description }}
				</p>
				<div class="flex flex-col mt-3 gap-y-3">
					<div
						v-if="!isAttachmentsEmpty"
						class="flex flex-row flex-wrap gap-y-2 gap-x-3"
					>
						<AttachmentLink
							v-for="attachment in attachments"
							:link="attachment.link"
							>{{ attachment.name }}</AttachmentLink
						>
					</div>
					<div v-if="!isSkillsEmpty" class="flex flex-row flex-wrap gap-2">
						<SkillCard v-for="skill in skills">{{ skill }}</SkillCard>
					</div>
				</div>
			</div>
		</div>
	</a>
</template>
<script setup lang="ts">
import type { ProjectCard } from "~/types/ProjectCard"

const { skills, attachments } = defineProps<ProjectCard>()
const { transitionClass } = useTailwindClasses()

const isSkillsEmpty = computed(() => skills.length === 0)
const isAttachmentsEmpty = computed(() => attachments.length === 0)
</script>
