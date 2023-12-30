import { gql } from "apollo-server-express";

const clientTypes = gql`
  type Query {
    getOneClientQuery(_id: String!): IClient
    getManyClientsQuery: [IClient]
  }

  type Mutation {
    createClientMutation(client: IClientInput): String
    updateClientMutation(client: IClientInput): String
  }

  input IClientInput {
    type: String
    name: String
    email: String
    phone: String
    address: String
    dataLifeTime: Int
    createdAt: Int
    deletedAt: Int
    protectAgainstAutoDisable: Boolean
    maintenanceAppEnabled: Boolean
  }

  type IClient {
    _id: String
    type: String
    name: String
    email: String
    phone: String
    address: String
    dataLifeTime: Int
    createdAt: Int
    deletedAt: Int
    protectAgainstAutoDisable: Boolean
    maintenanceAppEnabled: Boolean
  }
`;

export default clientTypes;
