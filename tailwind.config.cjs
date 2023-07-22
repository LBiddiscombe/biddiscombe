const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {
			sans: ['Mulish Variable', ...defaultTheme.fontFamily.sans],
			mono: ['Source Code Pro Variable', ...defaultTheme.fontFamily.mono]
		}
	},
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["[data-theme=light]"],
					"primary": "#00AEFF",
					"primary-content": "#ffffff",
					"secondary": "#00E5FF",
					"secondary-content": "#000000",
					"accent": "#0054B4",
					"accent-content": "#ffffff",
					"neutral": "#2a323c",
					"neutral-focus": "#242b33",
					"neutral-content": "#A6ADBB",
					"base-100": "#ebfbe7",
					"base-200": "#d9f7d1",
					"base-300": "#c7f4bb",
				},
				dark: {
					...require("daisyui/src/theming/themes")["[data-theme=dark]"],
					"primary": "#00AEFF",
					"primary-content": "#ffffff",
					"secondary": "#00E5FF",
					"secondary-content": "#000000",
					"accent": "#1EEB1D",
					"accent-content": "#000000",
					"neutral": "#2a323c",
					"neutral-focus": "#242b33",
					"neutral-content": "#A6ADBB",
					"base-100": "#004C74",
					"base-200": "#003F60",
					"base-300": "#00324D",
					"base-content": "#A6ADBB",
				},
			},
		],
	},

	plugins: [forms, typography, daisyui]
};

module.exports = config;
