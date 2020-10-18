import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { EntitiesGroup } from '../../../shared/model';
import { GetEntitiesByAspectGQL, GetFollowerGQL, GetLocationGQL } from '../model';
import { convertToGroupItem, createAspectGroupItem } from './board-item-initiator-utils';
import { AspectSearchGroupResult, Follower, ItemInitResult, Location } from './board-item-initiator.types';

export interface ItemInitiator {
    initBoardItem(name: string): ItemInitResult;
}

export class FollowerInitiator implements ItemInitiator {
    private getFollowerGQL: GetFollowerGQL;

    constructor(injector: Injector) {
        this.getFollowerGQL = injector.get(GetFollowerGQL);
    }

    initBoardItem(name: string): ItemInitResult {
        return {
            entityGroups: this.getFollowerGQL.watch({ name }).valueChanges.pipe(
                map(getFollowerResult => getFollowerResult.data.Follower[0]),
                map(follower => {
                    return this.getGroupsForFollower(follower);
                })
            ),
            secretHistoriesLore: false,
            vaultLocation: false
        };
    }

    private getGroupsForFollower({ aspects }: Follower) {
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

export class LocationInitiator implements ItemInitiator {
    private getLocationGQL: GetLocationGQL;

    constructor(injector: Injector) {
        this.getLocationGQL = injector.get(GetLocationGQL);
    }

    initBoardItem(name: string): ItemInitResult {
        let vaultLocation = false;
        const entityGroups = this.getLocationGQL.watch({ location: name }).valueChanges.pipe(
            map(result => result.data.Location[0]),
            tap(location => vaultLocation = location.vault),
            map(location => this.getGroupsForLocation(location))
        );
        return {
            entityGroups,
            vaultLocation,
            secretHistoriesLore: false
        };
    }

    private getGroupsForLocation(
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

}

export class AspectInitiator implements ItemInitiator {
    private getEntitiesByAspectGQL: GetEntitiesByAspectGQL;

    constructor(injector: Injector) {
        this.getEntitiesByAspectGQL = injector.get(GetEntitiesByAspectGQL);
    }

    initBoardItem(name: string): ItemInitResult {
        return {
            entityGroups: this.getEntitiesByAspectGQL.watch({ aspect: name }).valueChanges.pipe(
                map(result => result.data.entityWithAspect),
                map(groups => this.getGroupsFromEntities(groups))
            ),
            secretHistoriesLore: false,
            vaultLocation: false
        };
    }

    private getGroupsFromEntities(entityGroups: AspectSearchGroupResult[]): EntitiesGroup[] {
        return entityGroups.map(entityGroup => {
            const { label, entities } = entityGroup;
            return {
                label,
                entities: entities.map(entity => {
                    const { _id, name, type, aspectQuantity } = entity;
                    return {
                        id: +_id,
                        name,
                        label: type,
                        aspectQuantity
                    };
                })
            };
        });
    }

}
