---
sidebar_position: 4
---

# Working with Forms

Forms provide a way for a user to provide some data via a web app

Forms refer to the `<form>` element, and the patterns for moving the data around.

The pattern is:
* Create a Form element
* Add some input elements b ased on the data you want to provide
* Add a submit button
* When the submit button is clicked, do something with the form values

## Form Elements

`<form>` elements provide some behavior out of the box that is useful when working with input elements.

Let's take a look at this example of a Login Form:

```jsx
const LoginForm = props => {
  const onSubmit = event => {
    // prevent the page from refreshing
    event.preventDefault()

    // do something when you submit
    console.log(event.target)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="username" >
      <input type="password" name="password" >
      <input type="submit">
    </form>
  )
}
```

The easiest way of doing this is with Bulma Form Fields (see the [docs here](https://bulma.io/documentation/form/general/)). It comes with a styled label and a nice looking input element.

```jsx
<div class="p-5">
  <div class="field">
    <label class="label">Username</label>
    <div class="control">
      <input class="input" type="text" id="username" placeholder="Your username...">
    </div>
  </div>
  <div class="field">
    <label class="label">Password</label>
    <div class="control">
      <input class="input" id="password" type="password" placeholder="Your password...">
    </div>
  </div>
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
  </div>
</div>
```

Forms have an `onSubmit` callback - a way to define a function that will run when the form is submitted, similar to an `onClick` callback.

If you type something in the form and hit the Enter key, you'll submit the form and run the `onSubmit` callback.

The only parameter passed to the `onSubmit` callback is called `event` and it refers to data about the event that caused this callback to run. The most important value from `event` is `event.target` - in a form, this refers to the form and all of its inputs.

Note: When a form is submitted in a traditional HTML/CSS webpage (without Javascript or React), the data from the form is sent to a URL (similar to using fetch) but causes the page to refresh in the process - which doesn't work well with React. Since we're using React, we'll avoid this step by adding `event.preventDefault()` as the first line in the `onSubmit` callback.

Forms let you "collect" the different inputs together to make them easier to work with. In the example above, there are 3 inputs - 1 text field named `username`, 1 password field named `password`, and 1 submit button. If you type in the fields and hit submit you should see:

```js
const onSubmit = event => {
  event.preventDefault()

  console.log(event.target.username.value)
  console.log(event.target.password.value)
}
```

You can access the value from any input element by accessing `event.target.<name of input>.value`.

## Do something with the Form data

As a last step, usually you'll want to do something with the data you submit. For the purpose of this example, we'll display what we just typed. Note - you usually don't want to show a password - this is just for illustrative purposes.

When we have data that we want to display that may change over time, that means we'll want to use React State. We'll add a `useState` hook for each input element that we want to save and then display that state value.

```jsx
const LoginForm = props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = event => {
    // prevent the page from refreshing
    event.preventDefault()

    // do something when you submit
    setUsername(event.target.username.value)
    setPassword(event.target.password.value)
  }

  return (
    <div>
    <form onSubmit={onSubmit}>
      <input type="text" name="username" >
      <input type="password" name="password" >
      <input type="submit">
    </form>
    <div>You submitted: {username}/{password}</div>
    </div>
  )
}
```

One thing you'll notice is that if you refresh the page, and the form is cleared, you'll see `You submitted: /`. This is because the initial value of those pieces of state are `""` (an empty string). Since you haven't submitted the form yet, the values are empty strings and all you see is the middle `/`.

Sometimes this is fine, but a common workaround is to conditionally show some elements by checking it for the initial value. If you wanted to hide that text until after you submitted, you could do something like:

```jsx
return (
  <div>
    <form onSubmit={onSubmit}>
      <input type="text" name="username" >
      <input type="password" name="password" >
      <input type="submit">
    </form>
    { username == "" ?
      <div>Nothing submitted</div> :
      <div>You submitted: {username}/{password}</div>
    }
  </div>
)
```
