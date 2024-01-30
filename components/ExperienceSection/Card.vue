<template>
	<div :class="transitionClass" class="flex md:flex-row flex-col gap-y-3">
		<div class="md:w-1/4 w-full text-sm">
			{{ startDate }} - {{ endDate || "Present" }}
		</div>
		<div class="md:w-3/4 w-full md:pl-4 flex flex-col gap-y-3">
			<div class="flex flex-col">
				<h3 class="font-medium dark:text-white">{{ role }}</h3>
				<p class="text-sm">{{ place }}</p>
			</div>
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
</template>
<script setup lang="ts">
import type { ExperienceCard } from "~/types/ExperienceCard"

const { skills, attachments } = defineProps<ExperienceCard>()
const { transitionClass } = useTailwindClasses()

const isSkillsEmpty = computed(() => skills.length === 0)
const isAttachmentsEmpty = computed(() => attachments.length === 0)
</script>
