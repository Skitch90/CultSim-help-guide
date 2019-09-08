import gql from 'graphql-tag';
import { INFLUENCE_FRAGMENT, LORE_FRAGMENT } from './fragments';

export const GET_BOOK = gql`
  query getBook($name: String!) {
    Book(name: $name, orderBy: name_asc) {
      _id
      name
      foundInLocation {
        Location {
          _id
          name
        }
        chance
      }
      language {
        _id
        name
      }
      studiedIntoLore{
        ...CommonLoreData
      }
      teachesRite {
        _id
        name
      }
      teachesLanguage {
        _id
        name
      }
      resultsInInfluence {
        ...CommonInfluenceData
      }
    }
  }
  ${INFLUENCE_FRAGMENT}
  ${LORE_FRAGMENT}
`;

export const GET_BOOKS = gql`
  query getBooks {
    Book(orderBy: name_asc) {
      name
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation createBook($title: String!) {
    CreateBook(name: $title) {
      name
    }
  }
`;

export const SET_BOOK_LOCATION = gql`
  mutation setBookLocation($name: String!, $location: String!, $chance: Boolean!) {
    AddBookFoundInLocation(from: {name: $name}, to: {name: $location}, data: {chance: $chance}) {
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

export const SET_BOOK_LANGUAGE = gql`
  mutation setBookLocation($title: String!, $language: String!) {
    AddBookLanguage(from: {name: $title}, to: {name: $language}) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`;

export const SET_BOOK_LORE_RESULT = gql`
  mutation setBookLoreResult($book: String!, $name: String!) {
    AddBookStudiedIntoLore(from: {name: $book}, to: {name: $name}) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`;

export const SET_BOOK_LANGUAGE_RESULT = gql`
  mutation setBookLanguageResult($book: String!, $name: String!) {
    AddBookTeachesLanguage(from: { name: $book }, to: { name: $name }) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`;

export const SET_BOOK_INFLUENCE_RESULT = gql`
  mutation setBookInfluenceResult($book: String!, $name: String!) {
    AddBookResultsInInfluence(from: { name: $book }, to: { name: $name }) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`;
