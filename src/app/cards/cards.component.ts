import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  title = 'Binding Component with *ngFor and @Input';
posts = [
  {
    title : 'Neat Tree',
    imageUrl : 'assets/images/tree.jpeg',
    username : 'nature',
    content : 'I saw this neat tree today. Some quick example text to build on the card title'
  },
  {
    title : 'Snowy Mountain',
    imageUrl : 'assets/images/mountain.jpeg',
    username : 'mountain',
    content : 'I saw this Snowy Mountain today. Some quick example text to build on the card title'
  },
  {
    title : 'Mountain Biking',
    imageUrl : 'assets/images/biking.jpeg',
    username : 'biking',
    content : 'I saw this Mountain Biking today. Some quick example text to build on the card title'
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
