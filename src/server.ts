import { ApolloServer } from "apollo-server-express";
import express from "express";
import { clientResolvers } from "./qraphql/resolvers";
import { clientTypes } from "./qraphql/typeDefs";

const server = new ApolloServer({
  typeDefs: clientTypes,
  resolvers: clientResolvers,
});

const app = express();

const PORT = process.env.PORT || 8080;

server.start().then((res) => {
  server.applyMiddleware({ app, path: "/graphql" });
  app.listen(PORT, () => {
    console.log(
      `Server is running on http://localhost:${PORT}${server.graphqlPath} ...`
    );
  });
});
