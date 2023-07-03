import { json } from '@sveltejs/kit'
import type { App } from '$lib/types'

async function getApps() {
	let apps: App[] = []

	const paths = import.meta.glob('/src/_content/**/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<App, 'slug'>
			const app = { ...metadata, slug } satisfies App
			app.published && apps.push(app)
		}
	}

	apps = apps.sort((first, second) =>
		new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return apps
}

export async function GET() {
	const apps = await getApps()
	return json(apps)
}
