import type { Content } from '$lib/types'

export async function load({ fetch, url }) {
  const response = await fetch(`api/posts?${url.searchParams.toString()}`)
  const apps: Content[] = await response.json()
  return { apps }
}
