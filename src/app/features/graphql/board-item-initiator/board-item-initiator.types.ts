import { EntitiesGroup } from 'src/app/shared/model';
import * as Model from '../model';
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

type BookAsReward = {
    __typename?: 'Book';
} & Pick<Model.Book, '_id' | 'name'>;

type InfluenceAspect = ({
    __typename?: '_InfluenceAspects';
} & Pick<Model._InfluenceAspects, 'quantity'> & {
    Aspect?: Aspect;
});

type InfluenceAsReward = ({
    __typename?: 'Influence';
} & {
    __typename?: 'Influence';
} & Pick<Model.Influence, '_id' | 'name'> & {
    aspects?: InfluenceAspect[];
});

type IngredientAspect = ({
    __typename?: '_IngredientAspects';
} & Pick<Model._IngredientAspects, 'quantity'> & {
    Aspect?: Aspect;
});

type IngredientAsReward = ({
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

type ToolAsReward = ({
    __typename?: 'Tool';
} & Pick<Model.Tool, '_id' | 'name'> & {
    aspects?: ToolAspect[];
});

export type Location = {
    __typename?: 'Location';
} & Pick<Model.Location, '_id' | 'name' | 'vault'> & {
    histories: HistoriesLore[];
    obstacles: ExpeditionObstacle[];
    bookRewards: BookAsReward[];
    influenceRewards: InfluenceAsReward[];
    ingredientRewards: IngredientAsReward[];
    toolRewards: ToolAsReward[];
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

type MansusDoorOptionSimple = ({
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
    fromDreamingIn: MansusDoorOptionSimple[];
} & {
    __typename?: 'Ingredient';
} & Pick<Model.Ingredient, 'name' | '_id'> & {
    aspects?: IngredientAspect[];
};
