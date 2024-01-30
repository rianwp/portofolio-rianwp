const useResizeHeader = () => {
	const isHeaderResized = useState<boolean>("isHeaderResized", () => false)
	const { y } = useWindowScroll()

	const setIsHeaderResized = (isHeaderResizedValue: boolean) => {
		isHeaderResized.value = isHeaderResizedValue
	}

	watchEffect(() => {
		if (0 < y.value && !isHeaderResized.value) {
			setIsHeaderResized(true)
		}
	})

	return {
		isHeaderResized,
	}
}

export default useResizeHeader
