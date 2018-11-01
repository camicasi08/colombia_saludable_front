import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { RecipesComponent } from './recipes.component'
import { BaseService } from '../../services/base.service';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    RecipesComponent,
  ],
  providers:[
      BaseService
  ]
})
export class RecipesModule { }
