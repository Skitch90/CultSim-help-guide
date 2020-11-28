import { Injector } from '@angular/core';
import { map } from 'rxjs/operators';
import { EntitiesGroup } from 'src/app/shared/model';
import { GetLocationGQL, GetLocationQuery, GetLocationQueryVariables } from '../../operations';
import { AbsItemInitiator } from '../board-item-initiator';
import { convertToGroupItem } from '../board-item-initiator-utils';
import { Location } from '../board-item-initiator.types';

function getGroupsFromLocation(
    { histories, obstacles, bookRewards, influenceRewards, ingredientRewards, toolRewards }: Location): EntitiesGroup[] {
    const groups: EntitiesGroup[] = [];
    if (histories.length > 0) {
        groups.push({
            label: 'From histories',
            entities: histories.map(history => convertToGroupItem(history))
        });
    }
    if (obstacles.length > 0) {
        groups.push({
            label: 'Obstacles',
            entities: obstacles.map(obstacle => {
                const { _id, name, __typename, defeatedWith } = obstacle;
                return {
                    id: +_id,
                    name,
                    label: __typename,
                    aspects: defeatedWith.map(item => item.name)
                };
            })
        });
    }
    if (bookRewards.length || influenceRewards.length || ingredientRewards.length || toolRewards.length) {
        const rewards = [...bookRewards, ...influenceRewards, ...ingredientRewards, ...toolRewards];
        const groupItems = rewards.map(item => convertToGroupItem(item));
        groups.push({
            label: 'Rewards',
            entities: groupItems
        });
    }
    return groups;
}

export class LocationInitiator extends AbsItemInitiator<GetLocationQuery, GetLocationQueryVariables, Location> {
    constructor(injector: Injector) {
        super({
            query: injector.get(GetLocationGQL),
            getQueryParams: name => ({ location: name }),
            getResultFromData: result => result.Location,
            getGroupsFromResult: getGroupsFromLocation,
            getVaultLocation: result => result.pipe(map(location => location.data?.Location?.[0].vault))
        });
    }
}
