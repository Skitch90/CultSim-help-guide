import { EntitiesGroup } from 'src/app/shared/model';
import * as Model from '../types';
import { Observable } from 'rxjs';

export type ItemInitResult = {
    entityGroups: Observable<EntitiesGroup[]>;
    secretHistoriesLore: boolean;
    vaultLocation: boolean;
};

type AspectConvertInput = {
    name: string;
};

type AspectQuantityConvertInput = {
    Aspect?: AspectConvertInput;
    quantity?: number
};

type DoorConvertInput = {
    name: string;
};

export type GroupItemConvertInput = {
    _id?: string;
    name: string;
    aspects?: AspectQuantityConvertInput[];
    door?: DoorConvertInput;
    __typename?: string;
};

export type AspectWithQuantity = {
    Aspect?: Aspect;
    quantity?: number;
};

export type Aspect = { __typename?: 'Aspect'; } & Pick<Model.Aspect, 'name' | '_id'>;

export type Follower = {
    __typename?: 'Follower';
} & Pick<Model.Follower, 'name' | '_id'> & {
    aspects: Aspect[];
};

type HistoriesLoreAspect = ({
    __typename?: '_LoreAspects';
} & Pick<Model._LoreAspects, 'quantity'>);

type HistoriesLore = {
    __typename?: 'Lore';
} & Pick<Model.Lore, '_id' | 'name'> & {
    aspects?: HistoriesLoreAspect[];
};

type AspectName = ({
    __typename?: 'Aspect';
} & Pick<Model.Aspect, 'name'>);

type ExpeditionObstacle = {
    __typename?: 'ExpeditionObstacle';
} & Pick<Model.ExpeditionObstacle, '_id' | 'name'> & {
    defeatedWith: AspectName[];
};

type BookBase = {
    __typename?: 'Book';
} & Pick<Model.Book, '_id' | 'name'>;

type InfluenceAspect = ({
    __typename?: '_InfluenceAspects';
} & Pick<Model._InfluenceAspects, 'quantity'> & {
    Aspect?: Aspect;
});

type IngredientAspect = ({
    __typename?: '_IngredientAspects';
} & Pick<Model._IngredientAspects, 'quantity'> & {
    Aspect?: Aspect;
});

type IngredientBase = ({
    __typename?: 'Ingredient';
} & {
    __typename?: 'Ingredient';
} & Pick<Model.Ingredient, '_id' | 'name'> & {
    aspects?: IngredientAspect[];
});

type ToolAspect = ({
    __typename?: '_ToolAspects';
} & Pick<Model._ToolAspects, 'quantity'> & {
    Aspect?: Aspect;
});

export type Location = {
    __typename?: 'Location';
} & Pick<Model.Location, '_id' | 'name' | 'vault'> & {
    histories: HistoriesLore[];
    obstacles: ExpeditionObstacle[];
    bookRewards: BookBase[];
    influenceRewards: InfluenceBase[];
    ingredientRewards: IngredientBase[];
    toolRewards: ToolBase[];
};

type AspectSearchEntity = ({
    __typename?: 'AspectSearchEntity';
} & Pick<Model.AspectSearchEntity, '_id' | 'name' | 'type' | 'aspectQuantity'>);

export type AspectSearchGroupResult = ({
    __typename?: 'AspectSearchGroupResult';
} & Pick<Model.AspectSearchGroupResult, 'label'> & {
    entities: AspectSearchEntity[];
});

type LocationName = {
    __typename?: 'Location';
} & Pick<Model.Location, 'name'>;

type IngredientFoundInLocation = ({
    __typename?: '_IngredientFoundInLocation';
} & Pick<Model._IngredientFoundInLocation, 'chance'> & {
    Location?: LocationName;
});

type MansusDoorOptionBase = ({
    __typename?: 'MansusDoorOption';
} & {
    __typename?: 'MansusDoorOption';
} & Pick<Model.MansusDoorOption, 'name' | '_id'> & {
    door?: {
        __typename?: 'MansusDoor';
    } & Pick<Model.MansusDoor, 'name' | '_id'>;
});

