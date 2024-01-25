---
sidebar_position: 1
---
# HTML & CSS

Static websites are typically created using a combination of HTML files, CSS for styling, and JavaScript for interactivity. This section contains a brief overview of HTML & CSS, and how we'll be using it in the course.

The following assumes that you understand how to write basic HTML ([w3schools guide](https://www.w3schools.com/html/default.asp) is great if you're starting from 0).

By the end of this, you should:
- see how HTML is similar to a Tree data structure
- see how to use `div`'s as building blocks for the page
- see how to define a row or a column using HTML & Bulma

## HTML

### HTML is a Tree of Elements

HTML & CSS represent an implementation of Trees - the data structure.

You define elements, and an element can be either a parent or a child of another element.

```html
<!-- body would be the parent element of all elements on a page -->
<body>
  <!-- div is a child of body -->
  <div>
  </div>
</body>
```

Any styles applied to one element have Cascading effects on child elements

```html
<!--
  A 5px margin on the body means that everything
  inside of body starts with a 5px margin on the
  left
-->
<body style="margin-left: 5px">
  <div>
  Hello!
  </div>
</body>
```

For example, every HTML page has a `<body>` tag that represents the top-level parent of all elements on the page. If you apply a margin on the `<body>` tag, all child elements will apply that style as well.

### Block elements vs inline block elements

The most basic HTML document is `<body></body>`.

What happens if you add some text between the tags? What happens if you hit `Enter` to create a new line?

HTML doesn't understand the concept of new lines. Simply adding a space (or even multiple spaces) isn't enough to get things to move on the screen.

In order to put things on new lines, you have some options:
* `<br>` - a line break. This literally tells the browser to insert a new line.
* `<div>` - A div is a way to define a block of content that will (for the most part) appear on a new line.

What happens if you add multiple divs?
```html
<body>
  <div>
  Hello
  </div>
  <div>
  Again is on a new line
  </div>
</body>
```

What happens if you nest divs?
```html
<body>
  <div>
  Hello
    <div>
    Again (on a new line)
      <div>
      Also (on a new line)
      </div>
    </div>
  </div>
</body>
```
Nesting elements is perfectly valid, although this example doesn't accomplish much. One use case for nesting elements is creating a row, with columns using Bulma CSS.

```html
<div class="columns">
  <div class="column">
    column 1
  </div>
  <div class="column">
    column 2
  </div>
  <div class="columns column">
    <div class="column">
      column 3.1
    </div>
    <div class="column">
      column 3.2
    </div>
  </div>
</div>
```
In this example, you have 1 row with 3 columns. The 3rd column is also a row with 2 columns nested inside of it.

### Inline blocks

If you need to put things on the same line instead, you might be looking for inline-blocks - typically, these are `<span>` tags.

Watch what happens if you include them in your HTML page

```html
<body>
  <div>
  Hello
  </div>
  <span>
    This should be on the same line
  </span>
  <div>
  This is on a new line
  </div>
  <span>
    <- This winds up on the same line
  </span>
</body>
```

`<span>` tags have very specific use cases, and its best to start with block-level elements laid in a grid before resorting to a `<span>`.

### Semantic HTML

`<div>` is the most generic HTML tag that you can use, but it doesn't tell you anything about what that element is.

Browsers are able to start intelligently using some of the HTML thats there for assistive reading features. All of these share the same characteristics as `<div>` just with more meaningful names.

- `<main>`
- `<section>`
- `<article>`
- `<figure>`

These are some of the things you're able to use with HTML. They won't display differently, but the browser will treat them differently if you're using some form of Accessibility features.

As far as the class goes, I'm not expecting anyone to become an HTML wiz, but if you're interested in writing more accessible and inclusive web pages - you can read more about [Semantic HTML here.](https://web.dev/learn/html/semantic-html/)

Popular news websites with high traffic tend to use more semantic HTML to make their content more accessible to folks who need it. You can visit nytimes.com, right-click on the screen, click Inspect Element to view the HTML powering nytimes.com. You'll see various examples of semantic HTML on their websites.

But for the purposes of this class, `<div>` is perfectly fine. But if you'd like to write more accessible HTML, reading through the Semantic HTML link will get you pretty far.

## CSS & Bulma

I found one of the easiest ways to get started with the web is to avoid having to learn CSS from the get go. Using CSS is a lot more fun than writing it and [Bulma.io](https://bulma.io/) is a great tool to get you familiar with it.

Bulma provides a few things:
- A grid system so you can lay things out on the page
- A color theme (there's such a thing as a Bulma Teal color)
- And lots of [documentation and examples](https://bulma.io/documentation/) to help you create the widgets you're looking for.

### Grid System

One of the ways I like to use the grid system is by arranging everything in rows and columns. At a high level, Bulma's grid system divides the page into 12 columns, and its up to you to create rows with columns of varying size to create the layouts that you want.

See [Bulma's docs around Columns](https://bulma.io/documentation/columns/basics/) and the [link under Column Sizing](https://bulma.io/documentation/columns/sizes/) can give you a very helpful visual of how you can lay out content using the grid system.

You can create a "row" by creating a `<div class="columns">` element.

You create "columns" by adding `<div class="column">` elements as a child of `<div class="columns">`.

### Color Themes

Bulma comes with a default color theme (see the [docs for colors](https://bulma.io/documentation/helpers/color-helpers/)). They use it on their website, and its centered around this green/teal color thats used on a lot of their buttons. They make it easy to use these colors, and keep them consistent across your whole website without extra effort.

Rather than using hex color codes to define your colors, you can use their CSS class names instead.

You'll notice on the docs that their CSS classes have common suffixes like `-primary` and `-dark`:
- is-primary
- is-dark
- has-text-primary
- has-text-dark
- has-background-primary
- has-background-dark

`primary` refers to the teal color, and `dark` refers to a slightly-lighter shade of black. Want a green button? `<button class="button is-primary">`

As long as you stick to their CSS class names, you can then later on  apply a color theme without having to change ANY of your HTML. That's the magic behind Bulma's classes.

### Customizing the color palette
There is a handy [open-source Bulmaswatch](https://jenil.github.io/bulmaswatch/) that lets you choose from any of their color themes by adding a `<link>` tag to your page that will override all of Bulma's default colors.

If you're feeling particularly creative, you can make your own color palettes. Tools like https://coolors.co/ let you generate random color palettes. You can then use [Bulma with Sass](https://bulma.io/documentation/customize/with-node-sass/) to set your own colors (this does require using Sass to do it though.)

## Further Reading

- [Semantic HTML](https://web.dev/learn/html/semantic-html/)
- [Accessible HTML](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
- [W3 Schools HTML Tutorials](https://www.w3schools.com/html/default.asp) if you're starting from 0

Alright - now to start using these concepts!