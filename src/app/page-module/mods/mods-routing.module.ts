import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModHomeComponent } from './mod-home.component';


const routes: Routes = [
  {
    path:'Module',component:ModHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModsRoutingModule { }
