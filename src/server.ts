// import { ApolloServer } from "apollo-server-express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import express from "express";
import { clientResolvers } from "./qraphql/resolvers";
import { clientTypes } from "./qraphql/typeDefs";

const server = new ApolloServer({
  typeDefs: clientTypes,
  resolvers: clientResolvers,
});

const app = express();

const PORT = process.env.PORT || 8080;

let url;

startStandaloneServer(server, {
  listen: { port: 4200 },
})
  .then((res) => (url = res))
  .catch((error) => console.log({ error }));

console.log({ url });

// server.start().then((res) => {
//   // server.applyMiddleware({ app, path: "/graphql" });
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}...`);
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}...`);
});
