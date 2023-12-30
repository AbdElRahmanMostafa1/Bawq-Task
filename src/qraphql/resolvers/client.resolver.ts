import { IClient } from "../../interfaces/client.interface";

const clients: IClient[] = [];

const clientResolvers = {
  Query: {
    getOneClientQuery: (_: any, { _id }: { _id: string }) => {
      return clients.find((client) => client._id === _id);
    },
    getManyClientsQuery: () => clients,
  },

  Mutation: {
    createClientMutation: (_: any, { client }: { client: IClient }) => {
      clients.push(client);
      return `Client ${client.name} created successfully.`;
    },
    updateClientMutation: (_: any, { client }: { client: IClient }) => {
      const index = clients.findIndex((c) => c._id === client._id);
      if (index !== -1) {
        clients[index] = client;
        return `Client ${client.name} updated successfully.`;
      }
      return "Client not found.";
    },
  },
};

export default clientResolvers;
