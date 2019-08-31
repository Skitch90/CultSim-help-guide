import gql from 'graphql-tag';

export const GET_INFLUENCES = gql`
  query getInfluences {
    Influence(orderBy: name_asc) {
      name
    }
  }
`;

const INFLUENCE_ASPECT_FRAGMENT = gql`
  fragment InfluenceAspects on Influence {
    aspects {
      Aspect {
        _id
        name
      }
      quantity
    }
  }
`;

export const GET_INFLUENCE = gql`
  query getInfluence($name: String!) {
    Influence(name: $name) {
      _id
      name
      ...InfluenceAspects
  		foundInLocation {
        Location {
          _id
          name
        }
      }
      fromDreamingIn {
        _id
        name
      }
      decaysTo {
        _id
        name
        ...InfluenceAspects
      }
    }
  }
  ${INFLUENCE_ASPECT_FRAGMENT}
`;

export const CREATE_INFLUENCE = gql`
  mutation saveInfluence($influence: String!) {
    CreateInfluence(name: $influence) {
      name
    }
  }
`;

export const SET_INFLUENCE_ASPECT = gql`
  mutation setInfluenceAspect($influence: String!, $aspect: String!, $quantity: Int!) {
    AddInfluenceAspects(from: { name: $influence }, to: { name: $aspect }, data: { quantity: $quantity }) {
      quantity
    }
  }
`;

export const SET_INFLUENCE_DECAY = gql`
  mutation setInfluenceDecay($originInfluence: String!, $influence: String!) {
    AddInfluenceDecaysTo(from: { name: $originInfluence }, to: { name: $influence }) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`;

export const SET_INFLUENCE_DREAMING_RESULT = gql`
  mutation setInfluenceDreamingResult($door: String!, $influence: String!) {
    AddInfluenceFromDreamingIn(from: { name: $door }, to: { name: $influence }) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`;

export const SET_INFLUENCE_LOCATION = gql`
  mutation setInfluenceLocation($name: String!, $location: String!, $chance: Boolean!) {
    AddInfluenceFoundInLocation(from: {name: $name}, to: {name: $location}, data: {chance: $chance}) {
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
