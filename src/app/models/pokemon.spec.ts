/* tslint:disable:no-unused-variable */

import {Pokemon} from './pokemon';

describe('Pokemon', () => {
    it ('should create an instance', () => {
        expect(new Pokemon()).toBeTruthy();
    });

    it ('should accept values in the constructor', () => {
        let pokemon = {
            id: 1,
            name: 'Bulbasaur',
            description: 'My fav pokemon',
            category: 'Seed',
            height: 2,
            weight: 15.2,
            gender: 'm',
            weaknessesFire: ['fire', 'flying'],
            type: ['grass', 'poison'],
        };
        expect(pokemon.id).toEqual(1);
        expect(pokemon.name).toEqual('Bulbasaur');
    });
});
