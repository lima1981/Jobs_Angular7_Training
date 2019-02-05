import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import Hero from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState, HeroState } from 'src/app/ngrx/state';
import { store } from '@angular/core/src/render3';
import { LoadHeroes } from 'src/app/ngrx/actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes$: Observable<Hero[]>;
  searchText$ = new BehaviorSubject<string>('');

  constructor(private state: Store<AppState>) { }

  ngOnInit() {
    this.heroes$ = this.state.select('heroState', 'heroes');
    this.state.dispatch(new LoadHeroes());
    // this.heroes$ = combineLatest(this.heroSvc.getHeroes(), this.searchText$,
    //  (x, y) => { return {heroes: x, search: y  }} ).pipe(
    //    map(results => results.heroes.filter(h => h.name.startsWith(results.search)))
    //  );

  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
