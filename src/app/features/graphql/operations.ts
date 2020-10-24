import * as Types from './types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetAspectsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAspectsQuery = (
  { __typename?: 'Query' }
  & {
    Aspect?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Aspect' }
      & Pick<Types.Aspect, 'name'>
    )>>>
  }
);

export type SaveAspectMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type SaveAspectMutation = (
  { __typename?: 'Mutation' }
  & {
    CreateAspect?: Types.Maybe<(
      { __typename?: 'Aspect' }
      & Pick<Types.Aspect, 'name'>
    )>
  }
);

export type GetBookQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type GetBookQuery = (
  { __typename?: 'Query' }
  & {
    Book?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Book' }
      & Pick<Types.Book, '_id' | 'name'>
      & {
        foundInLocation?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: '_BookFoundInLocation' }
          & Pick<Types._BookFoundInLocation, 'chance'>
          & {
            Location?: Types.Maybe<(
              { __typename?: 'Location' }
              & Pick<Types.Location, '_id' | 'name'>
            )>
          }
        )>>>, language?: Types.Maybe<(
          { __typename?: 'Language' }
          & Pick<Types.Language, '_id' | 'name'>
        )>, studiedIntoLore: Array<(
          { __typename?: 'Lore' }
          & CommonLoreDataFragment
        )>, teachesRite?: Types.Maybe<(
          { __typename?: 'Rite' }
          & Pick<Types.Rite, '_id' | 'name'>
        )>, teachesLanguage?: Types.Maybe<(
          { __typename?: 'Language' }
          & Pick<Types.Language, '_id' | 'name'>
        )>, resultsInInfluence: Array<(
          { __typename?: 'Influence' }
          & CommonInfluenceDataFragment
        )>, resultsInTool?: Types.Maybe<(
          { __typename?: 'Tool' }
          & CommonToolDataFragment
        )>
      }
    )>>>
  }
);

export type GetBooksQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetBooksQuery = (
  { __typename?: 'Query' }
  & {
    Book?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Book' }
      & Pick<Types.Book, 'name'>
    )>>>
  }
);

export type SaveBookMutationVariables = Types.Exact<{
  title: Types.Scalars['String'];
}>;


export type SaveBookMutation = (
  { __typename?: 'Mutation' }
  & {
    CreateBook?: Types.Maybe<(
      { __typename?: 'Book' }
      & Pick<Types.Book, 'name'>
    )>
  }
);

export type SetBookLocationMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  location: Types.Scalars['String'];
  chance: Types.Scalars['Boolean'];
}>;


export type SetBookLocationMutation = (
  { __typename?: 'Mutation' }
  & {
    AddBookFoundInLocation?: Types.Maybe<(
      { __typename?: '_AddBookFoundInLocationPayload' }
      & Pick<Types._AddBookFoundInLocationPayload, 'chance'>
      & {
        from?: Types.Maybe<(
          { __typename?: 'Book' }
          & Pick<Types.Book, 'name'>
        )>, to?: Types.Maybe<(
          { __typename?: 'Location' }
          & Pick<Types.Location, 'name'>
        )>
      }
    )>
  }
);

export type SetBookLanguageMutationVariables = Types.Exact<{
  title: Types.Scalars['String'];
  language: Types.Scalars['String'];
}>;


export type SetBookLanguageMutation = (
  { __typename?: 'Mutation' }
  & {
    AddBookLanguage?: Types.Maybe<(
      { __typename?: '_AddBookLanguagePayload' }
      & {
        from?: Types.Maybe<(
          { __typename?: 'Book' }
          & Pick<Types.Book, 'name'>
        )>, to?: Types.Maybe<(
          { __typename?: 'Language' }
          & Pick<Types.Language, 'name'>
        )>
      }
    )>
  }
);

export type SetBookLoreResultMutationVariables = Types.Exact<{
  book: Types.Scalars['String'];
  name: Types.Scalars['String'];
}>;


export type SetBookLoreResultMutation = (
  { __typename?: 'Mutation' }
  & {
    AddBookStudiedIntoLore?: Types.Maybe<(
      { __typename?: '_AddBookStudiedIntoLorePayload' }
      & {
        from?: Types.Maybe<(
          { __typename?: 'Book' }
          & Pick<Types.Book, 'name'>
        )>, to?: Types.Maybe<(
          { __typename?: 'Lore' }
          & Pick<Types.Lore, 'name'>
        )>
      }
    )>
  }
);

export type SetBookLanguageResultMutationVariables = Types.Exact<{
  book: Types.Scalars['String'];
  name: Types.Scalars['String'];
}>;


export type SetBookLanguageResultMutation = (
  { __typename?: 'Mutation' }
  & {
    AddBookTeachesLanguage?: Types.Maybe<(
      { __typename?: '_AddBookTeachesLanguagePayload' }
      & {
        from?: Types.Maybe<(
          { __typename?: 'Book' }
          & Pick<Types.Book, 'name'>
          & {
            language?: Types.Maybe<(
              { __typename?: 'Language' }
              & Pick<Types.Language, 'name'>
            )>
          }
        )>, to?: Types.Maybe<(
          { __typename?: 'Language' }
          & Pick<Types.Language, 'name'>
        )>
      }
    )>
  }
);

