import { EntitiesGroup, EntitiesGroupItem } from 'src/app/shared/model';

const convertToGroupItem = (item): EntitiesGroupItem => {
    const { aspects } = item;
    const aspect = (aspects && aspects.length === 1) ? aspects[0] : null;
    return {
        id: item._id,
        name: item.name,
        label: item.__typename,
        aspect: (aspect && aspect.Aspect) ? aspect.Aspect.name : null,
        aspectQuantity: aspect !== null ? aspect.quantity : null
    };
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
    const { aspects, exploreResults } = lore;
    if (aspects.length > 0) {
        groups.push({
            label: 'Aspects',
            entities: aspects.map(aspect => createAspectGroupItem(aspect))
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
    const { foundInLocation, language, teachesLanguage, studiedIntoLore, teachesRitual, resultsInInfluence } = book;
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
            entities: [this.convertToGroupItem(teachesLanguage)]
        });
    } else {
        const loreRewards = studiedIntoLore.map(lore => {
            return convertToGroupItem(lore);
        });
        const riteReward = (teachesRitual !== null) ? [convertToGroupItem(teachesRitual)] : [];
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
