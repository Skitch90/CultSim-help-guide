import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ASPECTS, CREATE_ASPECT } from './queries/aspect-queries';
import {
    GET_BOOKS, GET_BOOK, CREATE_BOOK, SET_BOOK_LANGUAGE, SET_BOOK_LOCATION,
    SET_BOOK_INFLUENCE_RESULT, SET_BOOK_LANGUAGE_RESULT, SET_BOOK_LORE_RESULT
} from './queries/book-queries';
import { GET_ENTITY, GET_ENTITY_WITH_ASPECT } from './queries/entity-queries';
import {
    GET_INFLUENCES, CREATE_INFLUENCE, SET_INFLUENCE_ASPECT, SET_INFLUENCE_DECAY, SET_INFLUENCE_LOCATION, SET_INFLUENCE_DREAMING_RESULT
} from './queries/influence-queries';
import {
    GET_INGREDIENTS, CREATE_INGREDIENT, SET_INGREDIENT_ASPECT, SET_INGREDIENT_LOCATION, SET_INGREDIENT_DREAMING_RESULT
} from './queries/ingredient-queries';
import { GET_LANGUAGES, CREATE_LANGUAGE, SET_LANGUAGE_DREAMING_RESULT } from './queries/language-queries';
import {
    GET_LOCATIONS, GET_LOCATION, CREATE_LOCATION, SET_LOCATION_OBSTACLE,
    GET_OBSTACLES, CREATE_OBSTACLE, SET_OBSTACLE_ASPECT
} from './queries/location-queries';
import {
    GET_LORES, GET_LORE, CREATE_LORE, SET_LORE_ASPECT, SET_LORE_EXPLORING_LOCATION, SET_LORE_DREAMING_RESULT
} from './queries/lore-queries';
import { CREATE_MANSUS_DOOR, CREATE_MANSUS_DOOR_OPTION, SET_MANSUS_DOOR_OPTION } from './queries/mansus-door-queries';
import { CREATE_TOOL, GET_TOOLS, SET_TOOL_ASPECT, SET_TOOL_LOCATION } from './queries/tool-queries';
import { SaveLocationRewardInput, SaveItemInput, SaveMansusDoorOptionInput, Reward } from './graphql.types';
import { Entity } from 'src/app/shared/model';

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

    async getLanguages() {
        const { data } = await this.apollo.query<any>({
            query: GET_LANGUAGES
        }).toPromise();

        return data.Language.map(item => item.name);
    }

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

    async getLores() {
        const { data } = await this.apollo.query<any>({ query: GET_LORES }).toPromise();
        return data.Lore.map(item => item.name);
    }

    getLore(name: string) {
        return this.apollo.watchQuery<any>({
            query: GET_LORE,
            variables: {
                name
            }
        });
    }

    async getAspects() {
        const { data } = await this.apollo.query<any>({
            query: GET_ASPECTS
        }).toPromise();

        return data.Aspect.map(item => item.name);
    }

    getBooks = async () => {
        const { data } = await this.apollo.query<any>({ query: GET_BOOKS }).toPromise();
        return data.Book.map(item => item.name);
    }

    getBook(title: string) {
        return this.apollo.watchQuery<any>({
            query: GET_BOOK,
            variables: {
                name: title
            }
        });
    }

    getInfluences = async () => {
        const { data } = await this.apollo.query<any>({ query: GET_INFLUENCES }).toPromise();
        return data.Influence.map(item => item.name);
    }

    getIngredients = async () => {
        const { data } = await this.apollo.query<any>({ query: GET_INGREDIENTS }).toPromise();
        return data.Ingredient.map(item => item.name);
    }

    async getLocationObstacles() {
        const { data } = await this.apollo.query<any>({ query: GET_OBSTACLES }).toPromise();
        return data.ExpeditionObstacle.map(item => item.name);
    }

    getTools = async () => {
        const { data } = await this.apollo.query<any>({ query: GET_TOOLS }).toPromise();
        return data.Tool.map(item => item.name);
    }

    async saveItem(params: SaveItemInput) {
        try {
            const { name, itemType, aspects, language, vault } = params;

            if (itemType === 'Aspect') {
                await this.apollo.mutate({
                    mutation: CREATE_ASPECT,
                    variables: {
                        name
                    },
                    refetchQueries: [{
                        query: GET_ASPECTS
                    }]
                }).toPromise();
            } else if (itemType === 'Book') {
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
                        refetchQueries: [{
                            query: GET_ENTITY_WITH_ASPECT,
                            variables: {
                                aspect
                            }
                        }]
                    }).toPromise();
                });
            } else if (itemType === 'Tool') {
                this.saveItemWithAspects(params, CREATE_TOOL, GET_TOOLS, SET_TOOL_ASPECT);
            }
        } catch (err) {
            console.error(err);
        }
    }

    async saveItemWithAspects(data: SaveItemInput, createMutation, createRefetchQuery, setAspectMutation) {
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
                }
            }).toPromise();
        } catch (err) {
            console.error(err);
        }
    }

    async saveMansusDoorOption(params: SaveMansusDoorOptionInput) {
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
                }
            }).toPromise();
        } catch (err) {
            console.error(err);
        }
    }

    async saveSecretHistoryLocation(params) {
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

    async saveLocationObstacle(params) {
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

    async saveLocationReward(params: SaveLocationRewardInput) {
        try {
            const { location, rewards, chance } = params;
            rewards.forEach(async reward => {
                const { type } = reward;
                if (type === 'Book') {
                    this.executeSaveLocationReward(reward, location, chance, SET_BOOK_LOCATION, GET_BOOK);
                } else if (type === 'Ingredient') {
                    this.executeSaveLocationReward(reward, location, chance, SET_INGREDIENT_LOCATION);
                } else if (type === 'Influence') {
                    this.executeSaveLocationReward(reward, location, chance, SET_INFLUENCE_LOCATION);
                } else if (type === 'Tool') {
                    this.executeSaveLocationReward(reward, location, chance, SET_TOOL_LOCATION);
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

    async saveBookReward(params) {
        try {
            const book = params.book;
            const rewards = params.rewards as any[];
            rewards.forEach(async reward => {
                const { type, name } = reward;
                switch (type) {
                    case 'Influence': {
                        await this.apollo.mutate({
                            mutation: SET_BOOK_INFLUENCE_RESULT,
                            variables: {
                                title: book,
                                influence: name
                            },
                            refetchQueries: [{
                                query: GET_BOOK,
                                variables: {
                                    name: book
                                }
                            }]
                        }).toPromise();
                        break;
                    }
                    case 'Language': {
                        await this.apollo.mutate({
                            mutation: SET_BOOK_LANGUAGE_RESULT,
                            variables: {
                                title: book,
                                language: name
                            },
                            refetchQueries: [{
                                query: GET_BOOK,
                                variables: {
                                    name: book
                                }
                            }]
                        }).toPromise();
                        break;
                    }
                    case 'Lore': {
                        await this.apollo.mutate({
                            mutation: SET_BOOK_LORE_RESULT,
                            variables: {
                                title: book,
                                lore: name
                            },
                            refetchQueries: [{
                                query: GET_BOOK,
                                variables: {
                                    name: book
                                }
                            }]
                        }).toPromise();
                        break;
                    }
                    // <mat-option value="Ritual">Ritual</mat-option>
                    default: {
                        console.error('Book reward type', type, 'not managed');
                    }
                }
            });
        } catch (err) {
            console.error(err);
        }
    }

    async saveMansusReward(params) {
        try {
            const { door, rewardType, lore, influence, language, ingredient } = params;
            if (rewardType === 'Language') {
                await this.apollo.mutate({
                    mutation: SET_LANGUAGE_DREAMING_RESULT,
                    variables: {
                        door,
                        language
                    }
                }).toPromise();
            } else if (rewardType === 'Lore') {
                await this.apollo.mutate({
                    mutation: SET_LORE_DREAMING_RESULT,
                    variables: {
                        door,
                        lore
                    }
                }).toPromise();
            } else if (rewardType === 'Influence') {
                await this.apollo.mutate({
                    mutation: SET_INFLUENCE_DREAMING_RESULT,
                    variables: {
                        door,
                        influence
                    }
                }).toPromise();
            } else if (rewardType === 'Ingredient') {
                await this.apollo.mutate({
                    mutation: SET_INGREDIENT_DREAMING_RESULT,
                    variables: {
                        door,
                        ingredient
                    }
                }).toPromise();
            } else {
                console.error('Unmanaged rewardType', rewardType);
            }
        } catch (err) {
            console.error(err);

        }
    }
}
