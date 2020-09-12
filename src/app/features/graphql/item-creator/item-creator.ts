import { SaveItemInput } from './item-creator.types';
import { CreateFollowerGQL, AddAspectToFollowerGQL, GetEntitiesByAspectDocument } from '../model';
import { Injector } from '@angular/core';

export interface ItemCreator {
    createItem(input: SaveItemInput): Promise<void>;
}

export class FollowerCreator implements ItemCreator {
    private createFollowerGQL: CreateFollowerGQL;
    private addAspectToFollowerGQL: AddAspectToFollowerGQL;

    constructor(injector: Injector) {
        this.createFollowerGQL = injector.get(CreateFollowerGQL);
        this.addAspectToFollowerGQL = injector.get(AddAspectToFollowerGQL);
    }

    createItem = async (input: SaveItemInput): Promise<void> => {
        console.log(input);
        const { name, followerAspect } = input;
        await this.createFollowerGQL.mutate({
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
