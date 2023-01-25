# Static Websites

Static websites are websites that are made using "static" content, where "static" means the files never change.
This is different than a "dynamic" website where the content of the page may be based on other factors, like your signed-in status.

Are there any examples you can think of for a static website vs a dynamic website?

## Overview

Static websites are typically created using a combination of HTML files, CSS for styling, and JavaScript for interactivity.

## HTML

For this first exercise, we're going to recreate some widgets using HTML & CSS using Bulma, the CSS framework. Bulma makes it easy to write things that look pretty without having to become a CSS master first.

But before diving into HTML with Bulma, let's go over how you can approach the problem

### Block elements vs inline block elements

The most basic HTML document is `<body> </body>`. What happens if you add some text between the tags?

HTML doesn't understand the concept of new lines. Simply adding a space (or multiple spaces) isn't enough to get things to move on the screen.

In order to put things on new lines, you have some options:
* `<br>` - a line break. This literally tells the browser to insert a new line.
* `<div>` - A div (not sure what its short for) is a way to define a block of content.

What happens if you add multiple divs?
```
<body>
  <div>
  Hello
  </div>
  <div>
  Again
  </div>
</body>
```

What happens if you nest divs?

```
<body>
  <div>
  Hello
  <div>
  Again
  </div>
  </div>

</body>
```