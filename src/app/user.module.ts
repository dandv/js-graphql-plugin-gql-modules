import { GraphQLModule } from '@graphql-modules/core';
import gql from 'graphql-tag';

export enum Status {
  DRAFT, // 0
  PENDING, // delete this line and the error moves
  APPROVED // delete both last two lines and the error goes away
}


export const UserModule = new GraphQLModule({
  typeDefs: gql`
    type Query {
      echo(status: Int!): Int!
    }
  `,

  resolvers: {
    Query: {
      echo(_, { status }) {
        return status;
      }
    },
  }
});
