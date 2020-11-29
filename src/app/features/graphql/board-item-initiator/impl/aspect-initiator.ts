import { Injector } from '@angular/core';
import { EntitiesGroup } from 'src/app/shared/model';
import { GetEntitiesByAspectGQL, GetEntitiesByAspectQuery, GetEntitiesByAspectQueryVariables } from '../../operations';
import { AbsItemInitiator } from '../board-item-initiator';
import { AspectSearchGroupResult } from '../board-item-initiator.types';

const getGroupsFromEntities = (entityGroups: AspectSearchGroupResult[]): EntitiesGroup[] => {
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
};

export class AspectInitiator extends AbsItemInitiator<GetEntitiesByAspectQuery, GetEntitiesByAspectQueryVariables, AspectSearchGroupResult> {
    constructor(injector: Injector) {
        super({
            query: injector.get(GetEntitiesByAspectGQL),
            getQueryParams: name => ({ aspect: name }),
            getResultFromData: data => data.entityWithAspect,
            singleResult: false,
            getGroupsFromResult: getGroupsFromEntities
        });
    }
}
