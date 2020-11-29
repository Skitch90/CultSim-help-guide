import { Injector } from '@angular/core';
import { EntitiesGroup } from '../../../../shared/model';
import { GetMansusDoorOptionGQL, GetMansusDoorOptionQuery, GetMansusDoorOptionQueryVariables } from '../../operations';
import { AbsItemInitiator } from '../board-item-initiator';
import { convertToGroupItem } from '../board-item-initiator-utils';
import { MansusDoorOption } from '../board-item-initiator.types';

const getGroupsFromMansusDoorOption = (mansusDoorOption: MansusDoorOption): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    const { door, influenceRewards, ingredientRewards, languageRewards, loreRewards } = mansusDoorOption;
    if (door) {
        groups.push({
            label: 'Door',
            entities: [ convertToGroupItem(door) ]
        });
    }
    if (influenceRewards.length || ingredientRewards.length || languageRewards.length || loreRewards.length) {
        const rewards = [ ...influenceRewards, ...ingredientRewards, ...languageRewards, ...loreRewards ];
        groups.push({
            label: 'Rewards',
            entities: rewards.map(reward => convertToGroupItem(reward))
        });
    }
    return groups;
};

export class MansusDoorOptionInitiator extends AbsItemInitiator<GetMansusDoorOptionQuery, GetMansusDoorOptionQueryVariables, MansusDoorOption> {
    constructor(injector: Injector) {
        super({
            query: injector.get(GetMansusDoorOptionGQL),
            getQueryParams: name => ({ name }),
            getResultFromData: data => data.MansusDoorOption,
            getGroupsFromResult: getGroupsFromMansusDoorOption
        });
    }
}
