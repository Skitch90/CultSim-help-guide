import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Query = {
  __typename?: 'Query';
  entityWithName: Array<SearchEntity>;
  entityWithAspect: Array<AspectSearchGroupResult>;
  howToObtainLore?: Maybe<Scalars['Int']>;
  SearchEntity?: Maybe<Array<Maybe<SearchEntity>>>;
  AspectQuantity?: Maybe<Array<Maybe<AspectQuantity>>>;
  AspectSearchGroupResult?: Maybe<Array<Maybe<AspectSearchGroupResult>>>;
  AspectSearchEntity?: Maybe<Array<Maybe<AspectSearchEntity>>>;
  SetLanguageRequiresOut?: Maybe<Array<Maybe<SetLanguageRequiresOut>>>;
  Verb?: Maybe<Array<Maybe<Verb>>>;
  Aspect?: Maybe<Array<Maybe<Aspect>>>;
  Follower?: Maybe<Array<Maybe<Follower>>>;
  Desire?: Maybe<Array<Maybe<Desire>>>;
  Lore?: Maybe<Array<Maybe<Lore>>>;
  Book?: Maybe<Array<Maybe<Book>>>;
  Location?: Maybe<Array<Maybe<Location>>>;
  ExpeditionObstacle?: Maybe<Array<Maybe<ExpeditionObstacle>>>;
  Ingredient?: Maybe<Array<Maybe<Ingredient>>>;
  MansusDoorOption?: Maybe<Array<Maybe<MansusDoorOption>>>;
  MansusDoor?: Maybe<Array<Maybe<MansusDoor>>>;
  Influence?: Maybe<Array<Maybe<Influence>>>;
  Language?: Maybe<Array<Maybe<Language>>>;
  Tool?: Maybe<Array<Maybe<Tool>>>;
  Rite?: Maybe<Array<Maybe<Rite>>>;
  RiteComponent?: Maybe<Array<Maybe<RiteComponent>>>;
  HowToObtainResult?: Maybe<Array<Maybe<HowToObtainResult>>>;
};


export type QueryEntityWithNameArgs = {
  name: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SearchEntityOrdering>>>;
  filter?: Maybe<_SearchEntityFilter>;
};


export type QueryEntityWithAspectArgs = {
  aspect: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AspectSearchGroupResultOrdering>>>;
  filter?: Maybe<_AspectSearchGroupResultFilter>;
};


export type QueryHowToObtainLoreArgs = {
  loreName: Scalars['String'];
  fromType?: Maybe<Scalars['String']>;
};


export type QuerySearchEntityArgs = {
  _id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SearchEntityOrdering>>>;
  filter?: Maybe<_SearchEntityFilter>;
};


export type QueryAspectQuantityArgs = {
  aspect?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AspectQuantityOrdering>>>;
  filter?: Maybe<_AspectQuantityFilter>;
};


export type QueryAspectSearchGroupResultArgs = {
  label?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AspectSearchGroupResultOrdering>>>;
  filter?: Maybe<_AspectSearchGroupResultFilter>;
};


export type QueryAspectSearchEntityArgs = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  aspectQuantity?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AspectSearchEntityOrdering>>>;
  filter?: Maybe<_AspectSearchEntityFilter>;
};


export type QuerySetLanguageRequiresOutArgs = {
  language?: Maybe<Scalars['String']>;
  requiredLanguage?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SetLanguageRequiresOutOrdering>>>;
  filter?: Maybe<_SetLanguageRequiresOutFilter>;
};


export type QueryVerbArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_VerbOrdering>>>;
  filter?: Maybe<_VerbFilter>;
};


export type QueryAspectArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AspectOrdering>>>;
  filter?: Maybe<_AspectFilter>;
};


export type QueryFollowerArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_FollowerOrdering>>>;
  filter?: Maybe<_FollowerFilter>;
};


export type QueryDesireArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DesireOrdering>>>;
  filter?: Maybe<_DesireFilter>;
};


export type QueryLoreArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LoreOrdering>>>;
  filter?: Maybe<_LoreFilter>;
};


export type QueryBookArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BookOrdering>>>;
  filter?: Maybe<_BookFilter>;
};


export type QueryLocationArgs = {
  name?: Maybe<Scalars['String']>;
  vault?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LocationOrdering>>>;
  filter?: Maybe<_LocationFilter>;
};


export type QueryExpeditionObstacleArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ExpeditionObstacleOrdering>>>;
  filter?: Maybe<_ExpeditionObstacleFilter>;
};


export type QueryIngredientArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_IngredientOrdering>>>;
  filter?: Maybe<_IngredientFilter>;
};


export type QueryMansusDoorOptionArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_MansusDoorOptionOrdering>>>;
  filter?: Maybe<_MansusDoorOptionFilter>;
};


export type QueryMansusDoorArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_MansusDoorOrdering>>>;
  filter?: Maybe<_MansusDoorFilter>;
};


export type QueryInfluenceArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_InfluenceOrdering>>>;
  filter?: Maybe<_InfluenceFilter>;
};


export type QueryLanguageArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LanguageOrdering>>>;
  filter?: Maybe<_LanguageFilter>;
};


export type QueryToolArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ToolOrdering>>>;
  filter?: Maybe<_ToolFilter>;
};


export type QueryRiteArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_RiteOrdering>>>;
  filter?: Maybe<_RiteFilter>;
};


export type QueryRiteComponentArgs = {
  name?: Maybe<Scalars['String']>;
  types?: Maybe<Scalars['String']>;
  isConsumed?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_RiteComponentOrdering>>>;
  filter?: Maybe<_RiteComponentFilter>;
};


export type QueryHowToObtainResultArgs = {
  fromType?: Maybe<Scalars['String']>;
  pathLength?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_HowToObtainResultOrdering>>>;
  filter?: Maybe<_HowToObtainResultFilter>;
};

export enum _SearchEntityOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  LabelAsc = 'label_asc',
  LabelDesc = 'label_desc'
}

export type _SearchEntityFilter = {
  AND?: Maybe<Array<_SearchEntityFilter>>;
  OR?: Maybe<Array<_SearchEntityFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  label_not?: Maybe<Scalars['String']>;
  label_in?: Maybe<Array<Scalars['String']>>;
  label_not_in?: Maybe<Array<Scalars['String']>>;
  label_contains?: Maybe<Scalars['String']>;
  label_not_contains?: Maybe<Scalars['String']>;
  label_starts_with?: Maybe<Scalars['String']>;
  label_not_starts_with?: Maybe<Scalars['String']>;
  label_ends_with?: Maybe<Scalars['String']>;
  label_not_ends_with?: Maybe<Scalars['String']>;
};

export type SearchEntity = {
  __typename?: 'SearchEntity';
  _id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  label: Scalars['String'];
  aspects: Array<AspectQuantity>;
};

export type AspectQuantity = {
  __typename?: 'AspectQuantity';
  aspect: Scalars['String'];
  quantity?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
};

export enum _AspectSearchGroupResultOrdering {
  LabelAsc = 'label_asc',
  LabelDesc = 'label_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _AspectSearchGroupResultFilter = {
  AND?: Maybe<Array<_AspectSearchGroupResultFilter>>;
  OR?: Maybe<Array<_AspectSearchGroupResultFilter>>;
  label?: Maybe<Scalars['String']>;
  label_not?: Maybe<Scalars['String']>;
  label_in?: Maybe<Array<Scalars['String']>>;
  label_not_in?: Maybe<Array<Scalars['String']>>;
  label_contains?: Maybe<Scalars['String']>;
  label_not_contains?: Maybe<Scalars['String']>;
  label_starts_with?: Maybe<Scalars['String']>;
  label_not_starts_with?: Maybe<Scalars['String']>;
  label_ends_with?: Maybe<Scalars['String']>;
  label_not_ends_with?: Maybe<Scalars['String']>;
};

export type AspectSearchGroupResult = {
  __typename?: 'AspectSearchGroupResult';
  label: Scalars['String'];
  entities: Array<AspectSearchEntity>;
  _id?: Maybe<Scalars['String']>;
};

export type AspectSearchEntity = {
  __typename?: 'AspectSearchEntity';
  name: Scalars['String'];
  type: Scalars['String'];
  aspectQuantity?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
};

export enum _AspectQuantityOrdering {
  AspectAsc = 'aspect_asc',
  AspectDesc = 'aspect_desc',
  QuantityAsc = 'quantity_asc',
  QuantityDesc = 'quantity_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _AspectQuantityFilter = {
  AND?: Maybe<Array<_AspectQuantityFilter>>;
  OR?: Maybe<Array<_AspectQuantityFilter>>;
  aspect?: Maybe<Scalars['String']>;
  aspect_not?: Maybe<Scalars['String']>;
  aspect_in?: Maybe<Array<Scalars['String']>>;
  aspect_not_in?: Maybe<Array<Scalars['String']>>;
  aspect_contains?: Maybe<Scalars['String']>;
  aspect_not_contains?: Maybe<Scalars['String']>;
  aspect_starts_with?: Maybe<Scalars['String']>;
  aspect_not_starts_with?: Maybe<Scalars['String']>;
  aspect_ends_with?: Maybe<Scalars['String']>;
  aspect_not_ends_with?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_not?: Maybe<Scalars['Int']>;
  quantity_in?: Maybe<Array<Scalars['Int']>>;
  quantity_not_in?: Maybe<Array<Scalars['Int']>>;
  quantity_lt?: Maybe<Scalars['Int']>;
  quantity_lte?: Maybe<Scalars['Int']>;
  quantity_gt?: Maybe<Scalars['Int']>;
  quantity_gte?: Maybe<Scalars['Int']>;
};

export enum _AspectSearchEntityOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  TypeAsc = 'type_asc',
  TypeDesc = 'type_desc',
  AspectQuantityAsc = 'aspectQuantity_asc',
  AspectQuantityDesc = 'aspectQuantity_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _AspectSearchEntityFilter = {
  AND?: Maybe<Array<_AspectSearchEntityFilter>>;
  OR?: Maybe<Array<_AspectSearchEntityFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  type_not_in?: Maybe<Array<Scalars['String']>>;
  type_contains?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  aspectQuantity?: Maybe<Scalars['Int']>;
  aspectQuantity_not?: Maybe<Scalars['Int']>;
  aspectQuantity_in?: Maybe<Array<Scalars['Int']>>;
  aspectQuantity_not_in?: Maybe<Array<Scalars['Int']>>;
  aspectQuantity_lt?: Maybe<Scalars['Int']>;
  aspectQuantity_lte?: Maybe<Scalars['Int']>;
  aspectQuantity_gt?: Maybe<Scalars['Int']>;
  aspectQuantity_gte?: Maybe<Scalars['Int']>;
};

export enum _SetLanguageRequiresOutOrdering {
  LanguageAsc = 'language_asc',
  LanguageDesc = 'language_desc',
  RequiredLanguageAsc = 'requiredLanguage_asc',
  RequiredLanguageDesc = 'requiredLanguage_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _SetLanguageRequiresOutFilter = {
  AND?: Maybe<Array<_SetLanguageRequiresOutFilter>>;
  OR?: Maybe<Array<_SetLanguageRequiresOutFilter>>;
  language?: Maybe<Scalars['String']>;
  language_not?: Maybe<Scalars['String']>;
  language_in?: Maybe<Array<Scalars['String']>>;
  language_not_in?: Maybe<Array<Scalars['String']>>;
  language_contains?: Maybe<Scalars['String']>;
  language_not_contains?: Maybe<Scalars['String']>;
  language_starts_with?: Maybe<Scalars['String']>;
  language_not_starts_with?: Maybe<Scalars['String']>;
  language_ends_with?: Maybe<Scalars['String']>;
  language_not_ends_with?: Maybe<Scalars['String']>;
  requiredLanguage?: Maybe<Scalars['String']>;
  requiredLanguage_not?: Maybe<Scalars['String']>;
  requiredLanguage_in?: Maybe<Array<Scalars['String']>>;
  requiredLanguage_not_in?: Maybe<Array<Scalars['String']>>;
  requiredLanguage_contains?: Maybe<Scalars['String']>;
  requiredLanguage_not_contains?: Maybe<Scalars['String']>;
  requiredLanguage_starts_with?: Maybe<Scalars['String']>;
  requiredLanguage_not_starts_with?: Maybe<Scalars['String']>;
  requiredLanguage_ends_with?: Maybe<Scalars['String']>;
  requiredLanguage_not_ends_with?: Maybe<Scalars['String']>;
};

export type SetLanguageRequiresOut = {
  __typename?: 'SetLanguageRequiresOut';
  language: Scalars['String'];
  requiredLanguage: Scalars['String'];
  _id?: Maybe<Scalars['String']>;
};

export enum _VerbOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _VerbFilter = {
  AND?: Maybe<Array<_VerbFilter>>;
  OR?: Maybe<Array<_VerbFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
};

export type Verb = {
  __typename?: 'Verb';
  name: Scalars['String'];
  _id?: Maybe<Scalars['String']>;
};

export enum _AspectOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _AspectFilter = {
  AND?: Maybe<Array<_AspectFilter>>;
  OR?: Maybe<Array<_AspectFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
};

export type Aspect = {
  __typename?: 'Aspect';
  name: Scalars['String'];
  _id?: Maybe<Scalars['String']>;
};

export enum _FollowerOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _FollowerFilter = {
  AND?: Maybe<Array<_FollowerFilter>>;
  OR?: Maybe<Array<_FollowerFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  aspects?: Maybe<_AspectFilter>;
  aspects_not?: Maybe<_AspectFilter>;
  aspects_in?: Maybe<Array<_AspectFilter>>;
  aspects_not_in?: Maybe<Array<_AspectFilter>>;
  aspects_some?: Maybe<_AspectFilter>;
  aspects_none?: Maybe<_AspectFilter>;
  aspects_single?: Maybe<_AspectFilter>;
  aspects_every?: Maybe<_AspectFilter>;
};

export type Follower = {
  __typename?: 'Follower';
  name: Scalars['String'];
  aspects: Array<Aspect>;
  _id?: Maybe<Scalars['String']>;
};


export type FollowerAspectsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AspectOrdering>>>;
  filter?: Maybe<_AspectFilter>;
};

