const useTailwindClasses = () => {
	const utilityClasses = {
		transitionClass: "transition-all ease-in-out duration-300",
	}
	const classes = {
		shadowButtonClass: `dark:hover:bg-slate-700 hover:bg-slate-200 rounded-full p-2 ${utilityClasses.transitionClass}`,
		linkClass: `dark:hover:text-white hover:text-blue-500 relative dark:after:bg-white after:bg-blue-500 after:absolute after:h-1 after:w-0 after:-bottom-1.5 after:left-0 hover:after:w-full cursor-pointer after:rounded-full w-fit after:transition-all after:duration-300 ${utilityClasses.transitionClass}`,
		clickedLinkClass:
			"dark:text-white text-blue-500 relative dark:after:bg-white after:bg-blue-500 after:absolute after:h-1 after:w-0 after:-bottom-1.5 after:left-0 after:w-full after:rounded-full w-fit",
		wrapperClass: "xl:py-10 lg:py-10 md:py-6 py-4 flex flex-col gap-y-10",
		sectionClass: "flex flex-col gap-y-8 xl:pt-10 lg:pt-10 md:pt-6 pt-4",
		titleClass: "dark:text-white font-semibold",
		sectionBottomClass: "xl:pb-10 lg:pb-10 md:pb-6 pb-4",
		linkSecondaryClass: `dark:hover:text-white hover:text-blue-500 cursor-pointer w-fit ${utilityClasses.transitionClass}`,
		linkSecondaryHoverClass: `dark:hover:text-blue-200 hover:text-blue-500 cursor-pointer w-fit ${utilityClasses.transitionClass}`,
	}
	return {
		...utilityClasses,
		...classes,
	}
}

export default useTailwindClasses
