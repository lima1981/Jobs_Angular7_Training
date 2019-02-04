import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Hero from '../models/hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`/api/heroes`);
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`/api/heroes/${id}`);
  }
}
