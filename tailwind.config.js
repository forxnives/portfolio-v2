/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			height: {
				screen: "100dvh",
				"screen-small": "100svh",
				"screen-large": "100lvh",
			},
		},
	},
	plugins: [],
	darkMode: ["class", ".darkmode"],
}
