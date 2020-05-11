import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod-home',
  templateUrl: './mod-home.component.html',
  styleUrls: ['./mod-home.component.css']
})
export class ModHomeComponent implements OnInit {

modalOpen = false;

items =[
  {
    title : 'Neat Tree',
    content : 'I saw this neat tree today. Some quick example text to build on the card title'
  },
  {
    title : 'Snowy Mountain',
    content : 'I saw this Snowy Mountain today. Some quick example text to build on the card title'
  },
  {
    title : 'Mountain Biking',
    content : 'I saw this Mountain Biking today. Some quick example text to build on the card title'
  }
]
constructor() { }

ngOnInit(): void {
}


onClick(){
    this.modalOpen = !this.modalOpen;
}

}
