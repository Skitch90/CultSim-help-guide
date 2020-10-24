import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
    GET_BOOKS, GET_BOOK, SET_BOOK_LOCATION,
    SET_BOOK_INFLUENCE_RESULT, SET_BOOK_LANGUAGE_RESULT, SET_BOOK_LORE_RESULT, SET_BOOK_RITE_RESULT, SET_BOOK_TOOL_RESULT
} from './queries/book-queries';
import { GET_ENTITY, GET_ENTITY_WITH_ASPECT } from './queries/entity-queries';
import {
    GET_INGREDIENTS, SET_INGREDIENT_LOCATION, SET_INGREDIENT_DREAMING_RESULT, GET_INGREDIENT
} from './queries/ingredient-queries';
import {
    GetLanguagesDocument, GetLanguageDocument, SetLanguageRequiresDocument, SetLanguageDreamingResultDocument,
    SaveMansusDoorOptionDocument, SetMansusDoorOptionDocument, GetMansusDoorDocument, GetMansusDoorOptionDocument,
    GetToolsDocument, GetToolDocument, SetToolLocationDocument, GetRitesDocument, GetRiteDocument} from './operations';
import {
    GET_LOCATIONS, GET_LOCATION, SET_LOCATION_OBSTACLE,
    GET_OBSTACLES} from './queries/location-queries';
import {
    GET_LORES, GET_LORE, SET_LORE_EXPLORING_LOCATION, SET_LORE_DREAMING_RESULT, SET_LORE_UPGRADE
} from './queries/lore-queries';
import { SaveLocationRewardInput, SaveMansusDoorOptionInput, Reward } from './graphql.types';
import { Entity } from 'src/app/shared/model';
import { GET_DESIRES, ADD_DESIRE_CHANGE } from './queries/desire-queries';
import { GetInfluenceDocument, GetInfluencesDocument, SetInfluenceDecayDocument,
    SetInfluenceDreamingResultDocument, SetInfluenceLocationDocument } from './operations';

@Injectable({
    providedIn: 'root'
})
export class GraphqlService {

    constructor(private apollo: Apollo) { }


    async getEntities(name: string): Promise<Entity[]> {
        const { data } = await this.apollo.query<any>({
            query: GET_ENTITY,
            variables: {
                name
            }
        }).toPromise();

        const result = data.entityWithName.map(item => {
            return {
                id: item._id,
                name: item.name,
                label: item.label,
                aspects: item.aspects.map(aspect => {
                    return {
                        aspect: aspect.aspect,
                        quantity: aspect.quantity
                    };
                })
            };
        });

        return result;
    }

    getEntitiesByAspect(aspect: string) {
        return this.apollo.watchQuery<any>({
            query: GET_ENTITY_WITH_ASPECT,
            variables: {
                aspect
            }
        });
    }

    private getObjects = async (query, getListFunc) => {
        const { data } = await this.apollo.query<any>({ query }).toPromise();
        return getListFunc(data).map(item => item.name);
    }

    private getObject = (name: string, query) => this.apollo.watchQuery<any>({ query, variables: { name } });

    getLanguages = () => this.getObjects(GetLanguagesDocument, data => data.Language);

    getLanguage = (name: string) => this.getObject(name, GetLanguageDocument);

    async getLocations() {
        const { data } = await this.apollo.query<any>({
            query: GET_LOCATIONS
        }).toPromise();
        return data.Location;
    }

    getLocation(name: string) {
        return this.apollo.watchQuery<any>({
            query: GET_LOCATION,
            variables: {
                location: name
            }
        });
    }

    getLores = () => this.getObjects(GET_LORES, data => data.Lore);

    getLore = (name: string) => this.getObject(name, GET_LORE);

    getBooks = () => this.getObjects(GET_BOOKS, data => data.Book);

    getBook = (title: string) => this.getObject(title, GET_BOOK);

    getDesires = () => this.getObjects(GET_DESIRES, data => data.Desire);

    getInfluences = () => this.getObjects(GetInfluencesDocument, data => data.Influence);

    getInfluence = (influence: string) => this.getObject(influence, GetInfluenceDocument);

    getIngredients = () => this.getObjects(GET_INGREDIENTS, data => data.Ingredient);

    getIngredient = (name: string) => this.getObject(name, GET_INGREDIENT);

    getLocationObstacles = () => this.getObjects(GET_OBSTACLES, data => data.ExpeditionObstacle);

    getRites = () => this.getObjects(GetRitesDocument, data => data.Rite);

    getRite = (name: string) => this.getObject(name, GetRiteDocument);

