import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewHomeComponent } from './view-home.component';


const routes: Routes = [
  {
    path:'Views',component:ViewHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }