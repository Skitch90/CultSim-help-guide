import {gql} from 'apollo-angular';

export const GET_RITES = gql`
    query getRites {
      Rite(orderBy: name_asc) {
        _id
        name
      }
    }
`;

export const GET_RITE = gql`
  query getRite($name: String!) {
    Rite(name: $name) {
      name
      fromBook {
        _id
        name
      }
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
