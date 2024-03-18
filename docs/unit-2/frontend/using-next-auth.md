---
sidebar_position: 4
---

# Using NextAuth with NextJS

One of the nicer parts of working with NextJS is the ability to easily add authentication to your application.

**Authentication and Authorization** This topic of auth is sometimes described as Authentication (AuthN) vs Authorization (AuthZ).

Authentication refers to the ability to identify who you are.

Authorization refers to the ability to describe what you can do.

From these examples below - which ones adequately describe who you are, instead of what can you do?:
- A driver's license
- A passport
- A Subway's Rewards Card
- A Credit Card
- A Cornell ID Card

### NextAuth

For the purpose of this section, we'll talk about AuthN - identifying who a user is.

When using NextJS, you can easily add authentication features to your application using a library called NextAuth. See more https://next-auth.js.org/getting-started/introduction

Adding NextAuth takes a couple of steps but this allows you to do a couple of things
* Automatically provide a Sign In / Sign Up page
* Make the user's identity available to your app Pages & Components
* Make the user's identity available to your backend API routes
* Securely store the user's identity in a cookie to make this data available to both frontend (pages & components) and backend (API routes) code.

### Configuring NextAuth

The [Getting Started](https://next-auth.js.org/getting-started/example) page provides helpful examples to set up NextAuth.

**Add an API Route**

Create a file called `pages/api/auth/[...nextAuth].js`. This filename means this file is a Dynamic Route handler with a "catch-all" route - meaning that ANY routes under `/api/auth/*` will be handled by this file.

**Configure your Provider**

Within `[...nextAuth].js`, you can then add a provider. For the purpose of Milestone 2 - all you need is a `CredentialsProvider`. 

If you wanted to experiment with Google Auth or Github Auth, NextAuth makes that easy for you - but it is not expected for Milestone 2.

Here's a snippet of what CredentialsProvider looks like, copied from the [docs](https://next-auth.js.org/providers/credentials):
```js
import CredentialsProvider from "next-auth/providers/credentials";

...

providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
      const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

      if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }
  })
]
```

A couple of things to highlight here:

* `credentials: { ... }` is expecting an object with a username and password. The labels there refer to the labels that will appear on the automatically created sign in page. If you wanted to ONLY support a username, you could remove the `password` property.
* `authorize: (credentials, req) => { ... }` allows you to define a custom function that receives the credentials from the sign in form (`username`), and allows you to do something with it.
  * In a "traditional" app - here is where you would look up the user's password, and compare it to the password provided, and then reject the sign in attempt if it didn't match. If it did, you would allow the user to complete sign in.
  * The `user` variable within the function is going to be our representation of a user - this is sometimes called a JWT token or an ID token or just a token. It is a JSON object that contains important information that identifies the user, in this case - an `id`, a `name`, and an `email`.

### Handle Auth on the Frontend

Before we attempt to sign in, let's make sure we have a way of confirming this is working.

Add a `<SessionProvider>` component to your `pages/_app.js` - this allows your entire application access to the user's session. (Pulled from this section on [the docs](https://next-auth.js.org/getting-started/example#configure-shared-session-state))

```jsx
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
```

Lastly - let's go to the `NavBar` where we can configure the Sign In button to behave correctly.

Update `components/NavBar.js` to include the `useSession` hook - which let's you get access to the user's session courtesy of the `<SessionProvider>` component we added.

```jsx
import { useSession, signIn, signOut } from "next-auth/react"

const NavBar = () => {
    const { data: session } = useSession()

    return <nav>
        { session ? 
            <div>
            {`Signed in as ${session.user.email}`}
            <button onClick={() => signOut()}>Sign out</button>
            </div> : 
            <div>
                <button onClick={() => signIn()}>Sign In</button>
            </div>
            {}
        }
    </nav>
}
```

Now, load your app in the browser, and see what happens in your NavBar.

When you are in a signed out state (i.e. you don't have a `session` object defined), you'll see a button to sign in. This will kick you to the login page.

When you are in a signed in state (i.e. you DO have a `session` object defined), you'll see a button to sign out and you'll have a `session` object.

Note - `session.user` will contain the user object you returned from `authorize: (credentials, req) => { ... }`. Any data you add there will be made available in the session object.