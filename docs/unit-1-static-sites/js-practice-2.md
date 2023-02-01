---
sidebar_position: 8
title: Practice 2.2
---

## Practice 2.2: Create some elements from external data

Now, for a more real use case - getting data from an external source.

For this exercise, you'll use the `fetch()` API (using Promises) to request data from NYC's Open Data. You'll then read the data and parse it as JSON.

1. Use this [Codepen template](https://codepen.io/intricatecloud/pen/gOjdmgP?editors=1010), or copy the snippet below
2. Read the prompts within the `<script>` section of the Codepen
3. Using the [Vanilla JS cheat sheet](../resources/vanilla-js-cheatsheet.md) + some googling, implement the prompts

Some helpful links
- Using the [`fetch()` API](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data) by Digital Ocean
- [Introduction to fetch()](https://web.dev/introduction-to-fetch/) by web.dev

```html
<html>

<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>

<body>  
</body>

<script>
  /* This dataset is free, provided by NYC Open Data.
   This shows all the indoor and outdoor pools under
   the jurisdiction of NYC Parks Department.
   
   See more below
   https://data.cityofnewyork.us/Recreation/NYC-Parks-Pools/y5rm-wagw
*/ 
const datasetUrl = "https://data.cityofnewyork.us/resource/y5rm-wagw.json"  

<!-- CS 5356 Start Here -->
<!-- 1. Use fetch() to request the data at datasetUrl -->

<!-- 2. When you get the response, read it as json -->

<!-- 3. Once the data is parsed, iterate through every piece of data  -->

<!-- 4. Create an element for the Name field -->

<!-- 4. Create an element for the Borough field -->

<!-- 5. Append each element to the body -->

</script>
  
</html>
```
