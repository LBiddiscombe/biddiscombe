---
title: Kitchen Sink
description: Chucking things in here to see how they will render
coverimg: '/images/kitchen-sink-cover.jpeg'
date: '2023-07-23'
tags: ['demo', 'mdsvex']
published: true
---

Photo by <a href="https://unsplash.com/@dylu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jacek Dylag</a> on <a href="https://unsplash.com/photos/Vve7XkiUq_Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Chucking things in here to see how they will render.

## Headers

```markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Emphasis

```markdown
_Italic text_
**Bold text**
**_Bold and italic text_**
~~Strikethrough text~~
```

_Italic text_

**Bold text**

**_Bold and italic text_**

~~Strikethrough text~~

## Lists

### Unordered List

```markdown
- Item 1
- Item 2
- Item 3
```

- Item 1
- Item 2
- Item 3

### Ordered List

```markdown
1. First item
2. Second item
3. Third item
```

1. First item
2. Second item
3. Third item

## Links

```markdown
[Link to Google](https://www.google.com)
```

[Link to Google](https://www.google.com)

## Images

```markdown
![Alt text](/images/family-workout-cover.jpg)
```

![Alt text](/images/family-workout-cover.jpg)

## Code Blocks

````markdown
````javascript
export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('data-theme', newTheme);

		return newTheme;
	});
}
\```
````
````

```javascript
export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('data-theme', newTheme);

		return newTheme;
	});
}
```

And inline code looks like this - `npm install mdsvex`

## Blockquotes

```markdown
> This is a blockquote.
```

> This is a blockquote.

## Horizontal Rule

```markdown
---
```

---

## Tables

```markdown
| Column 1 | Column 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

| Column 1 | Column 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

## Task Lists

```markdown
- [x] Task 1
- [ ] Task 2
- [ ] Task 3
```

- [x] Task 1
- [ ] Task 2
- [ ] Task 3

## Svelte Components

```svelte
<script>
	import Name from '$lib/components/Name.svelte';
</script>

<Name />
```

<script>
  import P5Wrapper from '$lib/components/P5Wrapper.svelte';
  import Name from '$lib/components/Name.svelte';
</script>

<Name />

## p5js Sketches

```svelte
<script>
	import P5Wrapper from '$lib/components/P5Wrapper.svelte';
</script>

<P5Wrapper path={'../../_content/sketches/continuous-loop/sketch.ts'} />
```

<P5Wrapper path={'../../\_content/sketches/continuous-loop/sketch.ts'} />
