import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementHomeComponent } from './element-home.component';


const routes: Routes = [
  {
    path:'Element',component:ElementHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
