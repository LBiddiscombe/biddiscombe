---
title: Markdown Kitchen Sink
description: Chucking things in here to see how they will render
coverimg: ''
date: '2023-07-23'
tags:
  - 'demo'
  - 'markdown'
  - 'mdsvex'
published: true
---


Chucking things in here to see how they will render.

## Headers

```
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

```
*Italic text*
**Bold text**
***Bold and italic text***
~~Strikethrough text~~
```

*Italic text*

**Bold text**

***Bold and italic text***

~~Strikethrough text~~

## Lists

### Unordered List

```
- Item 1
- Item 2
- Item 3
```

- Item 1
- Item 2
- Item 3

### Ordered List

```
1. First item
2. Second item
3. Third item
```

1. First item
2. Second item
3. Third item

## Links

```
[Link to Google](https://www.google.com)
```

[Link to Google](https://www.google.com)

## Images

```
![Alt text](/images/family-workout-cover.jpg)
```

![Alt text](/images/family-workout-cover.jpg)

## Code Blocks

```
```js
export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('data-theme', newTheme);

		return newTheme;
	});
}
\```
```


```js
export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('data-theme', newTheme);

		return newTheme;
	});
}
```

## Blockquotes

```
> This is a blockquote.
```

> This is a blockquote.

## Horizontal Rule
```
---
```

---
## Tables

```
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

```
- [x] Task 1
- [ ] Task 2
- [ ] Task 3
```

- [x] Task 1
- [ ] Task 2
- [ ] Task 3
