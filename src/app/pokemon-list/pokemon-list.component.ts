import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {PokemonService} from "../services/pokemon.service";


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [PokemonService]
})
export class PokemonListComponent implements OnInit {

  constructor(private pokemonService:PokemonService) {
  }

  ngOnInit() {
  }

  pokemons:Pokemon[] = this.pokemonService.getAllPokemons(true);

  searchPokemon(event: any) {
    this.pokemonService.removeAllPokemons();
    this.pokemons = this.pokemonService.getAllPokemons(true).filter((pokemon) => {
      return pokemon.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
    });
  }

}
