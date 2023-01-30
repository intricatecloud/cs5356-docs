---
sidebar_position: 5
---

# JS Dev Environment

There are many ways to set up your environment to make it easy for you to write HTML & JS. I'll show 2 ways to get your source files running

## Using VS Code

The easiest way is using VS Code - it offers a lot of features out of the box to make working on the web easier. It has one of the best auto-complete features of modern editors today, and a huge library of Extensions that let you supercharge your experience within VS Code.

1. Install the [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
2. Open a folder containing HTML, and then hit `cmd + shift + p` (for mac users) to bring up the Action Dropdown menu, type in `Live Server`, and select `Live Server: Open with Live Server`

This will launch a web server within your VS Code environment to show you a preview of any HTML file you're currently working on. As you make your edits to your HTML/JS, you can refresh the page and see your changes.

## Manually using a web server

If you don't want to use VS Code, or you're already married to another editor, you can still do the same thing over the terminal.

```bash
# Navigate to a folder containing your HTML source files
$ cd ~/Documents/my-project
# Start the Web Server, for python2
$ python -m SimpleHTTPServer
# OR
# Start the Web Server, for python3
$ python -m http.server
```
And then open your browser, and go to `localhost:8000`. The `python` command will launch a web server running on port `8000` you can use to serve your HTML files to the browser.

With either approach, you'll have a Web Server running to make your files available to be read by your browser.

At this point, you'll be bouncing back and forth between your editor, the browser, and the browser dev tools to develop and troubleshoot your web pages.
