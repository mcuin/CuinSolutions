import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CuinSolutionsComponent} from './cuin-solutions/cuin-solutions.component'
import {MacrosManagerComponent} from './macros-manager/macros-manager.component'
import {BoozyDiceComponent} from './boozy-dice/boozy-dice.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component: CuinSolutionsComponent},
  {path: 'macrosmanager', component: MacrosManagerComponent},
  {path: 'boozydice', component: BoozyDiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
