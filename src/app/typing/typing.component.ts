import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker'

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent implements OnInit {
// ** work with faker.js and @tying/faker intalled 
randomText = lorem.sentence();
enteredText = "";

onInput(value: string){
  this.enteredText = value;
}
compare(randomLetter: string, enteredLetter: string){
  if(!enteredLetter){
    return 'pending';
  }
  return randomLetter === enteredLetter ? 'correct': 'incorrect';
}
  constructor() { }

  ngOnInit(): void {
  }

}
