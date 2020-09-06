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

