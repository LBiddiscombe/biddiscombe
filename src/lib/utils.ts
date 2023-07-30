type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

export function getColorForString(input: string): string {
	const hash = [...input].reduce((acc, char) => {
		return char.charCodeAt(0) + ((acc << 5) - acc);
	}, 0);
	return `hsl(${hash % 360}, 95%, 35%)`;
}

export function shuffleArray(array: any[]) {
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
}

/*
Example
const style = getComputedStyle(document.body);
$p5colors.bg = hsl2hex(style.getPropertyValue('--b1'));
$p5colors.fg = hsl2hex(style.getPropertyValue('--bc'));
*/
export function hsl2hex(hslStr: string): string {
	const hslValues = hslStr.trim().split(' ');

	const h = parseInt(hslValues[0], 10);
	const s = parseInt(hslValues[1].slice(0, -1), 10) / 100;
	const l = parseInt(hslValues[2].slice(0, -1), 10) / 100;

	const hue2rgb = (p: number, q: number, t: number): number => {
		if (t < 0) t += 1;
		if (t > 1) t -= 1;
		if (t < 1 / 6) return p + (q - p) * 6 * t;
		if (t < 1 / 2) return q;
		if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
		return p;
	};

	let r, g, b;

	if (s === 0) {
		r = g = b = l;
	} else {
		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hue2rgb(p, q, h / 360 + 1 / 3);
		g = hue2rgb(p, q, h / 360);
		b = hue2rgb(p, q, h / 360 - 1 / 3);
	}

	const toHex = (x: number): string => Math.round(x * 255).toString(16).padStart(2, '0');

	const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
	return hexColor;
}
