---
sidebar_position: 8
title: Async JS
sidebar_class_name: hidden
---

# Asynchronous Programming with JS

Javascript was primarily built to be used within browsers to help add interactivity to webpages in ways that CSS can't, such as complex animations and doing useful things with user input.

Because of this, there are some asynchronous programming concepts that are built into the language, so that it can play nicely within a browser.

## Javascript is Single Threaded

In Javascript, the most important thing to remember is that a Javascript process is __single threaded__.

There is no mechanism for spinning up multiple threads, or forking new processes in the browser. So all your code has to be designed around this one limitation.

Below are some examples and explanations for sync vs async code.

## Synchronous code

Synchronous JS code might look like:
```js
const userClickedOk = confirm('Can you click Ok?')
console.log('Did the user click Ok?', userClickedOk)
```
This snippet will pop up an alert box in the browser, wait until you click Ok or Cancel, and then return a boolean value indicating whether you clicked Ok or not.

For this particular example, you'll notice that calling `confirm('Can you click Ok?')` brings up a little panel, and doesn't let you do anything else until you click the buttons. You can't highlight any text or click any buttons on the page.

Your tab is effectively paused until you take an action on that alert box.

This is also called a __blocking__ operation - any further code execution on the page is __blocked__ until it gets unblocked.

How do you know whether or not a function is blocking? Typically, the documentation will provide some sort of a hint as to which one it is. But in general, these types of use cases are considered asynchronous in JS:
- Reading/Writing a file from disk
- Sending/Receiving data from the network
- Receiving user input from the keyboard, mouse, or other external devices

Let's look at how you asynchronous code is written.

## Asynchronous code

### setTimeout

Let's take a look at a short example, pausing the code for 3s. In JS, there is no `sleep` or `pause` function. Instead, you have `setTimeout`. In the example below, I've added some console.log statements to point out the order of execution.

```js
console.log('1')
setTimeout(() => {
    console.log('2')
}, 3000)
console.log('3')
```
`setTimeout` is an asynchronous function that takes a function as the 1st parameter, and a delay in milliseconds as the 2nd parameter. It will call the first function after the delay.

That first parameter is typically called a "callback function". It is a function that you pass, that will be "called back" when the function finishes executing.

In what order did things print?

### fetch()

`fetch()` is available in browsers, and is part of the Web API to make it easy to "fetch" data from other web-based services. 

`fetch()` uses a concept in multi-threaded programming called `Promise`. A `Promise` is an object with a `.then()` function, and a `catch()` function.

`.then(callback)` - this function accepts a function as a parameter that will be called when the Promise completes.

`.catch(callback)` - this function accepts a function as a parameter that will be called when the Promise has an error.

In this example, we'll use a Promise to fetch the a random dog picture.
```js
console.log('1')
fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => {
    console.log('2')
    return response.json()
  })
  .then((data) => {
    console.log('3')
    console.log(data)
  })
  .catch(err => {
    console.log('4')
    console.error(err)
  });
console.log('5')
```

In what order did things execute?

- The `fetch()` function returns a Promise. It has NOT yet reached out to the URL to download the HTML page.
- Now you have a Promise, and you can tell it what to do in the future when it completes. It has NOT yet done anything.
- You can also tell it what to do in the future when it fails. It has not yet done anything.
- Once you reach the last line of code of the program, the Javascript engine sees that there is no more code left to run. It can then go and actually fetch the HTML page.
- If it completes successfully, it will call the function that was passed to `.then(...)`
- If it fails, it will call the function passed to `.catch(...)`

In the successful case, you will see `1, 5, 2, 3`.

In the failed case, you will see `1, 5, 4`.

### Implementing setTimeout as a Promise

We'll do this as an exercise to see how a Promise works in practice. Lets go back to this example from the top:
```js
console.log('1')
setTimeout(() => {
    console.log('2')
}, 3000)
console.log('3')
```

Let's break this up, and make it work using promises instead.

Our desired end result is to have code that reads:
```js
console.log('1')
setTimeoutAsPromise(3000).then(() => {
  console.log('2')
})
console.log('3')
```

Here's how you might implement this with a Promise
```js
const setTimeoutAsPromise = delayInMs => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, delayInMs)
  })
}
```
Let's dig in:
- You can create a promise with `new Promise(...)` and return it.
- The first parameter is a function with 2 functions passed in, `resolve` and `reject`. It is up to you to decide when to call either of them.
- The body of that function contains the code that should run immediately. In this case, it is the `setTimeout` function.
- Once `setTimeout` completes, it will call `resolve()` which will resolve the promise, and automatically call any function that was passed to `.then()`
- In this example, theres no way for this to fail, so we don't wind up using `reject`
