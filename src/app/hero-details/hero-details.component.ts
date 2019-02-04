import { Component, OnInit, Input } from '@angular/core';
import Hero from '../models/hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  @Input() selectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
