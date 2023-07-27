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

export function scaleCanvas(parentNode: HTMLElement, canvas: HTMLCanvasElement) {
	const parentWidth = parentNode.getBoundingClientRect().width;
	const canvasWidth = canvas.getBoundingClientRect().width;
	const scale = parentWidth / canvasWidth;

	if (scale < 1) {
		canvas.style.transformOrigin = 'top left';
		canvas.style.scale = `${scale}`;
	}
}

export function shuffleArray(array: any[]) {
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
}