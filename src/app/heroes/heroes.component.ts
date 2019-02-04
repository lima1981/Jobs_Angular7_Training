import { Component, OnInit, OnDestroy } from '@angular/core';
import Hero from '../models/hero';
import { HeroService } from '../services/hero.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes$: Observable<Hero[]>;

  constructor(private heroSvc: HeroService) { }

  ngOnInit() {
    this.heroes$ = this.heroSvc.getHeroes();
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