    getTools = () => this.getObjects(GetToolsDocument, data => data.Tool);

    getTool = (name: string) => this.getObject(name, GetToolDocument);

    getMansusDoor = (name: string) => this.getObject(name, GetMansusDoorDocument);

    getMansusDoorOption = (name: string) => this.getObject(name, GetMansusDoorOptionDocument);

    async saveInfluenceDecay(params) {
        try {
            const { originInfluence, influence } = params;
            await this.apollo.mutate({
                mutation: SetInfluenceDecayDocument,
                variables: {
                    originInfluence,
                    influence
                },
                refetchQueries: [
                    {
                        query: GetInfluenceDocument,
                        variables: {
                            name: originInfluence
                        }
                    },
                    {
                        query: GetInfluenceDocument,
                        variables: {
                            name: influence
                        }
                    }
                ]
            }).toPromise();
        } catch (err) {
            console.error(err);
        }
    }

    setLoreUpgrade = async (params) => {
        try {
            const { startLore, lore } = params;
            await this.apollo.mutate({
                mutation: SET_LORE_UPGRADE,
                variables: {
                    startLore,
                    lore
                },
                refetchQueries: [
                    {
                        query: GET_LORE,
                        variables: { name: startLore }
                    },
                    {
                        query: GET_LORE,
                        variables: { name: lore }
                    }
                ]
            }).toPromise();
        } catch (error) {
            console.error(error);
        }
    }

     saveMansusDoorOption = async (params: SaveMansusDoorOptionInput) => {
         try {
             const { door, option } = params;

             await this.apollo.mutate({
                 mutation: SaveMansusDoorOptionDocument,
                 variables: {
                     option
                 }
             }).toPromise();
             await this.apollo.mutate({
                 mutation: SetMansusDoorOptionDocument,
                 variables: {
                     door,
                     option
                 },
                 refetchQueries: [
                     {
                         query: GetMansusDoorDocument,
                         variables: { name: door }
                     },
                     {
                         query: GetMansusDoorOptionDocument,
                         variables: { name: option }
                     }
                 ]
             }).toPromise();
         } catch (err) {
             console.error(err);
         }
     }

    saveSecretHistoryLocation = async (params) => {
        const { history, location } = params;
        try {
            await this.apollo.mutate({
                mutation: SET_LORE_EXPLORING_LOCATION,
                variables: {
                    lore: history,
                    location
                },
                refetchQueries: [
                    {
                        query: GET_LOCATION,
                        variables: {
                            location
                        }
                    },
                    {
                        query: GET_LORE,
                        variables: {
                            name: history
                        }
                    }
                ]
            }).toPromise();
        } catch (err) {
            console.error(err);
        }
    }

    saveLocationObstacle = async (params) => {
        try {
            const { location } = params;
            const obstacles = new Set(params.obstacles.map(item => item.obstacle));
            obstacles.forEach(async obstacle => {
                this.apollo.mutate({
                    mutation: SET_LOCATION_OBSTACLE,
                    variables: {
                        location,
                        obstacle
                    },
                    refetchQueries: [{
                        query: GET_LOCATION,
                        variables: {
                            location
                        }
                    }]
                }).toPromise();
            });
        } catch (err) {
            console.error(err);
        }
    }

    saveLocationReward = (params: SaveLocationRewardInput) => {
        try {
            const { location, rewards, chance } = params;
            rewards.forEach(async reward => {
                const { type } = reward;
                if (type === 'Book') {
                    this.executeSaveLocationReward(reward, location, chance, SET_BOOK_LOCATION, GET_BOOK);
                } else if (type === 'Ingredient') {
                    this.executeSaveLocationReward(reward, location, chance, SET_INGREDIENT_LOCATION, GET_INGREDIENT);
                } else if (type === 'Influence') {
                    this.executeSaveLocationReward(reward, location, chance, SetInfluenceLocationDocument, GetInfluenceDocument);
                } else if (type === 'Tool') {
                    this.executeSaveLocationReward(reward, location, chance, SetToolLocationDocument, GetToolDocument);
                }
            });
        } catch (err) {
            console.error(err);
        }
    }

    private async executeSaveLocationReward(reward: Reward, location: string, chance: boolean, mutation: any, refetchQuery?: any) {
        const name = reward.name;
        const refetchQueries: any[] = [{
            query: GET_LOCATION,
            variables: {
                location
            }
        }];
        if (refetchQuery) {
            refetchQueries.push({
                query: refetchQuery,
                variables: {
                    name
                }
            });
        }
        await this.apollo.mutate({
            mutation,
            variables: {
                name,
                location,
                chance
            },
            refetchQueries
        }).toPromise();
    }

