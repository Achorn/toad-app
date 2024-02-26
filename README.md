# Toad-agotchi

A simplified tomagotchi-like game where you create and interact with a toad by feedng and educationg it.

## Description

a full stack MERN application that has strong error hanlding, and authentication in the backend while the front end messes around with fancy css animations to add life into its components.

### Why

This project is purely for laughs, and reminds me that you can have fun while learning.

## How to Install

No installation necessary. the database is hosted on MongoDB, the server is hosted on Render, and the client is hosted on github. all you have to do is visit the website and start playing.

## How to use

### Create account

The email and password inputs are validated both on the front and backend, so
you need a valid email and a strong password (8 characters in length, one number, and one capital letter)

### Name your new toad

Now that you have an account, you will be prompted to name your new toad.

### come back to visit your toad and take care of it in various ways

Once you've named your toad, the client will create a toad object and save it in the database. you can feed and educate your toad. once you've feed/interacted with your toad it will be 'full', and you wont be able to interact with your toad again until the health bars for each interaction has gone down. Then, your toad will be ready to interact with you again.

### Deleting and creating a new toad

If for any reason you wanted to start over, you can delete your toad by clicking on the delete button. Once your toad has been deleted from the database, you will be redirected to the 'name your toad' prompt.

## Credits

this app was created by me.

## Features

### Strong Error Handling

Constistent and uniform backend error handling for easy front end error handling

### Authentication

encrypted passwords with Bcrypt and authentication using JSON Web Tokens

### global state handling by context and reducer functions

this app is small enough to usilize Reacts Context API instead of Redux with the help of reducer to handle different types of global state updates

### Fun visual queues.

a cursor that displayes images depending on what interaction state the game is in.

a health bar that displays bars for each type of interaction you can have with your toad.

a toad that float by use of multiple css animations.

## Future Goals

### More toad poses

happy sad angry emotes for when you're clickin on your toad.

### Clickable resising health bar for smaller screens

Already implemented in vanilla css html and js but not translated to React yet
