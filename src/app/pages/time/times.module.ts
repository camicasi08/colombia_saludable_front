import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { TimesComponent } from './times.component';
import { BaseService } from '../../services/base.service';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    TimesComponent,
  ],
  providers:[
      BaseService
  ]
})
export class TimesModule { }
