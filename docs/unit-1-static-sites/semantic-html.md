# Semantic HTML
## Examples of a main element usage

Main, and skip to main content features

Before
```html
<html>
<body>
    <div>
        <div>CTECH421</div>
        <div>Pages</div>
        <button>Sign In</div>
    </div>
    <div>
        <h1>Check out my cool website</h1>
        <p>Lots of interesting content on this page</p>
    </div>
    <div>
        Check out our social media pages
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
    </div>
</body>
</html>
```

This doesn't tell you anything about what you're seeing on the website. When using div's - all we can read is that theres a bunch of text on the page.

```html
<html>
<body>
    <nav>
        <div>CTECH421</div>
        <div>Pages</div>
        <button>Sign In</div>
    </nav>
    <main>
        <h1>Check out my cool website</h1>
        <p>Lots of interesting content on this page</p>
    </main>
    <footer>
        Check out our social media pages
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
    </footer>
</body>
</html>
```

Now when we read it, we can easily tell there is a nav bar, the main content, and a footer on the page.

## Example of article

What about displaying a stream of content on the page?

```html
<main>
    <div>
        <img src="some-featured-image.jpg" />
        <h1>What is Software Engineering?</div>
        <p>Software Engineering is the... </p>
    </div>
    <div>
        <img src="another-featured-image.jpg" />
        <h1>What do Software Engineers do all day?</div>
        <p>Check out some of these videos...</p>
    </div>
</main>
```
Based on reading the HTML, it looks like there are 2 chunks of content on the page, each showing an image, a header, and some text. What about this?

```html
<main>
    <article>
        <img src="some-featured-image.jpg" />
        <h1>What is Software Engineering?</div>
        <p>Software Engineering is the... </p>
    </article>
    <article>
        <img src="another-featured-image.jpg" />
        <h1>What do Software Engineers do all day?</div>
        <p>Check out some of these videos...</p>
    </article>
</main>
```
Now, this is more clear - there are 2 "articles" on the page, showing the image and the title of each article.

## Examples of figure

What about displaying images?

```html
<main>
    <div>
        <img src="featured-image.jpg" />
        <p>You won't believe what happened next!</p>
    </div>
</main>
```

This looks like an image and some text, although its not immediately clear if the text is related to the image.

```html
<main>
    <figure>
        <img src="featured-image.jpg" alt="A person trips and spills their drink on the floor" />
        <figcaption>You won't believe what happened next!</figcaption>
    </figure>
</main>
```

Now, we can see that this is an image with a caption, where the image contains "alt text" (a text alternative to the image), and a caption that accompanies the image.

Semantic HTML helps you provide hints to the reader as to what is actually displaying on the page.