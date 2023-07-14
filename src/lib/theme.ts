import { writable } from 'svelte/store'
import { browser } from '$app/environment'

type Theme = 'light' | 'dark'

// we set the theme in `app.html` to prevent flashing
const userTheme = browser && localStorage.getItem('data-theme')

// create the store
export const theme = writable(userTheme ?? 'dark')

// update the theme
export function toggleTheme() {
  theme.update((currentTheme) => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('data-theme', newTheme)

    return newTheme
  })
}

// set the theme
export function setTheme(newTheme: Theme) {
  theme.set(newTheme)
}
