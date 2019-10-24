# Handling Users in an Express App

## Date: 10/22/19 W9 D2 D39

### Summary

In this repository, we discussed how to enable users to sign up and created functionality that lets them login. We learned about sessions and how we can toggle the interface the user sees depending on if the user is logged in or not.

We discussed ENV variables and how they are secret variables the client cannot access which can be used to store API keys or other pertinent information that shouldn't be exposed to the front-end.

We also utilized bcryptjs and learned to never store user passwords as plain-text but rather to store the hash of the password in the users table in the database.

We worked on this project for two days starting on 10/22 which leads us to our back-end project that started the afternoon of 10/23. The "array" branch of this project contains some test functions I wrote to potentially handle an Array Data Type in Postgres which we may use in the back-end project. This information is found in the `indexModel.js` file of that branch.