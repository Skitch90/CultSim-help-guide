import { Injector } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { EntitiesGroup, EntitiesGroupItem } from '../../../shared/model';
import { GetBookGQL, GetEntitiesByAspectGQL, GetFollowerGQL, GetInfluenceGQL, GetIngredientGQL, GetLanguageGQL,
    GetLocationGQL, GetLoreGQL, GetMansusDoorGQL, GetMansusDoorOptionGQL, GetRiteGQL, GetToolGQL, GetTutorGQL } from '../operations';
import { convertToGroupItem, createAspectGroupItem, createSimpleAspectGroupItem } from './board-item-initiator-utils';
import { AspectSearchGroupResult, Book, Follower, Influence, Ingredient, ItemInitResult, Language, Location, Lore, MansusDoor,
    MansusDoorOption, Rite, Tool, Tutor} from './board-item-initiator.types';

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

export class InfluenceInitiator implements ItemInitiator {
    private getInfluenceGQL: GetInfluenceGQL;

    constructor(injector: Injector) {
        this.getInfluenceGQL = injector.get(GetInfluenceGQL);
    }

    initBoardItem(name: string): ItemInitResult {
        return {
            entityGroups: this.getInfluenceGQL.watch({ name }).valueChanges.pipe(
                map(result => result.data.Influence[0]),
                map(influence => this.getGroupsFromInfluence(influence))
            ),
            secretHistoriesLore: false,
            vaultLocation: false
        };


    }

    private getGroupsFromInfluence(influence: Influence): EntitiesGroup[] {
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
    }
}

export class LanguageInitiator implements ItemInitiator {
    private getLanguageGQL: GetLanguageGQL;

    constructor(injector: Injector) {
        this.getLanguageGQL = injector.get(GetLanguageGQL);
    }

    initBoardItem(name: string): ItemInitResult {
        return {
            entityGroups: this.getLanguageGQL.watch({ name }).valueChanges.pipe(
                map((result) => result.data.Language[0]),
                map(language => this.getGroupsFromLanguage(language))
            ),
            secretHistoriesLore: false,
            vaultLocation: false
        };
    }

    private getGroupsFromLanguage(language: Language): EntitiesGroup[] {
        const groups: EntitiesGroup[] = [];
        const { requires, fromBook, fromDreamingIn, fromTutor } = language;
        if (requires) {
            groups.push({
                label: 'Requires language',
                entities: [ convertToGroupItem(requires) ]
            });
        }
        if (fromBook || fromDreamingIn) {
            const entities: EntitiesGroupItem[] = [];
            if (fromBook) {
                entities.push(convertToGroupItem(fromBook));
            }
            if (fromDreamingIn) {
                entities.push(convertToGroupItem(fromDreamingIn));
            }
            groups.push({
                label: 'Found From',
                entities
            });
        }
        if (fromTutor.length) {
            groups.push({
                label: 'Taught By',
                entities: fromTutor.map(tutor => convertToGroupItem(tutor))
            });
        }
        return groups;
    }
}

export class MansusDoorInitiator implements ItemInitiator {
    private getMansusDoorGQL: GetMansusDoorGQL;

    constructor(injector: Injector) {
        this.getMansusDoorGQL = injector.get(GetMansusDoorGQL);
    }

    initBoardItem(name: string): ItemInitResult {
        return {
            entityGroups: this.getMansusDoorGQL.watch({ name }).valueChanges.pipe(
                map((result) => result.data.MansusDoor[0]),
                map(mansusDoor => this.getGroupsFromMansusDoor(mansusDoor))
            ),
            secretHistoriesLore: false,
            vaultLocation: false
        };
    }

    private getGroupsFromMansusDoor({ options }: MansusDoor): EntitiesGroup[] {
        const groups: EntitiesGroup[] = [];
        if (options.length) {
            groups.push({
                label: 'Options',
                entities: options.map(option => convertToGroupItem(option))
            });
        }
        return groups;
    }
}

