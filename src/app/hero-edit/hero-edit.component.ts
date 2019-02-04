import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  superPowers = ['Flying', 'x-ray', 'really smart'];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private heroSvc: HeroService) { }

  ngOnInit() {
    this.hero$ = this.route.params.pipe(
      map(params => params.id),
      switchMap(id => this.heroSvc.getHero(id)),
      );
  }

  onSubmit(hero: Hero) {
    this.heroSvc.saveHero(hero).subscribe( () => this.router.navigate(['/']));
  }
}
