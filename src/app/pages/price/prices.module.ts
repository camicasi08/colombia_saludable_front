import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { PricesComponent } from './prices.component'
import { BaseService } from '../../services/base.service';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    PricesComponent,
  ],
  providers:[
      BaseService
  ]
})
export class PricesModule { }