export enum _DesireOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _DesireFilter = {
  AND?: Maybe<Array<_DesireFilter>>;
  OR?: Maybe<Array<_DesireFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  fromDesire?: Maybe<_FromDesireDirectionsFilter>;
  fromDesire_not?: Maybe<_FromDesireDirectionsFilter>;
  fromDesire_in?: Maybe<Array<_FromDesireDirectionsFilter>>;
  fromDesire_not_in?: Maybe<Array<_FromDesireDirectionsFilter>>;
  fromDesire_some?: Maybe<_FromDesireDirectionsFilter>;
  fromDesire_none?: Maybe<_FromDesireDirectionsFilter>;
  fromDesire_single?: Maybe<_FromDesireDirectionsFilter>;
  fromDesire_every?: Maybe<_FromDesireDirectionsFilter>;
  toDesire?: Maybe<_FromDesireDirectionsFilter>;
  toDesire_not?: Maybe<_FromDesireDirectionsFilter>;
  toDesire_in?: Maybe<Array<_FromDesireDirectionsFilter>>;
  toDesire_not_in?: Maybe<Array<_FromDesireDirectionsFilter>>;
  toDesire_some?: Maybe<_FromDesireDirectionsFilter>;
  toDesire_none?: Maybe<_FromDesireDirectionsFilter>;
  toDesire_single?: Maybe<_FromDesireDirectionsFilter>;
  toDesire_every?: Maybe<_FromDesireDirectionsFilter>;
};

export type _FromDesireDirectionsFilter = {
  from?: Maybe<_FromDesireFilter>;
  to?: Maybe<_FromDesireFilter>;
};

export type _FromDesireFilter = {
  AND?: Maybe<Array<_FromDesireFilter>>;
  OR?: Maybe<Array<_FromDesireFilter>>;
  ingredient1?: Maybe<Scalars['String']>;
  ingredient1_not?: Maybe<Scalars['String']>;
  ingredient1_in?: Maybe<Array<Scalars['String']>>;
  ingredient1_not_in?: Maybe<Array<Scalars['String']>>;
  ingredient1_contains?: Maybe<Scalars['String']>;
  ingredient1_not_contains?: Maybe<Scalars['String']>;
  ingredient1_starts_with?: Maybe<Scalars['String']>;
  ingredient1_not_starts_with?: Maybe<Scalars['String']>;
  ingredient1_ends_with?: Maybe<Scalars['String']>;
  ingredient1_not_ends_with?: Maybe<Scalars['String']>;
  ingredient2?: Maybe<Scalars['String']>;
  ingredient2_not?: Maybe<Scalars['String']>;
  ingredient2_in?: Maybe<Array<Scalars['String']>>;
  ingredient2_not_in?: Maybe<Array<Scalars['String']>>;
  ingredient2_contains?: Maybe<Scalars['String']>;
  ingredient2_not_contains?: Maybe<Scalars['String']>;
  ingredient2_starts_with?: Maybe<Scalars['String']>;
  ingredient2_not_starts_with?: Maybe<Scalars['String']>;
  ingredient2_ends_with?: Maybe<Scalars['String']>;
  ingredient2_not_ends_with?: Maybe<Scalars['String']>;
  Desire?: Maybe<_DesireFilter>;
};

export type Desire = {
  __typename?: 'Desire';
  name: Scalars['String'];
  fromDesire?: Maybe<_DesireFromDesireDirections>;
  toDesire?: Maybe<_DesireToDesireDirections>;
  _id?: Maybe<Scalars['String']>;
};

export type _DesireFromDesireDirections = {
  __typename?: '_DesireFromDesireDirections';
  from?: Maybe<Array<Maybe<_DesireFromDesire>>>;
  to?: Maybe<Array<Maybe<_DesireFromDesire>>>;
};


export type _DesireFromDesireDirectionsFromArgs = {
  filter?: Maybe<_FromDesireFilter>;
};


export type _DesireFromDesireDirectionsToArgs = {
  filter?: Maybe<_FromDesireFilter>;
};

export type _DesireFromDesire = {
  __typename?: '_DesireFromDesire';
  ingredient1: Scalars['String'];
  ingredient2?: Maybe<Scalars['String']>;
  Desire?: Maybe<Desire>;
};

export type _DesireToDesireDirections = {
  __typename?: '_DesireToDesireDirections';
  from?: Maybe<Array<Maybe<_DesireToDesire>>>;
  to?: Maybe<Array<Maybe<_DesireToDesire>>>;
};


export type _DesireToDesireDirectionsFromArgs = {
  filter?: Maybe<_FromDesireFilter>;
};


export type _DesireToDesireDirectionsToArgs = {
  filter?: Maybe<_FromDesireFilter>;
};

export type _DesireToDesire = {
  __typename?: '_DesireToDesire';
  ingredient1: Scalars['String'];
  ingredient2?: Maybe<Scalars['String']>;
  Desire?: Maybe<Desire>;
};

export enum _LoreOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _LoreFilter = {
  AND?: Maybe<Array<_LoreFilter>>;
  OR?: Maybe<Array<_LoreFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  aspects?: Maybe<_LoreHasAspectLoreFilter>;
  aspects_not?: Maybe<_LoreHasAspectLoreFilter>;
  aspects_in?: Maybe<Array<_LoreHasAspectLoreFilter>>;
  aspects_not_in?: Maybe<Array<_LoreHasAspectLoreFilter>>;
  aspects_some?: Maybe<_LoreHasAspectLoreFilter>;
  aspects_none?: Maybe<_LoreHasAspectLoreFilter>;
  aspects_single?: Maybe<_LoreHasAspectLoreFilter>;
  aspects_every?: Maybe<_LoreHasAspectLoreFilter>;
  upgradesTo?: Maybe<_LoreFilter>;
  upgradesTo_not?: Maybe<_LoreFilter>;
  upgradesTo_in?: Maybe<Array<_LoreFilter>>;
  upgradesTo_not_in?: Maybe<Array<_LoreFilter>>;
  upgradedFrom?: Maybe<_LoreFilter>;
  upgradedFrom_not?: Maybe<_LoreFilter>;
  upgradedFrom_in?: Maybe<Array<_LoreFilter>>;
  upgradedFrom_not_in?: Maybe<Array<_LoreFilter>>;
  fromBook?: Maybe<_BookFilter>;
  fromBook_not?: Maybe<_BookFilter>;
  fromBook_in?: Maybe<Array<_BookFilter>>;
  fromBook_not_in?: Maybe<Array<_BookFilter>>;
  fromBook_some?: Maybe<_BookFilter>;
  fromBook_none?: Maybe<_BookFilter>;
  fromBook_single?: Maybe<_BookFilter>;
  fromBook_every?: Maybe<_BookFilter>;
  fromDreamingIn?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_not?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_in?: Maybe<Array<_MansusDoorOptionFilter>>;
  fromDreamingIn_not_in?: Maybe<Array<_MansusDoorOptionFilter>>;
  fromDreamingIn_some?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_none?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_single?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_every?: Maybe<_MansusDoorOptionFilter>;
  exploreResults?: Maybe<_LocationFilter>;
  exploreResults_not?: Maybe<_LocationFilter>;
  exploreResults_in?: Maybe<Array<_LocationFilter>>;
  exploreResults_not_in?: Maybe<Array<_LocationFilter>>;
  exploreResults_some?: Maybe<_LocationFilter>;
  exploreResults_none?: Maybe<_LocationFilter>;
  exploreResults_single?: Maybe<_LocationFilter>;
  exploreResults_every?: Maybe<_LocationFilter>;
};

export type _LoreHasAspectLoreFilter = {
  AND?: Maybe<Array<_LoreHasAspectLoreFilter>>;
  OR?: Maybe<Array<_LoreHasAspectLoreFilter>>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_not?: Maybe<Scalars['Int']>;
  quantity_in?: Maybe<Array<Scalars['Int']>>;
  quantity_not_in?: Maybe<Array<Scalars['Int']>>;
  quantity_lt?: Maybe<Scalars['Int']>;
  quantity_lte?: Maybe<Scalars['Int']>;
  quantity_gt?: Maybe<Scalars['Int']>;
  quantity_gte?: Maybe<Scalars['Int']>;
  Aspect?: Maybe<_AspectFilter>;
};

export type _BookFilter = {
  AND?: Maybe<Array<_BookFilter>>;
  OR?: Maybe<Array<_BookFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  foundInLocation?: Maybe<_BookBookFoundInLocationFilter>;
  foundInLocation_not?: Maybe<_BookBookFoundInLocationFilter>;
  foundInLocation_in?: Maybe<Array<_BookBookFoundInLocationFilter>>;
  foundInLocation_not_in?: Maybe<Array<_BookBookFoundInLocationFilter>>;
  foundInLocation_some?: Maybe<_BookBookFoundInLocationFilter>;
  foundInLocation_none?: Maybe<_BookBookFoundInLocationFilter>;
  foundInLocation_single?: Maybe<_BookBookFoundInLocationFilter>;
  foundInLocation_every?: Maybe<_BookBookFoundInLocationFilter>;
  language?: Maybe<_LanguageFilter>;
  language_not?: Maybe<_LanguageFilter>;
  language_in?: Maybe<Array<_LanguageFilter>>;
  language_not_in?: Maybe<Array<_LanguageFilter>>;
  studiedIntoLore?: Maybe<_LoreFilter>;
  studiedIntoLore_not?: Maybe<_LoreFilter>;
  studiedIntoLore_in?: Maybe<Array<_LoreFilter>>;
  studiedIntoLore_not_in?: Maybe<Array<_LoreFilter>>;
  studiedIntoLore_some?: Maybe<_LoreFilter>;
  studiedIntoLore_none?: Maybe<_LoreFilter>;
  studiedIntoLore_single?: Maybe<_LoreFilter>;
  studiedIntoLore_every?: Maybe<_LoreFilter>;
  teachesRite?: Maybe<_RiteFilter>;
  teachesRite_not?: Maybe<_RiteFilter>;
  teachesRite_in?: Maybe<Array<_RiteFilter>>;
  teachesRite_not_in?: Maybe<Array<_RiteFilter>>;
  teachesLanguage?: Maybe<_LanguageFilter>;
  teachesLanguage_not?: Maybe<_LanguageFilter>;
  teachesLanguage_in?: Maybe<Array<_LanguageFilter>>;
  teachesLanguage_not_in?: Maybe<Array<_LanguageFilter>>;
  resultsInInfluence?: Maybe<_InfluenceFilter>;
  resultsInInfluence_not?: Maybe<_InfluenceFilter>;
  resultsInInfluence_in?: Maybe<Array<_InfluenceFilter>>;
  resultsInInfluence_not_in?: Maybe<Array<_InfluenceFilter>>;
  resultsInInfluence_some?: Maybe<_InfluenceFilter>;
  resultsInInfluence_none?: Maybe<_InfluenceFilter>;
  resultsInInfluence_single?: Maybe<_InfluenceFilter>;
  resultsInInfluence_every?: Maybe<_InfluenceFilter>;
  resultsInTool?: Maybe<_ToolFilter>;
  resultsInTool_not?: Maybe<_ToolFilter>;
  resultsInTool_in?: Maybe<Array<_ToolFilter>>;
  resultsInTool_not_in?: Maybe<Array<_ToolFilter>>;
};

export type _BookBookFoundInLocationFilter = {
  AND?: Maybe<Array<_BookBookFoundInLocationFilter>>;
  OR?: Maybe<Array<_BookBookFoundInLocationFilter>>;
  chance?: Maybe<Scalars['Boolean']>;
  chance_not?: Maybe<Scalars['Boolean']>;
  Location?: Maybe<_LocationFilter>;
};

export type _LocationFilter = {
  AND?: Maybe<Array<_LocationFilter>>;
  OR?: Maybe<Array<_LocationFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  vault?: Maybe<Scalars['Boolean']>;
  vault_not?: Maybe<Scalars['Boolean']>;
  histories?: Maybe<_LoreFilter>;
  histories_not?: Maybe<_LoreFilter>;
  histories_in?: Maybe<Array<_LoreFilter>>;
  histories_not_in?: Maybe<Array<_LoreFilter>>;
  histories_some?: Maybe<_LoreFilter>;
  histories_none?: Maybe<_LoreFilter>;
  histories_single?: Maybe<_LoreFilter>;
  histories_every?: Maybe<_LoreFilter>;
  obstacles?: Maybe<_ExpeditionObstacleFilter>;
  obstacles_not?: Maybe<_ExpeditionObstacleFilter>;
  obstacles_in?: Maybe<Array<_ExpeditionObstacleFilter>>;
  obstacles_not_in?: Maybe<Array<_ExpeditionObstacleFilter>>;
  obstacles_some?: Maybe<_ExpeditionObstacleFilter>;
  obstacles_none?: Maybe<_ExpeditionObstacleFilter>;
  obstacles_single?: Maybe<_ExpeditionObstacleFilter>;
  obstacles_every?: Maybe<_ExpeditionObstacleFilter>;
  bookRewards?: Maybe<_BookFilter>;
  bookRewards_not?: Maybe<_BookFilter>;
  bookRewards_in?: Maybe<Array<_BookFilter>>;
  bookRewards_not_in?: Maybe<Array<_BookFilter>>;
  bookRewards_some?: Maybe<_BookFilter>;
  bookRewards_none?: Maybe<_BookFilter>;
  bookRewards_single?: Maybe<_BookFilter>;
  bookRewards_every?: Maybe<_BookFilter>;
  ingredientRewards?: Maybe<_IngredientFilter>;
  ingredientRewards_not?: Maybe<_IngredientFilter>;
  ingredientRewards_in?: Maybe<Array<_IngredientFilter>>;
  ingredientRewards_not_in?: Maybe<Array<_IngredientFilter>>;
  ingredientRewards_some?: Maybe<_IngredientFilter>;
  ingredientRewards_none?: Maybe<_IngredientFilter>;
  ingredientRewards_single?: Maybe<_IngredientFilter>;
  ingredientRewards_every?: Maybe<_IngredientFilter>;
  influenceRewards?: Maybe<_InfluenceFilter>;
  influenceRewards_not?: Maybe<_InfluenceFilter>;
  influenceRewards_in?: Maybe<Array<_InfluenceFilter>>;
  influenceRewards_not_in?: Maybe<Array<_InfluenceFilter>>;
  influenceRewards_some?: Maybe<_InfluenceFilter>;
  influenceRewards_none?: Maybe<_InfluenceFilter>;
  influenceRewards_single?: Maybe<_InfluenceFilter>;
  influenceRewards_every?: Maybe<_InfluenceFilter>;
  toolRewards?: Maybe<_ToolFilter>;
  toolRewards_not?: Maybe<_ToolFilter>;
  toolRewards_in?: Maybe<Array<_ToolFilter>>;
  toolRewards_not_in?: Maybe<Array<_ToolFilter>>;
  toolRewards_some?: Maybe<_ToolFilter>;
  toolRewards_none?: Maybe<_ToolFilter>;
  toolRewards_single?: Maybe<_ToolFilter>;
  toolRewards_every?: Maybe<_ToolFilter>;
};

