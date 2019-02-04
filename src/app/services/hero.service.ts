import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Hero from '../models/hero';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  saveHero(hero: Hero): Observable<Hero | {}> {
    return this.http.put<Hero>(`/api/heroes/${hero.id}`, hero).pipe(
      catchError(error => {
        console.log(JSON.stringify(error));
        return null;
      })
    );
  }
}
