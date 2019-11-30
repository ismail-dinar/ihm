import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './compenents/home/home.component';
import {CriteriaComponent} from './compenents/criteria/criteria.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'criteria', component: CriteriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