export type SetBookInfluenceResultMutationVariables = Types.Exact<{
  book: Types.Scalars['String'];
  name: Types.Scalars['String'];
}>;


export type SetBookInfluenceResultMutation = (
  { __typename?: 'Mutation' }
  & {
    AddBookResultsInInfluence?: Types.Maybe<(
      { __typename?: '_AddBookResultsInInfluencePayload' }
      & {
        from?: Types.Maybe<(
          { __typename?: 'Book' }
          & Pick<Types.Book, 'name'>
        )>, to?: Types.Maybe<(
          { __typename?: 'Influence' }
          & Pick<Types.Influence, 'name'>
        )>
      }
    )>
  }
);

export type SetBookRiteResultMutationVariables = Types.Exact<{
  book: Types.Scalars['String'];
  name: Types.Scalars['String'];
}>;


export type SetBookRiteResultMutation = (
  { __typename?: 'Mutation' }
  & {
    AddBookTeachesRite?: Types.Maybe<(
      { __typename?: '_AddBookTeachesRitePayload' }
      & {
        from?: Types.Maybe<(
          { __typename?: 'Book' }
          & Pick<Types.Book, 'name'>
        )>, to?: Types.Maybe<(
          { __typename?: 'Rite' }
          & Pick<Types.Rite, 'name'>
        )>
      }
    )>
  }
);

export type SetBookToolResultMutationVariables = Types.Exact<{
  book: Types.Scalars['String'];
  name: Types.Scalars['String'];
}>;


export type SetBookToolResultMutation = (
  { __typename?: 'Mutation' }
  & {
    AddBookResultsInTool?: Types.Maybe<(
      { __typename?: '_AddBookResultsInToolPayload' }
      & {
        from?: Types.Maybe<(
          { __typename?: 'Book' }
          & Pick<Types.Book, 'name'>
        )>, to?: Types.Maybe<(
          { __typename?: 'Tool' }
          & Pick<Types.Tool, 'name'>
        )>
      }
    )>
  }
);

export type GetDesiresQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetDesiresQuery = (
  { __typename?: 'Query' }
  & {
    Desire?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Desire' }
      & Pick<Types.Desire, 'name'>
    )>>>
  }
);

export type SaveDesireMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type SaveDesireMutation = (
  { __typename?: 'Mutation' }
  & {
    CreateDesire?: Types.Maybe<(
      { __typename?: 'Desire' }
      & Pick<Types.Desire, 'name'>
    )>
  }
);

export type AddDesireChangeMutationVariables = Types.Exact<{
  fromDesire: Types.Scalars['String'];
  toDesire: Types.Scalars['String'];
  ingredient1: Types.Scalars['String'];
  ingredient2: Types.Scalars['String'];
}>;


export type AddDesireChangeMutation = (
  { __typename?: 'Mutation' }
  & {
    AddDesireFromDesire?: Types.Maybe<(
      { __typename?: '_AddDesireFromDesirePayload' }
      & Pick<Types._AddDesireFromDesirePayload, 'ingredient1' | 'ingredient2'>
    )>
  }
);

export type SaveChangeLessonMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type SaveChangeLessonMutation = (
  { __typename?: 'Mutation' }
  & {
    CreateChangeLesson?: Types.Maybe<(
      { __typename?: 'ChangeLesson' }
      & Pick<Types.ChangeLesson, 'name'>
    )>
  }
);

export type GetEntitiesByAspectQueryVariables = Types.Exact<{
  aspect: Types.Scalars['String'];
}>;


export type GetEntitiesByAspectQuery = (
  { __typename?: 'Query' }
  & {
    entityWithAspect: Array<(
      { __typename?: 'AspectSearchGroupResult' }
      & Pick<Types.AspectSearchGroupResult, 'label'>
      & {
        entities: Array<(
          { __typename?: 'AspectSearchEntity' }
          & Pick<Types.AspectSearchEntity, '_id' | 'name' | 'type' | 'aspectQuantity'>
        )>
      }
    )>
  }
);

export type GetFollowerQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type GetFollowerQuery = (
  { __typename?: 'Query' }
  & {
    Follower?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Follower' }
      & Pick<Types.Follower, '_id' | 'name'>
      & {
        aspects: Array<(
          { __typename?: 'Aspect' }
          & Pick<Types.Aspect, '_id' | 'name'>
        )>
      }
    )>>>
  }
);

export type SaveFollowerMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type SaveFollowerMutation = (
  { __typename?: 'Mutation' }
  & {
    CreateFollower?: Types.Maybe<(
      { __typename?: 'Follower' }
      & Pick<Types.Follower, 'name'>
    )>
  }
);

export type AddAspectToFollowerMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  aspect: Types.Scalars['String'];
}>;


export type AddAspectToFollowerMutation = (
  { __typename?: 'Mutation' }
  & {
    AddFollowerAspects?: Types.Maybe<(
      { __typename?: '_AddFollowerAspectsPayload' }
      & {
        from?: Types.Maybe<(
          { __typename?: 'Follower' }
          & Pick<Types.Follower, 'name'>
        )>
      }
    )>
  }
);

export type CommonInfluenceDataFragment = (
  { __typename?: 'Influence' }
  & Pick<Types.Influence, '_id' | 'name'>
  & {
    aspects?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: '_InfluenceAspects' }
      & Pick<Types._InfluenceAspects, 'quantity'>
      & {
        Aspect?: Types.Maybe<(
          { __typename?: 'Aspect' }
          & Pick<Types.Aspect, '_id' | 'name'>
        )>
      }
    )>>>
  }
);

