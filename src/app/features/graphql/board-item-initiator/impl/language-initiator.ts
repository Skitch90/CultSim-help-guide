import { Injector } from '@angular/core';
import { EntitiesGroup, EntitiesGroupItem } from '../../../../shared/model';
import { GetLanguageGQL, GetLanguageQuery, GetLanguageQueryVariables } from '../../operations';
import { AbsItemInitiator } from '../board-item-initiator';
import { convertToGroupItem } from '../board-item-initiator-utils';
import { Language } from '../board-item-initiator.types';

const getGroupsFromLanguage = (language: Language): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    const { requires, fromBook, fromDreamingIn, fromTutor } = language;
    if (requires) {
        groups.push({
            label: 'Requires language',
            entities: [ convertToGroupItem(requires) ]
        });
    }
    if (fromBook || fromDreamingIn) {
        const entities: EntitiesGroupItem[] = [];
        if (fromBook) {
            entities.push(convertToGroupItem(fromBook));
        }
        if (fromDreamingIn) {
            entities.push(convertToGroupItem(fromDreamingIn));
        }
        groups.push({
            label: 'Found From',
            entities
        });
    }
    if (fromTutor.length) {
        groups.push({
            label: 'Taught By',
            entities: fromTutor.map(tutor => convertToGroupItem(tutor))
        });
    }
    return groups;
};

export class LanguageInitiator extends AbsItemInitiator<GetLanguageQuery, GetLanguageQueryVariables, Language> {
    constructor(injector: Injector) {
        super({
            query: injector.get(GetLanguageGQL),
            getQueryParams: name => ({ name }),
            getResultFromData: data => data.Language,
            getGroupsFromResult: getGroupsFromLanguage
        });
    }
}
