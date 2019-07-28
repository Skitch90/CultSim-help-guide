import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
    GET_ENTITY_QUERY, GET_LANGUAGES_QUERY, GET_ASPECTS_QUERY, GET_LORES_QUERY,
    CREATE_ASPECT_MUTATION, CREATE_LANGUAGE_MUTATION, CREATE_BOOK_MUTATION, SET_BOOK_LOCATION_MUTATION,
    SET_BOOK_LANGUAGE_MUTATION, SET_BOOK_LORE_RESULT, CREATE_LORE_MUTATION, SET_LORE_ASPECT_MUTATION,
    CREATE_MANSUS_DOOR_MUTATION, CREATE_MANSUS_DOOR_OPTION_MUTATION, SET_MANSUS_DOOR_OPTION_MUTATION,
    SET_LORE_DREAMING_RESULT_MUTATION,
    GET_INFLUENCES_QUERY,
    CREATE_INFLUENCE_MUTATION,
    SET_INFLUENCE_ASPECT_MUTATION,
    SET_INFLUENCE_DREAMING_RESULT_MUTATION,
    SET_INFLUENCE_DECAY_MUTATION,
    CREATE_LOCATION_MUTATION,
    SET_BOOK_LANGUAGE_RESULT_MUTATION
} from './queries';
import { SaveLocationRewardInput, SaveItemInput, SaveMansusDoorOptionInput } from './graphql.types';

@Injectable({
    providedIn: 'root'
})
export class GraphqlService {

    constructor(private apollo: Apollo) { }


    async getEntities(name: String) {
        const { data } = await this.apollo.query<any>({
            query: GET_ENTITY_QUERY,
            variables: {
                name
            }
        }).toPromise();

        const result = data.entityWithName.map(item => {
            return {
                name: item.name,
                label: item.label,
                aspects: item.aspects.map(aspect => {
                    return {
                        aspect: aspect.aspect,
                        quantity: aspect.quantity
                    };
                })
            }
        });

        return result;
    }

    async getLanguages() {
        const { data } = await this.apollo.query<any>({
            query: GET_LANGUAGES_QUERY
        }).toPromise();

        return data.Language.map(item => item.name);
    }

    async getLores() {
        const { data } = await this.apollo.query<any>({ query: GET_LORES_QUERY }).toPromise();
        return data.Lore.map(item => item.name);
    }

    async getAspects() {
        const { data } = await this.apollo.query<any>({
            query: GET_ASPECTS_QUERY
        }).toPromise();

        return data.Aspect.map(item => item.name);
    }

    async getInfluences() {
        const { data } = await this.apollo.query<any>({ query: GET_INFLUENCES_QUERY }).toPromise();
        return data.Influence.map(item => item.name);
    }

    async saveItem(params: SaveItemInput) {
        try {
            const { name, itemType, aspect, quantity } = params;

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
            } else if (itemType === 'Location') {
                await this.apollo.mutate({
                    mutation: CREATE_LOCATION_MUTATION,
                    variables: {
                        location: name
                    }
                }).toPromise();
            } else if (itemType === 'MansusDoor') {
                await this.apollo.mutate({
                    mutation: CREATE_MANSUS_DOOR_MUTATION,
                    variables: {
                        door: name
                    }
                }).toPromise();
            } else if (itemType === 'Lore') {
                await this.apollo.mutate({
                    mutation: CREATE_LORE_MUTATION,
                    variables: {
                        name
                    },
                    refetchQueries: [{
                        query: GET_LORES_QUERY
                    }]
                }).toPromise();

                await this.apollo.mutate({
                    mutation: SET_LORE_ASPECT_MUTATION,
                    variables: {
                        lore: name, aspect, quantity: +quantity
                    }
                }).toPromise();
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

                await this.apollo.mutate({
                    mutation: SET_INFLUENCE_ASPECT_MUTATION,
                    variables: {
                        influence: name,
                        aspect,
                        quantity: +quantity
                    }
                }).toPromise();
            }
        } catch (err) {
            console.error(err);
        }
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

    async saveLocationReward(params: SaveLocationRewardInput) {
        try {
            const { location, name, rewardType, language, newLanguage, chance } = params;
            console.log(params);
            if (rewardType === 'Book') {
                if (newLanguage) {
                    // Saving the new language
                    await this.apollo.mutate({
                        mutation: CREATE_LANGUAGE_MUTATION,
                        variables: {
                            language
                        }
                    })
                }

                await this.apollo.mutate({
                    mutation: CREATE_BOOK_MUTATION,
                    variables: {
                        title: name
                    }
                }).toPromise();

                await this.apollo.mutate({
                    mutation: SET_BOOK_LOCATION_MUTATION,
                    variables: {
                        title: name,
                        location,
                        chance
                    }
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
            }
        } catch (err) {
            console.error(err);
        }
    }

    async saveBookReward(params) {
        try {
            // {book: "Kühner and Gerth", rewardType: "Language", lore: "", language: "Greek"}
            const { book, rewardType, lore, language } = params;

            if (rewardType === 'Lore') {
                await this.apollo.mutate({
                    mutation: SET_BOOK_LORE_RESULT,
                    variables: {
                        title: book,
                        lore
                    }
                }).toPromise();
            } else if (rewardType === 'Language') {
                await this.apollo.mutate({
                    mutation: SET_BOOK_LANGUAGE_RESULT_MUTATION,
                    variables: {
                        title: book,
                        language
                    }
                }).toPromise();
            }

        } catch (err) {
            console.error(err);
        }
    }

    async saveMansusReward(params) {
        try {
            const { door, rewardType, lore, influence } = params;
            if (rewardType === 'Lore') {
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