export type CommonIngredientDataFragment = (
  { __typename?: 'Ingredient' }
  & Pick<Types.Ingredient, '_id' | 'name'>
  & {
    aspects?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: '_IngredientAspects' }
      & Pick<Types._IngredientAspects, 'quantity'>
      & {
        Aspect?: Types.Maybe<(
          { __typename?: 'Aspect' }
          & Pick<Types.Aspect, '_id' | 'name'>
        )>
      }
    )>>>
  }
);

export type CommonLoreDataFragment = (
  { __typename?: 'Lore' }
  & Pick<Types.Lore, '_id' | 'name'>
  & {
    aspects?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: '_LoreAspects' }
      & Pick<Types._LoreAspects, 'quantity'>
      & {
        Aspect?: Types.Maybe<(
          { __typename?: 'Aspect' }
          & Pick<Types.Aspect, '_id' | 'name'>
        )>
      }
    )>>>
  }
);

export type CommonMansusOptionDataFragment = (
  { __typename?: 'MansusDoorOption' }
  & Pick<Types.MansusDoorOption, '_id' | 'name'>
  & {
    door?: Types.Maybe<(
      { __typename?: 'MansusDoor' }
      & Pick<Types.MansusDoor, '_id' | 'name'>
    )>
  }
);

export type CommonToolDataFragment = (
  { __typename?: 'Tool' }
  & Pick<Types.Tool, '_id' | 'name'>
  & {
    aspects?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: '_ToolAspects' }
      & Pick<Types._ToolAspects, 'quantity'>
      & {
        Aspect?: Types.Maybe<(
          { __typename?: 'Aspect' }
          & Pick<Types.Aspect, '_id' | 'name'>
        )>
      }
    )>>>
  }
);

export type GetIngredientsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetIngredientsQuery = (
  { __typename?: 'Query' }
  & {
    Ingredient?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Ingredient' }
      & Pick<Types.Ingredient, 'name'>
    )>>>
  }
);

export type GetIngredientQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type GetIngredientQuery = (
  { __typename?: 'Query' }
  & {
    Ingredient?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Ingredient' }
      & {
        foundInLocation?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: '_IngredientFoundInLocation' }
          & Pick<Types._IngredientFoundInLocation, 'chance'>
          & {
            Location?: Types.Maybe<(
              { __typename?: 'Location' }
              & Pick<Types.Location, 'name'>
            )>
          }
        )>>>, fromDreamingIn: Array<(
          { __typename?: 'MansusDoorOption' }
          & CommonMansusOptionDataFragment
        )>
      }
      & CommonIngredientDataFragment
    )>>>
  }
);

export type SaveIngredientMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type SaveIngredientMutation = (
  { __typename?: 'Mutation' }
  & {
    CreateIngredient?: Types.Maybe<(
      { __typename?: 'Ingredient' }
      & Pick<Types.Ingredient, 'name'>
    )>
  }
);

export type SetIngredientAspectMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  aspect: Types.Scalars['String'];
  quantity: Types.Scalars['Int'];
}>;


export type SetIngredientAspectMutation = (
  { __typename?: 'Mutation' }
  & {
    AddIngredientAspects?: Types.Maybe<(
      { __typename?: '_AddIngredientAspectsPayload' }
      & Pick<Types._AddIngredientAspectsPayload, 'quantity'>
    )>
  }
);

export type SetIngredientLocationMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  location: Types.Scalars['String'];
  chance: Types.Scalars['Boolean'];
}>;


export type SetIngredientLocationMutation = (
  { __typename?: 'Mutation' }
  & {
    AddIngredientFoundInLocation?: Types.Maybe<(
      { __typename?: '_AddIngredientFoundInLocationPayload' }
      & Pick<Types._AddIngredientFoundInLocationPayload, 'chance'>
      & {
        from?: Types.Maybe<(
          { __typename?: 'Ingredient' }
          & Pick<Types.Ingredient, 'name'>
        )>, to?: Types.Maybe<(
          { __typename?: 'Location' }
          & Pick<Types.Location, 'name'>
        )>
      }
    )>
  }
);

export type SetIngredientBreamingResultMutationVariables = Types.Exact<{
  door: Types.Scalars['String'];
  ingredient: Types.Scalars['String'];
}>;


export type SetIngredientBreamingResultMutation = (
  { __typename?: 'Mutation' }
  & {
    AddIngredientFromDreamingIn?: Types.Maybe<(
      { __typename?: '_AddIngredientFromDreamingInPayload' }
      & {
        from?: Types.Maybe<(
          { __typename?: 'MansusDoorOption' }
          & Pick<Types.MansusDoorOption, 'name'>
        )>, to?: Types.Maybe<(
          { __typename?: 'Ingredient' }
          & Pick<Types.Ingredient, 'name'>
        )>
      }
    )>
  }
);

export type GetLocationsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetLocationsQuery = (
  { __typename?: 'Query' }
  & {
    Location?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Location' }
      & Pick<Types.Location, 'name' | 'vault'>
    )>>>
  }
);

export type GetLocationQueryVariables = Types.Exact<{
  location: Types.Scalars['String'];
}>;


