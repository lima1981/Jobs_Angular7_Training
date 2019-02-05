import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroEditComponent } from './components/hero-edit/hero-edit.component';
import { HeroReactiveEditComponent } from './components/hero-reactive-edit/hero-reactive-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { StoreModule } from '@ngrx/store';
import { heroReducer } from 'src/app/ngrx/reducers';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from 'src/app/ngrx/effects';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroListComponent,
    HeroDetailsComponent,
    HeroEditComponent,
    HeroReactiveEditComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
