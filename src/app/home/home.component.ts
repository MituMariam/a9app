import { Component, OnInit } from '@angular/core';
// import { TranslateService } from "../translate.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title ="Password Generator"


 length = 0;
  includeLetters = false;
  includeNumbers = false;
 includeSymbols = false;

 password = "";

 onChangeLength(value: string){
   const parsedValue = parseInt(value)
   if(!isNaN(parsedValue)){
     this.length = parsedValue;
   }
  this.includeLetters = !this.includeLetters;
}
 onChangeLetters(){
   this.includeLetters = !this.includeLetters;
 }
 onChangeNumbers(){
  this.includeNumbers = !this.includeNumbers;
 }
 onChangeSymbols(){
  this.includeSymbols = !this.includeSymbols;
 }

  onButtonClick(){
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+{}";

let validChars = "";
if(this.includeLetters){
  validChars += letters;
}
if(this.includeNumbers){
  validChars += numbers;
}
if(this.includeSymbols){
  validChars += symbols;
}

let generatedPassword = "";
for(let i = 0; i < this.length ; i ++){
  const index = Math.floor(Math.random() * validChars.length);
  generatedPassword += validChars[index]
}
this.password = generatedPassword;



  //   console.log(this.includeLetters)
  // this.password = 'my passwrd'
 }

  ngOnInit(): void {
  }

}
