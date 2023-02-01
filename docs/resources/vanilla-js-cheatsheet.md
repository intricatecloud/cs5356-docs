# Vanilla JS & HTML Cheat Sheet

## Find DOM elements

Given this HTML
```html
<body>
  <h1 id="heading" class="title">What an interesting book!</h1>
  <p>This book deserves 5 out of 5 stars!</p>
</body>
```

### 1. Find an element by ID
```js
const titleElement = document.getElementById('heading')
```

### 2. Find an element by Tag
```js
const titleElement = document.getElementByTag('h1')
```

### 3. Find an element by CSS class
```js
const titleElement = document.querySelector('.title')
// or
const titleElement = document.querySelector('#heading')
// or
const titleElement = document.querySelector('h1')
```

## Modify DOM elements

Given this HTML
```html
<body>
  <h1 id="heading" class="title">What an interesting book!</h1>
  <p class="content">This book deserves 5 out of 5 stars!</p>
</body>
```

### 1. Add or remove CSS classes

```js
const titleElement = document.getElementById('heading')
// Add only if the class doesn't exist
titleElement.classList.add('is-size-1')
// or
// Remove if the class does exist
titleEment.classList.remove('title')
```

### 2. Toggle a CSS class
```js
const titleElement = document.getElementById('heading')
// Add if it is not defined, Remove if it is defined
titleElement.classList.toggle('has-text-danger')
```

## Creating HTML elements
Given this HTML:
```html
<body>
</body>
```

### 1. Using document.createElement
```js
const headingElement = document.createElement('h1')
headingElement.id = 'heading'
headingElement.classList.add('title')
headingElement.textContent = 'What an interesting book!'

document.body.appendChild(headingElement)
```

### 2. Using element.innerHTML
```js
const headingElementWrapper = document.createElement('div')
headingElementWrapper.innerHTML = '<h1>What an interesting book!</h1><p>5 stars for this book</p>'
document.body.appendChild(headingElementWrapper)
```

### 3. Using element.innerHTML with substitutions
```js
const headingText = 'What an interesting book!'
const messageText = '5 stars for this book'

const headingElementWrapper = document.createElement('div')
headingElementWrapper.innerHTML = `<h1>${headingText}</h1><p>${messageText}</p>`
document.body.appendChild(headingElementWrapper)
```

## Event Handlers
Given this HTML:
```html
<button id="my-button">Click me!</button>
```

### Respond to a Click
```js
const button = document.querySelector('#my-button')
button.addEventListener('click', () => {
  console.log('You clicked the button!')
})
```



