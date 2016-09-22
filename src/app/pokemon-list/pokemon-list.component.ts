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

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
  }

  title = "Pokemon list";

  pokemons: Pokemon[] = this.pokemonService.initializePokemons();

}