export type GetLocationQuery = (
  { __typename?: 'Query' }
  & {
    Location?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Location' }
      & Pick<Types.Location, '_id' | 'name' | 'vault'>
      & {
        histories: Array<(
          { __typename?: 'Lore' }
          & Pick<Types.Lore, '_id' | 'name'>
          & {
            aspects?: Types.Maybe<Array<Types.Maybe<(
              { __typename?: '_LoreAspects' }
              & Pick<Types._LoreAspects, 'quantity'>
            )>>>
          }
        )>, obstacles: Array<(
          { __typename?: 'ExpeditionObstacle' }
          & Pick<Types.ExpeditionObstacle, '_id' | 'name'>
          & {
            defeatedWith: Array<(
              { __typename?: 'Aspect' }
              & Pick<Types.Aspect, 'name'>
            )>
          }
        )>, bookRewards: Array<(
          { __typename?: 'Book' }
          & Pick<Types.Book, '_id' | 'name'>
        )>, influenceRewards: Array<(
          { __typename?: 'Influence' }
          & CommonInfluenceDataFragment
        )>, ingredientRewards: Array<(
          { __typename?: 'Ingredient' }
          & CommonIngredientDataFragment
        )>, toolRewards: Array<(
          { __typename?: 'Tool' }
          & Pick<Types.Tool, '_id' | 'name'>
          & {
            aspects?: Types.Maybe<Array<Types.Maybe<(
              { __typename?: '_ToolAspects' }
              & Pick<Types._ToolAspects, 'quantity'>
              & {
                Aspect?: Types.Maybe<(
                  { __typename?: 'Aspect' }
                  & Pick<Types.Aspect, '_id' | 'name'>
                )>
              }
            )>>>
          }
        )>
      }
    )>>>
  }
);

export type SaveLocationMutationVariables = Types.Exact<{
  location: Types.Scalars['String'];
  vault: Types.Scalars['Boolean'];
}>;


export type SaveLocationMutation = (
  { __typename?: 'Mutation' }
  & {
    CreateLocation?: Types.Maybe<(
      { __typename?: 'Location' }
      & Pick<Types.Location, 'name'>
    )>
  }
);

export type SetLocationObstacleMutationVariables = Types.Exact<{
  location: Types.Scalars['String'];
  obstacle: Types.Scalars['String'];
}>;


export type SetLocationObstacleMutation = (
  { __typename?: 'Mutation' }
  & {
    AddLocationObstacles?: Types.Maybe<(
      { __typename?: '_AddLocationObstaclesPayload' }
      & {
        from?: Types.Maybe<(
          { __typename?: 'Location' }
          & Pick<Types.Location, 'name'>
        )>, to?: Types.Maybe<(
          { __typename?: 'ExpeditionObstacle' }
          & Pick<Types.ExpeditionObstacle, 'name'>
        )>
      }
    )>
  }
);

export type GetObstaclesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetObstaclesQuery = (
  { __typename?: 'Query' }
  & {
    ExpeditionObstacle?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'ExpeditionObstacle' }
      & Pick<Types.ExpeditionObstacle, 'name'>
    )>>>
  }
);

export type SaveObstacleMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type SaveObstacleMutation = (
  { __typename?: 'Mutation' }
  & {
    CreateExpeditionObstacle?: Types.Maybe<(
      { __typename?: 'ExpeditionObstacle' }
      & Pick<Types.ExpeditionObstacle, 'name'>
    )>
  }
);

export type SetObstacleAspectMutationVariables = Types.Exact<{
  obstacle: Types.Scalars['String'];
  aspect: Types.Scalars['String'];
}>;


export type SetObstacleAspectMutation = (
  { __typename?: 'Mutation' }
  & {
    AddExpeditionObstacleDefeatedWith?: Types.Maybe<(
      { __typename?: '_AddExpeditionObstacleDefeatedWithPayload' }
      & {
        from?: Types.Maybe<(
          { __typename?: 'ExpeditionObstacle' }
          & Pick<Types.ExpeditionObstacle, 'name'>
        )>, to?: Types.Maybe<(
          { __typename?: 'Aspect' }
          & Pick<Types.Aspect, 'name'>
        )>
      }
    )>
  }
);

export type GetLoresQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetLoresQuery = (
  { __typename?: 'Query' }
  & {
    Lore?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Lore' }
      & Pick<Types.Lore, 'name'>
    )>>>
  }
);

export type GetLoreQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type GetLoreQuery = (
  { __typename?: 'Query' }
  & {
    Lore?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Lore' }
      & {
        exploreResults: Array<(
          { __typename?: 'Location' }
          & Pick<Types.Location, '_id' | 'name'>
        )>, fromBook: Array<(
          { __typename?: 'Book' }
          & Pick<Types.Book, '_id' | 'name'>
        )>, fromDreamingIn: Array<(
          { __typename?: 'MansusDoorOption' }
          & CommonMansusOptionDataFragment
        )>, upgradesTo?: Types.Maybe<(
          { __typename?: 'Lore' }
          & CommonLoreDataFragment
        )>, upgradedFrom?: Types.Maybe<(
          { __typename?: 'Lore' }
          & CommonLoreDataFragment
        )>
      }
      & CommonLoreDataFragment
    )>>>
  }
);

export type SaveLoreMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type SaveLoreMutation = (
  { __typename?: 'Mutation' }
  & {
    CreateLore?: Types.Maybe<(
      { __typename?: 'Lore' }
      & Pick<Types.Lore, 'name'>
    )>
  }
);

export type SetLoreAspectMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  aspect: Types.Scalars['String'];
  quantity: Types.Scalars['Int'];
}>;


export type SetLoreAspectMutation = (
  { __typename?: 'Mutation' }
  & {
    AddLoreAspects?: Types.Maybe<(
      { __typename?: '_AddLoreAspectsPayload' }
      & Pick<Types._AddLoreAspectsPayload, 'quantity'>
    )>
  }
);

export type SetLoreExploringLocationMutationVariables = Types.Exact<{
  lore: Types.Scalars['String'];
  location: Types.Scalars['String'];
}>;


export type SetLoreExploringLocationMutation = (
  { __typename?: 'Mutation' }
  & {
    AddLoreExploreResults?: Types.Maybe<(
      { __typename?: '_AddLoreExploreResultsPayload' }
      & {
        from?: Types.Maybe<(
          { __typename?: 'Lore' }
          & Pick<Types.Lore, 'name'>
        )>, to?: Types.Maybe<(
          { __typename?: 'Location' }
          & Pick<Types.Location, 'name'>
        )>
      }
    )>
  }
);

export type SetLoreDreamingResultMutationVariables = Types.Exact<{
  door: Types.Scalars['String'];
  lore: Types.Scalars['String'];
}>;


export type SetLoreDreamingResultMutation = (
  { __typename?: 'Mutation' }
  & {
    AddLoreFromDreamingIn?: Types.Maybe<(
      { __typename?: '_AddLoreFromDreamingInPayload' }
      & {
        from?: Types.Maybe<(
          { __typename?: 'MansusDoorOption' }
          & Pick<Types.MansusDoorOption, 'name'>
        )>, to?: Types.Maybe<(
          { __typename?: 'Lore' }
          & Pick<Types.Lore, 'name'>
        )>
      }
    )>
  }
);

export type SetLoreUpgradeMutationVariables = Types.Exact<{
  startLore: Types.Scalars['String'];
  lore: Types.Scalars['String'];
}>;


export type SetLoreUpgradeMutation = (
  { __typename?: 'Mutation' }
  & {
    AddLoreUpgradesTo?: Types.Maybe<(
      { __typename?: '_AddLoreUpgradesToPayload' }
      & {
        from?: Types.Maybe<(
          { __typename?: 'Lore' }
          & Pick<Types.Lore, 'name'>
        )>, to?: Types.Maybe<(
          { __typename?: 'Lore' }
          & Pick<Types.Lore, 'name'>
        )>
      }
    )>
  }
);

export type GetToolsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetToolsQuery = (
  { __typename?: 'Query' }
  & {
    Tool?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Tool' }
      & Pick<Types.Tool, 'name'>
    )>>>
  }
);

export type GetToolQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type GetToolQuery = (
  { __typename?: 'Query' }
  & {
    Tool?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Tool' }
      & Pick<Types.Tool, 'name'>
      & {
        aspects?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: '_ToolAspects' }
          & Pick<Types._ToolAspects, 'quantity'>
          & {
            Aspect?: Types.Maybe<(
              { __typename?: 'Aspect' }
              & Pick<Types.Aspect, 'name'>
            )>
          }
        )>>>, foundInLocation?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: '_ToolFoundInLocation' }
          & Pick<Types._ToolFoundInLocation, 'chance'>
          & {
            Location?: Types.Maybe<(
              { __typename?: 'Location' }
              & Pick<Types.Location, 'name'>
            )>
          }
        )>>>, fromBook: Array<(
          { __typename?: 'Book' }
          & Pick<Types.Book, '_id' | 'name'>
        )>
      }
    )>>>
  }
);

export type SaveToolMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type SaveToolMutation = (
  { __typename?: 'Mutation' }
  & {
    CreateTool?: Types.Maybe<(
      { __typename?: 'Tool' }
      & Pick<Types.Tool, 'name'>
    )>
  }
);

export type SetToolAspectMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  aspect: Types.Scalars['String'];
  quantity: Types.Scalars['Int'];
}>;


export type SetToolAspectMutation = (
  { __typename?: 'Mutation' }
  & {
    AddToolAspects?: Types.Maybe<(
      { __typename?: '_AddToolAspectsPayload' }
      & Pick<Types._AddToolAspectsPayload, 'quantity'>
    )>
  }
);

export type SetToolLocationMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  location: Types.Scalars['String'];
  chance: Types.Scalars['Boolean'];
}>;


export type SetToolLocationMutation = (
  { __typename?: 'Mutation' }
  & {
    AddToolFoundInLocation?: Types.Maybe<(
      { __typename?: '_AddToolFoundInLocationPayload' }
      & Pick<Types._AddToolFoundInLocationPayload, 'chance'>
      & {
        from?: Types.Maybe<(
          { __typename?: 'Tool' }
          & Pick<Types.Tool, 'name'>
        )>, to?: Types.Maybe<(
          { __typename?: 'Location' }
          & Pick<Types.Location, 'name'>
        )>
      }
    )>
  }
);

export const CommonInfluenceDataFragmentDoc = gql`
    fragment CommonInfluenceData on Influence {
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
    `;
