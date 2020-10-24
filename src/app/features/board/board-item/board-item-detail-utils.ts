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
