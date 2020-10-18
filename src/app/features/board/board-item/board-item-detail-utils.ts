import { EntitiesGroup, EntitiesGroupItem } from '../../../shared/model';

const convertToGroupItem = (item): EntitiesGroupItem => {
    const { aspects, door } = item;
    const aspect = (aspects && aspects.length === 1) ? aspects[0] : null;
    const groupItem: EntitiesGroupItem = {
        id: item._id,
        name: item.name,
        label: item.__typename,
        aspect: (aspect && aspect.Aspect) ? aspect.Aspect.name : null,
        aspectQuantity: aspect !== null ? aspect.quantity : null
    };
    if (door) {
        groupItem.mansusDoor = door.name;
    }
    return groupItem;
};

const createAspectGroupItem = (aspectItem): EntitiesGroupItem => {
    const { Aspect, quantity } = aspectItem;
    const { _id, name, __typename } = Aspect;
    return {
        id: _id,
        name,
        label: __typename,
        aspectQuantity: quantity
    };
};

export const getGroupsFromLanguage = (language: any): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    const { requires, fromBook, fromDreamingIn } = language;
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
    return groups;
};

export const getGroupsFromLore = (lore: any): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    const { aspects, exploreResults, fromBook, fromDreamingIn, upgradesTo, upgradedFrom } = lore;
    if (aspects.length > 0) {
        groups.push({
            label: 'Aspects',
            entities: aspects.map(aspect => createAspectGroupItem(aspect))
        });
    }
    if (fromBook.length || fromDreamingIn.length) {
        const sources = [ ...fromBook, ...fromDreamingIn ];
        groups.push({
            label: 'Found From',
            entities: sources.map(source => convertToGroupItem(source))
        });
    }
    if (upgradesTo) {
        groups.push({
            label: 'Upgrades to',
            entities: [ convertToGroupItem(upgradesTo) ]
        });
    }
    if (upgradedFrom) {
        groups.push({
            label: 'Upgraded from',
            entities: [ convertToGroupItem(upgradedFrom) ]
        });
    }
    if (exploreResults.length > 0) {
        groups.push({
            label: 'Vaults',
            entities: exploreResults.map(vault => convertToGroupItem(vault))
        });
    }
    return groups;
};

export const getGroupsFromBook = (book: any): EntitiesGroup[] => {
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
            entities: [convertToGroupItem(language)]
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

export const getGroupsFromInfluence = (influence: any): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    const { aspects, foundInLocation, fromDreamingIn, fromBook, decaysTo, decaysFrom } = influence;
    if (aspects.length > 0) {
        groups.push({
            label: 'Aspects',
            entities: aspects.map(aspect => createAspectGroupItem(aspect))
        });
    }
    if (foundInLocation.length || fromDreamingIn.length || fromBook.length) {
        const locations = foundInLocation.map(location => convertToGroupItem(location.Location));
        const fromDreaming = fromDreamingIn.map(location => convertToGroupItem(location));
        const books = fromBook.map(book => convertToGroupItem(book));
        groups.push({
            label: 'Found From',
            entities: [ ...locations, ...fromDreaming, ...books ]
        });
    }
    if (decaysTo) {
        groups.push({
            label: 'Decays to',
            entities: [ convertToGroupItem(decaysTo) ]
        });
    }
    if (decaysFrom.length) {
        groups.push({
            label: 'Decays from',
            entities: decaysFrom.map(influenceOrig => convertToGroupItem(influenceOrig))
        });
    }
    return groups;
};

export const getGroupsFromMansusDoor = (door: any): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    const { options } = door;
    if (options.length) {
        groups.push({
            label: 'Options',
            entities: options.map(option => convertToGroupItem(option))
        });
    }
    return groups;
};

export const getGroupsFromMansusDoorOption = (doorOption: any): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    const { door, influenceRewards, ingredientRewards, languageRewards, loreRewards } = doorOption;
    if (door) {
        groups.push({
            label: 'Door',
            entities: [ convertToGroupItem(door) ]
        });
    }
    if (influenceRewards.length || ingredientRewards.length || languageRewards.length || loreRewards.length) {
        const rewards = [ ...influenceRewards, ...ingredientRewards, ...languageRewards, ...loreRewards ];
        groups.push({
            label: 'Rewards',
            entities: rewards.map(reward => convertToGroupItem(reward))
        });
    }
    return groups;
};

export const getGroupsFromRite = (rite: any): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    const { fromBook } = rite;
    if (fromBook.length) {
        groups.push({
            label: 'From book',
            entities: fromBook.map(book => convertToGroupItem(book))
        });
    }
    return groups;
};

export const getGroupsFromTool = (tool: any): EntitiesGroup[] => {
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
