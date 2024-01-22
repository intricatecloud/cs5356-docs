---
sidebar_position: 1
title: Working with Git & Github
---
One of the tools we'll be using a lot of over the course of the semester is Git & Github!

If you're already familiar with Git & Github, go ahead and skip to the last step at the bottom.

## If you're unfamiliar with Git...

Git is a version control system that is commonly used to keep track of code changes. Similar to how you can see previous revisions of an assignment on Canvas, or previous revisions of a Google Doc, you can see previous revisions of code, and document your new changes as you develop your project.

Get started by following the steps below:

- [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and optionally, a GUI for Git like [SourceTree](https://www.sourcetreeapp.com/). You can use git through the terminal or through SourceTree - whichever you find easiest. No shame in the UI game.
- Create your [Github.com account](https://www.github.com) by going to Github.com and click Sign Up in the top right
- Then follow [their Introduction to Github text-based course](https://github.com/skills/introduction-to-github). The README will walk you through all the steps that you'll be using many times over the course of the class so its a good intro to the git workflow

I won't be going into a lot of detail on how to use git during class. That said, if you find that at some point you borked your git repository, and you're scared of losing changes, schedule office hours! That's what we're here for.

## Share your Github handle

Share your handle by submitting the [Assignment in Canvas](https://canvas.cornell.edu/courses/61594/assignments/624872)

## Introduce yourself on the Course Blog
We're going to be using Github a bunch, and the best way to get familiar with the Git workflow, is to start using it! So for this exercise, you'll use Github to create a blog post using Markdown that will then get automatically deployed to the class website.

* Take a look at the [blog here](/blog).
* Click on the Link to Github at the top right of the page, and click the Fork button.
  * The Fork button will create a copy of this repository where you can make edits
  * In the next step, you'll add a file to your copy of the repository, and then contribute it back to the original repository. This is called a Pull Request.
  * Its a "Request to Pull changes" from your copy to mine.
* Add a Markdown page to `blog/$date-$cornell_id.md` for example - `blog/2024-01-22-da335.md`
* Copy/paste this template, and answer the questions in your blog post.
```
---
title: About my-cornell-netid
authors:
  name: Your Name
  title: Your Cornell Program
tags: [intro]
---

- Name/Nickname:
- Program you're in at Cornell:
- Last TV show you binged, or a movie you watched:
- Worst CS Topic:
```
* Create a Pull Request on intricatecloud/cs5356-docs (see this guide for [Creating a Pull Request from a Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork))
* Submit the link to your GitHub Pull Request on the updated class page on this [Canvas Assignment](https://canvas.cornell.edu/courses/61594/assignments/624874). Your URL will look something like `https://cs5356.intricatecloud.io/blog/2023/01/23/your-cornell-netid`