export type _ExpeditionObstacleFilter = {
  AND?: Maybe<Array<_ExpeditionObstacleFilter>>;
  OR?: Maybe<Array<_ExpeditionObstacleFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  defeatedWith?: Maybe<_AspectFilter>;
  defeatedWith_not?: Maybe<_AspectFilter>;
  defeatedWith_in?: Maybe<Array<_AspectFilter>>;
  defeatedWith_not_in?: Maybe<Array<_AspectFilter>>;
  defeatedWith_some?: Maybe<_AspectFilter>;
  defeatedWith_none?: Maybe<_AspectFilter>;
  defeatedWith_single?: Maybe<_AspectFilter>;
  defeatedWith_every?: Maybe<_AspectFilter>;
};

export type _IngredientFilter = {
  AND?: Maybe<Array<_IngredientFilter>>;
  OR?: Maybe<Array<_IngredientFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  aspects?: Maybe<_IngredientIngredientHasAspectFilter>;
  aspects_not?: Maybe<_IngredientIngredientHasAspectFilter>;
  aspects_in?: Maybe<Array<_IngredientIngredientHasAspectFilter>>;
  aspects_not_in?: Maybe<Array<_IngredientIngredientHasAspectFilter>>;
  aspects_some?: Maybe<_IngredientIngredientHasAspectFilter>;
  aspects_none?: Maybe<_IngredientIngredientHasAspectFilter>;
  aspects_single?: Maybe<_IngredientIngredientHasAspectFilter>;
  aspects_every?: Maybe<_IngredientIngredientHasAspectFilter>;
  foundInLocation?: Maybe<_IngredientIngredientFoundInLocationFilter>;
  foundInLocation_not?: Maybe<_IngredientIngredientFoundInLocationFilter>;
  foundInLocation_in?: Maybe<Array<_IngredientIngredientFoundInLocationFilter>>;
  foundInLocation_not_in?: Maybe<Array<_IngredientIngredientFoundInLocationFilter>>;
  foundInLocation_some?: Maybe<_IngredientIngredientFoundInLocationFilter>;
  foundInLocation_none?: Maybe<_IngredientIngredientFoundInLocationFilter>;
  foundInLocation_single?: Maybe<_IngredientIngredientFoundInLocationFilter>;
  foundInLocation_every?: Maybe<_IngredientIngredientFoundInLocationFilter>;
  fromDreamingIn?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_not?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_in?: Maybe<Array<_MansusDoorOptionFilter>>;
  fromDreamingIn_not_in?: Maybe<Array<_MansusDoorOptionFilter>>;
  fromDreamingIn_some?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_none?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_single?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_every?: Maybe<_MansusDoorOptionFilter>;
};

export type _IngredientIngredientHasAspectFilter = {
  AND?: Maybe<Array<_IngredientIngredientHasAspectFilter>>;
  OR?: Maybe<Array<_IngredientIngredientHasAspectFilter>>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_not?: Maybe<Scalars['Int']>;
  quantity_in?: Maybe<Array<Scalars['Int']>>;
  quantity_not_in?: Maybe<Array<Scalars['Int']>>;
  quantity_lt?: Maybe<Scalars['Int']>;
  quantity_lte?: Maybe<Scalars['Int']>;
  quantity_gt?: Maybe<Scalars['Int']>;
  quantity_gte?: Maybe<Scalars['Int']>;
  Aspect?: Maybe<_AspectFilter>;
};

export type _IngredientIngredientFoundInLocationFilter = {
  AND?: Maybe<Array<_IngredientIngredientFoundInLocationFilter>>;
  OR?: Maybe<Array<_IngredientIngredientFoundInLocationFilter>>;
  chance?: Maybe<Scalars['Boolean']>;
  chance_not?: Maybe<Scalars['Boolean']>;
  Location?: Maybe<_LocationFilter>;
};

export type _MansusDoorOptionFilter = {
  AND?: Maybe<Array<_MansusDoorOptionFilter>>;
  OR?: Maybe<Array<_MansusDoorOptionFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  door?: Maybe<_MansusDoorFilter>;
  door_not?: Maybe<_MansusDoorFilter>;
  door_in?: Maybe<Array<_MansusDoorFilter>>;
  door_not_in?: Maybe<Array<_MansusDoorFilter>>;
  influenceRewards?: Maybe<_InfluenceFilter>;
  influenceRewards_not?: Maybe<_InfluenceFilter>;
  influenceRewards_in?: Maybe<Array<_InfluenceFilter>>;
  influenceRewards_not_in?: Maybe<Array<_InfluenceFilter>>;
  influenceRewards_some?: Maybe<_InfluenceFilter>;
  influenceRewards_none?: Maybe<_InfluenceFilter>;
  influenceRewards_single?: Maybe<_InfluenceFilter>;
  influenceRewards_every?: Maybe<_InfluenceFilter>;
  ingredientRewards?: Maybe<_IngredientFilter>;
  ingredientRewards_not?: Maybe<_IngredientFilter>;
  ingredientRewards_in?: Maybe<Array<_IngredientFilter>>;
  ingredientRewards_not_in?: Maybe<Array<_IngredientFilter>>;
  ingredientRewards_some?: Maybe<_IngredientFilter>;
  ingredientRewards_none?: Maybe<_IngredientFilter>;
  ingredientRewards_single?: Maybe<_IngredientFilter>;
  ingredientRewards_every?: Maybe<_IngredientFilter>;
  languageRewards?: Maybe<_LanguageFilter>;
  languageRewards_not?: Maybe<_LanguageFilter>;
  languageRewards_in?: Maybe<Array<_LanguageFilter>>;
  languageRewards_not_in?: Maybe<Array<_LanguageFilter>>;
  languageRewards_some?: Maybe<_LanguageFilter>;
  languageRewards_none?: Maybe<_LanguageFilter>;
  languageRewards_single?: Maybe<_LanguageFilter>;
  languageRewards_every?: Maybe<_LanguageFilter>;
  loreRewards?: Maybe<_LoreFilter>;
  loreRewards_not?: Maybe<_LoreFilter>;
  loreRewards_in?: Maybe<Array<_LoreFilter>>;
  loreRewards_not_in?: Maybe<Array<_LoreFilter>>;
  loreRewards_some?: Maybe<_LoreFilter>;
  loreRewards_none?: Maybe<_LoreFilter>;
  loreRewards_single?: Maybe<_LoreFilter>;
  loreRewards_every?: Maybe<_LoreFilter>;
};

export type _MansusDoorFilter = {
  AND?: Maybe<Array<_MansusDoorFilter>>;
  OR?: Maybe<Array<_MansusDoorFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  options?: Maybe<_MansusDoorOptionFilter>;
  options_not?: Maybe<_MansusDoorOptionFilter>;
  options_in?: Maybe<Array<_MansusDoorOptionFilter>>;
  options_not_in?: Maybe<Array<_MansusDoorOptionFilter>>;
  options_some?: Maybe<_MansusDoorOptionFilter>;
  options_none?: Maybe<_MansusDoorOptionFilter>;
  options_single?: Maybe<_MansusDoorOptionFilter>;
  options_every?: Maybe<_MansusDoorOptionFilter>;
};

export type _InfluenceFilter = {
  AND?: Maybe<Array<_InfluenceFilter>>;
  OR?: Maybe<Array<_InfluenceFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  aspects?: Maybe<_InfluenceHasAspectInfluenceFilter>;
  aspects_not?: Maybe<_InfluenceHasAspectInfluenceFilter>;
  aspects_in?: Maybe<Array<_InfluenceHasAspectInfluenceFilter>>;
  aspects_not_in?: Maybe<Array<_InfluenceHasAspectInfluenceFilter>>;
  aspects_some?: Maybe<_InfluenceHasAspectInfluenceFilter>;
  aspects_none?: Maybe<_InfluenceHasAspectInfluenceFilter>;
  aspects_single?: Maybe<_InfluenceHasAspectInfluenceFilter>;
  aspects_every?: Maybe<_InfluenceHasAspectInfluenceFilter>;
  decaysTo?: Maybe<_InfluenceFilter>;
  decaysTo_not?: Maybe<_InfluenceFilter>;
  decaysTo_in?: Maybe<Array<_InfluenceFilter>>;
  decaysTo_not_in?: Maybe<Array<_InfluenceFilter>>;
  decaysFrom?: Maybe<_InfluenceFilter>;
  decaysFrom_not?: Maybe<_InfluenceFilter>;
  decaysFrom_in?: Maybe<Array<_InfluenceFilter>>;
  decaysFrom_not_in?: Maybe<Array<_InfluenceFilter>>;
  decaysFrom_some?: Maybe<_InfluenceFilter>;
  decaysFrom_none?: Maybe<_InfluenceFilter>;
  decaysFrom_single?: Maybe<_InfluenceFilter>;
  decaysFrom_every?: Maybe<_InfluenceFilter>;
  foundInLocation?: Maybe<_InfluenceInfluenceFoundInLocationFilter>;
  foundInLocation_not?: Maybe<_InfluenceInfluenceFoundInLocationFilter>;
  foundInLocation_in?: Maybe<Array<_InfluenceInfluenceFoundInLocationFilter>>;
  foundInLocation_not_in?: Maybe<Array<_InfluenceInfluenceFoundInLocationFilter>>;
  foundInLocation_some?: Maybe<_InfluenceInfluenceFoundInLocationFilter>;
  foundInLocation_none?: Maybe<_InfluenceInfluenceFoundInLocationFilter>;
  foundInLocation_single?: Maybe<_InfluenceInfluenceFoundInLocationFilter>;
  foundInLocation_every?: Maybe<_InfluenceInfluenceFoundInLocationFilter>;
  fromDreamingIn?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_not?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_in?: Maybe<Array<_MansusDoorOptionFilter>>;
  fromDreamingIn_not_in?: Maybe<Array<_MansusDoorOptionFilter>>;
  fromDreamingIn_some?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_none?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_single?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_every?: Maybe<_MansusDoorOptionFilter>;
  fromBook?: Maybe<_BookFilter>;
  fromBook_not?: Maybe<_BookFilter>;
  fromBook_in?: Maybe<Array<_BookFilter>>;
  fromBook_not_in?: Maybe<Array<_BookFilter>>;
  fromBook_some?: Maybe<_BookFilter>;
  fromBook_none?: Maybe<_BookFilter>;
  fromBook_single?: Maybe<_BookFilter>;
  fromBook_every?: Maybe<_BookFilter>;
};

export type _InfluenceHasAspectInfluenceFilter = {
  AND?: Maybe<Array<_InfluenceHasAspectInfluenceFilter>>;
  OR?: Maybe<Array<_InfluenceHasAspectInfluenceFilter>>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_not?: Maybe<Scalars['Int']>;
  quantity_in?: Maybe<Array<Scalars['Int']>>;
  quantity_not_in?: Maybe<Array<Scalars['Int']>>;
  quantity_lt?: Maybe<Scalars['Int']>;
  quantity_lte?: Maybe<Scalars['Int']>;
  quantity_gt?: Maybe<Scalars['Int']>;
  quantity_gte?: Maybe<Scalars['Int']>;
  Aspect?: Maybe<_AspectFilter>;
};

export type _InfluenceInfluenceFoundInLocationFilter = {
  AND?: Maybe<Array<_InfluenceInfluenceFoundInLocationFilter>>;
  OR?: Maybe<Array<_InfluenceInfluenceFoundInLocationFilter>>;
  chance?: Maybe<Scalars['Boolean']>;
  chance_not?: Maybe<Scalars['Boolean']>;
  Location?: Maybe<_LocationFilter>;
};

export type _LanguageFilter = {
  AND?: Maybe<Array<_LanguageFilter>>;
  OR?: Maybe<Array<_LanguageFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  requires?: Maybe<_LanguageFilter>;
  requires_not?: Maybe<_LanguageFilter>;
  requires_in?: Maybe<Array<_LanguageFilter>>;
  requires_not_in?: Maybe<Array<_LanguageFilter>>;
  fromBook?: Maybe<_BookFilter>;
  fromBook_not?: Maybe<_BookFilter>;
  fromBook_in?: Maybe<Array<_BookFilter>>;
  fromBook_not_in?: Maybe<Array<_BookFilter>>;
  fromDreamingIn?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_not?: Maybe<_MansusDoorOptionFilter>;
  fromDreamingIn_in?: Maybe<Array<_MansusDoorOptionFilter>>;
  fromDreamingIn_not_in?: Maybe<Array<_MansusDoorOptionFilter>>;
};

export type _ToolFilter = {
  AND?: Maybe<Array<_ToolFilter>>;
  OR?: Maybe<Array<_ToolFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  aspects?: Maybe<_ToolToolHasAspectFilter>;
  aspects_not?: Maybe<_ToolToolHasAspectFilter>;
  aspects_in?: Maybe<Array<_ToolToolHasAspectFilter>>;
  aspects_not_in?: Maybe<Array<_ToolToolHasAspectFilter>>;
  aspects_some?: Maybe<_ToolToolHasAspectFilter>;
  aspects_none?: Maybe<_ToolToolHasAspectFilter>;
  aspects_single?: Maybe<_ToolToolHasAspectFilter>;
  aspects_every?: Maybe<_ToolToolHasAspectFilter>;
  foundInLocation?: Maybe<_ToolToolFoundInLocationFilter>;
  foundInLocation_not?: Maybe<_ToolToolFoundInLocationFilter>;
  foundInLocation_in?: Maybe<Array<_ToolToolFoundInLocationFilter>>;
  foundInLocation_not_in?: Maybe<Array<_ToolToolFoundInLocationFilter>>;
  foundInLocation_some?: Maybe<_ToolToolFoundInLocationFilter>;
  foundInLocation_none?: Maybe<_ToolToolFoundInLocationFilter>;
  foundInLocation_single?: Maybe<_ToolToolFoundInLocationFilter>;
  foundInLocation_every?: Maybe<_ToolToolFoundInLocationFilter>;
  fromBook?: Maybe<_BookFilter>;
  fromBook_not?: Maybe<_BookFilter>;
  fromBook_in?: Maybe<Array<_BookFilter>>;
  fromBook_not_in?: Maybe<Array<_BookFilter>>;
  fromBook_some?: Maybe<_BookFilter>;
  fromBook_none?: Maybe<_BookFilter>;
  fromBook_single?: Maybe<_BookFilter>;
  fromBook_every?: Maybe<_BookFilter>;
};

