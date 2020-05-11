import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionHomeComponent } from './collection-home.component';
import { CompaniesComponent } from './companies/companies.component';
import { BioComponent } from './bio/bio.component';
import { ParnersComponent } from './parners/parners.component';


const routes: Routes = [
  {
    path:'collection',component:CollectionHomeComponent,
    children : [
      { path:'companies',component:CompaniesComponent},
      { path:'bio',component:BioComponent},
      { path:'parners',component:ParnersComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
