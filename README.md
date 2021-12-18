# Backend README

This is a README specifically for the backend, how to get it running, how to interact with it, and anything else worth knowing.

## Steps to get backend running properly:

- In the 'backend' folder (themis/backend), run `npm install` in the terminal. This should add a 'node_modules' folder
- These should be installed, but confirm you have the following modules: express, body-parser, mongoose
- Version 4.4 of MongoDB is being used (mongodb-community@4.4). To install, click [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) for a mac installation guide
- FOR MAC: Remember to run `mongod --config /usr/local/etc/mongod.conf --fork` after following the installation guide above to start running the database
- Test your setup by running `node server.js` in the backend folder, you should get the following messages:
  - Server is listening on port 3000
  - Successfully connected to the database

## Steps to insert a new schema into the API

- Create a model for the schema
  - Add a file called <schema_name>.model.js into the 'models' folder
  - Populate this file based on the other model files already in the folder
- Create api routes for this schema
  - Add a file called <schema_name>.routes.js in the 'routes' folder
  - Follow the structure of existing routes files, be sure to implement the find, findOne, findOneAndUpdate, insertOne, and save functions
- Create the controller for this schema to flesh out the methods defined in the routes file
  - Add a file called <schema_name>.controller.js in the 'controllers' folder
  - Follow the structure of other files already existing in this folder
- Add the following code to 'server.js'
  - `require('./app/routes/<schema_name>.routes.js')(app);`

## Backend File Structure

- /server.js - main server file that consolidates endpoints and hosts them on port 3001
- /app - contains API endpoints, schemas, and functionality
  - /controllers - endpoint functionality which communicates with the database
  - /models - schemas for each data object (error message, result, question, testcase, user)
  - /routes - lists each endpoint available, connects to /controllers for functionality
- /config - Database configuration file