export type _ToolToolHasAspectFilter = {
  AND?: Maybe<Array<_ToolToolHasAspectFilter>>;
  OR?: Maybe<Array<_ToolToolHasAspectFilter>>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_not?: Maybe<Scalars['Int']>;
  quantity_in?: Maybe<Array<Scalars['Int']>>;
  quantity_not_in?: Maybe<Array<Scalars['Int']>>;
  quantity_lt?: Maybe<Scalars['Int']>;
  quantity_lte?: Maybe<Scalars['Int']>;
  quantity_gt?: Maybe<Scalars['Int']>;
  quantity_gte?: Maybe<Scalars['Int']>;
  Aspect?: Maybe<_AspectFilter>;
};

export type _ToolToolFoundInLocationFilter = {
  AND?: Maybe<Array<_ToolToolFoundInLocationFilter>>;
  OR?: Maybe<Array<_ToolToolFoundInLocationFilter>>;
  chance?: Maybe<Scalars['Boolean']>;
  chance_not?: Maybe<Scalars['Boolean']>;
  Location?: Maybe<_LocationFilter>;
};

export type _RiteFilter = {
  AND?: Maybe<Array<_RiteFilter>>;
  OR?: Maybe<Array<_RiteFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  components?: Maybe<_RiteComponentFilter>;
  components_not?: Maybe<_RiteComponentFilter>;
  components_in?: Maybe<Array<_RiteComponentFilter>>;
  components_not_in?: Maybe<Array<_RiteComponentFilter>>;
  components_some?: Maybe<_RiteComponentFilter>;
  components_none?: Maybe<_RiteComponentFilter>;
  components_single?: Maybe<_RiteComponentFilter>;
  components_every?: Maybe<_RiteComponentFilter>;
  fromBook?: Maybe<_BookFilter>;
  fromBook_not?: Maybe<_BookFilter>;
  fromBook_in?: Maybe<Array<_BookFilter>>;
  fromBook_not_in?: Maybe<Array<_BookFilter>>;
  fromBook_some?: Maybe<_BookFilter>;
  fromBook_none?: Maybe<_BookFilter>;
  fromBook_single?: Maybe<_BookFilter>;
  fromBook_every?: Maybe<_BookFilter>;
};

export type _RiteComponentFilter = {
  AND?: Maybe<Array<_RiteComponentFilter>>;
  OR?: Maybe<Array<_RiteComponentFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  isConsumed?: Maybe<Scalars['Boolean']>;
  isConsumed_not?: Maybe<Scalars['Boolean']>;
};

export type Lore = {
  __typename?: 'Lore';
  name: Scalars['String'];
  aspects?: Maybe<Array<Maybe<_LoreAspects>>>;
  upgradesTo?: Maybe<Lore>;
  upgradedFrom?: Maybe<Lore>;
  fromBook: Array<Book>;
  fromDreamingIn: Array<MansusDoorOption>;
  exploreResults: Array<Location>;
  _id?: Maybe<Scalars['String']>;
};


export type LoreAspectsArgs = {
  filter?: Maybe<_LoreHasAspectLoreFilter>;
};


export type LoreUpgradesToArgs = {
  filter?: Maybe<_LoreFilter>;
};


export type LoreUpgradedFromArgs = {
  filter?: Maybe<_LoreFilter>;
};


export type LoreFromBookArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BookOrdering>>>;
  filter?: Maybe<_BookFilter>;
};


export type LoreFromDreamingInArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_MansusDoorOptionOrdering>>>;
  filter?: Maybe<_MansusDoorOptionFilter>;
};


export type LoreExploreResultsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LocationOrdering>>>;
  filter?: Maybe<_LocationFilter>;
};

export type _LoreAspects = {
  __typename?: '_LoreAspects';
  quantity?: Maybe<Scalars['Int']>;
  Aspect?: Maybe<Aspect>;
};

export enum _BookOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type Book = {
  __typename?: 'Book';
  name: Scalars['String'];
  foundInLocation?: Maybe<Array<Maybe<_BookFoundInLocation>>>;
  language?: Maybe<Language>;
  studiedIntoLore: Array<Lore>;
  teachesRite?: Maybe<Rite>;
  teachesLanguage?: Maybe<Language>;
  resultsInInfluence: Array<Influence>;
  resultsInTool?: Maybe<Tool>;
  _id?: Maybe<Scalars['String']>;
};


export type BookFoundInLocationArgs = {
  filter?: Maybe<_BookBookFoundInLocationFilter>;
};


export type BookLanguageArgs = {
  filter?: Maybe<_LanguageFilter>;
};


export type BookStudiedIntoLoreArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LoreOrdering>>>;
  filter?: Maybe<_LoreFilter>;
};


export type BookTeachesRiteArgs = {
  filter?: Maybe<_RiteFilter>;
};


export type BookTeachesLanguageArgs = {
  filter?: Maybe<_LanguageFilter>;
};


export type BookResultsInInfluenceArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_InfluenceOrdering>>>;
  filter?: Maybe<_InfluenceFilter>;
};


export type BookResultsInToolArgs = {
  filter?: Maybe<_ToolFilter>;
};

export type _BookFoundInLocation = {
  __typename?: '_BookFoundInLocation';
  chance: Scalars['Boolean'];
  Location?: Maybe<Location>;
};

export type Location = {
  __typename?: 'Location';
  name: Scalars['String'];
  vault: Scalars['Boolean'];
  histories: Array<Lore>;
  obstacles: Array<ExpeditionObstacle>;
  bookRewards: Array<Book>;
  ingredientRewards: Array<Ingredient>;
  influenceRewards: Array<Influence>;
  toolRewards: Array<Tool>;
  _id?: Maybe<Scalars['String']>;
};


export type LocationHistoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LoreOrdering>>>;
  filter?: Maybe<_LoreFilter>;
};


export type LocationObstaclesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ExpeditionObstacleOrdering>>>;
  filter?: Maybe<_ExpeditionObstacleFilter>;
};


export type LocationBookRewardsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BookOrdering>>>;
  filter?: Maybe<_BookFilter>;
};


export type LocationIngredientRewardsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_IngredientOrdering>>>;
  filter?: Maybe<_IngredientFilter>;
};


export type LocationInfluenceRewardsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_InfluenceOrdering>>>;
  filter?: Maybe<_InfluenceFilter>;
};


export type LocationToolRewardsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ToolOrdering>>>;
  filter?: Maybe<_ToolFilter>;
};

export enum _ExpeditionObstacleOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type ExpeditionObstacle = {
  __typename?: 'ExpeditionObstacle';
  name: Scalars['String'];
  defeatedWith: Array<Aspect>;
  _id?: Maybe<Scalars['String']>;
};


export type ExpeditionObstacleDefeatedWithArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AspectOrdering>>>;
  filter?: Maybe<_AspectFilter>;
};

export enum _IngredientOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type Ingredient = {
  __typename?: 'Ingredient';
  name: Scalars['String'];
  aspects?: Maybe<Array<Maybe<_IngredientAspects>>>;
  foundInLocation?: Maybe<Array<Maybe<_IngredientFoundInLocation>>>;
  fromDreamingIn: Array<MansusDoorOption>;
  _id?: Maybe<Scalars['String']>;
};


export type IngredientAspectsArgs = {
  filter?: Maybe<_IngredientIngredientHasAspectFilter>;
};


export type IngredientFoundInLocationArgs = {
  filter?: Maybe<_IngredientIngredientFoundInLocationFilter>;
};


export type IngredientFromDreamingInArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_MansusDoorOptionOrdering>>>;
  filter?: Maybe<_MansusDoorOptionFilter>;
};

export type _IngredientAspects = {
  __typename?: '_IngredientAspects';
  quantity?: Maybe<Scalars['Int']>;
  Aspect?: Maybe<Aspect>;
};

export type _IngredientFoundInLocation = {
  __typename?: '_IngredientFoundInLocation';
  chance: Scalars['Boolean'];
  Location?: Maybe<Location>;
};

export enum _MansusDoorOptionOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type MansusDoorOption = {
  __typename?: 'MansusDoorOption';
  name: Scalars['String'];
  door?: Maybe<MansusDoor>;
  influenceRewards: Array<Influence>;
  ingredientRewards: Array<Ingredient>;
  languageRewards: Array<Language>;
  loreRewards: Array<Lore>;
  _id?: Maybe<Scalars['String']>;
};


export type MansusDoorOptionDoorArgs = {
  filter?: Maybe<_MansusDoorFilter>;
};


export type MansusDoorOptionInfluenceRewardsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_InfluenceOrdering>>>;
  filter?: Maybe<_InfluenceFilter>;
};


export type MansusDoorOptionIngredientRewardsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_IngredientOrdering>>>;
  filter?: Maybe<_IngredientFilter>;
};


export type MansusDoorOptionLanguageRewardsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LanguageOrdering>>>;
  filter?: Maybe<_LanguageFilter>;
};


export type MansusDoorOptionLoreRewardsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LoreOrdering>>>;
  filter?: Maybe<_LoreFilter>;
};

export type MansusDoor = {
  __typename?: 'MansusDoor';
  name: Scalars['String'];
  options?: Maybe<Array<Maybe<MansusDoorOption>>>;
  _id?: Maybe<Scalars['String']>;
};


export type MansusDoorOptionsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_MansusDoorOptionOrdering>>>;
  filter?: Maybe<_MansusDoorOptionFilter>;
};

export enum _InfluenceOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type Influence = {
  __typename?: 'Influence';
  name: Scalars['String'];
  aspects?: Maybe<Array<Maybe<_InfluenceAspects>>>;
  decaysTo?: Maybe<Influence>;
  decaysFrom: Array<Influence>;
  foundInLocation?: Maybe<Array<Maybe<_InfluenceFoundInLocation>>>;
  fromDreamingIn: Array<MansusDoorOption>;
  fromBook: Array<Book>;
  _id?: Maybe<Scalars['String']>;
};


export type InfluenceAspectsArgs = {
  filter?: Maybe<_InfluenceHasAspectInfluenceFilter>;
};


export type InfluenceDecaysToArgs = {
  filter?: Maybe<_InfluenceFilter>;
};


export type InfluenceDecaysFromArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_InfluenceOrdering>>>;
  filter?: Maybe<_InfluenceFilter>;
};


export type InfluenceFoundInLocationArgs = {
  filter?: Maybe<_InfluenceInfluenceFoundInLocationFilter>;
};


export type InfluenceFromDreamingInArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_MansusDoorOptionOrdering>>>;
  filter?: Maybe<_MansusDoorOptionFilter>;
};


export type InfluenceFromBookArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BookOrdering>>>;
  filter?: Maybe<_BookFilter>;
};

export type _InfluenceAspects = {
  __typename?: '_InfluenceAspects';
  quantity?: Maybe<Scalars['Int']>;
  Aspect?: Maybe<Aspect>;
};

export type _InfluenceFoundInLocation = {
  __typename?: '_InfluenceFoundInLocation';
  chance: Scalars['Boolean'];
  Location?: Maybe<Location>;
};

export enum _LanguageOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type Language = {
  __typename?: 'Language';
  name: Scalars['String'];
  requires?: Maybe<Language>;
  fromBook?: Maybe<Book>;
  fromDreamingIn?: Maybe<MansusDoorOption>;
  _id?: Maybe<Scalars['String']>;
};


export type LanguageRequiresArgs = {
  filter?: Maybe<_LanguageFilter>;
};


export type LanguageFromBookArgs = {
  filter?: Maybe<_BookFilter>;
};


export type LanguageFromDreamingInArgs = {
  filter?: Maybe<_MansusDoorOptionFilter>;
};

export enum _ToolOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type Tool = {
  __typename?: 'Tool';
  name: Scalars['String'];
  aspects?: Maybe<Array<Maybe<_ToolAspects>>>;
  foundInLocation?: Maybe<Array<Maybe<_ToolFoundInLocation>>>;
  fromBook: Array<Book>;
  _id?: Maybe<Scalars['String']>;
};


export type ToolAspectsArgs = {
  filter?: Maybe<_ToolToolHasAspectFilter>;
};


export type ToolFoundInLocationArgs = {
  filter?: Maybe<_ToolToolFoundInLocationFilter>;
};


export type ToolFromBookArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BookOrdering>>>;
  filter?: Maybe<_BookFilter>;
};

export type _ToolAspects = {
  __typename?: '_ToolAspects';
  quantity?: Maybe<Scalars['Int']>;
  Aspect?: Maybe<Aspect>;
};

export type _ToolFoundInLocation = {
  __typename?: '_ToolFoundInLocation';
  chance: Scalars['Boolean'];
  Location?: Maybe<Location>;
};

export type Rite = {
  __typename?: 'Rite';
  name: Scalars['String'];
  components: Array<RiteComponent>;
  fromBook: Array<Book>;
  _id?: Maybe<Scalars['String']>;
};


export type RiteComponentsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_RiteComponentOrdering>>>;
  filter?: Maybe<_RiteComponentFilter>;
};


export type RiteFromBookArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BookOrdering>>>;
  filter?: Maybe<_BookFilter>;
};

export enum _RiteComponentOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IsConsumedAsc = 'isConsumed_asc',
  IsConsumedDesc = 'isConsumed_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type RiteComponent = {
  __typename?: 'RiteComponent';
  name: Scalars['String'];
  types: Array<Scalars['String']>;
  isConsumed?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['String']>;
};

export enum _LocationOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  VaultAsc = 'vault_asc',
  VaultDesc = 'vault_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export enum _MansusDoorOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export enum _RiteOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export enum _HowToObtainResultOrdering {
  FromTypeAsc = 'fromType_asc',
  FromTypeDesc = 'fromType_desc',
  PathLengthAsc = 'pathLength_asc',
  PathLengthDesc = 'pathLength_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _HowToObtainResultFilter = {
  AND?: Maybe<Array<_HowToObtainResultFilter>>;
  OR?: Maybe<Array<_HowToObtainResultFilter>>;
  fromType?: Maybe<Scalars['String']>;
  fromType_not?: Maybe<Scalars['String']>;
  fromType_in?: Maybe<Array<Scalars['String']>>;
  fromType_not_in?: Maybe<Array<Scalars['String']>>;
  fromType_contains?: Maybe<Scalars['String']>;
  fromType_not_contains?: Maybe<Scalars['String']>;
  fromType_starts_with?: Maybe<Scalars['String']>;
  fromType_not_starts_with?: Maybe<Scalars['String']>;
  fromType_ends_with?: Maybe<Scalars['String']>;
  fromType_not_ends_with?: Maybe<Scalars['String']>;
  pathLength?: Maybe<Scalars['Int']>;
  pathLength_not?: Maybe<Scalars['Int']>;
  pathLength_in?: Maybe<Array<Scalars['Int']>>;
  pathLength_not_in?: Maybe<Array<Scalars['Int']>>;
  pathLength_lt?: Maybe<Scalars['Int']>;
  pathLength_lte?: Maybe<Scalars['Int']>;
  pathLength_gt?: Maybe<Scalars['Int']>;
  pathLength_gte?: Maybe<Scalars['Int']>;
};

