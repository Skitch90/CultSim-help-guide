import { SaveItemInput } from './item-creator.types';
import { SaveFollowerGQL, AddAspectToFollowerGQL, GetEntitiesByAspectDocument } from '../model';
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

    createItem = async (input: SaveItemInput): Promise<void> => {
        console.log(input);
        const { name, followerAspect } = input;
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
