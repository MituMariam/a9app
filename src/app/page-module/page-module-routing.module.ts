import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsRoutingModule } from './collections/collections-routing.module';
import { PageComponent } from './page.component';
import { ElementHomeComponent } from './elements/element-home.component';
import { CollectionHomeComponent } from './collections/collection-home.component';
import { CompaniesComponent } from './collections/companies/companies.component';
import { ParnersComponent } from './collections/parners/parners.component';
import { BioComponent } from './collections/bio/bio.component';
import { ViewHomeComponent } from './views/view-home.component';
import { ModHomeComponent } from './mods/mod-home.component';



const routes: Routes = [
  {
    path:'page',component:PageComponent,
    children : [
      { path:'Element',component:ElementHomeComponent},
      { path:'collection',component:CollectionHomeComponent,
      children : [
        { path:'companies',component:CompaniesComponent},
        { path:'bio',component:BioComponent},
        { path:'parners',component:ParnersComponent},
      ]
    },
    { path:'Views',component:ViewHomeComponent},
    { path:'Module',component:ModHomeComponent},
      // { path:'parners',component:ParnersComponent},
    ]
  }

  // {
  //   path:'collections',
  //   loadChildren: () => 
  //   import('./collections/collections.module').then(m => m.CollectionsModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
    CollectionsRoutingModule]
})
export class PageModuleRoutingModule { }
