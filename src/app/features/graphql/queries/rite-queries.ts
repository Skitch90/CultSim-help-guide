import gql from 'graphql-tag';

export const GET_RITES = gql`
    query getRites {
      Rite(orderBy: name_asc) {
        _id
        name
      }
    }
`;

export const CREATE_RITE = gql`
    mutation createRite($name: String!) {
      CreateRite(name: $name) {
        name
      }
    }
`;
