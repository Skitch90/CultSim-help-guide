import { Injector } from '@angular/core';
import { EntitiesGroup } from '../../../../shared/model';
import { GetTutorGQL, GetTutorQuery, GetTutorQueryVariables } from '../../operations';
import { AbsItemInitiator } from '../board-item-initiator';
import { convertToGroupItem } from '../board-item-initiator-utils';
import { Tutor } from '../board-item-initiator.types';

const getGroupsFromTutor = ({ teachesLanguage }: Tutor): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    if (teachesLanguage) {
        groups.push({
            label: 'Teaches',
            entities: [ convertToGroupItem(teachesLanguage) ]
        });
    }
    return groups;
};

export class TutorInitiator extends AbsItemInitiator<GetTutorQuery, GetTutorQueryVariables, Tutor> {
    constructor(injector: Injector) {
        super({
            query: injector.get(GetTutorGQL),
            getQueryParams: name => ({ name }),
            getResultFromData: data => data.Tutor,
            getGroupsFromResult: getGroupsFromTutor
        });
    }
}
