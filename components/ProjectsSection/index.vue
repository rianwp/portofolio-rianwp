<template>
	<div ref="projectsSection" :class="sectionClass" id="projects">
		<h2 :class="titleClass">Projects</h2>
		<div class="flex flex-col gap-y-10">
			<ProjectsSectionCard
				v-for="project in projects"
				:image="project.image"
				:link="project.link"
				:title="project.title"
				:description="project.description"
				:attachments="project.attachments"
				:skills="project.skills"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { ProjectCard } from "~/types/ProjectCard"

const projectsSection = ref<HTMLElement | null>(null)
const { sectionClass, titleClass } = useTailwindClasses()
const { setSectionPosition } = useSectionPosition()

onMounted(() => {
	setSectionPosition(projectsSection, "projects")
})

const projects: ProjectCard[] = [
	{
		title: "Margajaya App",
		description:
			"I've' developed a project for a Margajaya badminton court rental application. This application can provide information about available court and allows users to book those available fields. This application integrated with midtrans as payment gateway.",
		image: "/img/margajaya.png",
		link: "https://margajaya.vercel.app/",
		skills: [
			"Typescript",
			"Next.js",
			"Prisma",
			"React.js",
			"Tailwind CSS",
			"MySQL",
			"Midtrans",
		],
		attachments: [
			{
				name: "github/aplikasi-penyewaan-lapangan",
				link: "https://github.com/rianwp/aplikasi-penyewaan-lapangan",
			},
		],
	},
	{
		title: "Learnhub",
		description:
			"My team and I worked together on our project named 'Learnhub,' a MOOC application that provides online courses to users.",
		image: "/img/learnhub.png",
		link: "https://learnhub-coral.vercel.app/",
		skills: [
			"Javascript",
			"React.js",
			"Express.js",
			"PostgreSQL",
			"Sequelize",
			"Swagger",
			"Tailwind CSS",
		],
		attachments: [
			{
				link: "https://api-learnhub.up.railway.app/api-docs/",
				name: "Learnhub API",
			},
			{
				link: "https://admin-learnhub.vercel.app",
				name: "Learnhub Admin",
			},
			{
				name: "github/backend-mooc-binar-c10",
				link: "https://github.com/rianwp/backend-mooc-binar-c10",
			},
			{
				name: "github/frontend-mooc-binar-c10",
				link: "https://github.com/rianwp/frontend-mooc-binar-c10",
			},
		],
	},
	{
		title: "Teman Soal",
		description:
			"I've created a website which seamlessly integrates with the OpenAI API to automatically generate simple questions across various subjects. This platform is designed to cater to both teachers and students, providing assistance in generating questions for a wide range of school subjects.",
		image: "/img/temansoal.png",
		link: "https://temansoal.vercel.app/",
		skills: [
			"Typescript",
			"Next.js",
			"Prisma",
			"React.js",
			"Tailwind CSS",
			"MySQL",
			"Midtrans",
		],
		attachments: [
			{
				name: "github/temansoal",
				link: "https://github.com/rianwp/temansoal",
			},
		],
	},
	{
		title: "Gen Equity",
		description:
			"I've created an interactive website that provide information about gender equality using Next.js, Tailwind CSS, and Framer Motion.",
		image: "/img/genequity.png",
		link: "https://genequity.netlify.app/",
		skills: [
			"Javascript",
			"Next.js",
			"React.js",
			"Tailwind CSS",
			"Framer Motion",
		],
		attachments: [
			{
				name: "github/gen-equity",
				link: "https://github.com/rianwp/gen-equity",
			},
		],
	},
]
</script>
