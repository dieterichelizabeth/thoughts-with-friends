# thoughts-with-friends

A Social Networking API 🐻🦊🐼

Thoughts With Friends is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This API includes CRUD routes for "Users" and "Thoughts", and additionally has routes for adding/deleting "reactions" to thoughts and "friends" from the friends list. Uses Express.js for routing, MongoDB (a NoSQL database), and the Mongoose Object-Document Mapper (ODM).

## Demo
[Click to View the Demo!](https://drive.google.com/file/d/1h_pszFjfxE1DDf2fB7R5XJL1VQrvEGNM/view)

## User Story

This application was created based on the following User Story and Criteria:

```
"AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data"
```

```
"GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list"
```

## Run Locally

This project requires Node.js and MongoDb. Here are some resources to get started:

- Node: https://nodejs.dev/learn/how-to-install-nodejs
- MongoDb: https://www.mongodb.com/docs/manual/installation/

Clone the project

```bash
  git clone https://github.com/dieterichelizabeth/thoughts-with-friends.git
```

Go to the project directory

```bash
  cd thoughts-with-friends
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Test the routes in Insonmia or another Open Source API Client

## Documentation

- [Mongoose Schema Types](https://mongoosejs.com/docs/schematypes.html)
- [Mongoose Validators](https://mongoosejs.com/docs/validation.html)
- [Mongoose String Validators](https://mongoosejs.com/docs/schematypes.html#string-validators)
- [Mongoose ObjectIds Type](https://mongoosejs.com/docs/schematypes.html#objectids)
- [Mongoose Builtin Validators](https://mongoosejs.com/docs/validation.html#built-in-validators)
- [Mongoose Queries](https://mongoosejs.com/docs/queries.html)
- [Mongoose String Schema Types](https://mongoosejs.com/docs/schematypes.html#strings)

---

Made with ❤️

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
