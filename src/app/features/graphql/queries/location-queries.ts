import gql from 'graphql-tag';

export const GET_LOCATIONS = gql`
  query getLocations {
    Location(orderBy: name_asc) {
      name
      vault
    }
  }
`;

export const GET_LOCATION = gql`
  query getLocation($location: String!) {
    Location(name: $location) {
      _id
      name
      vault
      histories {
        _id
        name
        aspects {
          quantity
        }
      }
      obstacles {
        _id
        name
        defeatedWith {
          name
        }
      }
      bookRewards {
        _id
        name
      }
      influenceRewards {
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
      ingredientRewards{
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
      toolRewards {
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
    }
  }
`;

export const CREATE_LOCATION = gql`
  mutation createLocation($location: String!, $vault: Boolean!) {
    CreateLocation(name: $location, vault: $vault) {
      name
    }
  }
`;

export const SET_LOCATION_OBSTACLE = gql`
  mutation setLocationObstacle($location: String!, $obstacle: String!) {
    AddLocationObstacles(from: { name: $location }, to: { name: $obstacle }) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`;

export const GET_OBSTACLES = gql`
  query getObstacles {
    ExpeditionObstacle(orderBy: name_asc) {
      name
    }
  }
`;

export const CREATE_OBSTACLE = gql`
  mutation saveObstacle($name: String!) {
    CreateExpeditionObstacle(name: $name) {
      name
    }
  }
`;

export const SET_OBSTACLE_ASPECT = gql`
  mutation setObstacleAspect($obstacle: String!, $aspect: String!) {
    AddExpeditionObstacleDefeatedWith(from: { name: $obstacle }, to: { name: $aspect }) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`;
