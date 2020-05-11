import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  @Input() cardNumber :string;
  @Input() name : string;
  @Input() expiration : string;

  constructor() { }

  ngOnInit(): void {
  }

}
