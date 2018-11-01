import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimesComponent } from './time/times.component';
import { PricesComponent } from './price/prices.component';
import { RecipesComponent } from './recipes/recipes.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'times',
      component: TimesComponent
    },
    {
      path: 'prices',
      component: PricesComponent
    },
    {
      path: 'recipes',
      component: RecipesComponent
    },

    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
