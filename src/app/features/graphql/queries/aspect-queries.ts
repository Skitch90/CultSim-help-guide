import gql from 'graphql-tag';

export const GET_ASPECTS = gql`
  query getAspects {
    Aspect(orderBy: name_asc) {
      name
    }
  }
`;

export const CREATE_ASPECT = gql`
  mutation saveAspect($name: String!) {
    CreateAspect(name: $name) {
      name
    }
  }
`;
