import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
    GET_ENTITY_QUERY, GET_LANGUAGES_QUERY, GET_ASPECTS_QUERY, GET_LORES_QUERY,
    CREATE_ASPECT_MUTATION, CREATE_LANGUAGE_MUTATION, CREATE_BOOK_MUTATION, SET_BOOK_LOCATION_MUTATION,
    SET_BOOK_LANGUAGE_MUTATION, SET_BOOK_LORE_RESULT_MUTATION, CREATE_LORE_MUTATION, SET_LORE_ASPECT_MUTATION,
    CREATE_MANSUS_DOOR_MUTATION, CREATE_MANSUS_DOOR_OPTION_MUTATION, SET_MANSUS_DOOR_OPTION_MUTATION,
    SET_LORE_DREAMING_RESULT_MUTATION,
    GET_INFLUENCES_QUERY,
    CREATE_INFLUENCE_MUTATION,
    SET_INFLUENCE_ASPECT_MUTATION,
    SET_INFLUENCE_DREAMING_RESULT_MUTATION,
    SET_INFLUENCE_DECAY_MUTATION,
    CREATE_LOCATION_MUTATION,
    SET_BOOK_LANGUAGE_RESULT_MUTATION,
    GET_ENTITY_WITH_ASPECT_QUERY,
    SET_BOOK_INFLUENCE_RESULT_MUTATION,
    GET_BOOKS_QUERY,
    SET_LANGUAGE_DREAMING_RESULT_MUTATION,
    GET_BOOK_QUERY,
    CREATE_INGREDIENT_MUTATION,
    GET_INGREDIENTS_QUERY,
    SET_INGREDIENT_ASPECT_MUTATION,
    CREATE_TOOL_MUTATION,
    GET_TOOLS_QUERY,
    SET_TOOL_ASPECT_MUTATION,
    GET_LORE_QUERY,
    GET_LOCATIONS_QUERY,
    SET_LORE_EXPLORING_LOCATION_MUTATION,
    GET_LOCATION_QUERY,
    CREATE_OBSTACLE_MUTATION,
    SET_OBSTACLE_ASPECT_MUTATION,
    GET_OBSTACLES_QUERY,
    SET_LOCATION_OBSTACLE_MUTATION,
    SET_INGREDIENT_LOCATION_MUTATION,
    SET_INFLUENCE_LOCATION_MUTATION,
    SET_TOOL_LOCATION_MUTATION
} from './queries';
import { SaveLocationRewardInput, SaveItemInput, SaveMansusDoorOptionInput, Reward } from './graphql.types';
import { Entity } from 'src/app/shared/model';

@Injectable({
    providedIn: 'root'
})
export class GraphqlService {

    constructor(private apollo: Apollo) { }


