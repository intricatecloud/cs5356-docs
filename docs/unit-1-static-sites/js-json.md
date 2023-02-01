---
sidebar_position: 6
title: JSON Objects
---
# JavaScript Object Notation, or JSON

Pronounced Jason or JaySawn.

JSON is one of the neatest features about Javascript and the web in general.

Because Javascript is an interpreted language, and not a compiled language (like C++ or Java), there is little use for classes like `class Animal { ... }`. Instead, you can make up objects on the fly.

## What is it?

JavaScript Object Notation - it is the way you can define an Object in Javascript.

```js
const animal = {
  name: 'Cujo',
  type: 'dog',
  age: 5,
  bark: () => {
    console.log('Bark')
  }
}
```

- You first define the variable, and then using `{ }`, you define the properties of that variable.
- Anything to the left of a `:` is the name of the property, and to the right of the `:` is the value of the property.
- You can view the properties of this object using the dot notation: `animal.name`, `animal.type`, and `animal.age`
- You can make this animal bark by `animal.bark()`

The most useful feature of Javascript is the ability to write this type of object notation as plain text, and then have JS load it up into objects that you can interact with in code.

Here's what I mean:

Let's create a file named animals.json. This will contain an array with 3 elements.

```json
[{
  "name": "cujo",
  "type": "dog",
}, {
  "name": "mittens",
  "type": "cat",
}, {
  "name": "slytherin",
  "type": "snake"
}]
```

You can then read this file as a string, parse it with JSON, and then use it!

```js
const jsonString = '[{"name": "cujo","type": "dog"}, {"name": "mittens", "type": "cat"}, { "name": "slytherin", "type": "snake"}]'
const animals = JSON.parse(jsonString)
console.log('First animal name', animals[0].name)
```

There is one limitation here though - you are not able to parse functions as JSON. You can include many primitive types like strings, numbers, and booleans - but you canNOT parse functions.
