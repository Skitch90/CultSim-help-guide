import { Injector } from '@angular/core';
import { EntitiesGroup } from '../../../../shared/model';
import { GetFollowerGQL, GetFollowerQuery, GetFollowerQueryVariables } from '../../operations';
import { createSimpleAspectGroupItem } from '../board-item-initiator-utils';
import { Follower } from '../board-item-initiator.types';
import { AbsItemInitiator } from '../board-item-initiator';

const getGroupsFromFollower = ({ aspects }: Follower) => {
    const groups: EntitiesGroup[] = [];
    if (aspects && aspects.length > 0) {
        groups.push({
            label: 'Aspect',
            entities: aspects.map(aspect => createSimpleAspectGroupItem(aspect))
        });
    }
    return groups;
};

export class FollowerInitiator extends AbsItemInitiator<GetFollowerQuery, GetFollowerQueryVariables, Follower> {
    constructor(injector: Injector) {
        super({
            query: injector.get(GetFollowerGQL),
            getQueryParams: name => ({ name }),
            getResultFromData: data => data.Follower,
            getGroupsFromResult: getGroupsFromFollower
        });
    }
}
