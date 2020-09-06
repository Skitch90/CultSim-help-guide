import {gql} from 'apollo-angular';

export const GET_ENTITY = gql`
  query getEntity($name: String!){
    entityWithName(name: $name) {
      _id
      name
      label
      aspects {
        aspect
        quantity
      }
    }
  }
`;

export const GET_ENTITY_WITH_ASPECT = gql`
  query getEntitiesByAspect($aspect: String!) {
    entityWithAspect(aspect: $aspect) {
      label
      entities {
        _id
        name
        type
        aspectQuantity
      }
    }
  }
`;
