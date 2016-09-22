import {Injectable} from '@angular/core';
import {Pokemon} from '../models/pokemon';

@Injectable()
export class PokemonService {

    pokemons: Pokemon[] = [];

    constructor() {}

    // Simulate POST /pokemons
    addPokemon(pokemon: Pokemon): PokemonService {
        this.pokemons.push(pokemon);
        return this;
    }

    // Simulate GET /pokemons/:id
    getPokemonById(id: number): Pokemon {
        return this.pokemons
            .filter(pokemon => pokemon.id === id)
            .pop();
    }

    // Simulate GET /pokemons
    getAllPokemons(): Pokemon[] {
        return this.pokemons;
    }

    // initialize some pokemons to mock the real data
    initializePokemons(): Pokemon[] {
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
        this.addPokemon(bulbasaur);
        this.addPokemon(pidgey);
        return this.getAllPokemons();
    }

}
