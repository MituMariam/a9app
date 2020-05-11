import { Component, OnInit, Injectable } from '@angular/core';
import { WikipideaService } from './wikipidea.service';

@Injectable({providedIn:"root"})
export class Car{
  color = 'red'
}
@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css']
})
export class WikiSearchComponent implements OnInit {
pages=[];
  constructor(private wikipedia : WikipideaService, private car: Car) { }

  ngOnInit(): void {
  }

  onTerm(term : string){
   this.wikipedia.search(term).subscribe((response: any) =>{
     this.pages = response.query.search;
    //  console.log(response);
   });


  console.log('my car color is', this.car.color);
  }

}
