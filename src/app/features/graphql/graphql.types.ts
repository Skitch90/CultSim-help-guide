export class SaveMansusDoorOptionInput {
    door: String
    option: String
}

export class SaveLocationRewardInput {
    location: String
    name: String
    rewardType: String
    language: String
    newLanguage: Boolean
    chance: Boolean
}

export class SaveItemInput {
    name: String
    itemType: String
    aspect: String
    quantity: Number
}
