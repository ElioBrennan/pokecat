import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from '../../components/pokemon/info/info.component';
import { DetailComponent } from '../../components/pokemon/detail/detail.component';

const routes: Routes = [
  {path: '', component: InfoComponent },
  {path: 'pokeDetail/:id', component: DetailComponent },
  {path: '', pathMatch: 'full', redirectTo: '' },
  {path: '**', pathMatch: 'full', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }