import { ApolloQueryResult } from '@apollo/client/core';
import { Query } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EntitiesGroup } from '../../../shared/model';
import { ItemInitResult } from './board-item-initiator.types';

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
