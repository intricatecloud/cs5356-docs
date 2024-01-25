---
sidebar_position: 7
sidebar_class_name: hidden
---
# Practice 2.1

## Exercise 1: Create some elements from static data

A very common pattern in frontend development is:
- Get some interesting data
- Iterate over that data
- Generate HTML for every piece of data

So for this exercise, we'll try that using Javascript and its API for working with the browser.

1. Use this [Codepen template](https://codepen.io/intricatecloud/pen/RwBBYaP), or the snippet below if you want to do it in an editor.
2. Read the prompts within the `<script>` section of the Codepen
3. Using the [Vanilla JS cheat sheet](../resources/vanilla-js-cheatsheet.md) + some googling, implement the prompts

```html
<html>

<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>

<body>

</body>

<script>
  const postsData = [{
  "postedBy": "lmenguy0",
  "message": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  "imageUrl": "http://dummyimage.com/190x100.png/ff4444/ffffff",
  "postedOn": "1/14/2023"
}, {
  "postedBy": "ubazelle1",
  "message": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  "imageUrl": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
  "postedOn": "8/3/2022"
}, {
  "postedBy": "jschreurs2",
  "message": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "imageUrl": "http://dummyimage.com/189x100.png/5fa2dd/ffffff",
  "postedOn": "11/16/2022"
}, {
  "postedBy": "kdrew3",
  "message": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "imageUrl": "http://dummyimage.com/110x100.png/5fa2dd/ffffff",
  "postedOn": "8/26/2022"
}, {
  "postedBy": "mpartlett4",
  "message": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "imageUrl": "http://dummyimage.com/106x100.png/5fa2dd/ffffff",
  "postedOn": "4/18/2022"
}]

  <!-- CS 5356 Start Here -->
  <!-- 1. For every item in the array -->

  <!-- 2. Create an <img> element for the imageUrl field -->

  <!-- 3. Create an <p> element for the message field -->
  <!-- 4. Add the `content` CSS class to that element -->

  <!-- 5. Create an <p> element for the postedBy field -->
  <!-- 6. Add the `content` CSS class to that element -->

  <!-- 7. Append each element to the body -->
</script>

</html>
```


<details>
    <summary>
    View examples from real students when you're done.
    </summary>
    <p>My solution: https://codepen.io/intricatecloud/pen/RwBBYaP</p>
    <p>Student solutions:</p>
    <p>https://codepen.io/jiovine/pen/abjQamV</p>
    <p>https://codepen.io/christywu/pen/yLqQxPg</p>
    <p>https://codepen.io/jjw121/pen/MWBzqmJ</p>
    <p>https://codepen.io/cw656/pen/LYBXJZd</p>
    <p>https://codepen.io/aria-51/pen/xxJQaZP</p>
    <p>https://codepen.io/shunqilei/pen/LYBXJEQ</p>
</details>
