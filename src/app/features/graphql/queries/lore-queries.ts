import gql from 'graphql-tag';
import { LORE_FRAGMENT } from './fragments';

export const GET_LORES = gql`
  query getLores {
    Lore(orderBy: name_asc) {
      name
    }
  }
`;

export const GET_LORE = gql`
  query getLore($name: String!) {
    Lore(name: $name) {
      ...CommonLoreData
      exploreResults {
        _id
        name
      }
      fromBook {
        _id
        name
      }
      fromDreamingIn {
        name
        door {
          name
        }
      }
      upgradesTo {
        ...CommonLoreData
      }
    }
  }
  ${LORE_FRAGMENT}
`;

export const CREATE_LORE = gql`
  mutation saveLore($name: String!) {
    CreateLore(name: $name) {
      name
    }
  }
`;

export const SET_LORE_ASPECT = gql`
  mutation setLoreAspect($name: String!, $aspect: String!, $quantity: Int!) {
    AddLoreAspects(from: {name: $name}, to: {name: $aspect}, data: {quantity: $quantity}) {
      quantity
    }
  }
`;

export const SET_LORE_EXPLORING_LOCATION = gql`
  mutation setLoreExploringLocation($lore: String!, $location: String!) {
    AddLoreExploreResults(from: { name: $lore }, to: { name: $location }) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`;

export const SET_LORE_DREAMING_RESULT = gql`
  mutation setLoreDreamingResult($door: String!, $lore: String!) {
    AddLoreFromDreamingIn (from: { name: $door }, to: { name: $lore }) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`;
