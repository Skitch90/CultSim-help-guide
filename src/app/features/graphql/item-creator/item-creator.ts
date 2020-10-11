import { SaveItemInput } from './item-creator.types';
import { SaveFollowerGQL, AddAspectToFollowerGQL, GetEntitiesByAspectDocument, SaveAspectGQL, GetAspectsDocument,
    SaveToolGQL, GetToolsDocument, SetToolAspectGQL } from '../model';
import { Injector } from '@angular/core';
import { AspectInfo } from '../graphql.types';
import { Mutation } from 'apollo-angular';
import { DocumentNode } from 'graphql';

const createItemWithAspects = async (
        itemName: string, aspects: AspectInfo[], createMutation: Mutation, createRefetchQuery: DocumentNode, setAspectMutation: Mutation
    ) => {
    await createMutation.mutate(
        { name: itemName },
        { refetchQueries: [{ query: createRefetchQuery }] }
    ).toPromise();

    aspects.forEach(async ({ aspect, quantity }: AspectInfo) => {
        await setAspectMutation.mutate(
            {
                name: itemName,
                aspect,
                quantity: +quantity
            },
            { refetchQueries: [{
                query: GetEntitiesByAspectDocument,
                variables: { aspect }
            }]}
        ).toPromise();
    });
};

export interface ItemCreator {
    createItem(input: SaveItemInput): Promise<void>;
}

export class FollowerCreator implements ItemCreator {
    private saveFollowerGQL: SaveFollowerGQL;
    private addAspectToFollowerGQL: AddAspectToFollowerGQL;

    constructor(injector: Injector) {
        this.saveFollowerGQL = injector.get(SaveFollowerGQL);
        this.addAspectToFollowerGQL = injector.get(AddAspectToFollowerGQL);
    }

    createItem = async ({ name, followerAspect }: SaveItemInput): Promise<void> => {
        await this.saveFollowerGQL.mutate({
            name
        }).toPromise();

        await this.addAspectToFollowerGQL.mutate({
            name,
            aspect: followerAspect
            },
            {
                refetchQueries: [{
                    query: GetEntitiesByAspectDocument,
                    variables: {
                        aspect: followerAspect
                    }
                }]
            }
        ).toPromise();
    }

}

export class AspectCreator implements ItemCreator {
    private saveAspectGQL: SaveAspectGQL;

    constructor(injector: Injector) {
        this.saveAspectGQL = injector.get(SaveAspectGQL);
    }

    createItem = async ({ name }): Promise<void> => {
        this.saveAspectGQL.mutate(
            { name },
            { refetchQueries: [{ query: GetAspectsDocument }] }
        ).toPromise();
    }
}

export class ToolCreator implements ItemCreator {
    private saveToolGQL: SaveToolGQL;
    private setToolAspectGQL: SetToolAspectGQL;

    constructor(injector: Injector) {
        this.saveToolGQL = injector.get(SaveToolGQL);
        this.setToolAspectGQL = injector.get(SetToolAspectGQL);
    }

    createItem = async ({ name, aspects }: SaveItemInput): Promise<void> =>
        createItemWithAspects(name, aspects, this.saveToolGQL, GetToolsDocument, this.setToolAspectGQL)
}
