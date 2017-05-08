import { Component, OnInit } from '@angular/core';
import { Pokemon } from './models/pokemon.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
  providers: [DataService]
})
export class PokedexComponent implements OnInit {
  pokedex: Pokemon[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchData();
  }

}