    async getEntities(name: string): Promise<Entity[]> {
        const { data } = await this.apollo.query<any>({
            query: GET_ENTITY_QUERY,
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

    async getEntitiesByAspect(aspect: string) {
        const { data } = await this.apollo.query<any>({
            query: GET_ENTITY_WITH_ASPECT_QUERY,
            variables: {
                aspect
            }
        }).toPromise();

        return data.entityWithAspect.map(entityGroup => {
            return {
                label: entityGroup.label,
                entities: entityGroup.entities.map(entity => {
                    return {
                        id: entity._id,
                        name: entity.name,
                        label: entity.type,
                        aspectQuantity: entity.aspectQuantity
                    };
                })
            };
        });
    }

    async getLanguages() {
        const { data } = await this.apollo.query<any>({
            query: GET_LANGUAGES_QUERY
        }).toPromise();

        return data.Language.map(item => item.name);
    }

    async getLocations() {
        const { data } = await this.apollo.query<any>({
            query: GET_LOCATIONS_QUERY
        }).toPromise();
        return data.Location;
    }

    async getLocation(name: string) {
        const { data } = await this.apollo.query<any>({
            query: GET_LOCATION_QUERY,
            variables: {
                location: name
            }
        }).toPromise();
        return data.Location;
    }

    async getLores() {
        const { data } = await this.apollo.query<any>({ query: GET_LORES_QUERY }).toPromise();
        return data.Lore.map(item => item.name);
    }

    async getLore(name: string) {
        const { data } = await this.apollo.query<any>({
            query: GET_LORE_QUERY,
            variables: {
                name
            }
        }).toPromise();
        return data.Lore;
    }

    async getAspects() {
        const { data } = await this.apollo.query<any>({
            query: GET_ASPECTS_QUERY
        }).toPromise();

        return data.Aspect.map(item => item.name);
    }

    getBooks = async () => {
        const { data } = await this.apollo.query<any>({ query: GET_BOOKS_QUERY }).toPromise();
        return data.Book.map(item => item.name);
    }

    async getBook(title: string) {
        const { data } = await this.apollo.query<any>({
            query: GET_BOOK_QUERY,
            variables: {
                title
            }
        }).toPromise();
        return data.Book;
    }

    getInfluences = async () => {
        const { data } = await this.apollo.query<any>({ query: GET_INFLUENCES_QUERY }).toPromise();
        return data.Influence.map(item => item.name);
    }

    getIngredients = async () => {
        const { data } = await this.apollo.query<any>({ query: GET_INGREDIENTS_QUERY }).toPromise();
        return data.Ingredient.map(item => item.name);
    }

    async getLocationObstacles() {
        const { data } = await this.apollo.query<any>({ query: GET_OBSTACLES_QUERY }).toPromise();
        return data.ExpeditionObstacle.map(item => item.name);
    }

    getTools = async () => {
        const { data } = await this.apollo.query<any>({ query: GET_TOOLS_QUERY }).toPromise();
        return data.Tool.map(item => item.name);
    }

    async saveItem(params: SaveItemInput) {
        try {
            const { name, itemType, aspects, language, vault } = params;

            if (itemType === 'Aspect') {
                await this.apollo.mutate({
                    mutation: CREATE_ASPECT_MUTATION,
                    variables: {
                        name
                    },
                    refetchQueries: [{
                        query: GET_ASPECTS_QUERY
                    }]
                }).toPromise();
            } else if (itemType === 'Book') {
                await this.apollo.mutate({
                    mutation: CREATE_BOOK_MUTATION,
                    variables: {
                        title: name
                    },
                    refetchQueries: [{
                        query: GET_BOOKS_QUERY
                    }]
                }).toPromise();

                if (language) {
                    await this.apollo.mutate({
                        mutation: SET_BOOK_LANGUAGE_MUTATION,
                        variables: {
                            title: name,
                            language
                        }
                    }).toPromise();
                }
            } else if (itemType === 'ExpeditionObstacle') {
                const obstacleAspects = new Set(params.obstacleAspects.map(item => item.obstacleAspect));
                await this.apollo.mutate({
                    mutation: CREATE_OBSTACLE_MUTATION,
                    variables: {
                        name
                    },
                    refetchQueries: [{
                        query: GET_OBSTACLES_QUERY
                    }]
                }).toPromise();

                obstacleAspects.forEach(async item => {
                    if (item) {
                        await this.apollo.mutate({
                            mutation: SET_OBSTACLE_ASPECT_MUTATION,
                            variables: {
                                obstacle: name,
                                aspect: item
                            }
                        }).toPromise();
                    }
                });
            } else if (itemType === 'Ingredient') {
                this.saveItemWithAspects(params, CREATE_INGREDIENT_MUTATION, GET_INGREDIENTS_QUERY, SET_INGREDIENT_ASPECT_MUTATION);
            } else if (itemType === 'Language') {
                await this.apollo.mutate({
                    mutation: CREATE_LANGUAGE_MUTATION,
                    variables: {
                        language: name
                    },
                    refetchQueries: [{
                        query: GET_LANGUAGES_QUERY
                    }]
                }).toPromise();
            } else if (itemType === 'Location') {
                await this.apollo.mutate({
                    mutation: CREATE_LOCATION_MUTATION,
                    variables: {
                        location: name,
                        vault
                    },
                    refetchQueries: [{
                        query: GET_LOCATIONS_QUERY
                    }]
                }).toPromise();
            } else if (itemType === 'MansusDoor') {
                await this.apollo.mutate({
                    mutation: CREATE_MANSUS_DOOR_MUTATION,
                    variables: {
                        door: name
                    }
                }).toPromise();
            } else if (itemType === 'Lore') {
                this.saveItemWithAspects(params, CREATE_LORE_MUTATION, GET_LORES_QUERY, SET_LORE_ASPECT_MUTATION);
            } else if (itemType === 'Influence') {
                await this.apollo.mutate({
                    mutation: CREATE_INFLUENCE_MUTATION,
                    variables: {
                        influence: name
                    },
                    refetchQueries: [{
                        query: GET_INFLUENCES_QUERY
                    }]
                }).toPromise();

                aspects.forEach(async aspectInfo => {
                    const { aspect, quantity } = aspectInfo;
                    await this.apollo.mutate({
                        mutation: SET_INFLUENCE_ASPECT_MUTATION,
                        variables: {
                            influence: name,
                            aspect,
                            quantity: +quantity
                        },
                        refetchQueries: [{
                            query: GET_ENTITY_WITH_ASPECT_QUERY,
                            variables: {
                                aspect
                            }
                        }]
                    }).toPromise();
                });
            } else if (itemType === 'Tool') {
                this.saveItemWithAspects(params, CREATE_TOOL_MUTATION, GET_TOOLS_QUERY, SET_TOOL_ASPECT_MUTATION);
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
                    query: GET_ENTITY_WITH_ASPECT_QUERY,
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
                mutation: SET_INFLUENCE_DECAY_MUTATION,
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
                mutation: CREATE_MANSUS_DOOR_OPTION_MUTATION,
                variables: {
                    option
                }
            }).toPromise();
            await this.apollo.mutate({
                mutation: SET_MANSUS_DOOR_OPTION_MUTATION,
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
                mutation: SET_LORE_EXPLORING_LOCATION_MUTATION,
                variables: {
                    lore: history,
                    location
                }
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
                    mutation: SET_LOCATION_OBSTACLE_MUTATION,
                    variables: {
                        location,
                        obstacle
                    },
                    refetchQueries: [{
                        query: GET_LOCATION_QUERY,
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
                    this.executeSaveLocationReward(reward, location, chance, SET_BOOK_LOCATION_MUTATION, GET_BOOK_QUERY);
                } else if (type === 'Ingredient') {
                    this.executeSaveLocationReward(reward, location, chance, SET_INGREDIENT_LOCATION_MUTATION);
                } else if (type === 'Influence') {
                    this.executeSaveLocationReward(reward, location, chance, SET_INFLUENCE_LOCATION_MUTATION);
                } else if (type === 'Tool') {
                    this.executeSaveLocationReward(reward, location, chance, SET_TOOL_LOCATION_MUTATION);
                }
            });
        } catch (err) {
            console.error(err);
        }
    }

    private async executeSaveLocationReward(reward: Reward, location: string, chance: boolean, mutation: any, refetchQuery?: any) {
        const name = reward.name;
        await this.apollo.mutate({
            mutation,
            variables: {
                name,
                location,
                chance
            },
            refetchQueries: refetchQuery ? [{
                query: refetchQuery,
                variables: {
                    name
                }
            }] : []
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
                            mutation: SET_BOOK_INFLUENCE_RESULT_MUTATION,
                            variables: {
                                title: book,
                                influence: name
                            },
                            refetchQueries: [{
                                query: GET_BOOK_QUERY,
                                variables: {
                                    title: book
                                }
                            }]
                        }).toPromise();
                        break;
                    }
                    case 'Language': {
                        await this.apollo.mutate({
                            mutation: SET_BOOK_LANGUAGE_RESULT_MUTATION,
                            variables: {
                                title: book,
                                language: name
                            },
                            refetchQueries: [{
                                query: GET_BOOK_QUERY,
                                variables: {
                                    title: book
                                }
                            }]
                        }).toPromise();
                        break;
                    }
                    case 'Lore': {
                        await this.apollo.mutate({
                            mutation: SET_BOOK_LORE_RESULT_MUTATION,
                            variables: {
                                title: book,
                                lore: name
                            },
                            refetchQueries: [{
                                query: GET_BOOK_QUERY,
                                variables: {
                                    title: book
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
            const { door, rewardType, lore, influence, language } = params;
            if (rewardType === 'Language') {
                await this.apollo.mutate({
                    mutation: SET_LANGUAGE_DREAMING_RESULT_MUTATION,
                    variables: {
                        door,
                        language
                    }
                }).toPromise();
            } else if (rewardType === 'Lore') {
                await this.apollo.mutate({
                    mutation: SET_LORE_DREAMING_RESULT_MUTATION,
                    variables: {
                        door,
                        lore
                    }
                }).toPromise();
            } else if (rewardType === 'Influence') {
                await this.apollo.mutate({
                    mutation: SET_INFLUENCE_DREAMING_RESULT_MUTATION,
                    variables: {
                        door,
                        influence
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
