import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';
import Hero from '../models/hero';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})
export class HeroEditComponent implements OnInit {

  hero$: Observable<Hero>;

  constructor(private route: ActivatedRoute,
    private heroSvc: HeroService) { }

  ngOnInit() {
    this.hero$ = this.route.params.pipe(
      map(params => params.id),
      switchMap(id => this.heroSvc.getHero(id))
      );
  }
}
