import type { Attachment } from "./Attachment"

export interface ProjectCard {
	link: string
	image: string
	title: string
	description: string
	skills: string[]
	attachments: Attachment[]
}
