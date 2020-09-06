import {gql} from 'apollo-angular';
import { MANSUS_DOOR_OPTION_FRAGMENT } from './fragments';

export const GET_LANGUAGES = gql`
  query getLanguages {
    Language(orderBy: name_asc) {
      name
    }
  }
`;

export const GET_LANGUAGE = gql`
  query getLanguage($name: String!) {
    Language(name: $name) {
      name
      requires {
        _id
        name
      }
      fromBook {
        _id
        name
      }
      fromDreamingIn {
        ...CommonMansusOptionData
      }
    }
  }
  ${MANSUS_DOOR_OPTION_FRAGMENT}
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

export const SET_LANGUAGE_REQUIRES = gql`
  mutation setLanguageRequires($language: String!, $requiredLanguage: String!) {
    setLanguageRequires(language: $language, requiredLanguage: $requiredLanguage) {
      language
      requiredLanguage
    }
  }
`;
