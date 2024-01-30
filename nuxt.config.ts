// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
	css: [
		"~/assets/css/tailwind.css",
		"@fortawesome/fontawesome-svg-core/styles.css",
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	tailwindcss: {
		cssPath: "~/assets/css/tailwind.css",
		configPath: "tailwind.config",
		exposeConfig: false,
		exposeLevel: 2,
		config: {},
		injectPosition: "first",
		viewer: true,
	},
	build: {
		transpile: [
			"@fortawesome/fontawesome-svg-core",
			"@fortawesome/pro-solid-svg-icons",
			"@fortawesome/pro-regular-svg-icons",
			"@fortawesome/pro-light-svg-icons",
			"@fortawesome/vue-fontawesome",
			"@fortawesome/free-brands-svg-icons",
		],
	},
})
