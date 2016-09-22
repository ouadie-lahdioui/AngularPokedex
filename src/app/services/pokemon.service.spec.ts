/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {PokemonService} from './pokemon.service';
import {Pokemon} from '../models/pokemon';

describe('Service: Pokemon', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PokemonService]
        });
    });

    it('should ...', inject([PokemonService], (service:PokemonService) => {
        expect(service).toBeTruthy();
    }));

    describe('getAllPokemons', () => {

        it('should return an empty array by default', inject([PokemonService], (service:PokemonService) => {
            expect(service.getAllPokemons()).toEqual([]);
        }));

        it('should return all todos', inject([PokemonService], (service:PokemonService) => {
            // Given
            let bulbasaur = new Pokemon({
                id: 1,
                name: 'Bulbasaur',
                description: 'My fav pokemon',
                category: 'Seed',
                height: 2,
                weight: 15.2,
                gender: 'm',
                weaknessesFire: ['fire', 'flying'],
                type: ['grass', 'poison'],
            });
            let pidgey = new Pokemon({
                id: 2,
                name: 'Pidgey',
                description: 'My fav pokemon',
                category: 'Seed',
                height: 2,
                weight: 15.2,
                gender: 'm',
                weaknessesFire: ['fire', 'flying'],
                type: ['grass', 'poison'],
            });
            service.addPokemon(bulbasaur);
            service.addPokemon(pidgey);

            // When
            let pokemons = service.getAllPokemons();

            // Then
            expect(pokemons).toEqual([bulbasaur, pidgey]);
        }));
    });

    describe('addPokemon', () => {
        it('should add a pokemon', inject([PokemonService], (service:PokemonService) => {
            // Given
            let bulbasaur = new Pokemon({
                id: 1,
                name: 'Bulbasaur',
                description: 'My fav pokemon',
                category: 'Seed',
                height: 2,
                weight: 15.2,
                gender: 'm',
                weaknessesFire: ['fire', 'flying'],
                type: ['grass', 'poison'],
            });
            service.addPokemon(bulbasaur);

            // When
            let pokemons = service.getAllPokemons();

            // Then
            expect(pokemons).toEqual([bulbasaur]);
        }));
    });

    describe('getPokemonById', () => {
        it('should return bulbasaur', inject([PokemonService], (service:PokemonService) => {
            // Given
            let bulbasaur = new Pokemon({
                id: 1,
                name: 'Bulbasaur',
                description: 'My fav pokemon',
                category: 'Seed',
                height: 2,
                weight: 15.2,
                gender: 'm',
                weaknessesFire: ['fire', 'flying'],
                type: ['grass', 'poison'],
            });
            let pidgey = new Pokemon({
                id: 2,
                name: 'Pidgey',
                description: 'My fav pokemon',
                category: 'Seed',
                height: 2,
                weight: 15.2,
                gender: 'm',
                weaknessesFire: ['fire', 'flying'],
                type: ['grass', 'poison'],
            });
            service.addPokemon(bulbasaur);
            service.addPokemon(pidgey);

            // When
            let wantedPokemon = service.getPokemonById(1);

            // Then
            expect(wantedPokemon).toEqual(bulbasaur);
        }));
    });

    describe('loadTestData', () => {
        it('should load some test data', inject([PokemonService], (service:PokemonService) => {
            // Given
            let bulbasaur = new Pokemon({
                id: 1,
                name: 'Bulbasaur',
                description: 'My fav pokemon',
                category: 'Seed',
                height: 2,
                weight: 15.2,
                gender: 'm',
                weaknessesFire: ['fire', 'flying'],
                type: ['grass', 'poison'],
            });
            let pidgey = new Pokemon({
                id: 2,
                name: 'Pidgey',
                description: 'My fav pokemon',
                category: 'Seed',
                height: 2,
                weight: 15.2,
                gender: 'm',
                weaknessesFire: ['fire', 'flying'],
                type: ['grass', 'poison'],
            });
            // When
            let pokemons = service.getAllPokemons(true);

            // Then
            expect(pokemons).toEqual([bulbasaur, pidgey]);
        }));
    });

});
