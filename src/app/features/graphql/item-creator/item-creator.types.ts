export class AspectInfo {
    aspect: string;
    quantity: number;
}

export class ObstacleAspect {
    obstacleAspect: string;
}

export class SaveItemInput {
    name: string;
    itemType: string;
    // Lore and influence info
    aspects?: AspectInfo[];
    // Book related info
    language?: string;
    // Location related info
    vault?: boolean;
    obstacleAspects?: ObstacleAspect[];
    followerAspect?: string;
}
