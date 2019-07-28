import gql from 'graphql-tag';

export const GET_ENTITY_QUERY = gql`
    query getEntity($name: String!){
        entityWithName(name: $name) {
            name
            label
            aspects {
            aspect
            quantity
            }
        }
    }
`;

export const GET_LANGUAGES_QUERY = gql`
    query getLanguages {
        Language(orderBy: name_asc) {
            name
        }
    }
`;

export const GET_LORES_QUERY = gql`
    query getLores {
        Lore(orderBy: name_asc) {
            name
        }
    }
`;

export const GET_ASPECTS_QUERY = gql`
    query getAspects {
        Aspect(orderBy: name_asc) {
            name
        }
    }
`;

export const GET_INFLUENCES_QUERY = gql`
    query getInfluences {
        Influence(orderBy: name_asc) {
            name
        }
    }
`;

export const CREATE_LANGUAGE_MUTATION = gql`
    mutation createLanguage($language: String!) {
        CreateLanguage(name: $language) {
            name
        }
    }
`;

export const CREATE_LOCATION_MUTATION = gql`
    mutation createLocation($location: String!) {
        CreateLocation(name: $location) {
            name
        }
    }
`;

export const CREATE_BOOK_MUTATION = gql`
    mutation createBook($title: String!) {
        CreateBook(name: $title) {
            name
        }
    }
`;

export const SET_BOOK_LOCATION_MUTATION = gql`
    mutation setBookLocation($title: String!, $location: String!, $chance: Boolean!) {
        AddBookFoundInLocation(from: {name: $title}, to: {name: $location}, data: {chance: $chance}) {
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

export const SET_BOOK_LANGUAGE_MUTATION = gql`
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
    mutation setBookLoreReult($title: String!, $lore: String!) {
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

export const SET_BOOK_LANGUAGE_RESULT_MUTATION = gql`
    mutation setBookLanguageReult($title: String!, $language: String!) {
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

export const CREATE_ASPECT_MUTATION = gql`
    mutation saveAspect($name: String!) {
        CreateAspect(name: $name) {
            name
        }
    }
`;

export const CREATE_LORE_MUTATION = gql`
    mutation saveLore($name: String!) {
        CreateLore(name: $name) {
            name
        }
    }
`;

export const SET_LORE_ASPECT_MUTATION = gql`
    mutation setLoreAspect($lore: String!, $aspect: String!, $quantity: Int!) {
        AddLoreAspects(from: {name: $lore}, to: {name: $aspect}, data: {quantity: $quantity}) {
            quantity
        }
    }
`;

export const CREATE_INFLUENCE_MUTATION = gql`
    mutation saveInfluence($influence: String!) {
        CreateInfluence(name: $influence) {
            name
        }
    }
`;

export const SET_INFLUENCE_ASPECT_MUTATION = gql`
    mutation setInfluenceAspect($influence: String!, $aspect: String!, $quantity: Int!) {
        AddInfluenceAspects(from: { name: $influence }, to: { name: $aspect }, data: { quantity: $quantity }) {
            quantity
        }
    }
`;

export const CREATE_MANSUS_DOOR_MUTATION = gql`
    mutation createMansusDoor($door: String!) {
        CreateMansusDoor(name: $door) {
            name
        }
    }
`;

export const CREATE_MANSUS_DOOR_OPTION_MUTATION = gql`
    mutation createMansusDoorOption($option: String!) {
        CreateMansusDoorOption(name: $option) {
            name
        }
    }
`;

export const SET_MANSUS_DOOR_OPTION_MUTATION = gql`
    mutation setMansusDoorOption($door: String!, $option: String!) {
        AddMansusDoorOptions(from: { name: $door }, to: { name: $option }) {
            from {
                name
            }
            to {
                name
            }
        }
    }
`;

export const SET_LORE_DREAMING_RESULT_MUTATION = gql`
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

export const SET_INFLUENCE_DECAY_MUTATION = gql`
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

export const SET_INFLUENCE_DREAMING_RESULT_MUTATION = gql`
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