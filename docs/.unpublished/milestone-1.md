---
sidebar_position: 100
---

# Milestone 1

For Milestone 1, you'll work with "our client" - someone who wants you to build their page for them. You'll review the wireframes for the project, and the technical specs, and implement it according to the specs.

## Context

Our client is a veterinarian who wants to sell pet products to their patients/customers that are better quality than what you’ll find in stores.

As a way of starting up their business, they’re looking to get a website up and running that they can start sharing out to gauge interest in their products before building out something bigger.

## Requirements

The site will function as a landing page, where potential customers should be able to choose between 3 products available for pre-order. When they select one of these buttons, they should be taken to a checkout page where they should be able to pay with a credit card.

They’re expecting a big hit of traffic from this, and they need this to be fast & reliable. If a customer can’t access the site, they can’t place their order.

We’ll also need to provide them a dashboard where they can see the traffic to the website, but some screenshots of the data will do just fine for this first launch.

## Project Wireframes

You can review the Wireframe for this project over [here in Figma](https://www.figma.com/file/H85eC9Nup1D780yoHIzlBh/CS-5356-Prototype-%231?node-id=77%3A432&t=zj0cQezJSSFpXMkL-1)

The provided wireframes provide a rough idea of what the site could look like. You are free to style it how you wish - as long as you get something that works. I'm not expecting pixel-perfect copies of the wireframes, but I am expecting to see high level rows & columns of content.

## Technical Specs

### Code Stuff

This landing page will be set up as a Static Website, meaning its made up of just HTML, CSS, and Javascript. At a minimum, you should have an index.html file, an index.css file if you're using any custom CSS, and an index.js file for any of your Javascript.

The products that will be listed on the page will be provided via a JSON file, and the landing page will display the products based on the data in that JSON file. The provided JSON file contains the most recent set of products, along with an `active` field to hide products that are still being worked on. We should filter for products that are currently `active` and ignore all the inactive products.

The website should display the name of the product, price, the description, the highlighted features and a button that takes them to the designated purchase link for that product.

We'll use Stripe Products to create the products & a checkout page where all the billing is managed for us. Create a free Stripe account (you can use it in Test mode), and create a Payment Link. See more [info here](https://stripe.com/docs/no-code/payment-links)

- See the section of [Laying out HTML](https://cs5356.intricatecloud.io/unit-1-static-sites/page-layouts) to help you put together your site from the provided wireframes
- See the [Vanilla JS Cheat Sheet](https://cs5356.intricatecloud.io/resources/vanilla-js-cheatsheet) for useful snippets you can use in your site.

### Hosting

We'll deploy our landing page using Firebase Hosting, which lets us host this page for free for millions of requests. You can follow their guide here to [install the Firebase CLI & initialize your project](https://firebase.google.com/docs/hosting/quickstart).

All the metrics that we need to see about the website will be available in the Firebase Console, after you set up Cloud Logging. Follow the Firebase [guide to setting up Cloud Logging here](https://firebase.google.com/docs/hosting/web-request-logs-and-metrics)

We'll want screenshots to answer the following questions about your project?
   1. How many views did we have within the last 24 hours?
   2. How long is the request to load the page over the last 24 hours?
   3. How big is the request?
   4. What countries are accessing the website?

## Ready to get started?
Accept the invite into the Github Classroom organization, and clone the template repository.

# Grading

Each category is worth 3 points. See the rubrics in Canvas for more details.

1. Create an HTML / CSS page to match provided wireframes
2. Dynamically fetch and display the products on the site
3. Host & deploy your code to Firebase Hosting
4. View and analyze website traffic & performance

## Submission

This assignment will be submitted via Github Classroom & Canvas, so we can leave feedback on your code and you can leave your code private.

For your submission to Github Classroom, create a Pull Request containing the code for your project.

For your submission in Canvas, please submit:
* a PDF containing the link to your pull request in Github Classroom.
* Your public URL to your working website, something like https://your-project-id.firebaseapp.com
* Screenshots of metrics and logs to answer the questions (at the bottom of the Technical Specs)
