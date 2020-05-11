import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementHomeComponent } from './element-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';


@NgModule({
  declarations: [ElementHomeComponent, PlaceholderComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ]
})
export class ElementsModule { }
