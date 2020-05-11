import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.css"],
})
export class SearchbarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term = "";
  constructor() {}

  ngOnInit(): void {}

  onInput(value: string) {
    this.term = value;
  }
  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
    //  console.log( this.term)
  }
}
