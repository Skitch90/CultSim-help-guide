export class SaveMansusDoorOptionInput {
    door: string;
    option: string;
}

export class Reward {
    type: string;
    name: string;
}

export class SaveLocationRewardInput {
    location: string;
    rewards: Reward[];
    chance: boolean;
}

export class AspectInfo {
    aspect: string;
    quantity: number;
}

export class SaveItemInput {
    name: string;
    itemType: string;
    // Lore and influence info
    aspects?: AspectInfo[];
    // Book related info
    language?: string;
}
