import { Injector } from '@angular/core';
import { EntitiesGroup } from '../../../../shared/model';
import { GetInfluenceGQL, GetInfluenceQuery, GetInfluenceQueryVariables } from '../../operations';
import { AbsItemInitiator } from '../board-item-initiator';
import { convertToGroupItem, createAspectGroupItem } from '../board-item-initiator-utils';
import { Influence } from '../board-item-initiator.types';

const getGroupsFromInfluence = (influence: Influence): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    const { aspects, foundInLocation, fromDreamingIn, fromBook, decaysTo, decaysFrom } = influence;
    if (aspects.length > 0) {
        groups.push({
            label: 'Aspects',
            entities: aspects.map(aspect => createAspectGroupItem(aspect))
        });
    }
    if (foundInLocation.length || fromDreamingIn.length || fromBook.length) {
        const locations = foundInLocation.map(location => convertToGroupItem(location.Location));
        const fromDreaming = fromDreamingIn.map(location => convertToGroupItem(location));
        const books = fromBook.map(book => convertToGroupItem(book));
        groups.push({
            label: 'Found From',
            entities: [ ...locations, ...fromDreaming, ...books ]
        });
    }
    if (decaysTo) {
        groups.push({
            label: 'Decays to',
            entities: [ convertToGroupItem(decaysTo) ]
        });
    }
    if (decaysFrom.length) {
        groups.push({
            label: 'Decays from',
            entities: decaysFrom.map(influenceOrig => convertToGroupItem(influenceOrig))
        });
    }
    return groups;
};

export class InfluenceInitiator extends AbsItemInitiator<GetInfluenceQuery, GetInfluenceQueryVariables, Influence> {
    constructor(injector: Injector) {
        super({
            query: injector.get(GetInfluenceGQL),
            getQueryParams: name => ({ name }),
            getResultFromData: data => data.Influence,
            getGroupsFromResult: getGroupsFromInfluence
        });
    }
}
