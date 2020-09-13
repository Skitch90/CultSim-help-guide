import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
    GET_BOOKS, GET_BOOK, CREATE_BOOK, SET_BOOK_LANGUAGE, SET_BOOK_LOCATION,
    SET_BOOK_INFLUENCE_RESULT, SET_BOOK_LANGUAGE_RESULT, SET_BOOK_LORE_RESULT, SET_BOOK_RITE_RESULT, SET_BOOK_TOOL_RESULT
} from './queries/book-queries';
import { GET_ENTITY, GET_ENTITY_WITH_ASPECT } from './queries/entity-queries';
import {
    GET_INFLUENCES, CREATE_INFLUENCE, SET_INFLUENCE_ASPECT, SET_INFLUENCE_DECAY, SET_INFLUENCE_LOCATION,
    SET_INFLUENCE_DREAMING_RESULT, GET_INFLUENCE
} from './queries/influence-queries';
import {
    GET_INGREDIENTS, CREATE_INGREDIENT, SET_INGREDIENT_ASPECT, SET_INGREDIENT_LOCATION, SET_INGREDIENT_DREAMING_RESULT, GET_INGREDIENT
} from './queries/ingredient-queries';
import {
    GET_LANGUAGES, CREATE_LANGUAGE, SET_LANGUAGE_DREAMING_RESULT, SET_LANGUAGE_REQUIRES, GET_LANGUAGE
} from './queries/language-queries';
import {
    GET_LOCATIONS, GET_LOCATION, CREATE_LOCATION, SET_LOCATION_OBSTACLE,
    GET_OBSTACLES, CREATE_OBSTACLE, SET_OBSTACLE_ASPECT
} from './queries/location-queries';
import {
    GET_LORES, GET_LORE, CREATE_LORE, SET_LORE_ASPECT, SET_LORE_EXPLORING_LOCATION, SET_LORE_DREAMING_RESULT, SET_LORE_UPGRADE
} from './queries/lore-queries';
import {
    CREATE_MANSUS_DOOR, CREATE_MANSUS_DOOR_OPTION, SET_MANSUS_DOOR_OPTION, GET_MANSUS_DOOR, GET_MANSUS_DOOR_OPTION
} from './queries/mansus-door-queries';
import { CREATE_TOOL, GET_TOOLS, SET_TOOL_ASPECT, SET_TOOL_LOCATION, GET_TOOL } from './queries/tool-queries';
import { SaveLocationRewardInput, SaveItemInput, SaveMansusDoorOptionInput, Reward } from './graphql.types';
import { Entity } from 'src/app/shared/model';
import { GET_RITES, CREATE_RITE, GET_RITE } from './queries/rite-queries';
import { CREATE_DESIRE, GET_DESIRES, ADD_DESIRE_CHANGE } from './queries/desire-queries';

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

    getLanguages = () => this.getObjects(GET_LANGUAGES, data => data.Language);

    getLanguage = (name: string) => this.getObject(name, GET_LANGUAGE);

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

    getInfluences = () => this.getObjects(GET_INFLUENCES, data => data.Influence);

    getInfluence = (influence: string) => this.getObject(influence, GET_INFLUENCE);

    getIngredients = () => this.getObjects(GET_INGREDIENTS, data => data.Ingredient);

    getIngredient = (name: string) => this.getObject(name, GET_INGREDIENT);

    getLocationObstacles = () => this.getObjects(GET_OBSTACLES, data => data.ExpeditionObstacle);

    getRites = () => this.getObjects(GET_RITES, data => data.Rite);

    getRite = (name: string) => this.getObject(name, GET_RITE);

    getTools = () => this.getObjects(GET_TOOLS, data => data.Tool);

    getTool = (name: string) => this.getObject(name, GET_TOOL);

    getMansusDoor = (name: string) => this.getObject(name, GET_MANSUS_DOOR);

    getMansusDoorOption = (name: string) => this.getObject(name, GET_MANSUS_DOOR_OPTION);

    saveItem = async (params: SaveItemInput) => {
        try {
            const { name, itemType, aspects, language, vault } = params;

            if (itemType === 'Book') {
                await this.apollo.mutate({
                    mutation: CREATE_BOOK,
                    variables: {
                        title: name
                    },
                    refetchQueries: [{
                        query: GET_BOOKS
                    }]
                }).toPromise();

                if (language) {
                    await this.apollo.mutate({
                        mutation: SET_BOOK_LANGUAGE,
                        variables: {
                            title: name,
                            language
                        }
                    }).toPromise();
                }
            } else if (itemType === 'Desire') {
                this.saveItem_(params, CREATE_DESIRE, GET_DESIRES);
            } else if (itemType === 'ExpeditionObstacle') {
                const obstacleAspects = new Set(params.obstacleAspects.map(item => item.obstacleAspect));
                await this.apollo.mutate({
                    mutation: CREATE_OBSTACLE,
                    variables: {
                        name
                    },
                    refetchQueries: [{
                        query: GET_OBSTACLES
                    }]
                }).toPromise();

                obstacleAspects.forEach(async item => {
                    if (item) {
                        await this.apollo.mutate({
                            mutation: SET_OBSTACLE_ASPECT,
                            variables: {
                                obstacle: name,
                                aspect: item
                            }
                        }).toPromise();
                    }
                });
            } else if (itemType === 'Ingredient') {
                this.saveItemWithAspects(params, CREATE_INGREDIENT, GET_INGREDIENTS, SET_INGREDIENT_ASPECT);
            } else if (itemType === 'Language') {
                await this.apollo.mutate({
                    mutation: CREATE_LANGUAGE,
                    variables: {
                        language: name
                    },
                    refetchQueries: [{
                        query: GET_LANGUAGES
                    }]
                }).toPromise();
            } else if (itemType === 'Location') {
                await this.apollo.mutate({
                    mutation: CREATE_LOCATION,
                    variables: {
                        location: name,
                        vault
                    },
                    refetchQueries: [{
                        query: GET_LOCATIONS
                    }]
                }).toPromise();
            } else if (itemType === 'MansusDoor') {
                await this.apollo.mutate({
                    mutation: CREATE_MANSUS_DOOR,
                    variables: {
                        door: name
                    }
                }).toPromise();
            } else if (itemType === 'Lore') {
                this.saveItemWithAspects(params, CREATE_LORE, GET_LORES, SET_LORE_ASPECT);
            } else if (itemType === 'Influence') {
                await this.apollo.mutate({
                    mutation: CREATE_INFLUENCE,
                    variables: {
                        influence: name
                    },
                    refetchQueries: [{
                        query: GET_INFLUENCES
                    }]
                }).toPromise();

                aspects.forEach(async aspectInfo => {
                    const { aspect, quantity } = aspectInfo;
                    await this.apollo.mutate({
                        mutation: SET_INFLUENCE_ASPECT,
                        variables: {
                            influence: name,
                            aspect,
                            quantity: +quantity
                        },
                        refetchQueries: [
                            {
                                query: GET_ENTITY_WITH_ASPECT,
                                variables: {
                                    aspect
                                }
                            }
                        ]
                    }).toPromise();
                });
            } else if (itemType === 'Rite') {
                this.saveItem_(params, CREATE_RITE, GET_RITES);
            } else if (itemType === 'Tool') {
                this.saveItemWithAspects(params, CREATE_TOOL, GET_TOOLS, SET_TOOL_ASPECT);
            }
        } catch (err) {
            console.error(err);
        }
    }

    private async saveItem_(data: SaveItemInput, createMutation, createRefetchQuery) {
        const { name } = data;
        await this.apollo.mutate({
            mutation: createMutation,
            variables: {
                name
            },
            refetchQueries: [{
                query: createRefetchQuery
            }]
        }).toPromise();
    }

    private async saveItemWithAspects(data: SaveItemInput, createMutation, createRefetchQuery, setAspectMutation) {
        const { name, aspects } = data;
        await this.apollo.mutate({
            mutation: createMutation,
            variables: {
                name
            },
            refetchQueries: [{
                query: createRefetchQuery
            }]
        }).toPromise();

        aspects.forEach(async aspectInfo => {
            const { aspect, quantity } = aspectInfo;
            await this.apollo.mutate({
                mutation: setAspectMutation,
                variables: {
                    name,
                    aspect,
                    quantity: +quantity
                },
                refetchQueries: [{
                    query: GET_ENTITY_WITH_ASPECT,
                    variables: {
                        aspect
                    }
                }]
            }).toPromise();
        });
    }

    async saveInfluenceDecay(params) {
        try {
            const { originInfluence, influence } = params;
            await this.apollo.mutate({
                mutation: SET_INFLUENCE_DECAY,
                variables: {
                    originInfluence,
                    influence
                },
                refetchQueries: [
                    {
                        query: GET_INFLUENCE,
                        variables: {
                            name: originInfluence
                        }
                    },
                    {
                        query: GET_INFLUENCE,
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
                mutation: CREATE_MANSUS_DOOR_OPTION,
                variables: {
                    option
                }
            }).toPromise();
            await this.apollo.mutate({
                mutation: SET_MANSUS_DOOR_OPTION,
                variables: {
                    door,
                    option
                },
                refetchQueries: [
                    {
                        query: GET_MANSUS_DOOR,
                        variables: { name: door }
                    },
                    {
                        query: GET_MANSUS_DOOR_OPTION,
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
                    this.executeSaveLocationReward(reward, location, chance, SET_INFLUENCE_LOCATION, GET_INFLUENCE);
                } else if (type === 'Tool') {
                    this.executeSaveLocationReward(reward, location, chance, SET_TOOL_LOCATION, GET_TOOL);
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
                        this.executeSaveBookReward(SET_BOOK_INFLUENCE_RESULT, book, name, GET_INFLUENCE);
                        break;
                    }
                    case 'Language': {
                        const saveResult = await this.executeSaveBookReward(SET_BOOK_LANGUAGE_RESULT, book, name, GET_LANGUAGE);
                        const requiredLang = saveResult.data.AddBookTeachesLanguage.from.language.name;
                        await this.apollo.mutate({
                            mutation: SET_LANGUAGE_REQUIRES,
                            variables: {
                                language: name,
                                requiredLanguage: requiredLang
                            },
                            refetchQueries: [
                                {
                                    query: GET_LANGUAGE,
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
                        this.executeSaveBookReward(SET_BOOK_RITE_RESULT, book, name, GET_RITE);
                        break;
                    }
                    case 'Tool': {
                        this.executeSaveBookReward(SET_BOOK_TOOL_RESULT, book, name, GET_TOOL);
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
                query: GET_MANSUS_DOOR_OPTION,
                variables: { name: door }
            };
            if (rewardType === 'Language') {
                await this.apollo.mutate({
                    mutation: SET_LANGUAGE_DREAMING_RESULT,
                    variables: {
                        door,
                        language
                    },
                    refetchQueries: [
                        getMansusDoorOptionQuery,
                        {
                            query: GET_LANGUAGE,
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
                    mutation: SET_INFLUENCE_DREAMING_RESULT,
                    variables: {
                        door,
                        influence
                    },
                    refetchQueries: [
                        getMansusDoorOptionQuery,
                        {
                            query: GET_INFLUENCE,
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