export class MansusDoorOptionInitiator implements ItemInitiator {
    private getMansusDoorOptionGQL: GetMansusDoorOptionGQL;

    constructor(injector: Injector) {
        this.getMansusDoorOptionGQL = injector.get(GetMansusDoorOptionGQL);
    }

    initBoardItem(name: string): ItemInitResult {
        return {
            entityGroups: this.getMansusDoorOptionGQL.watch({ name }).valueChanges.pipe(
                map((result) => result.data.MansusDoorOption[0]),
                map(mansusDoorOption => this.getGroupsFromMansusDoorOption(mansusDoorOption))
            ),
            secretHistoriesLore: false,
            vaultLocation: false
        };
    }

    private getGroupsFromMansusDoorOption(mansusDoorOption: MansusDoorOption): EntitiesGroup[] {
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
    }
}

export class ToolInitiator implements ItemInitiator {
    private getToolGQL: GetToolGQL;

    constructor(injector: Injector) {
        this.getToolGQL = injector.get(GetToolGQL);
    }

    initBoardItem(name: string): ItemInitResult {
        return {
            entityGroups: this.getToolGQL.watch({ name }).valueChanges.pipe(
                map(result => result.data.Tool[0]),
                map(tool => this.getGroupsFromTool(tool))
            ),
            secretHistoriesLore: false,
            vaultLocation: false
        };
    }

    private getGroupsFromTool(tool: Tool): EntitiesGroup[] {
        const groups: EntitiesGroup[] = [];
        const { aspects, foundInLocation, fromBook } = tool;
        if (aspects.length > 0) {
            groups.push({
                label: 'Aspects',
                entities: aspects.map(aspect => createAspectGroupItem(aspect))
            });
        }
        if (foundInLocation.length || fromBook.length) {
            groups.push({
                label: 'Found From',
                entities: [
                    ...foundInLocation.map(location => convertToGroupItem(location.Location)),
                    ...fromBook.map(book => convertToGroupItem(book))
                ]
            });
        }
        return groups;
    }
}

export class RiteInitiator implements ItemInitiator {
    private getRiteGQL: GetRiteGQL;

    constructor(injector: Injector) {
        this.getRiteGQL = injector.get(GetRiteGQL);
    }

    initBoardItem(name: string): ItemInitResult {
        return {
            entityGroups: this.getRiteGQL.watch({ name }).valueChanges.pipe(
                map((result) => result.data.Rite[0]),
                map(rite => this.getGroupsFromRite(rite))
            ),
            secretHistoriesLore: false,
            vaultLocation: false
        };
    }

    private getGroupsFromRite(rite: Rite): EntitiesGroup[] {
        const groups: EntitiesGroup[] = [];
        const { fromBook } = rite;
        if (fromBook.length) {
            groups.push({
                label: 'From book',
                entities: fromBook.map(book => convertToGroupItem(book))
            });
        }
        return groups;
    }
}

export class TutorInitiator implements ItemInitiator {
    private readonly getTutorGQL: GetTutorGQL;

    constructor(readonly injector: Injector) {
        this.getTutorGQL = injector.get(GetTutorGQL);
    }

    initBoardItem(name: string): ItemInitResult {
        return {
            entityGroups: this.getTutorGQL.watch({ name }).valueChanges.pipe(
                map((result) => result.data.Tutor[0]),
                map((tutor) => this.getGroupsFromTutor(tutor))
            ),
            secretHistoriesLore: false,
            vaultLocation: false
        };
    }

    private getGroupsFromTutor({ teachesLanguage }: Tutor): EntitiesGroup[] {
        const groups: EntitiesGroup[] = [];
        if (teachesLanguage) {
            groups.push({
                label: 'Teaches',
                entities: [ convertToGroupItem(teachesLanguage) ]
            });
        }
        return groups;
    }
}
