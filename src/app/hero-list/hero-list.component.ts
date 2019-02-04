import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Hero from '../models/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  @Input() heroes: Hero[];
  @Input() selectedHero: Hero;

  @Output() heroSelected = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit() {
  }

}
