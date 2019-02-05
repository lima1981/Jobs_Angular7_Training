import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  changed$ = new Subject<string>();
  @Output() doSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.changed$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(text => this.doSearch.next(text));
  }

}
