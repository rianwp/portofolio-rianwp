import type { Attachment } from './Attachment'

export interface ExperienceCard {
	startDate: string
	endDate?: string
	role: string
	place: string
	description?: string
	skills?: string[]
	attachments?: Attachment[]
}
