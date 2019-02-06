import { AppState, HeroState } from './state';
import {All, actionTypes } from './actions';
import { ActionReducerMap, Action } from '@ngrx/store';

export function heroReducer (
  state: HeroState = {heroes: [], loading: false},
  action: All
) {
  switch (action.type) {
    case actionTypes.HERO_LOAD: {
      return {...state, loading: true};
    }
    case actionTypes.HERO_LOAD_SUCCESS: {
      const results = action.payload;
      return {...state, heroes: results, loading: false};
    }
    case actionTypes.HERO_LOAD_ERROR: {
      return {...state, error: action.error, loading: false};
    }
    default:
      return state;
  }
};
