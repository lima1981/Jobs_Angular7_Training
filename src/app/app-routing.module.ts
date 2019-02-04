import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroReactiveEditComponent } from './hero-reactive-edit/hero-reactive-edit.component';

const routes: Routes = [
  {path: '', component: HeroesComponent },
  {path: 'hero/:id', component: HeroEditComponent},
  {path: 'heroEdit/:id', component: HeroReactiveEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
