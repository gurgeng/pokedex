import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('/pokedex/pokemon.json').map(
      (res) => res.json()
    ).subscribe(
      (data) => console.log(data)
    );
  }
}
