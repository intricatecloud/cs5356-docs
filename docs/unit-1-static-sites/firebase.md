---
sidebar_class_name: hidden
---

# Firebase & Firebase Hosting

For this class, we'll be using a handful of features provided by Firebase.

Firebase is a platform that makes it easy for developers to build projects, while leveraging industry-standard tools & web-scale systems to handle projects both large and small.

The reason why I include Firebase as part of this class is that its really easy to build something on Firebase for Free (or very close to Free).

They provide services to handle the common bits of building web & mobile apps - such as the following which we'll be using for class

- __Hosting__ - Deploy your code to a fleet of servers available worldwide, making things fast for your users no matter where they are.
- __Authentication__ - Allow users to create an account with a username and password, verify their email, link it to Github, Twitter, Google accounts, and log in an unlimited number of times for FREE!
- __Firestore__ - Read/Write any arbitrary blob of JSON data you want, for very cheap (or almost free).

## Hosting

Firebase Hosting provides a number of cool features out of the box without any additional effort on your end:
- all your files are deployed worldwide via a Content Delivery Network
- HTTPS is included for free, and you can link it to your own domain if you want to
- you can configure your hosting and deploy your code with the Firebase Command Line Interface (CLI)

Follow their [getting started guide](https://firebase.google.com/docs/hosting/quickstart)

Here's some things to be aware of when working with Firebase on your machine:

- Prefer the `npm` way of installing their CLI. If you followed the [Install NodeJS in the Dev Environment guide](./../getting-started/setup-dev-environment.md) steps, you'll have `npm` available already
- `firebase init hosting` is the command you need to set up Firebase for your project. You'll want to run this from the root directory of your repository
- Others in the class and I ran into an issue when we selected "Create a new project" option. The workaround was to create your Firebase project via the website, and then select "Use an existing project" when using the CLI.
- One of the prompts asks `What do you want to use as your public directory?`. This refers to the directory containing all the files you want to deploy and make public. The default is to use `public/`

Once you're done, you'll see a handful of new files in your repository.

- `firebase.json` - this contains all the configuration info for your Firebase Project
- `.firebaserc` - this contains the Firebase Project ID that will be used by the Firebase CLI
- `public/404.html` - a default 404 page that will be displayed whenever you request any file that doesn't exist
- `.gitignore` - a file that tells git it can ignore certain files and prevent them from being committed to your repository.

Add all of these files to your git repository, and push your changes.

As your last step, run `firebase deploy` and once its complete, it will give you 2 links:
- a link to your Firebase Project in the Firebase Console
- a link to your website like your-project-id.web.app