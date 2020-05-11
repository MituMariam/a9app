import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


import { ModsRoutingModule } from './mods-routing.module';
import { ModHomeComponent } from './mod-home.component';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [ModHomeComponent, ModalComponent, AccordionComponent],
  imports: [
    CommonModule,
    SharedModule,
    ModsRoutingModule
  ],
  exports: [
    ModHomeComponent
  ]
})
export class ModsModule { }
