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

export class SaveItemInput {
    name: string;
    itemType: string;
    // Lore and influence info
    aspect?: string;
    quantity?: number;
    // Book related info
    language?: string;
}
