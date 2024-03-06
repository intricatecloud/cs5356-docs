---
sidebar_position: 2
---
# Exercises: Displaying things with React

## Exercise 1
For this exercise, we'll re-do the exercise from [1. Static Websites/JS Practice](../../unit-1/../unit-1-static-sites/practice-exercises.md) where we take a static/hardcoded array of data and we dynamically create HTML to display it - this time with React.

So for this exercise, try that using React.

1. Use this [Codepen template](https://codepen.io/pen?template=QWPbgmX), or the snippets below if you want to do it in an editor.
2. Using the [React cheat sheet](./../../resources/react-cheat-sheet) + some googling, implement the prompts

## Instructions

In the starter code, the object called `postsData` is being passed as a prop to the `<App>` component. You can then use `props.postsData` to use the sample data.

Using that data, create a component named `<Post>` to display the post contents. Then, for every post in `postsData`, display the post using your Post component.

A common way to do this is using `.map` on Array objects:

```jsx
return <div>
  {
    props.postsData.map(post => {
      return <your-component-goes-here></your-component>
    })
  }
</div>
```


```html title=html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">

<div id="root"></div>
```

```js title=js
import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

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

const App = () => {
  /**
    Iterate over postsData, and for every post object,
    create and display <Post> component that displays
    the properties of the post object.
  */
  return (<div>Hello World</div>)
}

ReactDOM.render(<App />,
document.getElementById("root"))
```

## Exercise 2: fetch() and display data with React

Now, for a more real use case - getting data from an external source, and then displaying it with React.

For this exercise, you'll use the `fetch()` API (using Promises) to request data from NYC's Open Data. You'll then read the data and parse it as JSON.

1. Use this [Codepen template](https://codepen.io/pen?template=vYzzQXB), or copy the snippet below
2. Using the [React cheat sheet](./../../resources/react-cheat-sheet) + some googling, implement the prompts


```html title=html
<html>

<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>

<body>
  <div id="root" class="mt-2 columns">
  </div>
</body>

</html>
```

```js title=js
  import React, { useState, useEffect } from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

/* This dataset is free, provided by NYC Open Data.
   This shows all the indoor and outdoor pools under
   the jurisdiction of NYC Parks Department.

   See more below
   https://data.cityofnewyork.us/Recreation/NYC-Parks-Pools/y5rm-wagw
*/
const datasetUrl = "https://data.cityofnewyork.us/resource/y5rm-wagw.json"

/*
1. When the App component loads for the first time, use the `useEffect(() => {...})`
  and call fetch() within that function to request the data at datasetUrl
2. Save the response of the data to a state value
3. Based on the state value, display a component that has a Name element and a Borough element
*/

const App = () => {
  return (<div>hello world</div>)
}

ReactDOM.render(<App />,
document.getElementById("root"))
```
