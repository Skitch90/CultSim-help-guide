import { SaveItemInput } from './item-creator.types';
import { SaveFollowerGQL, AddAspectToFollowerGQL, GetEntitiesByAspectDocument, SaveAspectGQL, GetAspectsDocument,
    SaveToolGQL, GetToolsDocument, SetToolAspectGQL, SaveDesireGQL, GetDesiresDocument, SaveChangeLessonGQL, SaveLocationGQL,
    GetLocationsDocument } from '../model';
import { Injector } from '@angular/core';
import { AspectInfo } from '../graphql.types';
import { Mutation } from 'apollo-angular';
import { DocumentNode } from 'graphql';

const createItem = async (itemName: string, createMutation: Mutation, createRefetchQuery: DocumentNode) => {
    await createMutation.mutate(
        { name: itemName },
        { refetchQueries: [{ query: createRefetchQuery }] }
    ).toPromise();
};

const createItemWithAspects = async (
        itemName: string, aspects: AspectInfo[], createMutation: Mutation, createRefetchQuery: DocumentNode, setAspectMutation: Mutation
    ) => {
    await createItem(itemName, createMutation, createRefetchQuery);

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

    createItem = async ({ name }): Promise<void> => createItem(name, this.saveAspectGQL, GetAspectsDocument);
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

export class DesireCreator implements ItemCreator {
    private saveDesireGQL: SaveDesireGQL;

    constructor(injector: Injector) {
        this.saveDesireGQL = injector.get(SaveDesireGQL);
    }

    createItem = async ({ name }): Promise<void> => createItem(name, this.saveDesireGQL, GetDesiresDocument);
}

export class ChangeLessonCreator implements ItemCreator {
    private saveChangeLessonGQL: SaveChangeLessonGQL;

    constructor(injector: Injector) {
        this.saveChangeLessonGQL = injector.get(SaveChangeLessonGQL);
    }

    createItem = async ({ name }): Promise<void> => {
        await this.saveChangeLessonGQL.mutate({ name }).toPromise();
    }
}

export class LocationCreator implements ItemCreator {
    private saveLocationGQL: SaveLocationGQL;

    constructor(injector: Injector) {
        this.saveLocationGQL = injector.get(SaveLocationGQL);
    }

    createItem = async ({ name: location, vault }: SaveItemInput): Promise<void> => {
        await this.saveLocationGQL.mutate(
            { location, vault },
            { refetchQueries: [{ query: GetLocationsDocument }] }
        ).toPromise();
    }
}
