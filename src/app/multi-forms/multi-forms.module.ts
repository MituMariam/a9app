import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';


import { MultiFormsRoutingModule } from './multi-forms-routing.module';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';
import { MultiFormsComponent } from './multi-forms.component';
import { InputComponent } from './input/input.component';
import { CardViewComponent } from './card-view/card-view.component';


@NgModule({
  declarations: [ CreditCardFormComponent, MultiFormsComponent, InputComponent, CardViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // FormsModule,
    MultiFormsRoutingModule
  ]
})
export class MultiFormsModule { }
