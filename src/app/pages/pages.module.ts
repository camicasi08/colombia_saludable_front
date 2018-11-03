import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { TimesModule } from './time/times.module';
import { HttpModule } from '@angular/http';
import { PricesModule } from './price/prices.module';
import { RecipesModule } from './recipes/recipes.module';
import { CytodemoModule } from './graph/graph.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    TimesModule,
    HttpModule,
    PricesModule,
    RecipesModule,
    CytodemoModule
    
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
