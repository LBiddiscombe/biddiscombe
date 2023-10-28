export type Content = {
	title: string;
	slug: string;
	subPath?: string;
	description: string;
	date: string;
	coverimg?: string;
	link?: string;
	tags: string[];
	published: boolean;
};

export type SketchInfo = {
	name: string;
	path: string;
};
