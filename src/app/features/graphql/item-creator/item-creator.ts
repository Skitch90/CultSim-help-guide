import { SaveItemInput } from './item-creator.types';
import { SaveFollowerGQL, AddAspectToFollowerGQL, GetEntitiesByAspectDocument, SaveAspectGQL, GetAspectsDocument } from '../model';
import { Injector } from '@angular/core';

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
