---
sidebar_position: 7
---
# Practice 2

## Exercise 1: Create some elements from static data

A very common pattern in frontend development is:
- Get some interesting data
- Iterate over that data
- Generate HTML for every piece of data

So for this exercise, we'll try that using Javascript and its API for working with the browser.

1. Use this [Codepen template](https://codepen.io/pen?template=RwBBYaP), or the snippet below if you want to do it in an editor.
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
    "postedBy": "WhimsyTales",
    "message": "Just had the most amazing brunch at this hidden gem in town! Highly recommend trying their avocado toast. #FoodieLife",
    "imageUrl": "http://dummyimage.com/190x100.png/ff4444/ffffff",
    "postedOn": "1/14/2023"
  }, {
    "postedBy": "JazzedWordsmith",
    "message": "Feeling so inspired after attending the conference today. So many great speakers and thought-provoking ideas! #ConferenceInspo",
    "imageUrl": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
    "postedOn": "8/3/2022"
  }, {
    "postedBy": "PixelatedDreamer",
    "message": "Just finished my morning run and already feel like I conquered the world! #FitnessGoals #RunningCommunity",
    "imageUrl": "http://dummyimage.com/189x100.png/5fa2dd/ffffff",
    "postedOn": "11/16/2022"
  }, {
    "postedBy": "SerenitySeeker",
    "message": "Started reading this book yesterday and I can't put it down! The suspense is killing me. #Bookworm",
    "imageUrl": "http://dummyimage.com/110x100.png/5fa2dd/ffffff",
    "postedOn": "8/26/2022"
  }, {
    "postedBy": "ChaosControl101",
    "message": "Finally booking my dream vacation! Can't wait to soak up the sun on the beautiful beaches of Bali. #Wanderlust",
    "imageUrl": "http://dummyimage.com/106x100.png/5fa2dd/ffffff",
    "postedOn": "4/18/2022"
  }]

  // Add your code below this line
  // -----------------------------


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
</details>
