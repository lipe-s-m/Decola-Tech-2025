import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { listPokemons } from '../../../../data/datafake';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent implements OnInit {
  public namePokemon: string = '';
  public idPokemon: string = '';
  public imagePokemon: string = '';
  public atributosPokemon: string[] = [];
  public listPokemons: any;

  ngOnInit(): void {
    this.obterListaPokemons();
  }
  obterListaPokemons(): void {
    const res = listPokemons;
    this.listPokemons = res;
    console.log(listPokemons);
  }
}
