import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.css']
})
export class CreditCardFormComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      // Validators.pattern(/\s/)
    ]),
     cardNumber: new FormControl('',[
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
      
    ]),
     expiration: new DateFormControl('',[
      Validators.required,
      Validators.pattern(/^(0[1-9] | 1[0-2])\/\d{2}$/)
    ]),
     securityCode: new FormControl('',[
      Validators.required,
      Validators.minLength(100),
      Validators.maxLength(999)
      
    ])

 
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('form submitted')
  }
  onResetClick(){
    this.cardForm.reset();
  }

}