export type HowToObtainResult = {
  __typename?: 'HowToObtainResult';
  fromType: Scalars['String'];
  path: Array<Entity>;
  pathLength: Scalars['Int'];
  _id?: Maybe<Scalars['String']>;
};

export type Entity = Lore | Book;

export type Mutation = {
  __typename?: 'Mutation';
  setLanguageRequires: SetLanguageRequiresOut;
  CreateSearchEntity?: Maybe<SearchEntity>;
  UpdateSearchEntity?: Maybe<SearchEntity>;
  DeleteSearchEntity?: Maybe<SearchEntity>;
  CreateAspectQuantity?: Maybe<AspectQuantity>;
  UpdateAspectQuantity?: Maybe<AspectQuantity>;
  DeleteAspectQuantity?: Maybe<AspectQuantity>;
  CreateAspectSearchGroupResult?: Maybe<AspectSearchGroupResult>;
  DeleteAspectSearchGroupResult?: Maybe<AspectSearchGroupResult>;
  CreateAspectSearchEntity?: Maybe<AspectSearchEntity>;
  UpdateAspectSearchEntity?: Maybe<AspectSearchEntity>;
  DeleteAspectSearchEntity?: Maybe<AspectSearchEntity>;
  CreateSetLanguageRequiresOut?: Maybe<SetLanguageRequiresOut>;
  UpdateSetLanguageRequiresOut?: Maybe<SetLanguageRequiresOut>;
  DeleteSetLanguageRequiresOut?: Maybe<SetLanguageRequiresOut>;
  CreateVerb?: Maybe<Verb>;
  DeleteVerb?: Maybe<Verb>;
  CreateAspect?: Maybe<Aspect>;
  DeleteAspect?: Maybe<Aspect>;
  CreateFollower?: Maybe<Follower>;
  DeleteFollower?: Maybe<Follower>;
  AddFollowerAspects?: Maybe<_AddFollowerAspectsPayload>;
  RemoveFollowerAspects?: Maybe<_RemoveFollowerAspectsPayload>;
  CreateDesire?: Maybe<Desire>;
  DeleteDesire?: Maybe<Desire>;
  AddDesireFromDesire?: Maybe<_AddDesireFromDesirePayload>;
  RemoveDesireFromDesire?: Maybe<_RemoveDesireFromDesirePayload>;
  AddDesireToDesire?: Maybe<_AddDesireToDesirePayload>;
  RemoveDesireToDesire?: Maybe<_RemoveDesireToDesirePayload>;
  CreateLore?: Maybe<Lore>;
  DeleteLore?: Maybe<Lore>;
  AddLoreAspects?: Maybe<_AddLoreAspectsPayload>;
  RemoveLoreAspects?: Maybe<_RemoveLoreAspectsPayload>;
  AddLoreUpgradesTo?: Maybe<_AddLoreUpgradesToPayload>;
  RemoveLoreUpgradesTo?: Maybe<_RemoveLoreUpgradesToPayload>;
  AddLoreUpgradedFrom?: Maybe<_AddLoreUpgradedFromPayload>;
  RemoveLoreUpgradedFrom?: Maybe<_RemoveLoreUpgradedFromPayload>;
  AddLoreFromBook?: Maybe<_AddLoreFromBookPayload>;
  RemoveLoreFromBook?: Maybe<_RemoveLoreFromBookPayload>;
  AddLoreFromDreamingIn?: Maybe<_AddLoreFromDreamingInPayload>;
  RemoveLoreFromDreamingIn?: Maybe<_RemoveLoreFromDreamingInPayload>;
  AddLoreExploreResults?: Maybe<_AddLoreExploreResultsPayload>;
  RemoveLoreExploreResults?: Maybe<_RemoveLoreExploreResultsPayload>;
  CreateBook?: Maybe<Book>;
  DeleteBook?: Maybe<Book>;
  AddBookFoundInLocation?: Maybe<_AddBookFoundInLocationPayload>;
  RemoveBookFoundInLocation?: Maybe<_RemoveBookFoundInLocationPayload>;
  AddBookLanguage?: Maybe<_AddBookLanguagePayload>;
  RemoveBookLanguage?: Maybe<_RemoveBookLanguagePayload>;
  AddBookStudiedIntoLore?: Maybe<_AddBookStudiedIntoLorePayload>;
  RemoveBookStudiedIntoLore?: Maybe<_RemoveBookStudiedIntoLorePayload>;
  AddBookTeachesRite?: Maybe<_AddBookTeachesRitePayload>;
  RemoveBookTeachesRite?: Maybe<_RemoveBookTeachesRitePayload>;
  AddBookTeachesLanguage?: Maybe<_AddBookTeachesLanguagePayload>;
  RemoveBookTeachesLanguage?: Maybe<_RemoveBookTeachesLanguagePayload>;
  AddBookResultsInInfluence?: Maybe<_AddBookResultsInInfluencePayload>;
  RemoveBookResultsInInfluence?: Maybe<_RemoveBookResultsInInfluencePayload>;
  AddBookResultsInTool?: Maybe<_AddBookResultsInToolPayload>;
  RemoveBookResultsInTool?: Maybe<_RemoveBookResultsInToolPayload>;
  CreateLocation?: Maybe<Location>;
  UpdateLocation?: Maybe<Location>;
  DeleteLocation?: Maybe<Location>;
  AddLocationHistories?: Maybe<_AddLocationHistoriesPayload>;
  RemoveLocationHistories?: Maybe<_RemoveLocationHistoriesPayload>;
  AddLocationObstacles?: Maybe<_AddLocationObstaclesPayload>;
  RemoveLocationObstacles?: Maybe<_RemoveLocationObstaclesPayload>;
  AddLocationBookRewards?: Maybe<_AddLocationBookRewardsPayload>;
  RemoveLocationBookRewards?: Maybe<_RemoveLocationBookRewardsPayload>;
  AddLocationIngredientRewards?: Maybe<_AddLocationIngredientRewardsPayload>;
  RemoveLocationIngredientRewards?: Maybe<_RemoveLocationIngredientRewardsPayload>;
  AddLocationInfluenceRewards?: Maybe<_AddLocationInfluenceRewardsPayload>;
  RemoveLocationInfluenceRewards?: Maybe<_RemoveLocationInfluenceRewardsPayload>;
  AddLocationToolRewards?: Maybe<_AddLocationToolRewardsPayload>;
  RemoveLocationToolRewards?: Maybe<_RemoveLocationToolRewardsPayload>;
  CreateExpeditionObstacle?: Maybe<ExpeditionObstacle>;
  DeleteExpeditionObstacle?: Maybe<ExpeditionObstacle>;
  AddExpeditionObstacleDefeatedWith?: Maybe<_AddExpeditionObstacleDefeatedWithPayload>;
  RemoveExpeditionObstacleDefeatedWith?: Maybe<_RemoveExpeditionObstacleDefeatedWithPayload>;
  CreateIngredient?: Maybe<Ingredient>;
  DeleteIngredient?: Maybe<Ingredient>;
  AddIngredientAspects?: Maybe<_AddIngredientAspectsPayload>;
  RemoveIngredientAspects?: Maybe<_RemoveIngredientAspectsPayload>;
  AddIngredientFoundInLocation?: Maybe<_AddIngredientFoundInLocationPayload>;
  RemoveIngredientFoundInLocation?: Maybe<_RemoveIngredientFoundInLocationPayload>;
  AddIngredientFromDreamingIn?: Maybe<_AddIngredientFromDreamingInPayload>;
  RemoveIngredientFromDreamingIn?: Maybe<_RemoveIngredientFromDreamingInPayload>;
  CreateMansusDoorOption?: Maybe<MansusDoorOption>;
  DeleteMansusDoorOption?: Maybe<MansusDoorOption>;
  AddMansusDoorOptionDoor?: Maybe<_AddMansusDoorOptionDoorPayload>;
  RemoveMansusDoorOptionDoor?: Maybe<_RemoveMansusDoorOptionDoorPayload>;
  AddMansusDoorOptionInfluenceRewards?: Maybe<_AddMansusDoorOptionInfluenceRewardsPayload>;
  RemoveMansusDoorOptionInfluenceRewards?: Maybe<_RemoveMansusDoorOptionInfluenceRewardsPayload>;
  AddMansusDoorOptionIngredientRewards?: Maybe<_AddMansusDoorOptionIngredientRewardsPayload>;
  RemoveMansusDoorOptionIngredientRewards?: Maybe<_RemoveMansusDoorOptionIngredientRewardsPayload>;
  AddMansusDoorOptionLanguageRewards?: Maybe<_AddMansusDoorOptionLanguageRewardsPayload>;
  RemoveMansusDoorOptionLanguageRewards?: Maybe<_RemoveMansusDoorOptionLanguageRewardsPayload>;
  AddMansusDoorOptionLoreRewards?: Maybe<_AddMansusDoorOptionLoreRewardsPayload>;
  RemoveMansusDoorOptionLoreRewards?: Maybe<_RemoveMansusDoorOptionLoreRewardsPayload>;
  CreateMansusDoor?: Maybe<MansusDoor>;
  DeleteMansusDoor?: Maybe<MansusDoor>;
  AddMansusDoorOptions?: Maybe<_AddMansusDoorOptionsPayload>;
  RemoveMansusDoorOptions?: Maybe<_RemoveMansusDoorOptionsPayload>;
  CreateInfluence?: Maybe<Influence>;
  DeleteInfluence?: Maybe<Influence>;
  AddInfluenceAspects?: Maybe<_AddInfluenceAspectsPayload>;
  RemoveInfluenceAspects?: Maybe<_RemoveInfluenceAspectsPayload>;
  AddInfluenceDecaysTo?: Maybe<_AddInfluenceDecaysToPayload>;
  RemoveInfluenceDecaysTo?: Maybe<_RemoveInfluenceDecaysToPayload>;
  AddInfluenceDecaysFrom?: Maybe<_AddInfluenceDecaysFromPayload>;
  RemoveInfluenceDecaysFrom?: Maybe<_RemoveInfluenceDecaysFromPayload>;
  AddInfluenceFoundInLocation?: Maybe<_AddInfluenceFoundInLocationPayload>;
  RemoveInfluenceFoundInLocation?: Maybe<_RemoveInfluenceFoundInLocationPayload>;
  AddInfluenceFromDreamingIn?: Maybe<_AddInfluenceFromDreamingInPayload>;
  RemoveInfluenceFromDreamingIn?: Maybe<_RemoveInfluenceFromDreamingInPayload>;
  AddInfluenceFromBook?: Maybe<_AddInfluenceFromBookPayload>;
  RemoveInfluenceFromBook?: Maybe<_RemoveInfluenceFromBookPayload>;
  CreateLanguage?: Maybe<Language>;
  DeleteLanguage?: Maybe<Language>;
  AddLanguageRequires?: Maybe<_AddLanguageRequiresPayload>;
  RemoveLanguageRequires?: Maybe<_RemoveLanguageRequiresPayload>;
  AddLanguageFromBook?: Maybe<_AddLanguageFromBookPayload>;
  RemoveLanguageFromBook?: Maybe<_RemoveLanguageFromBookPayload>;
  AddLanguageFromDreamingIn?: Maybe<_AddLanguageFromDreamingInPayload>;
  RemoveLanguageFromDreamingIn?: Maybe<_RemoveLanguageFromDreamingInPayload>;
  CreateTool?: Maybe<Tool>;
  DeleteTool?: Maybe<Tool>;
  AddToolAspects?: Maybe<_AddToolAspectsPayload>;
  RemoveToolAspects?: Maybe<_RemoveToolAspectsPayload>;
  AddToolFoundInLocation?: Maybe<_AddToolFoundInLocationPayload>;
  RemoveToolFoundInLocation?: Maybe<_RemoveToolFoundInLocationPayload>;
  AddToolFromBook?: Maybe<_AddToolFromBookPayload>;
  RemoveToolFromBook?: Maybe<_RemoveToolFromBookPayload>;
  CreateRite?: Maybe<Rite>;
  DeleteRite?: Maybe<Rite>;
  AddRiteComponents?: Maybe<_AddRiteComponentsPayload>;
  RemoveRiteComponents?: Maybe<_RemoveRiteComponentsPayload>;
  AddRiteFromBook?: Maybe<_AddRiteFromBookPayload>;
  RemoveRiteFromBook?: Maybe<_RemoveRiteFromBookPayload>;
  CreateRiteComponent?: Maybe<RiteComponent>;
  UpdateRiteComponent?: Maybe<RiteComponent>;
  DeleteRiteComponent?: Maybe<RiteComponent>;
  CreateHowToObtainResult?: Maybe<HowToObtainResult>;
  UpdateHowToObtainResult?: Maybe<HowToObtainResult>;
  DeleteHowToObtainResult?: Maybe<HowToObtainResult>;
};


export type MutationSetLanguageRequiresArgs = {
  language: Scalars['String'];
  requiredLanguage: Scalars['String'];
};


export type MutationCreateSearchEntityArgs = {
  name: Scalars['String'];
  label: Scalars['String'];
};


export type MutationUpdateSearchEntityArgs = {
  name: Scalars['String'];
  label?: Maybe<Scalars['String']>;
};


export type MutationDeleteSearchEntityArgs = {
  name: Scalars['String'];
};


export type MutationCreateAspectQuantityArgs = {
  aspect: Scalars['String'];
  quantity?: Maybe<Scalars['Int']>;
};


export type MutationUpdateAspectQuantityArgs = {
  aspect: Scalars['String'];
  quantity?: Maybe<Scalars['Int']>;
};


export type MutationDeleteAspectQuantityArgs = {
  aspect: Scalars['String'];
};


export type MutationCreateAspectSearchGroupResultArgs = {
  label: Scalars['String'];
};


export type MutationDeleteAspectSearchGroupResultArgs = {
  label: Scalars['String'];
};


export type MutationCreateAspectSearchEntityArgs = {
  name: Scalars['String'];
  type: Scalars['String'];
  aspectQuantity?: Maybe<Scalars['Int']>;
};


export type MutationUpdateAspectSearchEntityArgs = {
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  aspectQuantity?: Maybe<Scalars['Int']>;
};


export type MutationDeleteAspectSearchEntityArgs = {
  name: Scalars['String'];
};


export type MutationCreateSetLanguageRequiresOutArgs = {
  language: Scalars['String'];
  requiredLanguage: Scalars['String'];
};


export type MutationUpdateSetLanguageRequiresOutArgs = {
  language: Scalars['String'];
  requiredLanguage?: Maybe<Scalars['String']>;
};


export type MutationDeleteSetLanguageRequiresOutArgs = {
  language: Scalars['String'];
};


