import { describe, it, expect } from 'vitest';
import { formatDate, getColorForString } from './utils';

describe('formatDate tests', () => {
	// Tests that passing a valid date string returns a formatted date string
	it('test_valid_date_string', () => {
		const date = '2022-01-01';
		const formattedDate = formatDate(date);
		expect(formattedDate).toBe('Jan 1, 2022');
	});

	// Tests that passing a valid date string and a valid dateStyle returns a formatted date string with the specified style
	it('test_valid_date_string_and_date_style', () => {
		const date = '2022-01-01';
		const dateStyle = 'full';
		const formattedDate = formatDate(date, dateStyle);
		expect(formattedDate).toBe('Saturday, January 1, 2022');
	});

	// Tests that passing a valid date string and a valid locale returns a formatted date string with the specified locale
	it('test_valid_date_string_and_locale', () => {
		const date = '2022-01-01';
		const locales = 'fr';
		const formattedDate = formatDate(date, undefined, locales);
		expect(formattedDate).toBe('1 janv. 2022');
	});

	// Tests that passing an invalid date string throws an error
	it('test_invalid_date_string', () => {
		const date = 'invalid date';
		expect(() => formatDate(date)).toThrow();
	});

	// Tests that passing an empty date string throws an error
	it('test_empty_date_string', () => {
		const date = '';
		expect(() => formatDate(date)).toThrow();
	});
});

describe('getColorForString tests', () => {
	// Tests that the function returns a valid HSL color for a non-empty string input
	it('test_happy_path_non_empty_string', () => {
		const input = 'hello';
		const expectedOutput = 'hsl(322, 95%, 35%)';
		const result = getColorForString(input);
		expect(result).toBe(expectedOutput);
	});

	// Tests that the function returns a valid HSL color for an empty string input
	it('test_edge_case_empty_string', () => {
		const input = '';
		const expectedOutput = 'hsl(0, 95%, 35%)';
		const result = getColorForString(input);
		expect(result).toBe(expectedOutput);
	});

	// Tests that the function returns a valid HSL color for a string input with only whitespace characters
	it('test_edge_case_whitespace_string', () => {
		const input = '   ';
		const expectedOutput = 'hsl(96, 95%, 35%)';
		const result = getColorForString(input);
		expect(result).toBe(expectedOutput);
	});

	// Tests that the function returns a valid HSL color for a string input with non-ASCII characters
	it('test_edge_case_non_ascii_string', () => {
		const input = 'こんにちは';
		const expectedOutput = 'hsl(-223, 95%, 35%)';
		const result = getColorForString(input);
		expect(result).toBe(expectedOutput);
	});

	// Tests that the function returns the same color for the same input string
	it('test_general_behaviour_same_input_same_color', () => {
		const input = 'hello';
		const expectedOutput = getColorForString(input);
		const result = getColorForString(input);
		expect(result).toBe(expectedOutput);
	});

	// Tests that the function returns different colors for different input strings
	it('test_general_behaviour_different_input_different_color', () => {
		const input1 = 'hello';
		const input2 = 'world';
		const result1 = getColorForString(input1);
		const result2 = getColorForString(input2);
		expect(result1).not.toBe(result2);
	});
});