    saveBookReward = async (params) => {
        try {
            const book = params.book;
            const rewards = params.rewards as any[];
            rewards.forEach(async reward => {
                const { type, name } = reward;
                switch (type) {
                case 'Influence': {
                    this.executeSaveBookReward(SET_BOOK_INFLUENCE_RESULT, book, name, GetInfluenceDocument);
                    break;
                }
                case 'Language': {
                    const saveResult = await this.executeSaveBookReward(SET_BOOK_LANGUAGE_RESULT, book, name, GetLanguageDocument);
                    const requiredLang = saveResult.data.AddBookTeachesLanguage.from.language.name;
                    await this.apollo.mutate({
                        mutation: SetLanguageRequiresDocument,
                        variables: {
                            language: name,
                            requiredLanguage: requiredLang
                        },
                        refetchQueries: [
                            {
                                query: GetLanguageDocument,
                                variables: { name }
                            }
                        ]
                    }).toPromise();
                    break;
                }
                case 'Lore': {
                    this.executeSaveBookReward(SET_BOOK_LORE_RESULT, book, name, GET_LORE);
                    break;
                }
                case 'Rite': {
                    this.executeSaveBookReward(SET_BOOK_RITE_RESULT, book, name, GetRiteDocument);
                    break;
                }
                case 'Tool': {
                    this.executeSaveBookReward(SET_BOOK_TOOL_RESULT, book, name, GetToolDocument);
                    break;
                }
                default: {
                    console.error('Book reward type', type, 'not managed');
                }
                }
            });
        } catch (err) {
            console.error(err);
        }
    }

    private async executeSaveBookReward(mutation: any, bookTitle: string, rewardName: string, refetchQuery?: any) {
        const refetchQueries = [{
            query: GET_BOOK,
            variables: { name: bookTitle }
        }];
        if (refetchQuery) {
            refetchQueries.push({
                query: refetchQuery,
                variables: { name: rewardName }
            });
        }

        return await this.apollo.mutate<any>({
            mutation,
            variables: {
                book: bookTitle,
                name: rewardName
            },
            refetchQueries
        }).toPromise();
    }

    async saveMansusReward(params) {
        try {
            const { door, rewardType, lore, influence, language, ingredient } = params;
            const getMansusDoorOptionQuery = {
                query: GetMansusDoorOptionDocument,
                variables: { name: door }
            };
            if (rewardType === 'Language') {
                await this.apollo.mutate({
                    mutation: SetLanguageDreamingResultDocument,
                    variables: {
                        door,
                        language
                    },
                    refetchQueries: [
                        getMansusDoorOptionQuery,
                        {
                            query: GetLanguageDocument,
                            variables: { name: language }
                        }
                    ]
                }).toPromise();
            } else if (rewardType === 'Lore') {
                await this.apollo.mutate({
                    mutation: SET_LORE_DREAMING_RESULT,
                    variables: {
                        door,
                        lore
                    },
                    refetchQueries: [
                        getMansusDoorOptionQuery,
                        {
                            query: GET_LORE,
                            variables: { name: lore }
                        }
                    ]
                }).toPromise();
            } else if (rewardType === 'Influence') {
                await this.apollo.mutate({
                    mutation: SetInfluenceDreamingResultDocument,
                    variables: {
                        door,
                        influence
                    },
                    refetchQueries: [
                        getMansusDoorOptionQuery,
                        {
                            query: GetInfluenceDocument,
                            variables: {
                                name: influence
                            }
                        }
                    ]
                }).toPromise();
            } else if (rewardType === 'Ingredient') {
                await this.apollo.mutate({
                    mutation: SET_INGREDIENT_DREAMING_RESULT,
                    variables: {
                        door,
                        ingredient
                    },
                    refetchQueries: [
                        getMansusDoorOptionQuery,
                        {
                            query: GET_INGREDIENT,
                            variables: { name: ingredient }
                        }
                    ]
                }).toPromise();
            } else {
                console.error('Unmanaged rewardType', rewardType);
            }
        } catch (err) {
            console.error(err);

        }
    }

    saveDesireChange = async (params) => {
        try {
            const { startDesire, desire, ingredient1, ingredient2 } = params;
            await this.apollo.mutate({
                mutation: ADD_DESIRE_CHANGE,
                variables: {
                    fromDesire: startDesire,
                    toDesire: desire,
                    ingredient1: ingredient1.name,
                    ingredient2: ((ingredient2) ? ingredient2.name : '')
                }
            }).toPromise();
        } catch (err) {
            console.error(err);
        }
    }
}
