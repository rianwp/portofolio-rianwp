import { useElementBounding } from "@vueuse/core"

const useSectionPosition = () => {
	const sectionPosition = useState<string>("sectionPosition", () => "#about")
	const setSectionPosition = (
		sectionRef: globalThis.Ref<HTMLElement | null>,
		sectionName: string
	) => {
		const { top, bottom } = useElementBounding(sectionRef)
		watchEffect(() => {
			const margin = 100
			if (top.value <= margin && bottom.value > margin) {
				sectionPosition.value = `#${sectionName}`
			}
		})
	}

	return {
		sectionPosition,
		setSectionPosition,
	}
}

export default useSectionPosition
