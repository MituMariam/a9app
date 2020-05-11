import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagelist',
  templateUrl: './pagelist.component.html',
  styleUrls: ['./pagelist.component.css']
})
export class PagelistComponent implements OnInit {
@Input() pages = [];
  constructor() { }

  ngOnInit(): void {
  }

}
