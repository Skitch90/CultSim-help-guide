import { Injector } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { EntitiesGroup } from '../../../shared/model';
import { GetBookGQL, GetEntitiesByAspectGQL, GetFollowerGQL, GetIngredientGQL, GetLocationGQL, GetLoreGQL } from '../operations';
import { convertToGroupItem, createAspectGroupItem, createSimpleAspectGroupItem } from './board-item-initiator-utils';
import { AspectSearchGroupResult, Book, Follower, Ingredient, ItemInitResult, Location, Lore } from './board-item-initiator.types';

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
                    return this.getGroupsFromFollower(follower);
                })
            ),
            secretHistoriesLore: false,
            vaultLocation: false
        };
    }

    private getGroupsFromFollower({ aspects }: Follower) {
        const groups: EntitiesGroup[] = [];
        if (aspects && aspects.length > 0) {
            groups.push({
                label: 'Aspect',
                entities: aspects.map(aspect => createSimpleAspectGroupItem(aspect))
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
            map(location => this.getGroupsFromLocation(location))
        );
        return {
            entityGroups,
            vaultLocation,
            secretHistoriesLore: false
        };
    }

    private getGroupsFromLocation(
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

export class IngredientInitiator implements ItemInitiator {
    private getIngredientGQL: GetIngredientGQL;

    constructor(injector: Injector) {
        this.getIngredientGQL = injector.get(GetIngredientGQL);
    }

    initBoardItem(name: string): ItemInitResult {
        return {
            entityGroups: this.getIngredientGQL.watch({ name }).valueChanges.pipe(
                map(result => result.data.Ingredient[0]),
                map(ingredient => this.getGroupsFromIngredient(ingredient))
            ),
            secretHistoriesLore: false,
            vaultLocation: false
        };
    }

    private getGroupsFromIngredient({ aspects, foundInLocation, fromDreamingIn }: Ingredient): EntitiesGroup[] {
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
    }

}

export class BookInitiator implements ItemInitiator {
    private getBookGQL: GetBookGQL;

    constructor(injector: Injector) {
        this.getBookGQL = injector.get(GetBookGQL);
    }

    initBoardItem(name: string): ItemInitResult {
        return {
            entityGroups: this.getBookGQL.watch({ name }).valueChanges.pipe(
                map((result => result.data.Book[0])),
                map(book => this.getGroupsFromBook(book))
            ),
            secretHistoriesLore: false,
            vaultLocation: false
        };

    }

    private getGroupsFromBook = (book: Book): EntitiesGroup[] => {
        const groups: EntitiesGroup[] = [];
        const { foundInLocation, language, teachesLanguage, studiedIntoLore, teachesRite, resultsInInfluence, resultsInTool } = book;
        if (foundInLocation.length > 0) {
            groups.push({
                label: 'Found In',
                entities: foundInLocation.map(location => {
                    return convertToGroupItem(location.Location);
                })
            });
        }
        if (language !== null) {
            groups.push({
                label: 'Need Translation from',
                entities: [ convertToGroupItem(language) ]
            });
        }
        if (teachesLanguage !== null) {
            groups.push({
                label: 'Rewards',
                entities: [ convertToGroupItem(teachesLanguage) ]
            });
        } else {
            const loreRewards = studiedIntoLore.map(lore => {
                return convertToGroupItem(lore);
            });
            const riteReward = (teachesRite !== null) ? [convertToGroupItem(teachesRite)] : [];
            const influenceRewards = resultsInInfluence.map(influnce => {
                return convertToGroupItem(influnce);
            });
            const toolReward = (resultsInTool) ? [ convertToGroupItem(resultsInTool) ] : [];
            const rewards = [
                ...loreRewards,
                ...influenceRewards,
                ...riteReward,
                ...toolReward
            ];
            if (rewards.length > 0) {
                groups.push({
                    label: 'Rewards',
                    entities: rewards
                });
            }
        }
        return groups;
    }
}

export class LoreInitiator implements ItemInitiator {
    private getLoreGQL: GetLoreGQL;

    constructor(injector: Injector) {
        this.getLoreGQL = injector.get(GetLoreGQL);
    }

    initBoardItem(name: string): ItemInitResult {
        let secretHistoriesLore = false;
        return {
            entityGroups: this.getLoreGQL.watch({ name }).valueChanges.pipe(
                map(result => result.data.Lore[0]),
                tap(lore => secretHistoriesLore = lore.aspects.some(aspect => aspect.Aspect.name === 'Secret Histories')),
                map(lore => this.getGroupsFromLore(lore))
            ),
            secretHistoriesLore,
            vaultLocation: false,
        };
    }

    private getGroupsFromLore(lore: Lore): EntitiesGroup[] {
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
    }
}
