import gql from 'graphql-tag';

export const GET_DESIRES = gql`
  query getDesires {
    Desire(orderBy: name_asc) {
      name
    }
  }
`;

export const CREATE_DESIRE = gql`
  mutation saveDesire($name: String!) {
    CreateDesire(name: $name) {
      name
    }
  }
`;

export const ADD_DESIRE_CHANGE = gql`
  mutation addDesireChange($fromDesire: String!, $toDesire: String!, $ingredient1: String!, $ingredient2: String!) {
    AddDesireFromDesire(from: { name: $fromDesire },
                        to: { name: $toDesire },
                        data: { ingredient1: $ingredient1, ingredient2: $ingredient2 }) {
      ingredient1
      ingredient2
    }
  }
`;
