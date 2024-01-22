---
sidebar_class_name: hidden
---

# Hosting & Deployment

Once you're ready to take code from your machine and put it up on the internet, you'll enter the world of Web Hosting & Deployment.

In this context, __Web Hosting__ refers to the process of making your files and functionality available to others on the public internet.

__Deployment__ refers to the act of moving those files from one computer, to another computer (usually your web host).

## Hosting

Static Websites are __EASY__ and __FAST__ to host. You put files somewhere on a computer, and then run a web server like `python3 -m http.server` to make them available to other people using a browser. Thats the appeal of a static website.

There are an ever-increasing number of Web Hosting services to choose from, that are incredibly user-friendly, each with their own quirks
- Github Pages
- Netlify
- Firebase Hosting

## What is the role of the Web Server?

Making your work available on the internet requires a couple of steps:
- Web Server - software that will allow those files to be used by a browser
- One or more computers that are accessible on the public internet
- Copying your code to that computer

A Web Server fulfills a couple of responsiblities

#### 1. It listens on the network for HTTP data

It does this by opening a "socket" on your computer, and listens for incoming requests. Whether you're using the browser or a terminal command, you initiate a connection by writing some data to a network socket on a computer.

HTTP refers to the protocol used to describe how to interact with the Web Server.

```
GET / HTTP/1.1
Host: google.com
```

If we break this up into distinct pieces, we have:

The first line refers to the Request Line.

- `GET` - an HTTP Verb (GET, POST, PUT, PATCH, DELETE) that describes what you're trying to do. In this case, GET refers to a request to "get" a file.
- `/` - a path to a file that you want to request. `/` implies `/index.html`, but you could write any valid path `/data/products.json` for example.
- `HTTP/1.1` - The version of HTTP you're writing. There is an `HTTP/2` but its pretty much the same except for performance improvements.

The 2nd line is called a "header". A "header" is a `Key: Value` pair, split by `:`
- `Host: google.com` - This is a header named `Host` and the value is `google.com` telling the server that it wants the Request Line (from above) from this host called `google.com`.

#### 2. It "serves" files from a directory

When using `python3 -m http.server` or VS Code's Live Server, it makes any files in that directory available to anyone requesting it over HTTP (like browsers).

It also tells the browser what kind of files they are via a header called `Content-Type`.

#### 3. It streams that data back to the browser

You don't have to write any additional code to read a JPG file, chunk it up into pieces, and write it out to the browser in chunks.

It also offers a handful of convenience/performance optimizations such as:

- Letting the browser know if the file has changed since you last requested it
- Responds with status codes (200 OK, 404 Not Found, 500 Internal Server Error)

The Web Server handles this for you, and you don't have to write any of it. For Milestone 2, we'll be writing our own Web Server to handle more customized functionality that isn't supported with off-the-shelf tools like `python3 -m http.server`.

For the purposes of the first Milestone assignment, we'll be using Firebase Hosting.

All this behavior is captured in the log messages of the Web Server

### Access Logs

Access Logs refers to the pattern of log messages that are usually produced by Web Servers:

```
x.x.x.x [30/Mar/2018:04:39:15 +0000] "GET /robots.txt HTTP/1.1" 404 136 "-" "Barkrowler/0.7 (+http://www.exensa.com/crawl)"
```

These log messages contain really useful information for debugging

- Incoming IP Address
- the Date and Time of the request
- The Request Line (the HTTP Verb & Path you're accessing)
- The Status Code of the Request
- The number of bytes used by the request
- The User Agent

## Hosting Services

Firebase Hosting has a great guide to follow to get your site set up

## Deployment

In order to "deploy" your files to a web server, you have to copy your source files to your web server.

For static sites, your source files is the ENTIRE collection of files in the `public/` directory. Everything in that directory will be accessible by someone trying to access your web server.



