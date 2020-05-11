import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipe",
  templateUrl: "./pipe.component.html",
  styleUrls: ["./pipe.component.css"],
})
export class PipeComponent implements OnInit {
  title = "Payment Form Using PIPE";

  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }
  onAmountChange(value: number) {
    this.amount = value;
  }
  onNumberChange(value: string){
    this.height = parseFloat(value) ;
  }
  onMilesChange(value: string){
    this.miles = parseFloat(value) ;
  }

  constructor() {}

  ngOnInit(): void {}
}
