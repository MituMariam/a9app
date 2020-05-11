import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsModule } from './collections/collections.module';
import { ElementsModule } from './elements/elements.module';

import { PageModuleRoutingModule } from './page-module-routing.module';
import { ModsModule } from './mods/mods.module';
import { ViewsModule } from './views/views.module';
import { PageComponent } from './page.component';
import { SharedModule } from './shared/shared.module';
// import { CollectionHomeComponent } from './collections/collection-home.component';


@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    CollectionsModule,
    ElementsModule,
    ModsModule,
    ViewsModule,
    SharedModule,
    PageModuleRoutingModule
  ],
  exports: [
    PageComponent
    // CollectionHomeComponent
  ]
})
export class PageModuleModule { }
