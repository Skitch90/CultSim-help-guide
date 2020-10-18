import { EntitiesGroupItem } from '../../../shared/model';
import { Aspect, GroupItemConvertInput } from './board-item-initiator.types';

export const createAspectGroupItem = ({ _id, name: aspectName, __typename }: Aspect): EntitiesGroupItem => {
    return {
        id: +_id,
        label: __typename,
        name: aspectName
    };
};

export const convertToGroupItem = ({ _id, name, aspects, door, __typename }: GroupItemConvertInput): EntitiesGroupItem => {
    const aspect = (aspects && aspects.length === 1) ? aspects[0] : null;
    const groupItem: EntitiesGroupItem = {
        id: +_id,
        name,
        label: __typename,
        aspect: (aspect && aspect.Aspect) ? aspect.Aspect.name : null,
        aspectQuantity: aspect !== null ? aspect.quantity : null
    };
    if (door) {
        groupItem.mansusDoor = door.name;
    }
    return groupItem;
};
