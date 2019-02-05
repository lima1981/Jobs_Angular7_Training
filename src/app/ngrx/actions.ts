import { Action } from '@ngrx/store';
import Hero from '../models/hero';

export enum actionTypes {
  HERO_LOAD = '[HEROES] Load',
  HERO_LOAD_SUCCESS= '[HEROES] Loaded Success',
  HERO_LOAD_ERROR= '[HEROES] Loaded ERROR'}


export class LoadHeroes implements Action {
  readonly type = actionTypes.HERO_LOAD;

}

export class HeroesLoaded implements Action {
  readonly type =  actionTypes.HERO_LOAD_SUCCESS;
  constructor(public payload: Hero[]) {
  }
}

export class HeroesLoadFailed implements Action {
  readonly type = actionTypes.HERO_LOAD_ERROR;
  constructor(public error: string) {
  }
}

export type All = LoadHeroes | HeroesLoaded | HeroesLoadFailed;

