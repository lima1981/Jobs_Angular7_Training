import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HeroService } from '../services/hero.service';
import { Store } from '@ngrx/store';
import { actionTypes, LoadHeroes, HeroesLoaded, HeroesLoadFailed } from './actions';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class HeroEffects {

  constructor(private heroSvc: HeroService,
    private actions$: Actions) {

    }

@Effect()
load$ = this.actions$.pipe(
  ofType<LoadHeroes>(actionTypes.HERO_LOAD),
  switchMap(_ => this.heroSvc.getHeroes()),
  switchMap(results => of(new HeroesLoaded(results))),
  catchError(e => of(new HeroesLoadFailed(e)))
);

}
