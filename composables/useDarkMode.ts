const useDarkMode = () => {
	const darkMode = useState<boolean>(
		"dark",
		() => localStorage.getItem("dark") === "true"
	)

	const switchDarkMode = () => {
		darkMode.value = !darkMode.value
		localStorage.setItem("dark", `${darkMode.value}`)
	}

	return {
		darkMode,
		switchDarkMode,
	}
}

export default useDarkMode
