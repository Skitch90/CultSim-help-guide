import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EntitiesGroup, EntitiesGroupItem } from '../../../shared/model';
import { GetFollowerGQL } from '../model';
import { Follower, createAspectGroupItem } from './board-item-initiator-utils';

export interface ItemInitiator {
    initBoardItem(name: string): Observable<EntitiesGroup[]>;
}

export class FollowerInitiator implements ItemInitiator {
    private getFollowerGQL: GetFollowerGQL;

    constructor(injector: Injector) {
        this.getFollowerGQL = injector.get(GetFollowerGQL);
    }

    initBoardItem(name: string): Observable<EntitiesGroup[]> {
        return this.getFollowerGQL.watch({ name }).valueChanges.pipe(
            map(getFollowerResult => getFollowerResult.data.Follower[0]),
            map(follower => {
                return this.getGroupsForFollower(follower);
            })
        );
    }

    private getGroupsForFollower(follower: Follower) {
        const { aspects } = follower;
        const groups: EntitiesGroup[] = [];
        if (aspects && aspects.length > 0) {
            groups.push({
                label: 'Aspect',
                entities: aspects.map(aspect => createAspectGroupItem(aspect))
            });
        }
        return groups;
    }
}
