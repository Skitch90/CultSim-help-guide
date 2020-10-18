import { EntitiesGroupItem } from '../../../shared/model';
import { Aspect as ModelAspect, Follower as ModelFollower } from '../model';

type Aspect = { __typename?: 'Aspect'; } & Pick<ModelAspect, 'name' | '_id'>;

export type Follower = {
    __typename?: 'Follower';
} & Pick<ModelFollower, 'name' | '_id'> & {
    aspects: Aspect[];
};

export const createAspectGroupItem = ({ _id, name: aspectName, __typename }: Aspect): EntitiesGroupItem => {
    return {
        id: +_id,
        label: __typename,
        name: aspectName
    };
};


