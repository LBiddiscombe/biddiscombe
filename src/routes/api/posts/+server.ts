import { json } from '@sveltejs/kit'
import type { Content } from '$lib/types'

async function getContent(searchTags: string[] = []) {
	let content: Content[] = []
	const tags: string[] = []

	const paths = import.meta.glob('/src/_content/**/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Content, 'slug'>
			metadata.tags = metadata.tags.sort()
			const app = { ...metadata, slug } satisfies Content
			app.published && content.push(app)
		}
	}

	if (searchTags.length > 0) {
		content = content.filter(post =>
			post.tags.some(tag => searchTags.includes(tag))
		)
	}

	content = content.sort((first, second) =>
		new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	content.forEach(c => tags.push(...c.tags))

	return { content, tags: [...new Set(tags)].sort() }
}

export async function GET({ url }) {
	const searchTags = url.searchParams.get("searchTags")?.split(',')
	const { content, tags } = await getContent(searchTags)
	return json({ content, tags: [...tags] })
}
