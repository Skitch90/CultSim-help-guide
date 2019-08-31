import gql from 'graphql-tag';

export const GET_INGREDIENTS = gql`
  query getIngredients {
    Ingredient(orderBy: name_asc) {
      name
    }
  }
`;

export const CREATE_INGREDIENT = gql`
  mutation saveIngredient($name: String!) {
    CreateIngredient(name: $name) {
      name
    }
  }
`;

export const SET_INGREDIENT_ASPECT = gql`
  mutation setIngredientAspect($name: String!, $aspect: String!, $quantity: Int!) {
    AddIngredientAspects(from: { name: $name }, to: { name: $aspect }, data: { quantity: $quantity }) {
      quantity
    }
  }
`;

export const SET_INGREDIENT_LOCATION = gql`
  mutation setIngredientLocation($name: String!, $location: String!, $chance: Boolean!) {
    AddIngredientFoundInLocation(from: {name: $name}, to: {name: $location}, data: {chance: $chance}) {
      from {
        name
      }
      to {
        name
      }
      chance
    }
  }
`;

export const SET_INGREDIENT_DREAMING_RESULT = gql`
  mutation setIngredientBreamingResult($door: String!, $ingredient: String!) {
    AddIngredientFromDreamingIn(from: { name: $door }, to: { name: $ingredient }) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`;
