import gql from 'graphql-tag';

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
      teachesRitual {
        _id
        name
      }
      teachesLanguage {
        _id
        name
      }
      resultsInInfluence {
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
  mutation setBookLoreResult($title: String!, $lore: String!) {
    AddBookStudiedIntoLore(from: {name: $title}, to: {name: $lore}) {
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
  mutation setBookLanguageResult($title: String!, $language: String!) {
    AddBookTeachesLanguage(from: { name: $title }, to: { name: $language }) {
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
  mutation setBookInfluenceResult($title: String!, $influence: String!) {
    AddBookResultsInInfluence(from: { name: $title }, to: { name: $influence }) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`;
