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

	plugins: [forms, typography, daisyui]
};

module.exports = config;