export type Ingredient = {
    __typename?: 'Ingredient';
} & {
    foundInLocation?: IngredientFoundInLocation[];
    fromDreamingIn: MansusDoorOptionBase[];
} & {
    __typename?: 'Ingredient';
} & Pick<Model.Ingredient, 'name' | '_id'> & {
    aspects?: IngredientAspect[];
};

type LocationNameId = {
    __typename?: 'Location';
} & Pick<Model.Location, 'name' | '_id'>;

type BookFoundInLocation = ({
    __typename?: '_BookFoundInLocation';
} & Pick<Model._BookFoundInLocation, 'chance'> & {
    Location?: LocationNameId;
});

type LanguageBase = {
    __typename?: 'Language';
} & Pick<Model.Language, 'name' | '_id'>;

type LoreAspect = ({
    __typename?: '_LoreAspects';
} & Pick<Model._LoreAspects, 'quantity'> & {
    Aspect?: Aspect;
});

type LoreBase = ({
    __typename?: 'Lore';
} & {
    __typename?: 'Lore';
} & Pick<Model.Lore, 'name' | '_id'> & {
    aspects?: LoreAspect[];
});

type RiteBase = {
    __typename?: 'Rite';
} & Pick<Model.Rite, 'name' | '_id'>;

type ToolBase = {
    __typename?: 'Tool';
} & {
    __typename?: 'Tool';
} & Pick<Model.Tool, 'name' | '_id'> & {
    aspects?: ToolAspect[];
};

type InfluenceBase = ({
    __typename?: 'Influence';
} & {
    __typename?: 'Influence';
} & Pick<Model.Influence, 'name' | '_id'> & {
    aspects?: InfluenceAspect[];
});

export type Book = {
    __typename?: 'Book';
} & Pick<Model.Book, 'name' | '_id'> & {
    foundInLocation?: BookFoundInLocation[];
    language?: LanguageBase;
    studiedIntoLore: LoreBase[];
    teachesRite?: RiteBase;
    teachesLanguage?: LanguageBase;
    resultsInInfluence: InfluenceBase[];
    resultsInTool?: ToolBase;
};


export type Lore = {
    __typename?: 'Lore';
} & {
    exploreResults: LocationNameId[];
    fromBook: BookBase[];
    fromDreamingIn: MansusDoorOptionBase[];
    upgradesTo?: LoreBase;
    upgradedFrom?: LoreBase;
} & {
    __typename?: 'Lore';
} & Pick<Model.Lore, '_id' | 'name'> & {
    aspects?: LoreAspect[];
};

type InfluenceFoundInLocation = ({
    __typename?: '_InfluenceFoundInLocation';
} & {
    Location?: LocationNameId;
});

export type Influence = {
    __typename?: 'Influence';
} & {
    foundInLocation?: InfluenceFoundInLocation[];
    fromDreamingIn: MansusDoorOptionBase[];
    fromBook: BookBase[];
    decaysTo?: InfluenceBase;
    decaysFrom: InfluenceBase[];
} & {
    __typename?: 'Influence';
} & Pick<Model.Influence, 'name' | '_id'> & {
    aspects?: InfluenceAspect[];
};

export type Language = {
    __typename?: 'Language';
} & Pick<Model.Language, 'name'> & {
    requires?: LanguageBase;
    fromBook?: BookBase;
    fromDreamingIn?: MansusDoorOptionBase;
};

type MansusDoorOptionName = ({
    __typename?: 'MansusDoorOption';
} & Pick<Model.MansusDoorOption, 'name' | '_id'>);

export type MansusDoor = {
    __typename?: 'MansusDoor';
} & Pick<Model.MansusDoor, 'name'> & {
    options?: MansusDoorOptionName[];
};

type MansusDoorName = {
    __typename?: 'MansusDoor';
} & Pick<Model.MansusDoor, 'name' | '_id'>;

export type MansusDoorOption = {
    __typename?: 'MansusDoorOption';
} & Pick<Model.MansusDoorOption, 'name'> & {
    door?: MansusDoorName;
    influenceRewards: InfluenceBase[];
    ingredientRewards: IngredientBase[];
    languageRewards: LanguageBase[];
    loreRewards: LoreBase[];
};
