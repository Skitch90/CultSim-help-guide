import { Injector } from '@angular/core';
import { EntitiesGroup } from '../../../../shared/model';
import { GetRiteGQL, GetRiteQuery, GetRiteQueryVariables } from '../../operations';
import { AbsItemInitiator } from '../board-item-initiator';
import { convertToGroupItem } from '../board-item-initiator-utils';
import { Rite } from '../board-item-initiator.types';

const getGroupsFromRite = (rite: Rite): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    const { fromBook } = rite;
    if (fromBook.length) {
        groups.push({
            label: 'From book',
            entities: fromBook.map(book => convertToGroupItem(book))
        });
    }
    return groups;
};

export class RiteInitiator extends AbsItemInitiator<GetRiteQuery, GetRiteQueryVariables, Rite> {
    constructor(injector: Injector) {
        super({
            query: injector.get(GetRiteGQL),
            getQueryParams: name => ({ name }),
            getResultFromData: data => data.Rite,
            getGroupsFromResult: getGroupsFromRite
        });
    }
}
