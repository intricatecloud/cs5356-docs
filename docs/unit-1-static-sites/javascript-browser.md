---
sidebar_position: 4
---
# Using Javascript in the Browser

## The Browser Platform

Your browser provides a platform for you to build on - offering a rendering engine to display rich HTML pages, and a way for you to run Javascript to use the diverse set of features of the browser.

Many of the features of modern browsers are standardized, and it is up to the responsibility of every browser vendor to implement the standard. Apart from traditional HTML & Javascript, you can:
- Read barcodes (and QR codes) with the [Barcode Detection API](https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API)
- Get the user's location (if they have given permission) using the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- Store data using [Local / Session Storage (for smaller data)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API), or [IndexedDB for larger blobs of data](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

If you'd like to read through the rest of the features that browser's can provide, take a look at [MDN's listing of available Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)

### 1. HTML & Javascript

For this class, we're going to use a small set of Web APIs to get a taste for what we can use, and why its useful.

__HTML__

The browser provides an interface for you to interact with HTML and its elements programmatically, meaning you can generate HTML on the fly, or parse through an HTML document to find data you're interested in.

You can do this via 2 global variables provided to your Javascript: `document` and `window`.

#### Document

`document` is a global variable containing the entire HTML document, stored as a variable, along with a set of functions that you can use to interact with that document. [See everything provided behind `document` here](https://developer.mozilla.org/en-US/docs/Web/API/Document)

Some of the ones we'll use are:
- `document.createElement` ([docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)) to dynamically create elements
- `document.querySelector` ([docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)) to find existing elements already on the page
- `document.append` or `element.appendChild` ([docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/append)) to add elements to the HTML tree

To see how some of these are used, take a look at the provided [Vanilla JS Cheat Sheet](../resources/vanilla-js-cheatsheet.md).

#### Window

`window` is another global variable containing data about everything in your current browser window, as well as the various features provided by the browser. [See everything provided behind `window` here](https://developer.mozilla.org/en-US/docs/Web/API/Window)

Not only is `window` a global variable, but every property inside of `window` is itself also a global variable you can use from anywhere in your Javascript. So you can write `window.alert('hello world')` to pop up an alert box, or you can also write `alert('hello world')` to accomplish the same thing, without the dot notation.

Some of the most common uses for `window` are:
- `console.log()` to write messages to the JS console
- `open()` or `close()` to open/close a new window or a new tab
- `localStorage.getItem()` or `sessionStorage.getItem()` to read and write data, saved to the browser

### 2. Developer Tools

The second most important feature provided by browsers are its Dev Tools. My examples below assume you're using Chrome & Chrome Dev Tools. You can use Firefox or Safari (or any other browser you want) - but the way you use the various Dev Tools features are going to be slightly different. I highly recommend NOT using Safari Dev Tools (as a beginner).

The features we'll be using are:
- the [Elements panel](https://developer.chrome.com/docs/devtools/overview/#elements), where we can see and manually edit all of our HTML and CSS
- the [Console panel](https://developer.chrome.com/docs/devtools/overview/#console), where we can see any output of our Javascript
- the [Sources panel](https://developer.chrome.com/docs/devtools/overview/#sources), where we can debug our javascript by setting breakpoints and inspecting the value of any Javascript variable at runtime
- the [Network panel](https://developer.chrome.com/docs/devtools/overview/#network), where we can see any network traffic generated from our HTML or Javascript.

There's a lot more you can do within Dev Tools, but its not relevant to us, yet.

You can read more about the various features of [Chrome Dev Tools on their page](https://developer.chrome.com/docs/devtools/overview).
