import { Injector } from '@angular/core';
import { EntitiesGroup } from '../../../../shared/model';
import { GetBookGQL, GetBookQuery, GetBookQueryVariables } from '../../operations';
import { AbsItemInitiator } from '../board-item-initiator';
import { convertToGroupItem } from '../board-item-initiator-utils';
import { Book } from '../board-item-initiator.types';

const getGroupsFromBook = (book: Book): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    const { foundInLocation, language, teachesLanguage, studiedIntoLore, teachesRite, resultsInInfluence, resultsInTool } = book;
    if (foundInLocation.length > 0) {
        groups.push({
            label: 'Found In',
            entities: foundInLocation.map(location => {
                return convertToGroupItem(location.Location);
            })
        });
    }
    if (language !== null) {
        groups.push({
            label: 'Need Translation from',
            entities: [ convertToGroupItem(language) ]
        });
    }
    if (teachesLanguage !== null) {
        groups.push({
            label: 'Rewards',
            entities: [ convertToGroupItem(teachesLanguage) ]
        });
    } else {
        const loreRewards = studiedIntoLore.map(lore => {
            return convertToGroupItem(lore);
        });
        const riteReward = (teachesRite !== null) ? [convertToGroupItem(teachesRite)] : [];
        const influenceRewards = resultsInInfluence.map(influnce => {
            return convertToGroupItem(influnce);
        });
        const toolReward = (resultsInTool) ? [ convertToGroupItem(resultsInTool) ] : [];
        const rewards = [
            ...loreRewards,
            ...influenceRewards,
            ...riteReward,
            ...toolReward
        ];
        if (rewards.length > 0) {
            groups.push({
                label: 'Rewards',
                entities: rewards
            });
        }
    }
    return groups;
};

export class BookInitiator extends AbsItemInitiator<GetBookQuery, GetBookQueryVariables, Book> {
    constructor(injector: Injector) {
        super({
            query: injector.get(GetBookGQL),
            getQueryParams: name => ({ name }),
            getResultFromData: data => data.Book,
            getGroupsFromResult: getGroupsFromBook
        });
    }
}
