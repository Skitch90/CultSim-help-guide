import { Injector } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Query } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EntitiesGroup } from '../../../shared/model';
import { GetMansusDoorGQL, GetMansusDoorOptionGQL, GetRiteGQL, GetToolGQL, GetTutorGQL } from '../operations';
import { convertToGroupItem, createAspectGroupItem } from './board-item-initiator-utils';
import { ItemInitResult, MansusDoor,
    MansusDoorOption, Rite, Tool, Tutor} from './board-item-initiator.types';

export interface ItemInitiator {
    initBoardItem(name: string): ItemInitResult;
}

export interface InitiatorConfig<QT, QV, E> {
    query: Query<QT, QV>;
    getQueryParams: (name: string) => QV;
    getResultFromData: (query: QT) => E[];
    singleResult?: boolean;
    getGroupsFromResult: (entity: E | E[]) => EntitiesGroup[];
    getSecretHistoryLore?: (result: Observable<ApolloQueryResult<QT>>) => Observable<boolean>
    getVaultLocation?: (result: Observable<ApolloQueryResult<QT>>) => Observable<boolean>;
}

export abstract class AbsItemInitiator<QT, QV, E> implements ItemInitiator {
    private readonly query: Query<QT, QV>;
    private readonly getQueryParams: (name: string) => QV;
    private readonly getResultFromData: (query: QT) => E[];
    private readonly singleResult: boolean;
    private readonly getGroupsFromResult: (entity: E | E[]) => EntitiesGroup[];
    private readonly getSecretHistoryLore: (result: Observable<ApolloQueryResult<QT>>) => Observable<boolean>;
    private readonly getVaultLocation: (result: Observable<ApolloQueryResult<QT>>) => Observable<boolean>;

    constructor({ query, getQueryParams, getResultFromData, singleResult = true, getGroupsFromResult, getSecretHistoryLore = () => of(false), getVaultLocation = () => of(false)}: InitiatorConfig<QT, QV, E>) {
        this.query = query;
        this.getQueryParams = getQueryParams;
        this.getResultFromData = getResultFromData;
        this.singleResult = singleResult;
        this.getGroupsFromResult = getGroupsFromResult;
        this.getSecretHistoryLore = getSecretHistoryLore;
        this.getVaultLocation = getVaultLocation;
    }

    initBoardItem(name: string): ItemInitResult {
        const queryResult = this.query.watch(this.getQueryParams(name), { useInitialLoading: true }).valueChanges;
        return {
            loading: queryResult.pipe(map(result => result.loading)),
            entityGroups: queryResult.pipe(
                filter(result => Boolean(result.data)),
                map(result => {
                    const results = this.getResultFromData(result.data);
                    return this.singleResult ? results[0] : results;
                }),
                map(entity => this.getGroupsFromResult(entity))
            ),
            secretHistoriesLore: this.getSecretHistoryLore(queryResult),
            vaultLocation: this.getVaultLocation(queryResult)
        };
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
