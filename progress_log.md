
# Progress Log

This document exists to explain the development process of this web app.

## Intial State

This app was intially written a year ago as a test project to see if I could write code from my phone without the need for a laptop.
Because of that, the code is a bit messy and the functionality is limited.

The app is written as a browser app with an express server backend. In the intial state there is no database, everything is stored in local files.

## Cleaning Up

4 Sept 2020

I need to clean up the code base.
First, I consolidated css code into one file.
Then I got rid of the logo and used a simpler navigation.

## Change backend storage format

5 Sept 2020

When I first built the app it made sense to store the journal entries in plaintext and parse the file manually. I plan to move the backend to MongoDB in the future so that no longer makes sense. I changed the storage method to JSON because that will make the switch to MongoDB easier.

## Delete entries

6 Sept 2020

Entries now have an "X" button in the top right corner that when clicked will delete that post. The API call sends the timestamp to the server so that the server can search through and delete the correct one from the "database." In the future, when the database is real and not just local files, the API call will be made directly to the database with the unique ID and will be more efficient.

A second commit adds a confirm popup forcing the user to confirm that they want to delete the post.

## "No entries yet" text

6 Sept 2020

If there are no entries in the journal and the user is on the journal page, a message will be displayed directing the user to the new entries page. If there is one post and that post is deleted, the same message is displayed.

## Randomized prompts

7 Sept 2020

On the new entries page, the placeholder text in the text area is now a randomized journal prompt such as "What was one thing that gave you joy today?" or "What converstations did you have today?" This is just to make the app a bit less boring... hopefully.

## Date picker

7 Sept 2020

The ideal use case of this app is that every post has a photo. The whole value of a photo journal is to look back and reminisce, but that is hard to do if you just started using the app and only have 1 or 2 posts. I added a date picker to the new entries page so that you could upload posts from past dates and hopefully give the new users a way to not start from scratch.

## Switching to a React front end

9 Sept 2020

The front end is getting a bit complex and building components with document.createElement is getting tedious. I think it's time to use a framework. I am currently learning React to make the switch. After that I will use Next.js to upload the site to a live domain.

## NextJS

10-17 Sept 2020

Instead of using a normal React build process I decided to complicate things with a server rendered React app through NextJS. This is cool and in the end will make things simpler I think. It took some setting up but I really like how it structures code. It also allows easy publishing so that a demo of the project can be live on the internet with minimal work. This happens through a service through Vercel which is free for small projects like this.

## Vercel

17 Sept 2020

The site can now be demoed live [here.](https://capsulate.vercel.app)

## Journal API

17 Sept 2020

The journal is created by reading data from an API. The api is also hosted within nextjs. The API isn't hookedup to a database so it is just reading from a variable. This means you can't do any CRUD operations except read.

## Desk theme

18 Sept 2020

The app now has a less boring look. It is now meant to look like pieces of paper strewn across a desk. There are some cool hover and focus effects I made that give a responsive feel. It feel more "appy" now. Much more friendly and approachable.

## Sass replaces css

18 Sept 2020

In order to simplify the now fancy desk themed styling, I started using Sass instead of css. This lets me write much more readable code that will hopefully be more maintainable.

## Moving forward with MongoDB

19 Sept 2020

I feel like I'm reaching diminishing returns working on the front end. I can continue to make it prettier forever, but that doesn't change the fact that the app doesn't do anything yet... I need to build a way to upload entries and save them in the cloud. The problem is that I don't have much experience with connecting databases. I'm currently going through the MongoDB University Intro course. Hopefully that doesn't take more than a few days.

## Success with MongoDB

22 Sept 2020

There is now a real backend hooked up to a real database. You can do normal CRUD operations on entries.
However as of right now I can't yet handle image upload. In order to keep things simple, I think I will just allow a url upload so that I don't have to host any images myself. That's not ideal but it will work.
