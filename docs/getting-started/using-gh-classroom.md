---
sidebar_position: 3
title: Using GH Classroom
---
# Using Github Classroom

We'll be using Github Classroom in order to review assignments this semester. This accomplishes 2 things:
* it lets you push code to a private repository you own (and have admin access to)
* it lets myself and the TAs review all your work without having to manage permissions on 120+ repositories.

We'll use it for these 3 steps in your assignment.
1. Start your assignment
2. Submitting your assignment
3. Reviewing feedback on your assignment

## 1. Starting the assignment

When you accept the invite to a Github Classroom assignment, you'll be guided through a couple of steps. The invite link will be in the Assignment in Canvas.

When you click the link to accept the invite, make sure you use the same Github handle that you submitted for the class assignment. You'll also be prompted to select a student identifier - this will be your Cornell username.

Starting your assignment means:
* Github Classroom automatically creates a private repository for you that you own, and we (the instructor and the TAs) have access to.
* You can then either
  - a) clone your new private repository using your Git tool of choice (SourceTree or the terminal) (See the [Github Guide to Clone a Repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository))
  - b) open your new repository with the provided link to Open in VS Code
    - Once you click, it will prompt you to launch VS Code and install the Github Classroom extension.
    - Once its installed, you'll click the link again which will launch VS Code and automatically clone the repository to this folder `~/gitub-classroom/2023-ctech-cs5356/milestone-1-my-github-id`
    - You may have to click the button a couple times when you do this for the first time.
- You can then work with it in VS Code if you choose, or open that folder with any other editor

### Syncing updates
You will occasionally have to update your codebase with some commits that are pushed out by TAs, in order to properly grade your repository.

If you're using a Git UI tool, you can stash your changes, "pull" the latest changes from the `main` branch, and then unstash your changes.

If you're using git on the terminal, you can accomplish this with:
```bash
git stash
git pull --rebase origin main
git stash apply
```

If you find yourself in this view, and you're "stuck" where you type on the keyboard and nothing happens:
```
Merge commit bla-bla

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch main
# Your branch is up to date with 'origin/main'.
#
# Changes to be committed:
#       modified:   something/something.js
#
~
"~/path-to-your-project/.git/COMMIT_EDITMSG" xx,yy
```

You're inside of a terminal-based text editor called Vim. Hit the `ESC` key 5 times, and then type `:x` to get out. `:x` is an instruction to save and quit the text editor.

## 2. Submitting your assignment

You still need to submit your assignment via Canvas, and your repository will be one part of it.

In order to "submit" your assignment, you will save, commit, and push your changes to the `main` branch of your private repository. Include a link to your latest commit at the time of submission in your Canvas submission.

Once your code is up to date on your Github repository, you're ready to submit your assignment in Canvas.

Reviewers will then be able to leave feedback for you on your code via Github Pull Requests.

Note: There is no submission step in Github Classroom, only in Canvas.

## 3. Reviewing feedback on your assignments

Reviewers will be able to leave feedback for you via a Github Pull Request that is automatically created in your private repository.

In your Github repository, you can navigate to the Pull Requests tab, and view PR #1 titled "Feedback". This is where reviewers will be able to leave feedback for you.

Feedback will be provided in 2 forms:
- High level feedback about your code provided by myself & TAs
- Automated tests that will review your assignment to see if it matches the requirements.

Usually, the automated test will tell you what failed and we'll try our best to make it say why.

Your Canvas submission will contain the final breakdown of any point-deductions.

## Troubleshooting

Things won't always go according to plan, so chime into the class slack channel to get help, or email a TA (contact info will be in the Syllabus on Canvas).