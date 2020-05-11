import { Component, OnInit } from '@angular/core';
import { PhotoShowService } from './photo-show.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
photoUrl : string;

  constructor(private photoservice : PhotoShowService) {
   this.fetchPhoto();
   }
  onClick(){
this.fetchPhoto();
  }

  fetchPhoto(){
    this.photoservice. getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
      })
  }

  ngOnInit(): void {
  }

}
