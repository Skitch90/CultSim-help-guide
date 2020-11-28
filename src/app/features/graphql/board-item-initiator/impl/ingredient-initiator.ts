import { Injector } from '@angular/core';
import { EntitiesGroup } from '../../../../shared/model';
import { GetIngredientGQL, GetIngredientQuery, GetIngredientQueryVariables } from '../../operations';
import { AbsItemInitiator } from '../board-item-initiator';
import { convertToGroupItem, createAspectGroupItem } from '../board-item-initiator-utils';
import { Ingredient } from '../board-item-initiator.types';

const getGroupsFromIngredient = ({ aspects, foundInLocation, fromDreamingIn }: Ingredient): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    if (aspects.length > 0) {
        groups.push({
            label: 'Aspects',
            entities: aspects.map(aspect => createAspectGroupItem(aspect))
        });
    }
    if (foundInLocation.length > 0 || fromDreamingIn.length > 0) {
        const locations = foundInLocation.map(location => convertToGroupItem(location.Location));
        const fromDreaming = fromDreamingIn.map(location => convertToGroupItem(location));
        groups.push({
            label: 'Found From',
            entities: [...locations, ...fromDreaming]
        });
    }
    return groups;
};

export class IngredientInitiator extends AbsItemInitiator<GetIngredientQuery, GetIngredientQueryVariables, Ingredient> {
    constructor(injector: Injector) {
        super({
            query: injector.get(GetIngredientGQL),
            getQueryParams: name => ({ name }),
            getResultFromData: data => data.Ingredient,
            getGroupsFromResult: getGroupsFromIngredient
        });
    }
}
