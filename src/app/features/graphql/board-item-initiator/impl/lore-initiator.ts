import { Injector } from '@angular/core';
import { map } from 'rxjs/operators';
import { EntitiesGroup } from '../../../../shared/model';
import { GetLoreGQL, GetLoreQuery, GetLoreQueryVariables } from '../../operations';
import { AbsItemInitiator } from '../board-item-initiator';
import { convertToGroupItem, createAspectGroupItem } from '../board-item-initiator-utils';
import { Lore } from '../board-item-initiator.types';

const getGroupsFromLore = (lore: Lore): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    const { aspects, exploreResults, fromBook, fromDreamingIn, upgradesTo, upgradedFrom } = lore;
    if (aspects.length > 0) {
        groups.push({
            label: 'Aspects',
            entities: aspects.map(aspect => createAspectGroupItem(aspect))
        });
    }
    if (fromBook.length || fromDreamingIn.length) {
        const sources = [ ...fromBook, ...fromDreamingIn ];
        groups.push({
            label: 'Found From',
            entities: sources.map(source => convertToGroupItem(source))
        });
    }
    if (upgradesTo) {
        groups.push({
            label: 'Upgrades to',
            entities: [ convertToGroupItem(upgradesTo) ]
        });
    }
    if (upgradedFrom) {
        groups.push({
            label: 'Upgraded from',
            entities: [ convertToGroupItem(upgradedFrom) ]
        });
    }
    if (exploreResults.length > 0) {
        groups.push({
            label: 'Vaults',
            entities: exploreResults.map(vault => convertToGroupItem(vault))
        });
    }
    return groups;
};

export class LoreInitiator extends AbsItemInitiator<GetLoreQuery, GetLoreQueryVariables, Lore> {
    constructor(injector: Injector) {
        super({
            query: injector.get(GetLoreGQL),
            getQueryParams: name => ({ name }),
            getResultFromData: data => data.Lore,
            getGroupsFromResult: getGroupsFromLore,
            getSecretHistoryLore: result => result.pipe(
                map(queryResult => queryResult.data?.Lore?.[0].aspects.some(aspect => aspect.Aspect.name === 'Secret Histories'))
            )
        });
    }

}
