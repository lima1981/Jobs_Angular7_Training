import { Component, OnInit } from '@angular/core';
import Hero from '../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor() { }

  ngOnInit() {
    this.heroes = [
      {id: 0, name: 'Superman'},
      {id: 1, name: 'Batman'}
    ];
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
