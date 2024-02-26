# Toad-agotchi

A simplified Tamagotchi-like game where you create and interact with a toad by feeding and educating it.

## Description

a full stack MERN application to sandbox new features im learning. this mern app has strong error handling with authentication in the backendm while the front end messes around with fancy css animations to add life into its components.

### Why

This project is purely for laughs and to remind me that I can have fun while learning.

## How to Install

No installation necessary. the database is hosted on MongoDB, the server is hosted on Render, and the client is hosted on Git Hub. All you have to do is visit the website and start playing.

## How to use
This app is being hosted on Renders Free tier service, so it takes a minute to spin up the server. once the server is spun up, you can freely play around. 

[Link to project](https://joshuaachorn.com/toad-app/#/)

### Create account

The email and password inputs are validated both on the front and back end, so
you need a valid email and a strong password (8 characters in length, one number, and one capital letter)

<img width="565" alt="signup" src="https://github.com/Achorn/toad-app/assets/28990037/53a6b757-71f5-4e22-ba4d-ede19bc03f20">


### Name your new toad

Now that you have an account, you will be prompted to name your new toad.

<img width="531" alt="Screenshot 2024-02-26 at 11 32 15 AM" src="https://github.com/Achorn/toad-app/assets/28990037/b212897f-7147-4009-bea2-0f15f48f4675">

### Come back to visit your toad and take care of it in various ways

Once you've named your toad, the client will create a toad object and save it in the database. you can feed and educate your toad. once you've fed/interacted with your toad it will be 'full', and you won't be able to interact with your toad again until the health bars for each interaction have gone down. Then, your toad will be ready to interact with you again.

![ScreenRecording2024-02-26at11 33 24AM-ezgif com-cut (1)](https://github.com/Achorn/toad-app/assets/28990037/0ef70afd-6639-478e-ae69-125c442f05fd)


### Deleting and creating a new toad

If for any reason you want to start over, you can delete your toad by clicking on the delete button. Once your toad has been deleted from the database, you will be redirected to the 'name your toad' prompt.

## Credits

I created this app.

## Features

### Strong Error Handling

Consistent and uniform backend error handling for easy front-end error handling

### Authentication

encrypted passwords with Bcrypt and authentication using JSON Web Tokens

### Global state handling by context and reducer functions

this app is small enough to utilize Reacts Context API instead of Redux with the help of reducer to handle different types of global state updates

### Fun visual queues.
- a cursor that displays images depending on what interaction state the game is in.
- a health bar that displays bars for each type of interaction you can have with your toad.
- a toad that floats by use of multiple css animations.

## Future Goals

### More toad poses

happy sad angry emotes for when you're clickin on your toad.

### Clickable resising health bar for smaller screens

Already implemented in vanilla css html and js but not translated to React yet
