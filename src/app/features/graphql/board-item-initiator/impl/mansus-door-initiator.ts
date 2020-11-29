import { Injector } from '@angular/core';
import { EntitiesGroup } from '../../../../shared/model';
import { GetMansusDoorGQL, GetMansusDoorQuery, GetMansusDoorQueryVariables } from '../../operations';
import { AbsItemInitiator } from '../board-item-initiator';
import { convertToGroupItem } from '../board-item-initiator-utils';
import { MansusDoor } from '../board-item-initiator.types';

const getGroupsFromMansusDoor = ({ options }: MansusDoor): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    if (options.length) {
        groups.push({
            label: 'Options',
            entities: options.map(option => convertToGroupItem(option))
        });
    }
    return groups;
};

export class MansusDoorInitiator extends AbsItemInitiator<GetMansusDoorQuery, GetMansusDoorQueryVariables, MansusDoor> {
    constructor(injector: Injector) {
        super({
            query: injector.get(GetMansusDoorGQL),
            getQueryParams: name => ({ name }),
            getResultFromData: data => data.MansusDoor,
            getGroupsFromResult: getGroupsFromMansusDoor
        });
    }
}
