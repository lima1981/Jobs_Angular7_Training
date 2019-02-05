import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import Hero from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes$: Observable<Hero[]>;
  searchText$ = new BehaviorSubject<string>('');

  constructor(private heroSvc: HeroService) { }

  ngOnInit() {
    this.heroes$ = combineLatest(this.heroSvc.getHeroes(), this.searchText$,
     (x, y) => { return {heroes: x, search: y  }} ).pipe(
       map(results => results.heroes.filter(h => h.name.startsWith(results.search)))
     );

  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
