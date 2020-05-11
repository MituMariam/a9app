import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionHomeComponent } from './collection-home.component';
import { CompaniesComponent } from './companies/companies.component';
import { BioComponent } from './bio/bio.component';
import { ParnersComponent } from './parners/parners.component';


@NgModule({
  declarations: [CollectionHomeComponent, CompaniesComponent, BioComponent, ParnersComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  exports: [
    CompaniesComponent,
    BioComponent,
    ParnersComponent
  ]
})
export class CollectionsModule { }
