import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { CytodemoComponent } from './graph.component';
import { BaseService } from '../../services/base.service';
import { CytoscapeModule } from 'ngx-cytoscape';

@NgModule({
  imports: [
    ThemeModule,
    CytoscapeModule
  ],
  declarations: [
    CytodemoComponent,
  ],
  providers:[
      BaseService
  ]
})
export class CytodemoModule { }