export type MutationCreateVerbArgs = {
  name: Scalars['String'];
};


export type MutationDeleteVerbArgs = {
  name: Scalars['String'];
};


export type MutationCreateAspectArgs = {
  name: Scalars['String'];
};


export type MutationDeleteAspectArgs = {
  name: Scalars['String'];
};


export type MutationCreateFollowerArgs = {
  name: Scalars['String'];
};


export type MutationDeleteFollowerArgs = {
  name: Scalars['String'];
};


export type MutationAddFollowerAspectsArgs = {
  from: _FollowerInput;
  to: _AspectInput;
};


export type MutationRemoveFollowerAspectsArgs = {
  from: _FollowerInput;
  to: _AspectInput;
};


export type MutationCreateDesireArgs = {
  name: Scalars['String'];
};


export type MutationDeleteDesireArgs = {
  name: Scalars['String'];
};


export type MutationAddDesireFromDesireArgs = {
  from: _DesireInput;
  to: _DesireInput;
  data: _FromDesireInput;
};


export type MutationRemoveDesireFromDesireArgs = {
  from: _DesireInput;
  to: _DesireInput;
};


export type MutationAddDesireToDesireArgs = {
  from: _DesireInput;
  to: _DesireInput;
  data: _FromDesireInput;
};


export type MutationRemoveDesireToDesireArgs = {
  from: _DesireInput;
  to: _DesireInput;
};


export type MutationCreateLoreArgs = {
  name: Scalars['String'];
};


export type MutationDeleteLoreArgs = {
  name: Scalars['String'];
};


export type MutationAddLoreAspectsArgs = {
  from: _LoreInput;
  to: _AspectInput;
  data: _HasAspectLoreInput;
};


export type MutationRemoveLoreAspectsArgs = {
  from: _LoreInput;
  to: _AspectInput;
};


export type MutationAddLoreUpgradesToArgs = {
  from: _LoreInput;
  to: _LoreInput;
};


export type MutationRemoveLoreUpgradesToArgs = {
  from: _LoreInput;
  to: _LoreInput;
};


export type MutationAddLoreUpgradedFromArgs = {
  from: _LoreInput;
  to: _LoreInput;
};


export type MutationRemoveLoreUpgradedFromArgs = {
  from: _LoreInput;
  to: _LoreInput;
};


export type MutationAddLoreFromBookArgs = {
  from: _BookInput;
  to: _LoreInput;
};


export type MutationRemoveLoreFromBookArgs = {
  from: _BookInput;
  to: _LoreInput;
};


export type MutationAddLoreFromDreamingInArgs = {
  from: _MansusDoorOptionInput;
  to: _LoreInput;
};


export type MutationRemoveLoreFromDreamingInArgs = {
  from: _MansusDoorOptionInput;
  to: _LoreInput;
};


export type MutationAddLoreExploreResultsArgs = {
  from: _LoreInput;
  to: _LocationInput;
};


export type MutationRemoveLoreExploreResultsArgs = {
  from: _LoreInput;
  to: _LocationInput;
};


export type MutationCreateBookArgs = {
  name: Scalars['String'];
};


export type MutationDeleteBookArgs = {
  name: Scalars['String'];
};


export type MutationAddBookFoundInLocationArgs = {
  from: _BookInput;
  to: _LocationInput;
  data: _BookFoundInLocationInput;
};


export type MutationRemoveBookFoundInLocationArgs = {
  from: _BookInput;
  to: _LocationInput;
};


export type MutationAddBookLanguageArgs = {
  from: _BookInput;
  to: _LanguageInput;
};


export type MutationRemoveBookLanguageArgs = {
  from: _BookInput;
  to: _LanguageInput;
};


export type MutationAddBookStudiedIntoLoreArgs = {
  from: _BookInput;
  to: _LoreInput;
};


export type MutationRemoveBookStudiedIntoLoreArgs = {
  from: _BookInput;
  to: _LoreInput;
};


export type MutationAddBookTeachesRiteArgs = {
  from: _BookInput;
  to: _RiteInput;
};


export type MutationRemoveBookTeachesRiteArgs = {
  from: _BookInput;
  to: _RiteInput;
};


export type MutationAddBookTeachesLanguageArgs = {
  from: _BookInput;
  to: _LanguageInput;
};


export type MutationRemoveBookTeachesLanguageArgs = {
  from: _BookInput;
  to: _LanguageInput;
};


export type MutationAddBookResultsInInfluenceArgs = {
  from: _BookInput;
  to: _InfluenceInput;
};


export type MutationRemoveBookResultsInInfluenceArgs = {
  from: _BookInput;
  to: _InfluenceInput;
};


export type MutationAddBookResultsInToolArgs = {
  from: _BookInput;
  to: _ToolInput;
};


export type MutationRemoveBookResultsInToolArgs = {
  from: _BookInput;
  to: _ToolInput;
};


export type MutationCreateLocationArgs = {
  name: Scalars['String'];
  vault: Scalars['Boolean'];
};


