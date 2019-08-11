export class SaveMansusDoorOptionInput {
    door: string;
    option: string;
}

export class SaveLocationRewardInput {
    location: string;
    name: string;
    rewardType: string;
    language: string;
    newLanguage: boolean;
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
