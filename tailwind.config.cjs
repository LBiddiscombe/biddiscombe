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
					...require('daisyui/src/theming/themes')['[data-theme=light]'],
					primary: '#00AEFF',
					'primary-content': '#ffffff',
					secondary: '#00E5FF',
					'secondary-content': '#000000',
					accent: '#003F60',
					'accent-content': '#A6ADBB',
					neutral: '#777C82',
					'neutral-focus': '#242b33',
					'neutral-content': '#e9eaea',
					'base-100': '#ebfbe7',
					'base-200': '#F9FDF7',
					'base-300': '#ffffff'
				},
				dark: {
					...require('daisyui/src/theming/themes')['[data-theme=dark]'],
					primary: '#00AEFF',
					'primary-content': '#ffffff',
					secondary: '#00E5FF',
					'secondary-content': '#000000',
					accent: '#1EEB1D',
					'accent-content': '#000000',
					neutral: '#777C82',
					'neutral-focus': '#242b33',
					'neutral-content': '#e9eaea',
					'base-100': '#00283E',
					'base-200': '#001b2a',
					'base-300': '#000b1a',
					'base-content': '#A6ADBB'
				}
			}
		]
	},

	plugins: [forms, typography, daisyui]
};

module.exports = config;
