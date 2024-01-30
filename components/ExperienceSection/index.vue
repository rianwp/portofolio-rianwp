<template>
	<div ref="experienceSection" :class="sectionClass" id="experience">
		<h2 :class="titleClass">Experience</h2>
		<div class="flex flex-col gap-y-10">
			<ExperienceSectionCard
				v-for="experience in experiences"
				:role="experience.role"
				:place="experience.place"
				:description="experience.description"
				:attachments="experience.attachments"
				:skills="experience.skills"
				:start-date="experience.startDate"
				:end-date="experience.endDate"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { ExperienceCard } from "~/types/ExperienceCard"

const experienceSection = ref<HTMLElement | null>(null)
const { sectionClass, titleClass } = useTailwindClasses()
const { setSectionPosition } = useSectionPosition()

onMounted(() => {
	setSectionPosition(experienceSection, "experience")
})

const experiences: ExperienceCard[] = [
	{
		role: "Frontend Developer",
		place: "Suitmedia Digital Agency",
		description:
			"I'm currently working at Suitmedia Digital Agency as a Frontend Developer Intern. I work in a team, developing some project, based by client request for the Frontend Web.",
		attachments: [],
		skills: ["Web Development", "Teamwork"],
		startDate: "Feb 2024",
	},
	{
		role: "Fullstack Web Developer Student",
		place: "Binar Academy",
		description:
			"I am learning web development, delve deep into JavaScript and its implementation in both frontend and backend development. Here, I also collaborate with a team to develop a final project, which is a MOOC (Massive Open Online Course) application, named Learnhub.",
		attachments: [
			{
				link: "https://api-learnhub.up.railway.app/api-docs/",
				name: "Learnhub API",
			},
			{
				link: "https://admin-learnhub.vercel.app",
				name: "Learnhub Admin",
			},
		],
		skills: [
			"Javascript",
			"React.js",
			"Next.js",
			"Express.js",
			"PostgreSQL",
			"Sequelize",
			"Swagger",
			"MVC Architecture",
			"Agile Methodologies",
		],
		startDate: "Aug 2023",
		endDate: "Des 2023",
	},
	{
		role: "Junior Web Developer Student",
		place: "Digital Talent Scholarship",
		description:
			"I am learning the fundamentals of web development, including HTML/CSS, Bootstrap, Javascript, PHP, and MySQL. As part of the course, I am working on a final project that involves implementing PHP, MySQL, HTML/CSS, and Javascript.",
		attachments: [],
		skills: [
			"Web Development",
			"HTML",
			"CSS",
			"Javascript",
			"PHP",
			"MySQL",
			"Bootstrap",
		],
		startDate: "Jul 2022",
		endDate: "Aug 2022",
	},
]
</script>
