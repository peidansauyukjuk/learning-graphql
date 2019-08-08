const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const port = 3000

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});