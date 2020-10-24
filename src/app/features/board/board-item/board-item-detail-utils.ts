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
