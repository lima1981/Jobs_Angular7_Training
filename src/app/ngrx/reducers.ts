import { AppState, HeroState } from './state';
import {All, actionTypes } from './actions';
import { ActionReducerMap, Action } from '@ngrx/store';

export const heroReducer = (
  state: HeroState = {heroes: []},
  action: All
) => {
  switch (action.type) {
    case actionTypes.HERO_LOAD_SUCCESS: {
      const results = action.payload;
      return {...state, heroes: results};
    }
    case actionTypes.HERO_LOAD_ERROR: {
      return {...state, error: action.error};
    }
    default:
      return state;
  }
};

export const appReducers: ActionReducerMap<AppState, any> = {
  heroState: heroReducer
};

