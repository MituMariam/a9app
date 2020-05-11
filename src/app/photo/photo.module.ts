import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoShowComponent } from './photo-show.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PhotoShowComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PhotoRoutingModule
  ]
})
export class PhotoModule { }
