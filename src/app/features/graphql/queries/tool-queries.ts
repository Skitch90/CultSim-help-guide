import {gql} from 'apollo-angular';

export const GET_TOOLS = gql`
  query getTools {
    Tool(orderBy: name_asc) {
      name
    }
  }
`;

export const GET_TOOL = gql`
  query getTool($name: String!) {
    Tool(name: $name) {
      name
      aspects {
        Aspect {
          name
        }
        quantity
      }
      foundInLocation {
        Location {
          name
        }
        chance
      }
      fromBook {
        _id
        name
      }
    }
  }
`;

export const SET_TOOL_LOCATION = gql`
  mutation setToolLocation($name: String!, $location: String!, $chance: Boolean!) {
    AddToolFoundInLocation(from: {name: $name}, to: {name: $location}, data: {chance: $chance}) {
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