export type MutationUpdateLocationArgs = {
  name: Scalars['String'];
  vault?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteLocationArgs = {
  name: Scalars['String'];
};


export type MutationAddLocationHistoriesArgs = {
  from: _LoreInput;
  to: _LocationInput;
};


export type MutationRemoveLocationHistoriesArgs = {
  from: _LoreInput;
  to: _LocationInput;
};


export type MutationAddLocationObstaclesArgs = {
  from: _LocationInput;
  to: _ExpeditionObstacleInput;
};


export type MutationRemoveLocationObstaclesArgs = {
  from: _LocationInput;
  to: _ExpeditionObstacleInput;
};


export type MutationAddLocationBookRewardsArgs = {
  from: _BookInput;
  to: _LocationInput;
};


export type MutationRemoveLocationBookRewardsArgs = {
  from: _BookInput;
  to: _LocationInput;
};


export type MutationAddLocationIngredientRewardsArgs = {
  from: _IngredientInput;
  to: _LocationInput;
};


export type MutationRemoveLocationIngredientRewardsArgs = {
  from: _IngredientInput;
  to: _LocationInput;
};


export type MutationAddLocationInfluenceRewardsArgs = {
  from: _InfluenceInput;
  to: _LocationInput;
};


export type MutationRemoveLocationInfluenceRewardsArgs = {
  from: _InfluenceInput;
  to: _LocationInput;
};


export type MutationAddLocationToolRewardsArgs = {
  from: _ToolInput;
  to: _LocationInput;
};


export type MutationRemoveLocationToolRewardsArgs = {
  from: _ToolInput;
  to: _LocationInput;
};


export type MutationCreateExpeditionObstacleArgs = {
  name: Scalars['String'];
};


export type MutationDeleteExpeditionObstacleArgs = {
  name: Scalars['String'];
};


export type MutationAddExpeditionObstacleDefeatedWithArgs = {
  from: _ExpeditionObstacleInput;
  to: _AspectInput;
};


export type MutationRemoveExpeditionObstacleDefeatedWithArgs = {
  from: _ExpeditionObstacleInput;
  to: _AspectInput;
};


export type MutationCreateIngredientArgs = {
  name: Scalars['String'];
};


export type MutationDeleteIngredientArgs = {
  name: Scalars['String'];
};


export type MutationAddIngredientAspectsArgs = {
  from: _IngredientInput;
  to: _AspectInput;
  data: _IngredientHasAspectInput;
};


export type MutationRemoveIngredientAspectsArgs = {
  from: _IngredientInput;
  to: _AspectInput;
};


export type MutationAddIngredientFoundInLocationArgs = {
  from: _IngredientInput;
  to: _LocationInput;
  data: _IngredientFoundInLocationInput;
};


export type MutationRemoveIngredientFoundInLocationArgs = {
  from: _IngredientInput;
  to: _LocationInput;
};


export type MutationAddIngredientFromDreamingInArgs = {
  from: _MansusDoorOptionInput;
  to: _IngredientInput;
};


export type MutationRemoveIngredientFromDreamingInArgs = {
  from: _MansusDoorOptionInput;
  to: _IngredientInput;
};


export type MutationCreateMansusDoorOptionArgs = {
  name: Scalars['String'];
};


export type MutationDeleteMansusDoorOptionArgs = {
  name: Scalars['String'];
};


export type MutationAddMansusDoorOptionDoorArgs = {
  from: _MansusDoorInput;
  to: _MansusDoorOptionInput;
};


export type MutationRemoveMansusDoorOptionDoorArgs = {
  from: _MansusDoorInput;
  to: _MansusDoorOptionInput;
};


export type MutationAddMansusDoorOptionInfluenceRewardsArgs = {
  from: _MansusDoorOptionInput;
  to: _InfluenceInput;
};


export type MutationRemoveMansusDoorOptionInfluenceRewardsArgs = {
  from: _MansusDoorOptionInput;
  to: _InfluenceInput;
};


export type MutationAddMansusDoorOptionIngredientRewardsArgs = {
  from: _MansusDoorOptionInput;
  to: _IngredientInput;
};


export type MutationRemoveMansusDoorOptionIngredientRewardsArgs = {
  from: _MansusDoorOptionInput;
  to: _IngredientInput;
};


export type MutationAddMansusDoorOptionLanguageRewardsArgs = {
  from: _MansusDoorOptionInput;
  to: _LanguageInput;
};


export type MutationRemoveMansusDoorOptionLanguageRewardsArgs = {
  from: _MansusDoorOptionInput;
  to: _LanguageInput;
};


export type MutationAddMansusDoorOptionLoreRewardsArgs = {
  from: _MansusDoorOptionInput;
  to: _LoreInput;
};


export type MutationRemoveMansusDoorOptionLoreRewardsArgs = {
  from: _MansusDoorOptionInput;
  to: _LoreInput;
};


export type MutationCreateMansusDoorArgs = {
  name: Scalars['String'];
};


export type MutationDeleteMansusDoorArgs = {
  name: Scalars['String'];
};


export type MutationAddMansusDoorOptionsArgs = {
  from: _MansusDoorInput;
  to: _MansusDoorOptionInput;
};


export type MutationRemoveMansusDoorOptionsArgs = {
  from: _MansusDoorInput;
  to: _MansusDoorOptionInput;
};


export type MutationCreateInfluenceArgs = {
  name: Scalars['String'];
};


export type MutationDeleteInfluenceArgs = {
  name: Scalars['String'];
};


export type MutationAddInfluenceAspectsArgs = {
  from: _InfluenceInput;
  to: _AspectInput;
  data: _HasAspectInfluenceInput;
};


export type MutationRemoveInfluenceAspectsArgs = {
  from: _InfluenceInput;
  to: _AspectInput;
};


export type MutationAddInfluenceDecaysToArgs = {
  from: _InfluenceInput;
  to: _InfluenceInput;
};


export type MutationRemoveInfluenceDecaysToArgs = {
  from: _InfluenceInput;
  to: _InfluenceInput;
};


export type MutationAddInfluenceDecaysFromArgs = {
  from: _InfluenceInput;
  to: _InfluenceInput;
};


export type MutationRemoveInfluenceDecaysFromArgs = {
  from: _InfluenceInput;
  to: _InfluenceInput;
};


export type MutationAddInfluenceFoundInLocationArgs = {
  from: _InfluenceInput;
  to: _LocationInput;
  data: _InfluenceFoundInLocationInput;
};


export type MutationRemoveInfluenceFoundInLocationArgs = {
  from: _InfluenceInput;
  to: _LocationInput;
};


export type MutationAddInfluenceFromDreamingInArgs = {
  from: _MansusDoorOptionInput;
  to: _InfluenceInput;
};


export type MutationRemoveInfluenceFromDreamingInArgs = {
  from: _MansusDoorOptionInput;
  to: _InfluenceInput;
};


export type MutationAddInfluenceFromBookArgs = {
  from: _BookInput;
  to: _InfluenceInput;
};


export type MutationRemoveInfluenceFromBookArgs = {
  from: _BookInput;
  to: _InfluenceInput;
};


export type MutationCreateLanguageArgs = {
  name: Scalars['String'];
};


export type MutationDeleteLanguageArgs = {
  name: Scalars['String'];
};


export type MutationAddLanguageRequiresArgs = {
  from: _LanguageInput;
  to: _LanguageInput;
};


export type MutationRemoveLanguageRequiresArgs = {
  from: _LanguageInput;
  to: _LanguageInput;
};


export type MutationAddLanguageFromBookArgs = {
  from: _BookInput;
  to: _LanguageInput;
};


export type MutationRemoveLanguageFromBookArgs = {
  from: _BookInput;
  to: _LanguageInput;
};


export type MutationAddLanguageFromDreamingInArgs = {
  from: _MansusDoorOptionInput;
  to: _LanguageInput;
};


export type MutationRemoveLanguageFromDreamingInArgs = {
  from: _MansusDoorOptionInput;
  to: _LanguageInput;
};


export type MutationCreateToolArgs = {
  name: Scalars['String'];
};


export type MutationDeleteToolArgs = {
  name: Scalars['String'];
};


export type MutationAddToolAspectsArgs = {
  from: _ToolInput;
  to: _AspectInput;
  data: _ToolHasAspectInput;
};


export type MutationRemoveToolAspectsArgs = {
  from: _ToolInput;
  to: _AspectInput;
};


export type MutationAddToolFoundInLocationArgs = {
  from: _ToolInput;
  to: _LocationInput;
  data: _ToolFoundInLocationInput;
};


export type MutationRemoveToolFoundInLocationArgs = {
  from: _ToolInput;
  to: _LocationInput;
};


export type MutationAddToolFromBookArgs = {
  from: _BookInput;
  to: _ToolInput;
};


export type MutationRemoveToolFromBookArgs = {
  from: _BookInput;
  to: _ToolInput;
};


export type MutationCreateRiteArgs = {
  name: Scalars['String'];
};


export type MutationDeleteRiteArgs = {
  name: Scalars['String'];
};


export type MutationAddRiteComponentsArgs = {
  from: _RiteInput;
  to: _RiteComponentInput;
};


export type MutationRemoveRiteComponentsArgs = {
  from: _RiteInput;
  to: _RiteComponentInput;
};


export type MutationAddRiteFromBookArgs = {
  from: _BookInput;
  to: _RiteInput;
};


export type MutationRemoveRiteFromBookArgs = {
  from: _BookInput;
  to: _RiteInput;
};


export type MutationCreateRiteComponentArgs = {
  name: Scalars['String'];
  types: Array<Scalars['String']>;
  isConsumed?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateRiteComponentArgs = {
  name: Scalars['String'];
  types?: Maybe<Array<Scalars['String']>>;
  isConsumed?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteRiteComponentArgs = {
  name: Scalars['String'];
};


export type MutationCreateHowToObtainResultArgs = {
  fromType: Scalars['String'];
  pathLength: Scalars['Int'];
};


export type MutationUpdateHowToObtainResultArgs = {
  fromType: Scalars['String'];
  pathLength?: Maybe<Scalars['Int']>;
};


export type MutationDeleteHowToObtainResultArgs = {
  fromType: Scalars['String'];
};

export type _FollowerInput = {
  name: Scalars['String'];
};

export type _AspectInput = {
  name: Scalars['String'];
};

export type _AddFollowerAspectsPayload = {
  __typename?: '_AddFollowerAspectsPayload';
  from?: Maybe<Follower>;
  to?: Maybe<Aspect>;
};

export type _RemoveFollowerAspectsPayload = {
  __typename?: '_RemoveFollowerAspectsPayload';
  from?: Maybe<Follower>;
  to?: Maybe<Aspect>;
};

export type _DesireInput = {
  name: Scalars['String'];
};

export type _FromDesireInput = {
  ingredient1: Scalars['String'];
  ingredient2?: Maybe<Scalars['String']>;
};

export type _AddDesireFromDesirePayload = {
  __typename?: '_AddDesireFromDesirePayload';
  from?: Maybe<Desire>;
  to?: Maybe<Desire>;
  ingredient1?: Maybe<Scalars['String']>;
  ingredient2?: Maybe<Scalars['String']>;
};

export type _RemoveDesireFromDesirePayload = {
  __typename?: '_RemoveDesireFromDesirePayload';
  from?: Maybe<Desire>;
  to?: Maybe<Desire>;
};

export type _AddDesireToDesirePayload = {
  __typename?: '_AddDesireToDesirePayload';
  from?: Maybe<Desire>;
  to?: Maybe<Desire>;
  ingredient1?: Maybe<Scalars['String']>;
  ingredient2?: Maybe<Scalars['String']>;
};

export type _RemoveDesireToDesirePayload = {
  __typename?: '_RemoveDesireToDesirePayload';
  from?: Maybe<Desire>;
  to?: Maybe<Desire>;
};

export type _LoreInput = {
  name: Scalars['String'];
};

export type _HasAspectLoreInput = {
  quantity?: Maybe<Scalars['Int']>;
};

export type _AddLoreAspectsPayload = {
  __typename?: '_AddLoreAspectsPayload';
  from?: Maybe<Lore>;
  to?: Maybe<Aspect>;
  quantity?: Maybe<Scalars['Int']>;
};

export type _RemoveLoreAspectsPayload = {
  __typename?: '_RemoveLoreAspectsPayload';
  from?: Maybe<Lore>;
  to?: Maybe<Aspect>;
};

export type _AddLoreUpgradesToPayload = {
  __typename?: '_AddLoreUpgradesToPayload';
  from?: Maybe<Lore>;
  to?: Maybe<Lore>;
};

export type _RemoveLoreUpgradesToPayload = {
  __typename?: '_RemoveLoreUpgradesToPayload';
  from?: Maybe<Lore>;
  to?: Maybe<Lore>;
};

export type _AddLoreUpgradedFromPayload = {
  __typename?: '_AddLoreUpgradedFromPayload';
  from?: Maybe<Lore>;
  to?: Maybe<Lore>;
};

export type _RemoveLoreUpgradedFromPayload = {
  __typename?: '_RemoveLoreUpgradedFromPayload';
  from?: Maybe<Lore>;
  to?: Maybe<Lore>;
};

export type _BookInput = {
  name: Scalars['String'];
};

export type _AddLoreFromBookPayload = {
  __typename?: '_AddLoreFromBookPayload';
  from?: Maybe<Book>;
  to?: Maybe<Lore>;
};

export type _RemoveLoreFromBookPayload = {
  __typename?: '_RemoveLoreFromBookPayload';
  from?: Maybe<Book>;
  to?: Maybe<Lore>;
};

export type _MansusDoorOptionInput = {
  name: Scalars['String'];
};

export type _AddLoreFromDreamingInPayload = {
  __typename?: '_AddLoreFromDreamingInPayload';
  from?: Maybe<MansusDoorOption>;
  to?: Maybe<Lore>;
};

export type _RemoveLoreFromDreamingInPayload = {
  __typename?: '_RemoveLoreFromDreamingInPayload';
  from?: Maybe<MansusDoorOption>;
  to?: Maybe<Lore>;
};

export type _LocationInput = {
  name: Scalars['String'];
};

export type _AddLoreExploreResultsPayload = {
  __typename?: '_AddLoreExploreResultsPayload';
  from?: Maybe<Lore>;
  to?: Maybe<Location>;
};

export type _RemoveLoreExploreResultsPayload = {
  __typename?: '_RemoveLoreExploreResultsPayload';
  from?: Maybe<Lore>;
  to?: Maybe<Location>;
};

export type _BookFoundInLocationInput = {
  chance: Scalars['Boolean'];
};

export type _AddBookFoundInLocationPayload = {
  __typename?: '_AddBookFoundInLocationPayload';
  from?: Maybe<Book>;
  to?: Maybe<Location>;
  chance?: Maybe<Scalars['Boolean']>;
};

export type _RemoveBookFoundInLocationPayload = {
  __typename?: '_RemoveBookFoundInLocationPayload';
  from?: Maybe<Book>;
  to?: Maybe<Location>;
};

export type _LanguageInput = {
  name: Scalars['String'];
};

export type _AddBookLanguagePayload = {
  __typename?: '_AddBookLanguagePayload';
  from?: Maybe<Book>;
  to?: Maybe<Language>;
};

export type _RemoveBookLanguagePayload = {
  __typename?: '_RemoveBookLanguagePayload';
  from?: Maybe<Book>;
  to?: Maybe<Language>;
};

export type _AddBookStudiedIntoLorePayload = {
  __typename?: '_AddBookStudiedIntoLorePayload';
  from?: Maybe<Book>;
  to?: Maybe<Lore>;
};

export type _RemoveBookStudiedIntoLorePayload = {
  __typename?: '_RemoveBookStudiedIntoLorePayload';
  from?: Maybe<Book>;
  to?: Maybe<Lore>;
};

export type _RiteInput = {
  name: Scalars['String'];
};

export type _AddBookTeachesRitePayload = {
  __typename?: '_AddBookTeachesRitePayload';
  from?: Maybe<Book>;
  to?: Maybe<Rite>;
};

export type _RemoveBookTeachesRitePayload = {
  __typename?: '_RemoveBookTeachesRitePayload';
  from?: Maybe<Book>;
  to?: Maybe<Rite>;
};

export type _AddBookTeachesLanguagePayload = {
  __typename?: '_AddBookTeachesLanguagePayload';
  from?: Maybe<Book>;
  to?: Maybe<Language>;
};

export type _RemoveBookTeachesLanguagePayload = {
  __typename?: '_RemoveBookTeachesLanguagePayload';
  from?: Maybe<Book>;
  to?: Maybe<Language>;
};

export type _InfluenceInput = {
  name: Scalars['String'];
};

export type _AddBookResultsInInfluencePayload = {
  __typename?: '_AddBookResultsInInfluencePayload';
  from?: Maybe<Book>;
  to?: Maybe<Influence>;
};

export type _RemoveBookResultsInInfluencePayload = {
  __typename?: '_RemoveBookResultsInInfluencePayload';
  from?: Maybe<Book>;
  to?: Maybe<Influence>;
};

export type _ToolInput = {
  name: Scalars['String'];
};

export type _AddBookResultsInToolPayload = {
  __typename?: '_AddBookResultsInToolPayload';
  from?: Maybe<Book>;
  to?: Maybe<Tool>;
};

export type _RemoveBookResultsInToolPayload = {
  __typename?: '_RemoveBookResultsInToolPayload';
  from?: Maybe<Book>;
  to?: Maybe<Tool>;
};

export type _AddLocationHistoriesPayload = {
  __typename?: '_AddLocationHistoriesPayload';
  from?: Maybe<Lore>;
  to?: Maybe<Location>;
};

export type _RemoveLocationHistoriesPayload = {
  __typename?: '_RemoveLocationHistoriesPayload';
  from?: Maybe<Lore>;
  to?: Maybe<Location>;
};

export type _ExpeditionObstacleInput = {
  name: Scalars['String'];
};

export type _AddLocationObstaclesPayload = {
  __typename?: '_AddLocationObstaclesPayload';
  from?: Maybe<Location>;
  to?: Maybe<ExpeditionObstacle>;
};

export type _RemoveLocationObstaclesPayload = {
  __typename?: '_RemoveLocationObstaclesPayload';
  from?: Maybe<Location>;
  to?: Maybe<ExpeditionObstacle>;
};

export type _AddLocationBookRewardsPayload = {
  __typename?: '_AddLocationBookRewardsPayload';
  from?: Maybe<Book>;
  to?: Maybe<Location>;
};

export type _RemoveLocationBookRewardsPayload = {
  __typename?: '_RemoveLocationBookRewardsPayload';
  from?: Maybe<Book>;
  to?: Maybe<Location>;
};

export type _IngredientInput = {
  name: Scalars['String'];
};

export type _AddLocationIngredientRewardsPayload = {
  __typename?: '_AddLocationIngredientRewardsPayload';
  from?: Maybe<Ingredient>;
  to?: Maybe<Location>;
};

export type _RemoveLocationIngredientRewardsPayload = {
  __typename?: '_RemoveLocationIngredientRewardsPayload';
  from?: Maybe<Ingredient>;
  to?: Maybe<Location>;
};

export type _AddLocationInfluenceRewardsPayload = {
  __typename?: '_AddLocationInfluenceRewardsPayload';
  from?: Maybe<Influence>;
  to?: Maybe<Location>;
};

export type _RemoveLocationInfluenceRewardsPayload = {
  __typename?: '_RemoveLocationInfluenceRewardsPayload';
  from?: Maybe<Influence>;
  to?: Maybe<Location>;
};

export type _AddLocationToolRewardsPayload = {
  __typename?: '_AddLocationToolRewardsPayload';
  from?: Maybe<Tool>;
  to?: Maybe<Location>;
};

export type _RemoveLocationToolRewardsPayload = {
  __typename?: '_RemoveLocationToolRewardsPayload';
  from?: Maybe<Tool>;
  to?: Maybe<Location>;
};

export type _AddExpeditionObstacleDefeatedWithPayload = {
  __typename?: '_AddExpeditionObstacleDefeatedWithPayload';
  from?: Maybe<ExpeditionObstacle>;
  to?: Maybe<Aspect>;
};

export type _RemoveExpeditionObstacleDefeatedWithPayload = {
  __typename?: '_RemoveExpeditionObstacleDefeatedWithPayload';
  from?: Maybe<ExpeditionObstacle>;
  to?: Maybe<Aspect>;
};

export type _IngredientHasAspectInput = {
  quantity?: Maybe<Scalars['Int']>;
};

export type _AddIngredientAspectsPayload = {
  __typename?: '_AddIngredientAspectsPayload';
  from?: Maybe<Ingredient>;
  to?: Maybe<Aspect>;
  quantity?: Maybe<Scalars['Int']>;
};

export type _RemoveIngredientAspectsPayload = {
  __typename?: '_RemoveIngredientAspectsPayload';
  from?: Maybe<Ingredient>;
  to?: Maybe<Aspect>;
};

export type _IngredientFoundInLocationInput = {
  chance: Scalars['Boolean'];
};

export type _AddIngredientFoundInLocationPayload = {
  __typename?: '_AddIngredientFoundInLocationPayload';
  from?: Maybe<Ingredient>;
  to?: Maybe<Location>;
  chance?: Maybe<Scalars['Boolean']>;
};

export type _RemoveIngredientFoundInLocationPayload = {
  __typename?: '_RemoveIngredientFoundInLocationPayload';
  from?: Maybe<Ingredient>;
  to?: Maybe<Location>;
};

export type _AddIngredientFromDreamingInPayload = {
  __typename?: '_AddIngredientFromDreamingInPayload';
  from?: Maybe<MansusDoorOption>;
  to?: Maybe<Ingredient>;
};

export type _RemoveIngredientFromDreamingInPayload = {
  __typename?: '_RemoveIngredientFromDreamingInPayload';
  from?: Maybe<MansusDoorOption>;
  to?: Maybe<Ingredient>;
};

export type _MansusDoorInput = {
  name: Scalars['String'];
};

export type _AddMansusDoorOptionDoorPayload = {
  __typename?: '_AddMansusDoorOptionDoorPayload';
  from?: Maybe<MansusDoor>;
  to?: Maybe<MansusDoorOption>;
};

export type _RemoveMansusDoorOptionDoorPayload = {
  __typename?: '_RemoveMansusDoorOptionDoorPayload';
  from?: Maybe<MansusDoor>;
  to?: Maybe<MansusDoorOption>;
};

export type _AddMansusDoorOptionInfluenceRewardsPayload = {
  __typename?: '_AddMansusDoorOptionInfluenceRewardsPayload';
  from?: Maybe<MansusDoorOption>;
  to?: Maybe<Influence>;
};

export type _RemoveMansusDoorOptionInfluenceRewardsPayload = {
  __typename?: '_RemoveMansusDoorOptionInfluenceRewardsPayload';
  from?: Maybe<MansusDoorOption>;
  to?: Maybe<Influence>;
};

export type _AddMansusDoorOptionIngredientRewardsPayload = {
  __typename?: '_AddMansusDoorOptionIngredientRewardsPayload';
  from?: Maybe<MansusDoorOption>;
  to?: Maybe<Ingredient>;
};

export type _RemoveMansusDoorOptionIngredientRewardsPayload = {
  __typename?: '_RemoveMansusDoorOptionIngredientRewardsPayload';
  from?: Maybe<MansusDoorOption>;
  to?: Maybe<Ingredient>;
};

export type _AddMansusDoorOptionLanguageRewardsPayload = {
  __typename?: '_AddMansusDoorOptionLanguageRewardsPayload';
  from?: Maybe<MansusDoorOption>;
  to?: Maybe<Language>;
};

export type _RemoveMansusDoorOptionLanguageRewardsPayload = {
  __typename?: '_RemoveMansusDoorOptionLanguageRewardsPayload';
  from?: Maybe<MansusDoorOption>;
  to?: Maybe<Language>;
};

export type _AddMansusDoorOptionLoreRewardsPayload = {
  __typename?: '_AddMansusDoorOptionLoreRewardsPayload';
  from?: Maybe<MansusDoorOption>;
  to?: Maybe<Lore>;
};

export type _RemoveMansusDoorOptionLoreRewardsPayload = {
  __typename?: '_RemoveMansusDoorOptionLoreRewardsPayload';
  from?: Maybe<MansusDoorOption>;
  to?: Maybe<Lore>;
};

export type _AddMansusDoorOptionsPayload = {
  __typename?: '_AddMansusDoorOptionsPayload';
  from?: Maybe<MansusDoor>;
  to?: Maybe<MansusDoorOption>;
};

export type _RemoveMansusDoorOptionsPayload = {
  __typename?: '_RemoveMansusDoorOptionsPayload';
  from?: Maybe<MansusDoor>;
  to?: Maybe<MansusDoorOption>;
};

export type _HasAspectInfluenceInput = {
  quantity?: Maybe<Scalars['Int']>;
};

export type _AddInfluenceAspectsPayload = {
  __typename?: '_AddInfluenceAspectsPayload';
  from?: Maybe<Influence>;
  to?: Maybe<Aspect>;
  quantity?: Maybe<Scalars['Int']>;
};

export type _RemoveInfluenceAspectsPayload = {
  __typename?: '_RemoveInfluenceAspectsPayload';
  from?: Maybe<Influence>;
  to?: Maybe<Aspect>;
};

export type _AddInfluenceDecaysToPayload = {
  __typename?: '_AddInfluenceDecaysToPayload';
  from?: Maybe<Influence>;
  to?: Maybe<Influence>;
};

export type _RemoveInfluenceDecaysToPayload = {
  __typename?: '_RemoveInfluenceDecaysToPayload';
  from?: Maybe<Influence>;
  to?: Maybe<Influence>;
};

export type _AddInfluenceDecaysFromPayload = {
  __typename?: '_AddInfluenceDecaysFromPayload';
  from?: Maybe<Influence>;
  to?: Maybe<Influence>;
};

export type _RemoveInfluenceDecaysFromPayload = {
  __typename?: '_RemoveInfluenceDecaysFromPayload';
  from?: Maybe<Influence>;
  to?: Maybe<Influence>;
};

export type _InfluenceFoundInLocationInput = {
  chance: Scalars['Boolean'];
};

export type _AddInfluenceFoundInLocationPayload = {
  __typename?: '_AddInfluenceFoundInLocationPayload';
  from?: Maybe<Influence>;
  to?: Maybe<Location>;
  chance?: Maybe<Scalars['Boolean']>;
};

export type _RemoveInfluenceFoundInLocationPayload = {
  __typename?: '_RemoveInfluenceFoundInLocationPayload';
  from?: Maybe<Influence>;
  to?: Maybe<Location>;
};

export type _AddInfluenceFromDreamingInPayload = {
  __typename?: '_AddInfluenceFromDreamingInPayload';
  from?: Maybe<MansusDoorOption>;
  to?: Maybe<Influence>;
};

export type _RemoveInfluenceFromDreamingInPayload = {
  __typename?: '_RemoveInfluenceFromDreamingInPayload';
  from?: Maybe<MansusDoorOption>;
  to?: Maybe<Influence>;
};

export type _AddInfluenceFromBookPayload = {
  __typename?: '_AddInfluenceFromBookPayload';
  from?: Maybe<Book>;
  to?: Maybe<Influence>;
};

export type _RemoveInfluenceFromBookPayload = {
  __typename?: '_RemoveInfluenceFromBookPayload';
  from?: Maybe<Book>;
  to?: Maybe<Influence>;
};

export type _AddLanguageRequiresPayload = {
  __typename?: '_AddLanguageRequiresPayload';
  from?: Maybe<Language>;
  to?: Maybe<Language>;
};

export type _RemoveLanguageRequiresPayload = {
  __typename?: '_RemoveLanguageRequiresPayload';
  from?: Maybe<Language>;
  to?: Maybe<Language>;
};

export type _AddLanguageFromBookPayload = {
  __typename?: '_AddLanguageFromBookPayload';
  from?: Maybe<Book>;
  to?: Maybe<Language>;
};

export type _RemoveLanguageFromBookPayload = {
  __typename?: '_RemoveLanguageFromBookPayload';
  from?: Maybe<Book>;
  to?: Maybe<Language>;
};

export type _AddLanguageFromDreamingInPayload = {
  __typename?: '_AddLanguageFromDreamingInPayload';
  from?: Maybe<MansusDoorOption>;
  to?: Maybe<Language>;
};

export type _RemoveLanguageFromDreamingInPayload = {
  __typename?: '_RemoveLanguageFromDreamingInPayload';
  from?: Maybe<MansusDoorOption>;
  to?: Maybe<Language>;
};

export type _ToolHasAspectInput = {
  quantity?: Maybe<Scalars['Int']>;
};

export type _AddToolAspectsPayload = {
  __typename?: '_AddToolAspectsPayload';
  from?: Maybe<Tool>;
  to?: Maybe<Aspect>;
  quantity?: Maybe<Scalars['Int']>;
};

export type _RemoveToolAspectsPayload = {
  __typename?: '_RemoveToolAspectsPayload';
  from?: Maybe<Tool>;
  to?: Maybe<Aspect>;
};

export type _ToolFoundInLocationInput = {
  chance: Scalars['Boolean'];
};

export type _AddToolFoundInLocationPayload = {
  __typename?: '_AddToolFoundInLocationPayload';
  from?: Maybe<Tool>;
  to?: Maybe<Location>;
  chance?: Maybe<Scalars['Boolean']>;
};

export type _RemoveToolFoundInLocationPayload = {
  __typename?: '_RemoveToolFoundInLocationPayload';
  from?: Maybe<Tool>;
  to?: Maybe<Location>;
};

export type _AddToolFromBookPayload = {
  __typename?: '_AddToolFromBookPayload';
  from?: Maybe<Book>;
  to?: Maybe<Tool>;
};

export type _RemoveToolFromBookPayload = {
  __typename?: '_RemoveToolFromBookPayload';
  from?: Maybe<Book>;
  to?: Maybe<Tool>;
};

export type _RiteComponentInput = {
  name: Scalars['String'];
};

export type _AddRiteComponentsPayload = {
  __typename?: '_AddRiteComponentsPayload';
  from?: Maybe<Rite>;
  to?: Maybe<RiteComponent>;
};

export type _RemoveRiteComponentsPayload = {
  __typename?: '_RemoveRiteComponentsPayload';
  from?: Maybe<Rite>;
  to?: Maybe<RiteComponent>;
};

export type _AddRiteFromBookPayload = {
  __typename?: '_AddRiteFromBookPayload';
  from?: Maybe<Book>;
  to?: Maybe<Rite>;
};

export type _RemoveRiteFromBookPayload = {
  __typename?: '_RemoveRiteFromBookPayload';
  from?: Maybe<Book>;
  to?: Maybe<Rite>;
};

export type FromDesire = {
  __typename?: 'FromDesire';
  from: Desire;
  to: Desire;
  ingredient1: Scalars['String'];
  ingredient2?: Maybe<Scalars['String']>;
};

export type HasAspectLore = {
  __typename?: 'HasAspectLore';
  from: Lore;
  to: Aspect;
  quantity?: Maybe<Scalars['Int']>;
};

export type BookFoundInLocation = {
  __typename?: 'BookFoundInLocation';
  from: Book;
  to: Location;
  chance: Scalars['Boolean'];
};

export type IngredientHasAspect = {
  __typename?: 'IngredientHasAspect';
  from: Ingredient;
  to: Aspect;
  quantity?: Maybe<Scalars['Int']>;
};

export type IngredientFoundInLocation = {
  __typename?: 'IngredientFoundInLocation';
  from: Ingredient;
  to: Location;
  chance: Scalars['Boolean'];
};

export type HasAspectInfluence = {
  __typename?: 'HasAspectInfluence';
  from: Influence;
  to: Aspect;
  quantity?: Maybe<Scalars['Int']>;
};

export type InfluenceFoundInLocation = {
  __typename?: 'InfluenceFoundInLocation';
  from: Influence;
  to: Location;
  chance: Scalars['Boolean'];
};

export type ToolHasAspect = {
  __typename?: 'ToolHasAspect';
  from: Tool;
  to: Aspect;
  quantity?: Maybe<Scalars['Int']>;
};

export type ToolFoundInLocation = {
  __typename?: 'ToolFoundInLocation';
  from: Tool;
  to: Location;
  chance: Scalars['Boolean'];
};

export enum _RelationDirections {
  In = 'IN',
  Out = 'OUT'
}

export type _Neo4jTime = {
  __typename?: '_Neo4jTime';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jTimeInput = {
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jDate = {
  __typename?: '_Neo4jDate';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jDateInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jDateTime = {
  __typename?: '_Neo4jDateTime';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jDateTimeInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jLocalTime = {
  __typename?: '_Neo4jLocalTime';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jLocalTimeInput = {
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jLocalDateTime = {
  __typename?: '_Neo4jLocalDateTime';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jLocalDateTimeInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _SearchEntityInput = {
  name: Scalars['String'];
};

export type _AspectQuantityInput = {
  aspect: Scalars['String'];
};

export type _AspectSearchGroupResultInput = {
  label: Scalars['String'];
};

export type _AspectSearchEntityInput = {
  name: Scalars['String'];
};

export type _SetLanguageRequiresOutInput = {
  language: Scalars['String'];
};

export type _VerbInput = {
  name: Scalars['String'];
};

export type _HowToObtainResultInput = {
  fromType: Scalars['String'];
};

export type GetAspectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAspectsQuery = (
  { __typename?: 'Query' }
  & {
    Aspect?: Maybe<Array<Maybe<(
      { __typename?: 'Aspect' }
      & Pick<Aspect, 'name'>
    )>>>
  }
);

export type SaveAspectMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type SaveAspectMutation = (
  { __typename?: 'Mutation' }
  & {
    CreateAspect?: Maybe<(
      { __typename?: 'Aspect' }
      & Pick<Aspect, 'name'>
    )>
  }
);

export type GetDesiresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDesiresQuery = (
  { __typename?: 'Query' }
  & {
    Desire?: Maybe<Array<Maybe<(
      { __typename?: 'Desire' }
      & Pick<Desire, 'name'>
    )>>>
  }
);

export type SaveDesireMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type SaveDesireMutation = (
  { __typename?: 'Mutation' }
  & {
    CreateDesire?: Maybe<(
      { __typename?: 'Desire' }
      & Pick<Desire, 'name'>
    )>
  }
);

export type AddDesireChangeMutationVariables = Exact<{
  fromDesire: Scalars['String'];
  toDesire: Scalars['String'];
  ingredient1: Scalars['String'];
  ingredient2: Scalars['String'];
}>;


export type AddDesireChangeMutation = (
  { __typename?: 'Mutation' }
  & {
    AddDesireFromDesire?: Maybe<(
      { __typename?: '_AddDesireFromDesirePayload' }
      & Pick<_AddDesireFromDesirePayload, 'ingredient1' | 'ingredient2'>
    )>
  }
);

export type GetEntitiesByAspectQueryVariables = Exact<{
  aspect: Scalars['String'];
}>;


export type GetEntitiesByAspectQuery = (
  { __typename?: 'Query' }
  & {
    entityWithAspect: Array<(
      { __typename?: 'AspectSearchGroupResult' }
      & Pick<AspectSearchGroupResult, 'label'>
      & {
        entities: Array<(
          { __typename?: 'AspectSearchEntity' }
          & Pick<AspectSearchEntity, '_id' | 'name' | 'type' | 'aspectQuantity'>
        )>
      }
    )>
  }
);

export type SaveFollowerMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type SaveFollowerMutation = (
  { __typename?: 'Mutation' }
  & {
    CreateFollower?: Maybe<(
      { __typename?: 'Follower' }
      & Pick<Follower, 'name'>
    )>
  }
);

export type AddAspectToFollowerMutationVariables = Exact<{
  name: Scalars['String'];
  aspect: Scalars['String'];
}>;


export type AddAspectToFollowerMutation = (
  { __typename?: 'Mutation' }
  & {
    AddFollowerAspects?: Maybe<(
      { __typename?: '_AddFollowerAspectsPayload' }
      & {
        from?: Maybe<(
          { __typename?: 'Follower' }
          & Pick<Follower, 'name'>
        )>
      }
    )>
  }
);

export type GetToolsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetToolsQuery = (
  { __typename?: 'Query' }
  & {
    Tool?: Maybe<Array<Maybe<(
      { __typename?: 'Tool' }
      & Pick<Tool, 'name'>
    )>>>
  }
);

export type GetToolQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetToolQuery = (
  { __typename?: 'Query' }
  & {
    Tool?: Maybe<Array<Maybe<(
      { __typename?: 'Tool' }
      & Pick<Tool, 'name'>
      & {
        aspects?: Maybe<Array<Maybe<(
          { __typename?: '_ToolAspects' }
          & Pick<_ToolAspects, 'quantity'>
          & {
            Aspect?: Maybe<(
              { __typename?: 'Aspect' }
              & Pick<Aspect, 'name'>
            )>
          }
        )>>>, foundInLocation?: Maybe<Array<Maybe<(
          { __typename?: '_ToolFoundInLocation' }
          & Pick<_ToolFoundInLocation, 'chance'>
          & {
            Location?: Maybe<(
              { __typename?: 'Location' }
              & Pick<Location, 'name'>
            )>
          }
        )>>>, fromBook: Array<(
          { __typename?: 'Book' }
          & Pick<Book, '_id' | 'name'>
        )>
      }
    )>>>
  }
);

export type SaveToolMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type SaveToolMutation = (
  { __typename?: 'Mutation' }
  & {
    CreateTool?: Maybe<(
      { __typename?: 'Tool' }
      & Pick<Tool, 'name'>
    )>
  }
);

export type SetToolAspectMutationVariables = Exact<{
  name: Scalars['String'];
  aspect: Scalars['String'];
  quantity: Scalars['Int'];
}>;


export type SetToolAspectMutation = (
  { __typename?: 'Mutation' }
  & {
    AddToolAspects?: Maybe<(
      { __typename?: '_AddToolAspectsPayload' }
      & Pick<_AddToolAspectsPayload, 'quantity'>
    )>
  }
);

export type SetToolLocationMutationVariables = Exact<{
  name: Scalars['String'];
  location: Scalars['String'];
  chance: Scalars['Boolean'];
}>;


export type SetToolLocationMutation = (
  { __typename?: 'Mutation' }
  & {
    AddToolFoundInLocation?: Maybe<(
      { __typename?: '_AddToolFoundInLocationPayload' }
      & Pick<_AddToolFoundInLocationPayload, 'chance'>
      & {
        from?: Maybe<(
          { __typename?: 'Tool' }
          & Pick<Tool, 'name'>
        )>, to?: Maybe<(
          { __typename?: 'Location' }
          & Pick<Location, 'name'>
        )>
      }
    )>
  }
);

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
