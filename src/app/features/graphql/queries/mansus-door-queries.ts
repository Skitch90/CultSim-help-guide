import gql from 'graphql-tag';

export const CREATE_MANSUS_DOOR = gql`
  mutation createMansusDoor($door: String!) {
    CreateMansusDoor(name: $door) {
      name
    }
  }
`;

export const CREATE_MANSUS_DOOR_OPTION = gql`
  mutation createMansusDoorOption($option: String!) {
    CreateMansusDoorOption(name: $option) {
      name
    }
  }
`;

export const SET_MANSUS_DOOR_OPTION = gql`
  mutation setMansusDoorOption($door: String!, $option: String!) {
    AddMansusDoorOptions(from: { name: $door }, to: { name: $option }) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`;
