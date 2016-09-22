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
    getAllPokemons(loadTestData: boolean = false): Pokemon[] {
      if(loadTestData)
        this.loadTestData();
      return this.pokemons;
    }

    // Simulate REMOVE /pokemons
    removeAllPokemons() {
      this.pokemons = [];
    }

    // Load some test pokemons
    loadTestData() {
        this.pokemons = [
          {
            id: 1,
            name: 'Bulbasaur',
            description: 'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun\'s rays, the seed grows progressively larger.',
            category: 'Grass',
            height: 2,
            weight: 15.2,
            gender: 'm',
            weaknessesFire: ['fire', 'flying'],
            type: ['grass', 'poison'],
          },
          {
            id: 2,
            name: 'Charmander',
            description: 'The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.',
            category: 'Fire',
            height: 2,
            weight: 15.2,
            gender: 'm',
            weaknessesFire: ['fire', 'flying'],
            type: ['grass', 'poison'],
          }
          ,
          {
            id: 3,
            name: 'Squirtle',
            description: 'Squirtle\'s shell is not merely used for protection. The shell\'s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.',
            category: 'Water',
            height: 2,
            weight: 15.2,
            gender: 'm',
            weaknessesFire: ['fire', 'flying'],
            type: ['grass', 'poison'],
          },
          {
            id: 4,
            name: 'Caterpie',
            description: 'Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.',
            category: 'Bug',
            height: 4,
            weight: 15.2,
            gender: 'm',
            weaknessesFire: ['fire', 'flying'],
            type: ['grass', 'poison'],
          },
          {
            id: 5,
            name: 'Beedrill',
            description: 'Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.',
            category: 'Bug',
            height: 2,
            weight: 15.2,
            gender: 'm',
            weaknessesFire: ['fire', 'flying'],
            type: ['grass', 'poison'],
          }
        ];
    }

}