export const CommonIngredientDataFragmentDoc = gql`
    fragment CommonIngredientData on Ingredient {
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
    `;
export const CommonLoreDataFragmentDoc = gql`
    fragment CommonLoreData on Lore {
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
    `;
export const CommonMansusOptionDataFragmentDoc = gql`
    fragment CommonMansusOptionData on MansusDoorOption {
  _id
  name
  door {
    _id
    name
  }
}
    `;
export const CommonToolDataFragmentDoc = gql`
    fragment CommonToolData on Tool {
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
    `;
export const GetAspectsDocument = gql`
    query getAspects {
  Aspect(orderBy: name_asc) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class GetAspectsGQL extends Apollo.Query<GetAspectsQuery, GetAspectsQueryVariables> {
  document = GetAspectsDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SaveAspectDocument = gql`
    mutation saveAspect($name: String!) {
  CreateAspect(name: $name) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SaveAspectGQL extends Apollo.Mutation<SaveAspectMutation, SaveAspectMutationVariables> {
  document = SaveAspectDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetBookDocument = gql`
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
    studiedIntoLore {
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
    resultsInTool {
      ...CommonToolData
    }
  }
}
    ${CommonLoreDataFragmentDoc}
${CommonInfluenceDataFragmentDoc}
${CommonToolDataFragmentDoc}`;

@Injectable({
  providedIn: 'root'
})
export class GetBookGQL extends Apollo.Query<GetBookQuery, GetBookQueryVariables> {
  document = GetBookDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetBooksDocument = gql`
    query getBooks {
  Book(orderBy: name_asc) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class GetBooksGQL extends Apollo.Query<GetBooksQuery, GetBooksQueryVariables> {
  document = GetBooksDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SaveBookDocument = gql`
    mutation saveBook($title: String!) {
  CreateBook(name: $title) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SaveBookGQL extends Apollo.Mutation<SaveBookMutation, SaveBookMutationVariables> {
  document = SaveBookDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetBookLocationDocument = gql`
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

@Injectable({
  providedIn: 'root'
})
export class SetBookLocationGQL extends Apollo.Mutation<SetBookLocationMutation, SetBookLocationMutationVariables> {
  document = SetBookLocationDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetBookLanguageDocument = gql`
    mutation setBookLanguage($title: String!, $language: String!) {
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

@Injectable({
  providedIn: 'root'
})
export class SetBookLanguageGQL extends Apollo.Mutation<SetBookLanguageMutation, SetBookLanguageMutationVariables> {
  document = SetBookLanguageDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetBookLoreResultDocument = gql`
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

@Injectable({
  providedIn: 'root'
})
export class SetBookLoreResultGQL extends Apollo.Mutation<SetBookLoreResultMutation, SetBookLoreResultMutationVariables> {
  document = SetBookLoreResultDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetBookLanguageResultDocument = gql`
    mutation setBookLanguageResult($book: String!, $name: String!) {
  AddBookTeachesLanguage(from: {name: $book}, to: {name: $name}) {
    from {
      name
      language {
        name
      }
    }
    to {
      name
    }
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SetBookLanguageResultGQL extends Apollo.Mutation<SetBookLanguageResultMutation, SetBookLanguageResultMutationVariables> {
  document = SetBookLanguageResultDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetBookInfluenceResultDocument = gql`
    mutation setBookInfluenceResult($book: String!, $name: String!) {
  AddBookResultsInInfluence(from: {name: $book}, to: {name: $name}) {
    from {
      name
    }
    to {
      name
    }
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SetBookInfluenceResultGQL extends Apollo.Mutation<SetBookInfluenceResultMutation, SetBookInfluenceResultMutationVariables> {
  document = SetBookInfluenceResultDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetBookRiteResultDocument = gql`
    mutation setBookRiteResult($book: String!, $name: String!) {
  AddBookTeachesRite(from: {name: $book}, to: {name: $name}) {
    from {
      name
    }
    to {
      name
    }
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SetBookRiteResultGQL extends Apollo.Mutation<SetBookRiteResultMutation, SetBookRiteResultMutationVariables> {
  document = SetBookRiteResultDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetBookToolResultDocument = gql`
    mutation setBookToolResult($book: String!, $name: String!) {
  AddBookResultsInTool(from: {name: $book}, to: {name: $name}) {
    from {
      name
    }
    to {
      name
    }
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SetBookToolResultGQL extends Apollo.Mutation<SetBookToolResultMutation, SetBookToolResultMutationVariables> {
  document = SetBookToolResultDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetDesiresDocument = gql`
    query getDesires {
  Desire(orderBy: name_asc) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class GetDesiresGQL extends Apollo.Query<GetDesiresQuery, GetDesiresQueryVariables> {
  document = GetDesiresDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SaveDesireDocument = gql`
    mutation saveDesire($name: String!) {
  CreateDesire(name: $name) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SaveDesireGQL extends Apollo.Mutation<SaveDesireMutation, SaveDesireMutationVariables> {
  document = SaveDesireDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const AddDesireChangeDocument = gql`
    mutation addDesireChange($fromDesire: String!, $toDesire: String!, $ingredient1: String!, $ingredient2: String!) {
  AddDesireFromDesire(from: {name: $fromDesire}, to: {name: $toDesire}, data: {ingredient1: $ingredient1, ingredient2: $ingredient2}) {
    ingredient1
    ingredient2
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class AddDesireChangeGQL extends Apollo.Mutation<AddDesireChangeMutation, AddDesireChangeMutationVariables> {
  document = AddDesireChangeDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SaveChangeLessonDocument = gql`
    mutation saveChangeLesson($name: String!) {
  CreateChangeLesson(name: $name) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SaveChangeLessonGQL extends Apollo.Mutation<SaveChangeLessonMutation, SaveChangeLessonMutationVariables> {
  document = SaveChangeLessonDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetEntitiesByAspectDocument = gql`
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

@Injectable({
  providedIn: 'root'
})
export class GetEntitiesByAspectGQL extends Apollo.Query<GetEntitiesByAspectQuery, GetEntitiesByAspectQueryVariables> {
  document = GetEntitiesByAspectDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetFollowerDocument = gql`
    query getFollower($name: String!) {
  Follower(name: $name) {
    _id
    name
    aspects {
      _id
      name
    }
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class GetFollowerGQL extends Apollo.Query<GetFollowerQuery, GetFollowerQueryVariables> {
  document = GetFollowerDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SaveFollowerDocument = gql`
    mutation saveFollower($name: String!) {
  CreateFollower(name: $name) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SaveFollowerGQL extends Apollo.Mutation<SaveFollowerMutation, SaveFollowerMutationVariables> {
  document = SaveFollowerDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const AddAspectToFollowerDocument = gql`
    mutation addAspectToFollower($name: String!, $aspect: String!) {
  AddFollowerAspects(from: {name: $name}, to: {name: $aspect}) {
    from {
      name
    }
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class AddAspectToFollowerGQL extends Apollo.Mutation<AddAspectToFollowerMutation, AddAspectToFollowerMutationVariables> {
  document = AddAspectToFollowerDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetIngredientsDocument = gql`
    query getIngredients {
  Ingredient(orderBy: name_asc) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class GetIngredientsGQL extends Apollo.Query<GetIngredientsQuery, GetIngredientsQueryVariables> {
  document = GetIngredientsDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetIngredientDocument = gql`
    query getIngredient($name: String!) {
  Ingredient(name: $name) {
    ...CommonIngredientData
    foundInLocation {
      Location {
        name
      }
      chance
    }
    fromDreamingIn {
      ...CommonMansusOptionData
    }
  }
}
    ${CommonIngredientDataFragmentDoc}
${CommonMansusOptionDataFragmentDoc}`;

@Injectable({
  providedIn: 'root'
})
export class GetIngredientGQL extends Apollo.Query<GetIngredientQuery, GetIngredientQueryVariables> {
  document = GetIngredientDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SaveIngredientDocument = gql`
    mutation saveIngredient($name: String!) {
  CreateIngredient(name: $name) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SaveIngredientGQL extends Apollo.Mutation<SaveIngredientMutation, SaveIngredientMutationVariables> {
  document = SaveIngredientDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetIngredientAspectDocument = gql`
    mutation setIngredientAspect($name: String!, $aspect: String!, $quantity: Int!) {
  AddIngredientAspects(from: {name: $name}, to: {name: $aspect}, data: {quantity: $quantity}) {
    quantity
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SetIngredientAspectGQL extends Apollo.Mutation<SetIngredientAspectMutation, SetIngredientAspectMutationVariables> {
  document = SetIngredientAspectDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetIngredientLocationDocument = gql`
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

@Injectable({
  providedIn: 'root'
})
export class SetIngredientLocationGQL extends Apollo.Mutation<SetIngredientLocationMutation, SetIngredientLocationMutationVariables> {
  document = SetIngredientLocationDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetIngredientBreamingResultDocument = gql`
    mutation setIngredientBreamingResult($door: String!, $ingredient: String!) {
  AddIngredientFromDreamingIn(from: {name: $door}, to: {name: $ingredient}) {
    from {
      name
    }
    to {
      name
    }
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SetIngredientBreamingResultGQL
 extends Apollo.Mutation<SetIngredientBreamingResultMutation, SetIngredientBreamingResultMutationVariables> {
  document = SetIngredientBreamingResultDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetLocationsDocument = gql`
    query getLocations {
  Location(orderBy: name_asc) {
    name
    vault
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class GetLocationsGQL extends Apollo.Query<GetLocationsQuery, GetLocationsQueryVariables> {
  document = GetLocationsDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetLocationDocument = gql`
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
      ...CommonInfluenceData
    }
    ingredientRewards {
      ...CommonIngredientData
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
    ${CommonInfluenceDataFragmentDoc}
${CommonIngredientDataFragmentDoc}`;

@Injectable({
  providedIn: 'root'
})
export class GetLocationGQL extends Apollo.Query<GetLocationQuery, GetLocationQueryVariables> {
  document = GetLocationDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SaveLocationDocument = gql`
    mutation saveLocation($location: String!, $vault: Boolean!) {
  CreateLocation(name: $location, vault: $vault) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SaveLocationGQL extends Apollo.Mutation<SaveLocationMutation, SaveLocationMutationVariables> {
  document = SaveLocationDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetLocationObstacleDocument = gql`
    mutation setLocationObstacle($location: String!, $obstacle: String!) {
  AddLocationObstacles(from: {name: $location}, to: {name: $obstacle}) {
    from {
      name
    }
    to {
      name
    }
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SetLocationObstacleGQL extends Apollo.Mutation<SetLocationObstacleMutation, SetLocationObstacleMutationVariables> {
  document = SetLocationObstacleDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetObstaclesDocument = gql`
    query getObstacles {
  ExpeditionObstacle(orderBy: name_asc) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class GetObstaclesGQL extends Apollo.Query<GetObstaclesQuery, GetObstaclesQueryVariables> {
  document = GetObstaclesDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SaveObstacleDocument = gql`
    mutation saveObstacle($name: String!) {
  CreateExpeditionObstacle(name: $name) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SaveObstacleGQL extends Apollo.Mutation<SaveObstacleMutation, SaveObstacleMutationVariables> {
  document = SaveObstacleDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetObstacleAspectDocument = gql`
    mutation setObstacleAspect($obstacle: String!, $aspect: String!) {
  AddExpeditionObstacleDefeatedWith(from: {name: $obstacle}, to: {name: $aspect}) {
    from {
      name
    }
    to {
      name
    }
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SetObstacleAspectGQL extends Apollo.Mutation<SetObstacleAspectMutation, SetObstacleAspectMutationVariables> {
  document = SetObstacleAspectDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetLoresDocument = gql`
    query getLores {
  Lore(orderBy: name_asc) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class GetLoresGQL extends Apollo.Query<GetLoresQuery, GetLoresQueryVariables> {
  document = GetLoresDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetLoreDocument = gql`
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
      ...CommonMansusOptionData
    }
    upgradesTo {
      ...CommonLoreData
    }
    upgradedFrom {
      ...CommonLoreData
    }
  }
}
    ${CommonLoreDataFragmentDoc}
${CommonMansusOptionDataFragmentDoc}`;

@Injectable({
  providedIn: 'root'
})
export class GetLoreGQL extends Apollo.Query<GetLoreQuery, GetLoreQueryVariables> {
  document = GetLoreDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SaveLoreDocument = gql`
    mutation saveLore($name: String!) {
  CreateLore(name: $name) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SaveLoreGQL extends Apollo.Mutation<SaveLoreMutation, SaveLoreMutationVariables> {
  document = SaveLoreDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetLoreAspectDocument = gql`
    mutation setLoreAspect($name: String!, $aspect: String!, $quantity: Int!) {
  AddLoreAspects(from: {name: $name}, to: {name: $aspect}, data: {quantity: $quantity}) {
    quantity
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SetLoreAspectGQL extends Apollo.Mutation<SetLoreAspectMutation, SetLoreAspectMutationVariables> {
  document = SetLoreAspectDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetLoreExploringLocationDocument = gql`
    mutation setLoreExploringLocation($lore: String!, $location: String!) {
  AddLoreExploreResults(from: {name: $lore}, to: {name: $location}) {
    from {
      name
    }
    to {
      name
    }
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SetLoreExploringLocationGQL
extends Apollo.Mutation<SetLoreExploringLocationMutation, SetLoreExploringLocationMutationVariables> {
  document = SetLoreExploringLocationDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetLoreDreamingResultDocument = gql`
    mutation setLoreDreamingResult($door: String!, $lore: String!) {
  AddLoreFromDreamingIn(from: {name: $door}, to: {name: $lore}) {
    from {
      name
    }
    to {
      name
    }
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SetLoreDreamingResultGQL extends Apollo.Mutation<SetLoreDreamingResultMutation, SetLoreDreamingResultMutationVariables> {
  document = SetLoreDreamingResultDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetLoreUpgradeDocument = gql`
    mutation setLoreUpgrade($startLore: String!, $lore: String!) {
  AddLoreUpgradesTo(from: {name: $startLore}, to: {name: $lore}) {
    from {
      name
    }
    to {
      name
    }
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SetLoreUpgradeGQL extends Apollo.Mutation<SetLoreUpgradeMutation, SetLoreUpgradeMutationVariables> {
  document = SetLoreUpgradeDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetToolsDocument = gql`
    query getTools {
  Tool(orderBy: name_asc) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class GetToolsGQL extends Apollo.Query<GetToolsQuery, GetToolsQueryVariables> {
  document = GetToolsDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const GetToolDocument = gql`
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

@Injectable({
  providedIn: 'root'
})
export class GetToolGQL extends Apollo.Query<GetToolQuery, GetToolQueryVariables> {
  document = GetToolDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SaveToolDocument = gql`
    mutation saveTool($name: String!) {
  CreateTool(name: $name) {
    name
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SaveToolGQL extends Apollo.Mutation<SaveToolMutation, SaveToolMutationVariables> {
  document = SaveToolDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetToolAspectDocument = gql`
    mutation setToolAspect($name: String!, $aspect: String!, $quantity: Int!) {
  AddToolAspects(from: {name: $name}, to: {name: $aspect}, data: {quantity: $quantity}) {
    quantity
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class SetToolAspectGQL extends Apollo.Mutation<SetToolAspectMutation, SetToolAspectMutationVariables> {
  document = SetToolAspectDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const SetToolLocationDocument = gql`
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

@Injectable({
  providedIn: 'root'
})
export class SetToolLocationGQL extends Apollo.Mutation<SetToolLocationMutation, SetToolLocationMutationVariables> {
  document = SetToolLocationDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
