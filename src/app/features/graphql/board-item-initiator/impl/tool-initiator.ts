import { Injector } from '@angular/core';
import { EntitiesGroup } from '../../../../shared/model';
import { GetToolGQL, GetToolQuery, GetToolQueryVariables } from '../../operations';
import { AbsItemInitiator } from '../board-item-initiator';
import { convertToGroupItem, createAspectGroupItem } from '../board-item-initiator-utils';
import { Tool } from '../board-item-initiator.types';

const getGroupsFromTool = (tool: Tool): EntitiesGroup[] => {
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
};

export class ToolInitiator extends AbsItemInitiator<GetToolQuery, GetToolQueryVariables, Tool> {
    constructor(injector: Injector) {
        super({
            query: injector.get(GetToolGQL),
            getQueryParams: name => ({ name }),
            getResultFromData: data => data.Tool,
            getGroupsFromResult: getGroupsFromTool
        });
    }
}
