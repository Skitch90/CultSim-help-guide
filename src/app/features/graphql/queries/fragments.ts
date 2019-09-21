import gql from 'graphql-tag';

export const INFLUENCE_FRAGMENT = gql`
  fragment CommonInfluenceData on Influence {
    _id
    name
    aspects {
      Aspect {
        _id
        name
      }
      quantity
    }
  }
`;

export const INGREDIENT_FRAGMENT = gql`
  fragment CommonIngredientData on Ingredient {
    _id
    name
    aspects {
      Aspect {
        _id
        name
      }
      quantity
    }
  }
`;

export const LORE_FRAGMENT = gql`
  fragment CommonLoreData on Lore {
    _id
    name
    aspects {
      Aspect {
        _id
        name
      }
      quantity
    }
  }
`;

export const MANSUS_DOOR_OPTION_FRAGMENT = gql`
  fragment CommonMansusOptionData on MansusDoorOption {
    _id
    name
    door {
      _id
      name
    }
  }
`;

export const TOOL_FRAGMENT = gql`
  fragment CommonToolData on Tool {
    _id
    name
    aspects {
      Aspect {
        _id
        name
      }
      quantity
    }
  }
`;
