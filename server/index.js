require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const schema = require('./schema/schema');
const {graphqlHTTP} = require('express-graphql');

const PORT = process.env.PORT || 4000;

// Connect to the database
connectDB();

// Initialize the app
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: process.env.NODE_ENV === 'development',
}));

 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});