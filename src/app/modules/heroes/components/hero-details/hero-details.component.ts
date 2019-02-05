import { Component, OnInit, Input } from '@angular/core';
import Hero from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';


@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  @Input() selectedHero: Hero;
  constructor(private svc: HeroService) { }

  ngOnInit() {
    this.svc.getHeroes().subscribe(_ => console.log('fetched'));
  }

}
