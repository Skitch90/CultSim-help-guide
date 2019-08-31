import gql from 'graphql-tag';

export const GET_LANGUAGES = gql`
  query getLanguages {
    Language(orderBy: name_asc) {
      name
    }
  }
`;

export const CREATE_LANGUAGE = gql`
  mutation createLanguage($language: String!) {
    CreateLanguage(name: $language) {
      name
    }
  }
`;

export const SET_LANGUAGE_DREAMING_RESULT = gql`
  mutation setLanguageBreamingResult($door: String!, $language: String!) {
    AddLanguageFromDreamingIn(from: { name: $door }, to: { name: $language }) {
      from {
        name
      }
      to {
        name
      }
    }
  }
`;

