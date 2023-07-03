import type { App } from '$lib/types'

export async function load({ fetch }) {
  const response = await fetch('api/posts')
  const apps: App[] = await response.json()
  return { apps }
}
