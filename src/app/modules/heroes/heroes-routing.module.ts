import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroEditComponent } from './components/hero-edit/hero-edit.component';
import { HeroReactiveEditComponent } from './components/hero-reactive-edit/hero-reactive-edit.component';

const routes: Routes = [
  {path: '', component: HeroesComponent },
  {path: 'edit/:id', component: HeroEditComponent},
  {path: 'reactive/:id', component: HeroReactiveEditComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
