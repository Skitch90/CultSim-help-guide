import { EntitiesGroup, EntitiesGroupItem } from 'src/app/shared/model';

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

export const getGroupsFromLocation = (location: any): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    const { histories, obstacles, bookRewards, influenceRewards, ingredientRewards, toolRewards } = location;
    if (histories.length > 0) {
        groups.push({
            label: 'From histories',
            entities: histories.map(history => convertToGroupItem(history))
        });
    }
    if (obstacles.length > 0) {
        groups.push({
            label: 'Obstacles',
            entities: obstacles.map(obstacle => {
                const { _id, name, __typename, defeatedWith } = obstacle;
                return {
                    id: _id,
                    name,
                    label: __typename,
                    aspects: defeatedWith.map(item => item.name)
                };
            })
        });
    }
    if (bookRewards.length || influenceRewards.length || ingredientRewards.length || toolRewards.length) {
        const rewards = [...bookRewards, ...influenceRewards, ...ingredientRewards, ...toolRewards];
        const groupItems = rewards.map(item => convertToGroupItem(item));
        groups.push({
            label: 'Rewards',
            entities: groupItems
        });
    }
    return groups;
};

export const getGroupsFromLore = (lore: any): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    const { aspects, exploreResults, fromBook, fromDreamingIn, upgradesTo } = lore;
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
    const { foundInLocation, language, teachesLanguage, studiedIntoLore, teachesRite, resultsInInfluence } = book;
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
        const rewards = [
            ...loreRewards,
            ...riteReward,
            ...influenceRewards
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

export const getGroupsFromEntities = (entityGroups: any[]): EntitiesGroup[] => {
    return entityGroups.map(entityGroup => {
        const { label, entities } = entityGroup;
        return {
            label,
            entities: entities.map(entity => {
                const { _id, name, type, aspectQuantity } = entity;
                return {
                    id: _id,
                    name,
                    label: type,
                    aspectQuantity
                };
            })
        };
    });
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

export const getGroupsFromIngredient = (ingredient: any): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    const { aspects, foundInLocation, fromDreamingIn } = ingredient;
    if (aspects.length > 0) {
        groups.push({
            label: 'Aspects',
            entities: aspects.map(aspect => createAspectGroupItem(aspect))
        });
    }
    if (foundInLocation.length || fromDreamingIn.length) {
        const locations = foundInLocation.map(location => convertToGroupItem(location.Location));
        const fromDreaming = fromDreamingIn.map(location => convertToGroupItem(location));
        groups.push({
            label: 'Found From',
            entities: [ ...locations, ...fromDreaming ]
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

export const getGroupsFromTool = (tool: any): EntitiesGroup[] => {
    const groups: EntitiesGroup[] = [];
    const { aspects, foundInLocation } = tool;
    if (aspects.length > 0) {
        groups.push({
            label: 'Aspects',
            entities: aspects.map(aspect => createAspectGroupItem(aspect))
        });
    }
    if (foundInLocation.length) {
        groups.push({
            label: 'Found From',
            entities: foundInLocation.map(location => convertToGroupItem(location.Location))
        });
    }
    return groups;
};
