import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-reactive-edit',
  templateUrl: './hero-reactive-edit.component.html',
  styleUrls: ['./hero-reactive-edit.component.scss']
})
export class HeroReactiveEditComponent implements OnInit {

  superPowers = ['Flying', 'x-ray', 'really smart'];

  heroForm = new FormGroup(
  {
    id: new FormControl(),
    name: new FormControl(),
    altEgo: new FormControl(),
    superPower: new FormControl()
  });

  constructor(private route: ActivatedRoute,
    private router: Router,
    private heroSvc: HeroService) { }

  ngOnInit() {

    this.route.params.pipe(
      map(params => params.id),
      switchMap(id => this.heroSvc.getHero(id)),
      ).subscribe(hero =>
        this.heroForm.patchValue(hero));
  }

  onSubmit() {
    const hero = this.heroForm.value;
    this.heroSvc.saveHero(hero).subscribe(
      result => this.router.navigateByUrl('/')
    );
  }
}
