import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewHomeComponent } from './view-home.component';


@NgModule({
  declarations: [ViewHomeComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ],
  exports: [
    ViewHomeComponent
  ]
})
export class ViewsModule { }
