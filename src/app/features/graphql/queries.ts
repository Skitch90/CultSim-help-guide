import gql from 'graphql-tag';

export const GET_ENTITY_QUERY = gql`
  query getEntity($name: String!){
    entityWithName(name: $name) {
      _id
      name
      label
      aspects {
        aspect
        quantity
      }
    }
  }
`;

export const GET_ENTITY_WITH_ASPECT_QUERY = gql`
  query getEntitiesByAspect($aspect: String!) {
    entityWithAspect(aspect: $aspect) {
      label
      entities {
        _id
        name
        type
        aspectQuantity
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

export const GET_LORE_QUERY = gql`
  query getLore($name: String!) {
    Lore(name: $name) {
      _id
      name
      aspects {
        Aspect {
          name
        }
        quantity
      }
      exploreResults {
        _id
        name
      }
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

export const GET_INGREDIENTS_QUERY = gql`
  query getIngredients {
    Ingredient(orderBy: name_asc) {
      name
    }
  }
`;

export const GET_BOOK_QUERY = gql`
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

export const GET_BOOKS_QUERY = gql`
  query getBooks {
    Book(orderBy: name_asc) {
      name
    }
  }
`;

export const GET_LOCATIONS_QUERY = gql`
  query getLocations {
    Location(orderBy: name_asc) {
      name
      vault
    }
  }
`;

export const GET_LOCATION_QUERY = gql`
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

export const GET_OBSTACLES_QUERY = gql`
  query getObstacles {
    ExpeditionObstacle(orderBy: name_asc) {
      name
    }
  }
`;

export const GET_TOOLS_QUERY = gql`
  query getTools {
    Tool(orderBy: name_asc) {
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
  mutation createLocation($location: String!, $vault: Boolean!) {
    CreateLocation(name: $location, vault: $vault) {
      name
    }
  }
`;

export const SET_LOCATION_OBSTACLE_MUTATION = gql`
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

export const CREATE_BOOK_MUTATION = gql`
  mutation createBook($title: String!) {
    CreateBook(name: $title) {
      name
    }
  }
`;

export const SET_BOOK_LOCATION_MUTATION = gql`
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

export const SET_BOOK_LORE_RESULT_MUTATION = gql`
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

export const SET_BOOK_LANGUAGE_RESULT_MUTATION = gql`
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

export const SET_BOOK_INFLUENCE_RESULT_MUTATION = gql`
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

export const CREATE_ASPECT_MUTATION = gql`
  mutation saveAspect($name: String!) {
    CreateAspect(name: $name) {
      name
    }
  }
`;

export const CREATE_OBSTACLE_MUTATION = gql`
  mutation saveObstacle($name: String!) {
    CreateExpeditionObstacle(name: $name) {
      name
    }
  }
`;

export const SET_OBSTACLE_ASPECT_MUTATION = gql`
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

export const CREATE_LORE_MUTATION = gql`
  mutation saveLore($name: String!) {
    CreateLore(name: $name) {
      name
    }
  }
`;

export const SET_LORE_ASPECT_MUTATION = gql`
  mutation setLoreAspect($name: String!, $aspect: String!, $quantity: Int!) {
    AddLoreAspects(from: {name: $name}, to: {name: $aspect}, data: {quantity: $quantity}) {
      quantity
    }
  }
`;

export const SET_LORE_EXPLORING_LOCATION_MUTATION = gql`
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

export const CREATE_INGREDIENT_MUTATION = gql`
  mutation saveIngredient($name: String!) {
    CreateIngredient(name: $name) {
      name
    }
  }
`;

export const SET_INGREDIENT_ASPECT_MUTATION = gql`
  mutation setIngredientAspect($name: String!, $aspect: String!, $quantity: Int!) {
    AddIngredientAspects(from: { name: $name }, to: { name: $aspect }, data: { quantity: $quantity }) {
      quantity
    }
  }
`;

export const SET_INGREDIENT_LOCATION_MUTATION = gql`
  mutation setIngredientLocation($name: String!, $location: String!, $chance: Boolean!) {
    AddIngredientFoundInLocation(from: {name: $name}, to: {name: $location}, data: {chance: $chance}) {
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

export const SET_LANGUAGE_DREAMING_RESULT_MUTATION = gql`
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

export const SET_INFLUENCE_LOCATION_MUTATION = gql`
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

export const CREATE_TOOL_MUTATION = gql`
  mutation saveTool($name: String!) {
    CreateTool(name: $name) {
      name
    }
  }
`;

export const SET_TOOL_ASPECT_MUTATION = gql`
  mutation setToolAspect($name: String!, $aspect: String!, $quantity: Int!) {
    AddToolAspects(from: { name: $name }, to: { name: $aspect }, data: { quantity: $quantity }) {
      quantity
    }
  }
`;

export const SET_TOOL_LOCATION_MUTATION = gql`
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
