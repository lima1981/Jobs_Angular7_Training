import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Hero from '../models/hero';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(environment.apiUrl);
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${environment.apiUrl}/${id}`);
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
