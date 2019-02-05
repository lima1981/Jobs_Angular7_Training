import Hero from '../models/hero';

export interface AppState {
  heroState: HeroState;
}

export class HeroState {
  heroes: Hero[];
  selectedHero?: Hero;
  error?: string;
}
